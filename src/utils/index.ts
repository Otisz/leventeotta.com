import type { DateTime } from "luxon";

export function elapsedTime(from: DateTime, to: DateTime) {
  const diff = to.diff(from, ["years", "months"]).toObject();

  const years = Math.floor(diff.years || 0);
  const months = Math.floor(diff.months || 0);

  const parts = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} mo${months > 1 ? "s" : ""}`);

  return parts.join(" ") || "0 mos";
}
