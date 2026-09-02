import React from "react";
import { Calendar, Sparkle, Star, Heart } from "../icons/Icons.jsx";
import { BATCH_1, TESTS_1, BATCH_2, TESTS_2 } from "../data/testPlanner.js";
import { todayKey } from "../utils/date.js";

function BatchCard({ batch, tests, onSelect, accentClass }) {
  const today = todayKey();
  const done = tests.filter((t) => t.date < today).length;
  const upcoming = tests.length - done;
  const full = tests.filter((t) => t.type === "full").length;

  return (
    <button
      type="button"
      className={`bs-card bs-card-${accentClass}`}
      onClick={() => onSelect(batch.id)}
    >
      <div className="bs-card-orb">
        <Calendar size={22} />
      </div>
      <div>
        <div className="bs-card-name">{batch.name}</div>
        <div className="bs-card-tagline">{batch.tagline}</div>
      </div>
      <div className="bs-card-stats">
        <div className="bs-card-stat">
          <div className="bs-card-stat-num">{tests.length}</div>
          <div className="bs-card-stat-label">Total</div>
        </div>
        <div className="bs-card-stat">
          <div className="bs-card-stat-num">{upcoming}</div>
          <div className="bs-card-stat-label">Upcoming</div>
        </div>
        <div className="bs-card-stat">
          <div className="bs-card-stat-num">{full}</div>
          <div className="bs-card-stat-label">Full tests</div>
        </div>
      </div>
      <div className="bs-card-cta">
        <span>Open planner</span>
        <span>→</span>
      </div>
    </button>
  );
}

export default function BatchSelector({ onSelect }) {
  return (
    <div className="bs-screen">
      <div className="glow-mesh" />
      <div className="grain" />
      <div className="decor-layer">
        <span className="decor" style={{ top: "14%", left: "8%", color: "var(--p1-a)" }}><Sparkle size={20} /></span>
        <span className="decor" style={{ top: "22%", right: "10%", animationDelay: "1.2s", color: "var(--gold)" }}><Star size={16} /></span>
        <span className="decor" style={{ top: "72%", right: "8%", animationDelay: "0.6s", color: "var(--p2-a)" }}><Sparkle size={16} /></span>
        <span className="decor" style={{ top: "78%", left: "10%", animationDelay: "2s", color: "var(--phy)" }}><Heart size={16} /></span>
      </div>
      <div className="bs-header" style={{ position: "relative", zIndex: 2 }}>
        <div className="bs-logo">
          <Sparkle size={26} />
        </div>
        <h1 className="bs-title">Prayas Test Planner</h1>
        <p className="bs-sub">Choose your batch to continue</p>
      </div>
      <div className="bs-cards" style={{ position: "relative", zIndex: 2 }}>
        <BatchCard batch={BATCH_1} tests={TESTS_1} onSelect={onSelect} accentClass="p1" />
        <BatchCard batch={BATCH_2} tests={TESTS_2} onSelect={onSelect} accentClass="p2" />
      </div>
    </div>
  );
}
