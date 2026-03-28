// ============================================================
// SUPABASE CLIENT — Vote storage & retrieval
// ============================================================
// Setup instructions:
//   1. Go to https://supabase.com and create a free account
//   2. Create a new project
//   3. Go to SQL Editor and run this SQL to create the votes table:
//
//      CREATE TABLE votes (
//        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
//        user_name TEXT NOT NULL,
//        item_id TEXT NOT NULL,
//        decision TEXT NOT NULL CHECK (decision IN ('like','pass','super')),
//        created_at TIMESTAMPTZ DEFAULT now(),
//        UNIQUE(user_name, item_id)
//      );
//      ALTER TABLE votes ENABLE ROW LEVEL SECURITY;
//      CREATE POLICY "Allow all" ON votes FOR ALL USING (true) WITH CHECK (true);
//
//   4. Go to Settings → API and copy your Project URL and anon key
//   5. Paste them into the SUPABASE_URL and SUPABASE_ANON_KEY below
// ============================================================

const SUPABASE_URL = "https://zcxjyvqelrugxtnkfymb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjeGp5dnFlbHJ1Z3h0bmtmeW1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2ODc5MjMsImV4cCI6MjA5MDI2MzkyM30.-0cbG-MGBXe4WvBrG4fV6rFIS_7pKA_Vm1Bmq6-XG9o";

// ── Offline / dev mode ───────────────────────────────────────
// If Supabase isn't configured yet, the app falls back to
// localStorage so you can develop without a backend.
const IS_CONFIGURED = SUPABASE_URL !== "YOUR_SUPABASE_URL" && SUPABASE_URL.startsWith("https://");

let _client = null;

function getClient() {
  if (!IS_CONFIGURED) return null;
  if (!_client) {
    // supabase-js is loaded via CDN in index.html
    _client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return _client;
}

// ── Save a vote ──────────────────────────────────────────────
// decision: "like" | "pass" | "super"
export async function saveVote(userName, itemId, decision) {
  if (!IS_CONFIGURED) {
    // Fallback: localStorage
    const key = `tripplanner_votes_${userName}`;
    const votes = JSON.parse(localStorage.getItem(key) || "{}");
    votes[itemId] = decision;
    localStorage.setItem(key, JSON.stringify(votes));
    return { error: null };
  }

  const client = getClient();
  const { error } = await client
    .from("votes")
    .upsert(
      { user_name: userName, item_id: itemId, decision },
      { onConflict: "user_name,item_id" }
    );

  if (error) {
    console.error("Supabase saveVote error:", error);
    // Fallback to localStorage on error
    const key = `tripplanner_votes_${userName}`;
    const votes = JSON.parse(localStorage.getItem(key) || "{}");
    votes[itemId] = decision;
    localStorage.setItem(key, JSON.stringify(votes));
  }
  return { error };
}

// ── Get all votes for a user ─────────────────────────────────
// Returns: { "item-id": "like", "other-item": "pass", ... }
export async function getUserVotes(userName) {
  if (!IS_CONFIGURED) {
    const key = `tripplanner_votes_${userName}`;
    return JSON.parse(localStorage.getItem(key) || "{}");
  }

  const client = getClient();
  const { data, error } = await client
    .from("votes")
    .select("item_id, decision")
    .eq("user_name", userName);

  if (error) {
    console.error("Supabase getUserVotes error:", error);
    const key = `tripplanner_votes_${userName}`;
    return JSON.parse(localStorage.getItem(key) || "{}");
  }

  const result = {};
  (data || []).forEach(row => { result[row.item_id] = row.decision; });
  return result;
}

// ── Get aggregated match data ────────────────────────────────
// Returns array of { itemId, likeCount, voterCount } sorted by likeCount desc
export async function getMatchData() {
  if (!IS_CONFIGURED) {
    return getMatchDataFromLocalStorage();
  }

  const client = getClient();
  const { data, error } = await client
    .from("votes")
    .select("user_name, item_id, decision");

  if (error) {
    console.error("Supabase getMatchData error:", error);
    return getMatchDataFromLocalStorage();
  }

  return aggregateVotes(data || []);
}

// ── Local match aggregation (fallback) ──────────────────────
function getMatchDataFromLocalStorage() {
  const allVotes = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key.startsWith("tripplanner_votes_")) continue;
    const userName = key.replace("tripplanner_votes_", "");
    const votes = JSON.parse(localStorage.getItem(key) || "{}");
    Object.entries(votes).forEach(([itemId, decision]) => {
      allVotes.push({ user_name: userName, item_id: itemId, decision });
    });
  }
  return aggregateVotes(allVotes);
}

// ── Vote aggregation logic ───────────────────────────────────
function aggregateVotes(rows) {
  const byItem = {};
  const votersByItem = {};

  rows.forEach(({ user_name, item_id, decision }) => {
    if (!byItem[item_id]) {
      byItem[item_id] = { likeCount: 0, passCount: 0 };
      votersByItem[item_id] = new Set();
    }
    votersByItem[item_id].add(user_name);
    if (decision === "like" || decision === "super") {
      byItem[item_id].likeCount++;
    } else {
      byItem[item_id].passCount++;
    }
  });

  return Object.entries(byItem)
    .map(([itemId, counts]) => ({
      itemId,
      likeCount: counts.likeCount,
      voterCount: votersByItem[itemId].size
    }))
    .filter(x => x.likeCount >= 1)
    .sort((a, b) => b.likeCount - a.likeCount || b.voterCount - a.voterCount);
}

// ── Get unique voter count ───────────────────────────────────
export async function getVoterCount() {
  if (!IS_CONFIGURED) {
    const voters = new Set();
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("tripplanner_votes_")) {
        voters.add(key.replace("tripplanner_votes_", ""));
      }
    }
    return voters.size;
  }

  const client = getClient();
  const { data, error } = await client
    .from("votes")
    .select("user_name");

  if (error) return 0;
  const unique = new Set((data || []).map(r => r.user_name));
  return unique.size;
}

// ── Check if Supabase is configured ─────────────────────────
export function isConfigured() {
  return IS_CONFIGURED;
}
