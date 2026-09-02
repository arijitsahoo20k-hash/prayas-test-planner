import React from "react";
import { Calendar } from "../icons/Icons.jsx";

export default function TopBar({ batchName, onInstallClick, canInstall, onSwitchBatch }) {
  return (
    <div className="wrap">
      <nav className="tp-nav">
        <div className="tp-brand">
          <span className="tp-brand-mark"><Calendar size={18} /></span>
          <span className="tp-brand-text">
            Test Planner
            <span className="tp-brand-sub">{batchName}</span>
          </span>
        </div>
        <button type="button" className="tp-switch-batch" onClick={onSwitchBatch}>
          ⇄ Switch batch
        </button>
        {canInstall && (
          <button type="button" className="btn btn-soft btn-sm" onClick={onInstallClick}>
            Install app
          </button>
        )}
      </nav>
    </div>
  );
}
