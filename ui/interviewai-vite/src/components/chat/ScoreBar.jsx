export default function ScoreBar({ label, value }) {
  const hasValue = typeof value === "number";
  const pct = hasValue ? Math.max(0, Math.min(100, value)) : 0;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-caption">
        <span>{label}</span>
        <span className="text-secondary font-bold">{hasValue ? `${pct}%` : "Pending"}</span>
      </div>
      <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
        <div
          className={`h-full bg-secondary ${hasValue ? "" : "opacity-20"}`}
          style={{ width: hasValue ? `${pct}%` : "10%" }}
        />
      </div>
    </div>
  );
}
