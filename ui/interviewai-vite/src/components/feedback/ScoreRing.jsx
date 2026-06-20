import { useState } from "react";

const RADIUS = 42;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ScoreRing({ score = 0, label = "EXCEEDS EXPECTATIONS" }) {
  const [hovered, setHovered] = useState(false);
  const clamped = Math.max(0, Math.min(100, score));
  const offset = CIRCUMFERENCE * (1 - clamped / 100);

  return (
    <div className="col-span-12 md:col-span-4 glass-card p-stack-md rounded-xl flex flex-col items-center justify-center text-center animate-fade-in">
      <p className="text-label-md font-label-md text-on-surface-variant mb-6 uppercase tracking-widest">
        Global Score
      </p>

      <div
        className="relative w-48 h-48 flex items-center justify-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-surface-container-high stroke-current"
            cx="50"
            cy="50"
            fill="transparent"
            r={RADIUS}
            strokeWidth="8"
          />
          <circle
            className="text-secondary stroke-current progress-ring__circle"
            cx="50"
            cy="50"
            fill="transparent"
            r={RADIUS}
            strokeLinecap="round"
            strokeWidth={hovered ? "10" : "8"}
            style={{
              strokeDasharray: CIRCUMFERENCE,
              strokeDashoffset: offset,
              filter: hovered ? "drop-shadow(0 0 8px rgba(0, 106, 97, 0.4))" : "none",
            }}
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-display-lg font-display-lg leading-none">{clamped}</span>
          <span className="text-label-md text-on-surface-variant">out of 100</span>
        </div>
      </div>

      <div className="mt-8 px-4 py-2 bg-secondary/10 text-on-secondary-container rounded-full text-caption font-bold">
        {label}
      </div>
    </div>
  );
}
