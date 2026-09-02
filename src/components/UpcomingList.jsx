import React from "react";
import { countdownLabel, todayKey, daysBetween } from "../utils/date.js";

export default function UpcomingList({ tests, selectedKey, onSelect, limit = 6 }) {
  const today = todayKey();
  const upcoming = tests.filter((t) => t.date >= today).slice(0, limit);
  const list = upcoming.length ? upcoming : tests.slice(-limit);

  if (!list.length) {
    return <div className="tp-empty-state">No tests match this filter.</div>;
  }

  return (
    <div className="tp-upcoming">
      {list.map((t) => {
        const d = new Date(t.date);
        const diff = daysBetween(today, t.date);
        return (
          <button
            key={t.id}
            type="button"
            className={`tp-up-item${selectedKey === t.date ? " selected" : ""}`}
            onClick={() => onSelect(t)}
          >
            <span className="tp-up-date">
              <span className="d">{d.getDate()}</span>
              <span className="m">{d.toLocaleDateString(undefined, { month: "short" })}</span>
            </span>
            <span className="tp-up-main">
              <span className="tp-up-name">{t.name}</span>
              <span className="tp-up-meta">
                <span>{t.track === "advanced" ? "Advanced" : "Main"}</span>
                <span>·</span>
                <span>{t.type === "full" ? "Full test" : "Part test"}</span>
              </span>
            </span>
            <span className={`tp-up-countdown${diff >= 0 && diff <= 7 ? " soon" : ""}`}>{countdownLabel(t.date, today)}</span>
          </button>
        );
      })}
    </div>
  );
}
