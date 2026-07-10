// Challenge engine configuration. Designed so future challenges (7/14/21/60/90-day)
// can reuse the same engine by swapping content + this config.
export const CHALLENGE = {
  id: "unbox-your-aura-30",
  name: "The 30-Day Unbox Your Aura Challenge",
  totalDays: 30,
  org: "The Thecla Network (TTN)",
  founder: "Thecla A. Orakwe",
  founderTitle: "Founder, The Thecla Network (TTN)",
  // Daily completion requirements (admin-configurable in a future backend).
  requirements: {
    journalMinChars: 30,
    requireVideo: true,
    requireReflection: false, // encouraged, not blocking
  },
  xpPerDay: 100,
  xpPerLevel: 500,
};

export const BADGES = [
  { id: "first-step", label: "First Step", threshold: 1, icon: "Footprints" },
  { id: "7-day", label: "7-Day Streak", threshold: 7, icon: "Flame" },
  { id: "14-day", label: "14-Day Streak", threshold: 14, icon: "Zap" },
  { id: "21-day", label: "21-Day Streak", threshold: 21, icon: "Star" },
  { id: "champion", label: "30-Day Champion", threshold: 30, icon: "Trophy" },
];

export const MOTIVATION = [
  "You don't have to shrink to fit in. You were created to stand out.",
  "Confidence is built. Purpose is pursued. Growth is continuous.",
  "Transformation happens through consistency, not speed.",
  "You cannot become who you were created to be until you discover who you already are.",
  "Keep showing up. Keep taking courageous steps. Keep unboxing your aura.",
  "Small, brave steps compound into a bold, becoming life.",
  "The person you're becoming is worth every uncomfortable step.",
];
