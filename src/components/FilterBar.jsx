import React from "react";
import { Layers } from "../icons/Icons.jsx";

const OPTIONS = [
  { key: "all", label: "All tests" },
  { key: "main", label: "Main", color: "var(--p2-c)" },
  { key: "advanced", label: "Advanced", color: "var(--p1-a)" },
  { key: "full", label: "Full test", color: "var(--gold)" }
];

export default function FilterBar({ value, onChange }) {
  return (
    <div className="tp-filters" role="tablist" aria-label="Filter tests">
      {OPTIONS.map((o) => (
        <button
          key={o.key}
          type="button"
          role="tab"
          aria-selected={value === o.key}
          className={`tp-filter${value === o.key ? " active" : ""}`}
          onClick={() => onChange(o.key)}
        >
          {o.key === "all"
            ? <Layers size={12} />
            : <span className="dot" style={{ background: value === o.key ? "currentColor" : o.color }} />}
          {o.label}
        </button>
      ))}
    </div>
  );
}
