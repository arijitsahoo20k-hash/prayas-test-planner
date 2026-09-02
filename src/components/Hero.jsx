import React from "react";
import { Sparkle, Flask, Atom, Sigma, Clock } from "../icons/Icons.jsx";
import { formatLong, countdownLabel, todayKey } from "../utils/date.js";

function TrackBadge({ test }) {
  return (
    <span className={`tp-badge track-${test.track}`}>
      <span className="dot" style={{ width: 6, height: 6, borderRadius: 999, background: "currentColor", display: "inline-block" }} />
      {test.track === "advanced" ? "Advanced" : "Main"}
    </span>
  );
}

export default function Hero({ tests, batchTagline, onSelectTest }) {
  const today = todayKey();
  const next = tests.find((t) => t.date >= today) || tests[tests.length - 1];

  const total = tests.length;
  const done = tests.filter((t) => t.date < today).length;
  const upcoming = total - done;
  const fullTests = tests.filter((t) => t.type === "full").length;

  return (
    <div className="wrap">
      <section className="tp-hero">
        <div className="tp-hero-badge">
          <Sparkle size={13} /> {batchTagline}
        </div>
        <h1>Every test, <span className="accent">mapped.</span></h1>
        <p className="lead">
          {total} tests — Main, Advanced, part tests and full-syllabus AITS — exact dates, full syllabus, one tap away.
        </p>

        <div className="tp-stats">
          <div className="tp-stat">
            <div className="tp-stat-num">{total}</div>
            <div className="tp-stat-label">Total</div>
          </div>
          <div className="tp-stat">
            <div className="tp-stat-num accent">{done}</div>
            <div className="tp-stat-label">Done</div>
          </div>
          <div className="tp-stat">
            <div className="tp-stat-num phy">{upcoming}</div>
            <div className="tp-stat-label">Upcoming</div>
          </div>
          <div className="tp-stat">
            <div className="tp-stat-num gold">{fullTests}</div>
            <div className="tp-stat-label">Full tests</div>
          </div>
        </div>

        {next && (
          <button type="button" className="tp-next" onClick={() => onSelectTest(next)} style={{ cursor: "pointer", border: "none", width: "100%" }}>
            <div className="tp-next-top">
              <span className="tp-next-kicker">
                <Clock size={12} style={{ marginRight: 5, verticalAlign: "-2px" }} />
                {next.date < today ? "Most recent test" : "Next up"}
              </span>
              <span className="tp-next-countdown">{countdownLabel(next.date, today)}</span>
            </div>
            <div className="tp-next-name">{next.name}</div>
            <div className="tp-next-date">{formatLong(next.date)}</div>
            <div className="tp-next-badges">
              <TrackBadge test={next} />
              <span className={`tp-badge type-${next.type}`}>{next.type === "full" ? "Full test" : "Part test"}</span>
              {next.cumulative && <span className="tp-badge type-part">+30% cumulative</span>}
            </div>

            {next.fullSyllabus ? (
              <div className="tp-next-full">📘 Full syllabus — as per NTA {next.track === "advanced" ? "JEE Advanced" : "JEE Main"}</div>
            ) : (
              <div className="tp-next-subjects">
                <div className="tp-next-subj physics">
                  <div className="tp-next-subj-head"><Atom size={13} /> Physics</div>
                  <div className="tp-next-subj-count">{next.subjects.physics.length}</div>
                  <div className="tp-next-subj-sub">chapters</div>
                </div>
                <div className="tp-next-subj chemistry">
                  <div className="tp-next-subj-head"><Flask size={13} /> Chemistry</div>
                  <div className="tp-next-subj-count">{next.subjects.chemistry.length}</div>
                  <div className="tp-next-subj-sub">chapters</div>
                </div>
                <div className="tp-next-subj maths">
                  <div className="tp-next-subj-head"><Sigma size={13} /> Maths</div>
                  <div className="tp-next-subj-count">{next.subjects.maths.length}</div>
                  <div className="tp-next-subj-sub">chapters</div>
                </div>
              </div>
            )}
          </button>
        )}
      </section>
    </div>
  );
}
