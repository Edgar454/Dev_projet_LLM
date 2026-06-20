export default function ScoreCard({
  label = "Avg. Score",
  score = 84,
  outOf = 100,
  trendLabel = "+4.2% from last month",
}) {
  const percentage = Math.min(100, Math.round((score / outOf) * 100));

  return (
    <div className="bg-primary-container text-on-primary rounded-xl p-stack-md flex-1">
      <h3 className="text-label-md font-label-md uppercase tracking-wider text-on-primary-container mb-stack-sm">
        {label}
      </h3>
      <div className="flex items-end gap-2">
        <span className="text-display-lg font-display-lg">{score}</span>
        <span className="text-body-md text-on-primary-container mb-2">/ {outOf}</span>
      </div>
      <div className="mt-4 h-1 w-full bg-on-primary-container/20 rounded-full overflow-hidden">
        <div className="h-full bg-secondary-fixed" style={{ width: `${percentage}%` }} />
      </div>
      {trendLabel && (
        <p className="mt-4 text-caption flex items-center gap-1 text-secondary-fixed">
          <span className="material-symbols-outlined text-[16px]">trending_up</span>
          {trendLabel}
        </p>
      )}
    </div>
  );
}
