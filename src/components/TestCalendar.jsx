import React, { useMemo } from "react";
import { ChevronLeft, ChevronRight, Calendar, Atom, Flask, Sigma } from "../icons/Icons.jsx";
import { toKey, cursorFromKey, monthLabel, formatLong, countdownLabel, todayKey } from "../utils/date.js";

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function matchesFilter(test, filter) {
  if (filter === "all") return true;
  if (filter === "full") return test.type === "full";
  return test.track === filter;
}

export default function TestCalendar({ tests, cursor, setCursor, selectedKey, setSelectedKey, filter }) {
  const byDate = useMemo(() => {
    const map = {};
    tests.forEach((t) => { map[t.date] = map[t.date] || []; map[t.date].push(t); });
    return map;
  }, [tests]);

  const monthOptions = useMemo(() => {
    const seen = new Map();
    tests.forEach((t) => {
      const [y, m] = t.date.split("-").map(Number);
      const key = `${y}-${m}`;
      if (!seen.has(key)) seen.set(key, { y, m: m - 1, label: monthLabel(y, m - 1) });
    });
    return Array.from(seen.values());
  }, [tests]);

  const { y, m } = cursor;
  const label = monthLabel(y, m);
  const firstDow = new Date(y, m, 1).getDay();
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const today = todayKey();

  const cells = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const changeMonth = (delta) => {
    let nm = m + delta, ny = y;
    if (nm < 0) { nm = 11; ny -= 1; }
    if (nm > 11) { nm = 0; ny += 1; }
    setCursor({ y: ny, m: nm });
  };

  const goToday = () => { setCursor(cursorFromKey(today)); setSelectedKey(today); };

  const handleJump = (e) => {
    const [jy, jm] = e.target.value.split("-").map(Number);
    setCursor({ y: jy, m: jm });
  };

  const dayTests = byDate[selectedKey] || [];
  const primaryTest = dayTests[0];
  const selLabel = selectedKey ? formatLong(selectedKey) : "";

  return (
    <div className="tp-cal">
      <div className="tp-cal-left">
        <div className="tp-cal-card">
          <div className="tp-cal-head">
            <button type="button" className="tp-cal-nav" onClick={() => changeMonth(-1)} aria-label="Previous month">
              <ChevronLeft size={16} />
            </button>
            <div className="tp-cal-title">{label}</div>
            <button type="button" className="tp-cal-nav" onClick={() => changeMonth(1)} aria-label="Next month">
              <ChevronRight size={16} />
            </button>
            <button type="button" className="tp-cal-today" onClick={goToday}>Today</button>
          </div>

          <div className="tp-cal-weekdays">
            {WEEKDAYS.map((w) => <div key={w} className="tp-cal-wd">{w}</div>)}
          </div>

          <div className="tp-cal-grid">
            {cells.map((d, i) => {
              if (d === null) return <div key={`e${i}`} className="tp-cal-cell empty" />;
              const key = toKey(y, m, d);
              const list = byDate[key] || [];
              const visible = list.filter((t) => matchesFilter(t, filter));
              const isToday = key === today;
              const isSel = key === selectedKey;
              const hasFull = visible.some((t) => t.type === "full");
              const dimmed = list.length > 0 && visible.length === 0;
              const primaryTrack = visible[0]?.track || "main";

              return (
                <button
                  type="button"
                  key={key}
                  className={[
                    "tp-cal-cell",
                    list.length ? "has-test" : "",
                    hasFull ? "type-full" : "",
                    isToday ? "is-today" : "",
                    isSel ? `is-selected track-${primaryTrack}` : "",
                    dimmed ? "dim" : ""
                  ].filter(Boolean).join(" ")}
                  onClick={() => setSelectedKey(key)}
                >
                  <span className="tp-cal-daynum">{d}</span>
                  {visible.length > 0 && (
                    <span className="tp-cal-dots" style={{ display: "flex", gap: 4 }}>
                      {visible.slice(0, 3).map((t) => (
                        <span
                          key={t.id}
                          className={`tp-cal-dot${t.type === "full" ? " is-full" : ""}`}
                          style={{ background: t.track === "advanced" ? "var(--p1-b)" : "var(--p2-b)" }}
                        />
                      ))}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="tp-cal-legend">
            <span className="tp-cal-legend-item">
              <span className="tp-cal-dot" style={{ background: "var(--p2-b)" }} /> Main
            </span>
            <span className="tp-cal-legend-item">
              <span className="tp-cal-dot" style={{ background: "var(--p1-b)" }} /> Advanced
            </span>
            <span className="tp-cal-legend-item">
              <span className="tp-cal-dot is-full" style={{ background: "var(--muted-dim)" }} /> Full test
            </span>
          </div>
        </div>

        <div className="tp-jump">
          <select value={`${y}-${m}`} onChange={handleJump} aria-label="Jump to month">
            {monthOptions.map((o) => (
              <option key={`${o.y}-${o.m}`} value={`${o.y}-${o.m}`}>{o.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="tp-detail">
        {!primaryTest ? (
          <div className="tp-detail-empty">
            <Calendar size={28} />
            {selectedKey ? "No test scheduled on this day." : "Pick a date to see what's scheduled."}
          </div>
        ) : (
          dayTests.filter((t) => matchesFilter(t, filter)).map((test) => (
            <div key={test.id} style={{ marginBottom: 20 }}>
              <div className="tp-detail-head">
                <div>
                  <div className="tp-detail-date">{selLabel}</div>
                  <div className="tp-detail-name">{test.name}</div>
                </div>
                <span className="tp-detail-countdown">{countdownLabel(test.date, today)}</span>
              </div>
              <div className="tp-detail-badges">
                <span className={`tp-badge track-${test.track}`}>
                  {test.track === "advanced" ? "JEE Advanced" : "JEE Main"} pattern
                </span>
                <span className={`tp-badge type-${test.type}`}>{test.type === "full" ? "Full test" : "Part test"}</span>
                {test.cumulative && <span className="tp-badge type-part">+30% cumulative</span>}
              </div>

              {test.fullSyllabus ? (
                <div className="tp-full-note">
                  📘 Full syllabus test — as per NTA {test.track === "advanced" ? "JEE Advanced" : "JEE Main"} pattern.
                </div>
              ) : (
                <>
                  <div className="tp-subject physics">
                    <div className="tp-subject-title"><Atom size={15} /> Physics</div>
                    <div className="tp-chips">
                      {test.subjects.physics.map((c) => <span key={c} className="tp-chip">{c}</span>)}
                    </div>
                  </div>
                  <div className="tp-subject chemistry">
                    <div className="tp-subject-title"><Flask size={15} /> Chemistry</div>
                    <div className="tp-chips">
                      {test.subjects.chemistry.map((c) => <span key={c} className="tp-chip">{c}</span>)}
                    </div>
                  </div>
                  <div className="tp-subject maths">
                    <div className="tp-subject-title"><Sigma size={15} /> Maths</div>
                    <div className="tp-chips">
                      {test.subjects.maths.map((c) => <span key={c} className="tp-chip">{c}</span>)}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
