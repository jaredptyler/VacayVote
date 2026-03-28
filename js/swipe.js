// ============================================================
// SWIPE ENGINE — Pointer-event based drag / fly-off
// ============================================================

const SWIPE_THRESHOLD = 0.35; // fraction of card width to trigger commit
const ROTATION_FACTOR = 0.12; // degrees per pixel of drag
const FLY_DISTANCE = 1.5;     // screen widths to fly off to

let _card = null;
let _onSwipe = null; // callback(direction: "like"|"pass"|"super")

// Drag state
let isDragging = false;
let startX = 0;
let startY = 0;
let currentX = 0;

// Overlay elements
let overlayLike = null;
let overlayPass = null;

export function initSwipe(cardEl, onSwipeFn) {
  _card = cardEl;
  _onSwipe = onSwipeFn;
  overlayLike = document.getElementById("overlay-like");
  overlayPass = document.getElementById("overlay-pass");

  _card.addEventListener("pointerdown", onPointerDown, { passive: false });
  _card.addEventListener("pointermove", onPointerMove, { passive: false });
  _card.addEventListener("pointerup", onPointerUp);
  _card.addEventListener("pointercancel", onPointerCancel);
  _card.addEventListener("pointerleave", onPointerCancel);
}

export function destroySwipe() {
  if (!_card) return;
  _card.removeEventListener("pointerdown", onPointerDown);
  _card.removeEventListener("pointermove", onPointerMove);
  _card.removeEventListener("pointerup", onPointerUp);
  _card.removeEventListener("pointercancel", onPointerCancel);
  _card.removeEventListener("pointerleave", onPointerCancel);
}

// ── Pointer Handlers ─────────────────────────────────────────

function onPointerDown(e) {
  if (e.target.closest("button")) return; // don't hijack button clicks
  // Kill entrance/hint animations so they can't override the drag transform
  _card.classList.remove("card-enter", "swipe-hint-wiggle", "snap-back", "fly-off");
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  currentX = e.clientX;
  _card.setPointerCapture(e.pointerId);
  e.preventDefault();
}

function onPointerMove(e) {
  if (!isDragging) return;
  currentX = e.clientX;
  const deltaX = currentX - startX;
  const deltaY = e.clientY - startY;
  const rotation = deltaX * ROTATION_FACTOR;

  _card.style.transform = `translateX(${deltaX}px) translateY(${deltaY * 0.15}px) rotate(${rotation}deg)`;

  // Overlay opacity (0 → 1 over first 40% of threshold)
  const cardWidth = _card.offsetWidth;
  const progress = Math.min(Math.abs(deltaX) / (cardWidth * SWIPE_THRESHOLD), 1);

  if (deltaX > 0) {
    overlayLike.style.opacity = progress;
    overlayPass.style.opacity = 0;
  } else {
    overlayPass.style.opacity = progress;
    overlayLike.style.opacity = 0;
  }
}

function onPointerUp(e) {
  if (!isDragging) return;
  isDragging = false;

  const deltaX = currentX - startX;
  const cardWidth = _card.offsetWidth;

  resetOverlays();

  if (Math.abs(deltaX) >= cardWidth * SWIPE_THRESHOLD) {
    // Commit swipe
    const direction = deltaX > 0 ? "like" : "pass";
    flyOff(direction);
  } else {
    // Snap back
    snapBack();
  }
}

function onPointerCancel() {
  if (!isDragging) return;
  isDragging = false;
  resetOverlays();
  snapBack();
}

// ── Animations ───────────────────────────────────────────────

function snapBack() {
  _card.classList.add("snap-back");
  _card.style.transform = "";
  setTimeout(() => _card.classList.remove("snap-back"), 380);
}

function flyOff(direction) {
  const vw = window.innerWidth;
  const targetX = direction === "like" ? vw * FLY_DISTANCE : -vw * FLY_DISTANCE;
  const rotation = direction === "like" ? 30 : -30;

  // Clear any entrance/hint animations that would override the transform
  _card.classList.remove("card-enter", "swipe-hint-wiggle");
  _card.classList.add("fly-off");
  _card.style.transform = `translateX(${targetX}px) rotate(${rotation}deg)`;
  _card.style.opacity = "0";

  setTimeout(() => {
    _card.classList.remove("fly-off");
    _card.style.transform = "";
    _card.style.opacity = "";
    if (_onSwipe) _onSwipe(direction);
  }, 420);
}

// ── Programmatic Swipe (from button taps) ────────────────────

export function triggerSwipe(direction) {
  if (isDragging) return;
  resetOverlays();

  if (direction === "super") {
    // Super like: fly up
    _card.classList.add("fly-off");
    _card.style.transform = "translateY(-200%) rotate(0deg)";
    _card.style.opacity = "0";
    setTimeout(() => {
      _card.classList.remove("fly-off");
      _card.style.transform = "";
      _card.style.opacity = "";
      if (_onSwipe) _onSwipe("super");
    }, 420);
  } else {
    flyOff(direction);
  }
}

// ── Helpers ──────────────────────────────────────────────────

function resetOverlays() {
  if (overlayLike) overlayLike.style.opacity = 0;
  if (overlayPass) overlayPass.style.opacity = 0;
}
