// ============================================================
// APP CONTROLLER — View switching, state management, event wiring
// ============================================================

import { FAMILY_MEMBERS, ITINERARY_ITEMS, TRIP_CONFIG } from "./data.js";
import { saveVote, getUserVotes, getMatchData, getVoterCount } from "./supabase.js";
import { initSwipe, destroySwipe, triggerSwipe } from "./swipe.js";

// ── App State ────────────────────────────────────────────────
let currentUser = null;
let queue = [];          // Item IDs remaining to swipe
let currentItem = null;  // The item currently shown on the card
let allItems = {};       // Map of id → item for fast lookup
let hasShownSwipeHint = false;

// ── Bootstrap ────────────────────────────────────────────────

window.addEventListener("DOMContentLoaded", () => {
  // Build lookup map
  ITINERARY_ITEMS.forEach(item => { allItems[item.id] = item; });

  // Restore session from localStorage (so refreshing the page doesn't log you out)
  const saved = localStorage.getItem("tripplanner_currentUser");
  if (saved && FAMILY_MEMBERS.includes(saved)) {
    currentUser = saved;
  }

  setupWelcomeScreen();
  setupDiscoveryNav();
  setupMatchesNav();
  setupDetailsModal();

  showView("welcome");
});

// ══════════════════════════════════════════════════════════════
// VIEW SWITCHING
// ══════════════════════════════════════════════════════════════

function showView(viewName) {
  document.querySelectorAll(".view").forEach(v => {
    v.classList.remove("active");
    v.classList.add("hidden");
  });
  const target = document.getElementById(`view-${viewName}`);
  if (target) {
    target.classList.remove("hidden");
    target.classList.add("active");
  }
}

// ══════════════════════════════════════════════════════════════
// WELCOME SCREEN
// ══════════════════════════════════════════════════════════════

function setupWelcomeScreen() {
  const select = document.getElementById("name-select");
  const btn = document.getElementById("btn-start");
  const error = document.getElementById("welcome-error");

  // Populate dropdown
  FAMILY_MEMBERS.forEach(name => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    select.appendChild(opt);
  });

  // Pre-select if returning user
  if (currentUser) {
    select.value = currentUser;
  }

  btn.addEventListener("click", async () => {
    const chosen = select.value;
    if (!chosen) {
      error.classList.remove("hidden");
      select.classList.add("ring-2", "ring-error/40");
      return;
    }

    error.classList.add("hidden");
    select.classList.remove("ring-2", "ring-error/40");

    currentUser = chosen;
    localStorage.setItem("tripplanner_currentUser", currentUser);

    // Show loading state on button
    btn.disabled = true;
    btn.innerHTML = `<svg class="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" viewBox="0 0 24 24"></svg><span>Loading your queue...</span>`;

    await startDiscovery();

    btn.disabled = false;
    btn.innerHTML = `<span class="text-lg">Start Swiping</span><span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>`;
  });

  select.addEventListener("change", () => {
    error.classList.add("hidden");
    select.classList.remove("ring-2", "ring-error/40");
  });
}

// ══════════════════════════════════════════════════════════════
// DISCOVERY VIEW
// ══════════════════════════════════════════════════════════════

// ── Section / Group definitions (order controls swipe sequence) ────────────
const SECTIONS = [
  { city: "charleston", group: "activities", label: "Charleston",  subtitle: "Activities & Sights", icon: "🏛️",  bg: "linear-gradient(135deg,#005a8e 0%,#4fa8e8 100%)" },
  { city: "charleston", group: "food",       label: "Charleston",  subtitle: "Food & Dining",        icon: "🍽️",  bg: "linear-gradient(135deg,#b45309 0%,#f59e0b 100%)" },
  { city: "savannah",   group: "activities", label: "Savannah",    subtitle: "Activities & Sights", icon: "🌿",  bg: "linear-gradient(135deg,#065f46 0%,#34d399 100%)" },
  { city: "savannah",   group: "food",       label: "Savannah",    subtitle: "Food & Dining",        icon: "🥘",  bg: "linear-gradient(135deg,#9f1239 0%,#f97316 100%)" },
];

