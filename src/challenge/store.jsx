import { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";
import { challengeDays } from "../data/challengeContent";
import { CHALLENGE, BADGES } from "./config";

const KEY = "uya_challenge_v1";
const ChallengeCtx = createContext(null);

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    /* ignore */
  }
  return { profile: null, days: {} };
}

export function ChallengeProvider({ children }) {
  const [state, setState] = useState(load);

  // Persist on every change (autosave).
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
      /* storage full / private mode */
    }
  }, [state]);

  const enroll = useCallback((profile) => {
    setState((s) => ({
      ...s,
      profile: { ...profile, enrolledAt: new Date().toISOString() },
    }));
  }, []);

  const reset = useCallback(() => setState({ profile: null, days: {} }), []);

  const patchDay = useCallback((n, patch) => {
    setState((s) => ({
      ...s,
      days: { ...s.days, [n]: { ...(s.days[n] || {}), ...patch } },
    }));
  }, []);

  const setReflection = useCallback((n, idx, text) => {
    setState((s) => {
      const day = s.days[n] || {};
      const reflections = { ...(day.reflections || {}), [idx]: text };
      return { ...s, days: { ...s.days, [n]: { ...day, reflections } } };
    });
  }, []);

  const dayState = useCallback((n) => state.days[n] || {}, [state.days]);

  const requirementsFor = useCallback(
    (n) => {
      const d = challengeDays.find((x) => x.day === n);
      const st = state.days[n] || {};
      const req = CHALLENGE.requirements;
      const items = [{ key: "opened", label: "Lesson opened", done: !!st.opened }];
      if (d && d.challenge && d.challenge.length)
        items.push({ key: "challenge", label: "Challenge completed", done: !!st.challengeDone });
      if (d && d.declaration && d.declaration.length)
        items.push({ key: "declaration", label: "Declaration acknowledged", done: !!st.declarationDone });
      if (d && d.prayer && d.prayer.length)
        items.push({ key: "prayer", label: "Prayer viewed", done: !!st.prayerViewed });
      if (d && d.boldStep && d.boldStep.length)
        items.push({ key: "boldStep", label: "Bold step completed", done: !!st.boldStepDone });
      items.push({
        key: "journal",
        label: `Journal (${req.journalMinChars}+ characters)`,
        done: (st.journal || "").trim().length >= req.journalMinChars,
      });
      if (req.requireVideo)
        items.push({ key: "video", label: "Video uploaded", done: !!st.video });
      return items;
    },
    [state.days]
  );

  const isDayComplete = useCallback((n) => !!(state.days[n] && state.days[n].completedAt), [state.days]);

  const canComplete = useCallback(
    (n) => requirementsFor(n).every((i) => i.done),
    [requirementsFor]
  );

  const completeDay = useCallback(
    (n) => {
      if (!canComplete(n)) return false;
      setState((s) => {
        if (s.days[n]?.completedAt) return s;
        return {
          ...s,
          days: {
            ...s.days,
            [n]: { ...(s.days[n] || {}), completedAt: new Date().toISOString() },
          },
        };
      });
      return true;
    },
    [canComplete]
  );

  const derived = useMemo(() => {
    const completed = [];
    for (let n = 1; n <= CHALLENGE.totalDays; n++) {
      if (state.days[n]?.completedAt) completed.push(n);
    }
    const completedCount = completed.length;
    const isUnlocked = (n) => n === 1 || !!state.days[n - 1]?.completedAt;
    // current day = first unlocked, not-yet-complete day
    let currentDay = 1;
    for (let n = 1; n <= CHALLENGE.totalDays; n++) {
      if (!state.days[n]?.completedAt && isUnlocked(n)) {
        currentDay = n;
        break;
      }
      if (n === CHALLENGE.totalDays) currentDay = CHALLENGE.totalDays;
    }
    const percent = Math.round((completedCount / CHALLENGE.totalDays) * 100);
    const xp = completedCount * CHALLENGE.xpPerDay;
    const level = Math.floor(xp / CHALLENGE.xpPerLevel) + 1;
    const badges = BADGES.map((b) => ({ ...b, earned: completedCount >= b.threshold }));
    const videosCount = Object.values(state.days).filter((d) => d?.video).length;
    const journalCount = Object.values(state.days).filter(
      (d) => (d?.journal || "").trim().length
    ).length;
    const finished = completedCount >= CHALLENGE.totalDays;
    return {
      completed,
      completedCount,
      isUnlocked,
      currentDay,
      percent,
      xp,
      level,
      badges,
      videosCount,
      journalCount,
      streak: completedCount, // sequential by design
      finished,
    };
  }, [state.days]);

  const value = {
    ...state,
    ...derived,
    isEnrolled: !!state.profile,
    enroll,
    reset,
    patchDay,
    setReflection,
    dayState,
    requirementsFor,
    canComplete,
    completeDay,
    isDayComplete,
  };

  return <ChallengeCtx.Provider value={value}>{children}</ChallengeCtx.Provider>;
}

export function useChallenge() {
  const ctx = useContext(ChallengeCtx);
  if (!ctx) throw new Error("useChallenge must be used within ChallengeProvider");
  return ctx;
}
