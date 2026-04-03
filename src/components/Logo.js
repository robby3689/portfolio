import React from 'react';

export default function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:scale-110 transition-transform"
    >
      {/* Outer circle */}
      <circle
        cx="20"
        cy="20"
        r="18"
        stroke="currentColor"
        strokeWidth="2"
        className="text-emerald-500"
      />

      {/* Left angle bracket < */}
      <path
        d="M 12 14 L 18 20 L 12 26"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-emerald-500"
      />

      {/* Right angle bracket > */}
      <path
        d="M 28 14 L 22 20 L 28 26"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-emerald-500"
      />

      {/* Center slash / */}
      <line
        x1="20"
        y1="14"
        x2="20"
        y2="26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-emerald-500"
      />
    </svg>
  );
}
