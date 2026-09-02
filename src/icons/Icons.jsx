import React from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

export const ChevronLeft = ({ size = 16, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...p}><path d="M15 5l-7 7 7 7" /></svg>
);

export const ChevronRight = ({ size = 16, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...p}><path d="M9 5l7 7-7 7" /></svg>
);

export const Calendar = ({ size = 16, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="3" />
    <path d="M8 3v4M16 3v4M3.5 9.5h17" />
  </svg>
);

export const Flask = ({ size = 16, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...p}>
    <path d="M9.5 3h5M10 3v6.2L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9.2V3" />
    <path d="M7.8 14.5h8.4" />
  </svg>
);

export const Atom = ({ size = 16, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...p}>
    <ellipse cx="12" cy="12" rx="9.5" ry="4" />
    <ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
  </svg>
);

export const Sigma = ({ size = 16, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...p}>
    <path d="M17 5H7l5.2 7L7 19h10" />
  </svg>
);

export const Sparkle = ({ size = 14, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}>
    <path d="M12 2c.6 4 2.2 5.6 6 6.2-3.8.6-5.4 2.2-6 6.2-.6-4-2.2-5.6-6-6.2 3.8-.6 5.4-2.2 6-6.2Z" />
  </svg>
);

export const Star = ({ size = 14, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}>
    <path d="M12 2.5l2.7 5.9 6.4.7-4.8 4.4 1.4 6.3L12 16.7 6.3 19.8l1.4-6.3-4.8-4.4 6.4-.7L12 2.5Z" />
  </svg>
);

export const Clock = ({ size = 14, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.3l3.4 2" />
  </svg>
);

export const Check = ({ size = 13, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2.4} {...p}>
    <path d="M5 12.5l4.5 4.5L19.5 7" />
  </svg>
);

export const Download = ({ size = 15, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 3v12.5M7 11l5 5 5-5M4.5 20h15" />
  </svg>
);

export const X = ({ size = 15, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2.2} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const Layers = ({ size = 14, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 3.5l8 4.2-8 4.2-8-4.2 8-4.2Z" />
    <path d="M4 12l8 4.2 8-4.2M4 15.8l8 4.2 8-4.2" />
  </svg>
);

export const Target = ({ size = 14, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.7" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const Bell = ({ size = 15, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...p}>
    <path d="M6 10a6 6 0 0 1 12 0c0 4 1.5 5.4 1.5 5.4H4.5S6 14 6 10Z" />
    <path d="M10 19a2.2 2.2 0 0 0 4 0" />
  </svg>
);