// Build a sorted queue with section-break sentinels between fresh groups
function buildSortedQueue(votedIds) {
  const result = [];
  SECTIONS.forEach(section => {
    const groupItems = ITINERARY_ITEMS.filter(
      item => item.city === section.city && item.group === section.group
    );
    const unvoted = groupItems.filter(item => !votedIds.has(item.id));
    if (unvoted.length === 0) return; // skip fully-voted group

    // Only show the intro card if this group is completely fresh
    const anyVoted = groupItems.some(item => votedIds.has(item.id));
    if (!anyVoted) {
      result.push({ type: "section-break", ...section, count: unvoted.length });
    }
    unvoted.forEach(item => result.push(item.id));
  });
  return result;
}

async function startDiscovery() {
  // Set user avatar initials
  const initials = currentUser
    .split(" ")
    .map(w => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  document.getElementById("user-initials").textContent = initials;

  // Fetch existing votes to compute remaining queue
  const existingVotes = await getUserVotes(currentUser);
  const votedIds = new Set(Object.keys(existingVotes));

  queue = buildSortedQueue(votedIds);

  // Count only real items (not sentinels) for "all done" check
  const realItemCount = queue.filter(q => typeof q === "string").length;
  if (realItemCount === 0) {
    showView("matches");
    loadMatches();
    return;
  }

  showView("discovery");
  setupSwipeCard();
  showNextCard();
}

function setupSwipeCard() {
  destroySwipe();
  const card = document.getElementById("swipe-card");
  initSwipe(card, handleSwipe);

  // Button wiring
  document.getElementById("btn-like").onclick = () => triggerSwipe("like");
  document.getElementById("btn-pass").onclick = () => triggerSwipe("pass");
  document.getElementById("btn-super").onclick = () => triggerSwipe("super");
  document.getElementById("btn-learn-more").onclick = () => {
    if (currentItem) openDetails(currentItem);
  };
}

function showNextCard() {
  // Count only real items for empty check
  const realRemaining = queue.filter(q => typeof q === "string").length;
  if (realRemaining === 0) {
    handleQueueEmpty();
    return;
  }

  // If the next item is a section-break sentinel, show the transition card
  if (queue[0] && typeof queue[0] === "object" && queue[0].type === "section-break") {
    showSectionBreak(queue[0]);
    return;
  }

  const itemId = queue[0];
  currentItem = allItems[itemId];

  // Make sure swipe card is visible (may have been hidden during section break)
  document.getElementById("swipe-card").classList.remove("hidden");
  document.getElementById("section-break-card").classList.add("hidden");
  document.getElementById("card-action-btns").classList.remove("hidden");

  renderCard(currentItem);
  updateProgress();

  // Entrance animation
  const card = document.getElementById("swipe-card");
  card.classList.remove("card-enter");
  void card.offsetWidth; // force reflow
  card.classList.add("card-enter");
  // Remove after animation so the "forwards" fill doesn't block swipe transforms
  setTimeout(() => card.classList.remove("card-enter"), 380);

  // One-time swipe hint wiggle to teach the gesture
  if (!hasShownSwipeHint) {
    hasShownSwipeHint = true;
    setTimeout(() => {
      card.classList.add("swipe-hint-wiggle");
      card.addEventListener("animationend", () => card.classList.remove("swipe-hint-wiggle"), { once: true });
    }, 450);
  }
}

function showSectionBreak(section) {
  // Populate the card
  document.getElementById("sb-icon").textContent = section.icon;
  document.getElementById("sb-city").textContent = section.label;
  document.getElementById("sb-group").textContent = section.subtitle;
  const noun = section.group === "food" ? "dining spots" : "experiences";
  document.getElementById("sb-count").textContent = `${section.count} ${noun} to discover`;
  document.getElementById("section-break-card").style.background = section.bg;

  // Swap visibility
  document.getElementById("swipe-card").classList.add("hidden");
  document.getElementById("card-action-btns").classList.add("hidden");
  document.getElementById("section-break-card").classList.remove("hidden");

  // Wire the Continue button
  document.getElementById("btn-section-continue").onclick = () => {
    queue.shift(); // remove sentinel
    showNextCard();
  };
}

function renderCard(item) {
  const img = document.getElementById("card-image");
  img.src = item.imageUrl;
  img.alt = item.title;

  document.getElementById("card-title").textContent = item.title;
  document.getElementById("card-location").textContent = item.location;
  document.getElementById("card-description").textContent = item.shortDescription;
  document.getElementById("card-price").querySelector("span").textContent = item.priceLevel;
}

function updateProgress() {
  const total = ITINERARY_ITEMS.length;
  const remaining = queue.filter(q => typeof q === "string").length;
  const done = total - remaining;

  document.getElementById("progress-text").textContent = `${remaining} of ${total} remaining`;

  const pct = total > 0 ? (done / total) * 100 : 0;
  document.getElementById("progress-bar").style.width = `${pct}%`;
}

async function handleSwipe(direction) {
  const itemId = queue.shift(); // remove from front of queue

  // Save vote
  await saveVote(currentUser, itemId, direction);

  // Brief like-pulse on heart button for "like"/"super"
  if (direction === "like" || direction === "super") {
    const btn = document.getElementById("btn-like");
    btn.classList.add("like-pulse");
    btn.addEventListener("animationend", () => btn.classList.remove("like-pulse"), { once: true });
  }

  showNextCard();
}

function handleQueueEmpty() {
  // Show a quick completion message then go to matches
  const main = document.querySelector("#view-discovery main");
  main.innerHTML = `
    <div class="flex flex-col items-center justify-center text-center gap-6 px-6">
      <span class="material-symbols-outlined text-6xl text-primary" style="font-variation-settings:'FILL' 1;">celebration</span>
      <div>
        <h2 class="font-headline text-3xl font-extrabold text-on-surface mb-2">All done!</h2>
        <p class="text-on-surface-variant text-base">You've swiped through all the activities. Let's see what your group thinks!</p>
      </div>
      <button id="btn-see-matches" class="btn-gradient text-white font-bold py-4 px-8 rounded-full shadow-lg hover:opacity-90 active:scale-95 transition-all">
        See Group Matches →
      </button>
    </div>
  `;
  document.getElementById("btn-see-matches").onclick = () => {
    showView("matches");
    loadMatches();
  };
}

// ══════════════════════════════════════════════════════════════
// ACTIVITY DETAILS OVERLAY
// ══════════════════════════════════════════════════════════════

function setupDetailsModal() {
  document.getElementById("btn-close-details").onclick = closeDetails;
  document.getElementById("btn-details-like").onclick = () => {
    // Don't use triggerSwipe here — the swipe card is in a hidden view,
    // so its CSS transition won't fire. Close the sheet, then call handleSwipe directly.
    const sheet = document.getElementById("details-sheet");
    sheet.classList.remove("open");
    document.body.style.overflow = "";
    setTimeout(async () => {
      showView("discovery");
      await handleSwipe("like");
    }, 420);
  };
}

function openDetails(item) {
  // Populate all fields
  document.getElementById("details-image").src = item.imageUrl;
  document.getElementById("details-image").alt = item.title;
  document.getElementById("details-category").textContent = item.category;
  document.getElementById("details-title").textContent = item.title;
  document.getElementById("details-rating").textContent = item.rating;
  document.getElementById("details-reviews").textContent = `(${item.reviewCount.toLocaleString()} reviews)`;
  document.getElementById("details-duration").textContent = item.duration;
  document.getElementById("details-price").textContent = item.priceLevel;

  // Long description — split on double newlines into paragraphs
  const descEl = document.getElementById("details-description");
  descEl.innerHTML = item.longDescription
    .split(/\n\n+/)
    .map(para => `<p>${para.trim()}</p>`)
    .join("");

  // Pull quote
  document.getElementById("details-pullquote").textContent = `"${item.pullQuote.text}"`;
  document.getElementById("details-pullquote-attr").textContent = item.pullQuote.attribution;

  // Reviews
  const reviewsEl = document.getElementById("details-reviews-list");
  reviewsEl.innerHTML = item.reviews.map(r => `
    <div class="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/10">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-9 h-9 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-secondary-container text-sm shrink-0">${r.initials}</div>
        <div>
          <p class="font-bold text-sm text-on-surface">${r.name}</p>
          <p class="text-[11px] text-on-surface-variant uppercase tracking-wide">${r.date}</p>
        </div>
      </div>
      <p class="text-on-surface-variant italic text-sm">"${r.text}"</p>
    </div>
  `).join("");

  // Show view and animate sheet in
  showView("details");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.getElementById("details-sheet").classList.add("open");
    });
  });

  // Scroll sheet to top
  document.getElementById("details-sheet").scrollTop = 0;

  // Lock body scroll
  document.body.style.overflow = "hidden";
}

