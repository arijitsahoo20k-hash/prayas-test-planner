import React from "react";
import { Download, X } from "../icons/Icons.jsx";

export default function InstallPrompt({ visible, onInstall, onDismiss }) {
  if (!visible) return null;
  return (
    <div className="tp-install" role="dialog" aria-label="Install app">
      <span className="tp-install-icon"><Download size={19} /></span>
      <span className="tp-install-text">
        <span className="tp-install-title">Install Test Planner</span>
        <span className="tp-install-sub">Add it to your home screen — works offline too.</span>
      </span>
      <button type="button" className="btn btn-primary btn-sm" onClick={onInstall}>Install</button>
      <button type="button" className="tp-install-close" onClick={onDismiss} aria-label="Dismiss"><X size={13} /></button>
    </div>
  );
}
