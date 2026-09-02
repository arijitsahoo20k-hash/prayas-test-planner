const pad = (n) => String(n).padStart(2, "0");

export const toKey = (y, m, d) => `${y}-${pad(m + 1)}-${pad(d)}`;

export const keyOf = (dateStr) => dateStr; // already "YYYY-MM-DD"

export const cursorFromKey = (key) => {
  const [y, m] = key.split("-").map(Number);
  return { y, m: m - 1 };
};

export const todayKey = () => {
  const d = new Date();
  return toKey(d.getFullYear(), d.getMonth(), d.getDate());
};

export const parseKey = (key) => {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d);
};

export const monthLabel = (y, m) =>
  new Date(y, m, 1).toLocaleDateString(undefined, { month: "long", year: "numeric" });

export const formatLong = (key) =>
  parseKey(key).toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric", year: "numeric" });

export const formatShort = (key) =>
  parseKey(key).toLocaleDateString(undefined, { month: "short", day: "numeric" });

export const daysBetween = (fromKey, toKeyStr) => {
  const a = parseKey(fromKey);
  const b = parseKey(toKeyStr);
  return Math.round((b - a) / 86400000);
};

export const countdownLabel = (targetKey, todayKeyStr = todayKey()) => {
  const diff = daysBetween(todayKeyStr, targetKey);
  if (diff === 0) return "Today";
  if (diff === 1) return "Tomorrow";
  if (diff === -1) return "Yesterday";
  if (diff > 1) return `In ${diff} days`;
  return `${Math.abs(diff)} days ago`;
};
