import React from "react";
import { Calendar } from "../icons/Icons.jsx";
import { BATCH_NAME } from "../data/testPlanner.js";

export default function TopBar({ onInstallClick, canInstall }) {
  return (
    <div className="wrap">
      <nav className="tp-nav">
        <div className="tp-brand">
          <span className="tp-brand-mark"><Calendar size={19} /></span>
          <span className="tp-brand-text">
            Test Planner
            <span className="tp-brand-sub">{BATCH_NAME}</span>
          </span>
        </div>
        {canInstall && (
          <button type="button" className="btn btn-soft btn-sm" onClick={onInstallClick}>
            Install app
          </button>
        )}
      </nav>
    </div>
  );
}
