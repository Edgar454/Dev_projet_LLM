export default function StatSummaryCard({ label, value, hint, hintTone = "neutral" }) {
  const hintClass =
    hintTone === "positive"
      ? "text-secondary font-bold"
      : hintTone === "negative"
      ? "text-error font-bold"
      : "text-on-surface-variant";

  return (
    <div className="bg-surface-container-lowest p-stack-md rounded-xl border border-outline-variant shadow-sm transition-transform hover:scale-[1.02] duration-200">
      <p className="text-caption text-on-surface-variant uppercase tracking-wider mb-2">
        {label}
      </p>
      <div className="flex items-baseline gap-2">
        <span className="text-display-lg font-display-lg text-primary">
          {value ?? "—"}
        </span>
        {hint && <span className={`text-label-md ${hintClass}`}>{hint}</span>}
      </div>
    </div>
  );
}