function closeDetails() {
  const sheet = document.getElementById("details-sheet");
  sheet.classList.remove("open");
  document.body.style.overflow = "";
  setTimeout(() => showView("discovery"), 420);
}

// ══════════════════════════════════════════════════════════════
// MATCHES VIEW
// ══════════════════════════════════════════════════════════════

async function loadMatches() {
  const loadingEl = document.getElementById("matches-loading");
  const emptyEl = document.getElementById("matches-empty");
  const listEl = document.getElementById("matches-list");
  const exploreBtn = document.getElementById("btn-explore-more");
  const voterCountEl = document.getElementById("matches-voter-count");

  // Reset state
  loadingEl.classList.remove("hidden");
  loadingEl.style.display = "flex";
  emptyEl.classList.add("hidden");
  emptyEl.style.display = "";
  listEl.classList.add("hidden");
  exploreBtn.classList.add("hidden");

  const [matchData, voterCount] = await Promise.all([
    getMatchData(),
    getVoterCount()
  ]);

  voterCountEl.textContent = voterCount;

  loadingEl.style.display = "none";

  if (matchData.length === 0) {
    emptyEl.classList.remove("hidden");
    emptyEl.style.display = "flex";
    return;
  }

  // Render match cards
  listEl.innerHTML = matchData.map(({ itemId, likeCount, voterCount: itemVoterCount }) => {
    const item = allItems[itemId];
    if (!item) return "";

    const isCurrentUserVote = true; // We're already filtering to items with likes
    const totalMembers = FAMILY_MEMBERS.length;
    const isTopMatch = likeCount >= totalMembers;
    const othersLikeCount = currentUser
      ? Math.max(0, likeCount - 1) // rough: subtract current user's possible like
      : likeCount;

    let badgeHtml, footerText, actionHtml;

    if (isTopMatch) {
      badgeHtml = `<span class="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shrink-0">Top Match</span>`;
      footerText = "Everyone in the group liked this";
      actionHtml = `<button class="bg-gradient-to-br from-primary to-primary-container text-white px-4 py-2 rounded-full text-xs font-bold hover:opacity-90 transition-all active:scale-95">Details</button>`;
    } else {
      badgeHtml = `<span class="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shrink-0">${likeCount} Like${likeCount !== 1 ? "s" : ""}</span>`;
      footerText = `${likeCount} out of ${itemVoterCount} voters liked this`;
      actionHtml = `<button class="border-2 border-primary text-primary px-4 py-2 rounded-full text-xs font-bold hover:bg-primary/5 transition-all">Details</button>`;
    }

    return `
      <div class="match-card group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(44,47,48,0.06)] border border-outline-variant/5" data-item-id="${itemId}">
        <div class="flex flex-col sm:flex-row">
          <div class="sm:w-2/5 h-44 sm:h-auto overflow-hidden">
            <img
              src="${item.imageUrl}"
              alt="${item.title}"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div class="p-5 sm:w-3/5 flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-start gap-2 mb-2">
                <h3 class="text-lg font-bold text-on-surface leading-snug">${item.title}</h3>
                ${badgeHtml}
              </div>
              <p class="text-sm text-on-surface-variant line-clamp-2 mb-1 leading-relaxed">${item.shortDescription}</p>
              <p class="text-xs text-outline font-medium">${item.location} · ${item.duration}</p>
            </div>
            <div class="flex items-center justify-between mt-4 pt-4 border-t border-surface-container">
              <span class="text-xs font-semibold text-on-surface-variant italic">${footerText}</span>
              ${actionHtml}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Wire detail buttons in match cards
  listEl.querySelectorAll("[data-item-id]").forEach(card => {
    const btn = card.querySelector("button");
    if (btn) {
      btn.onclick = () => {
        const item = allItems[card.dataset.itemId];
        if (item) openDetails(item);
      };
    }
  });

  listEl.classList.remove("hidden");
  exploreBtn.classList.remove("hidden");
}

// ══════════════════════════════════════════════════════════════
// NAV WIRING
// ══════════════════════════════════════════════════════════════

function setupDiscoveryNav() {
  document.getElementById("btn-nav-matches").onclick = () => {
    showView("matches");
    loadMatches();
  };
}

function setupMatchesNav() {
  document.getElementById("btn-nav-discovery").onclick = () => {
    if (queue.length > 0) {
      showView("discovery");
    } else {
      // Already done swiping — go back to welcome to switch user
      showView("welcome");
    }
  };

  document.getElementById("btn-explore-more").onclick = () => {
    showView("discovery");
  };
}
