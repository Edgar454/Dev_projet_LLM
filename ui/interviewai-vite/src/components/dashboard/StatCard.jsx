export default function StatCard({
  label = "Interviews Completed",
  value = 24,
  icon = "check_circle",
  footnote = "Top 5% of active users",
}) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-stack-md flex-1">
      <h3 className="text-label-md font-label-md text-on-surface-variant mb-stack-sm">{label}</h3>
      <div className="flex items-center justify-between">
        <span className="text-headline-lg font-headline-lg">{value}</span>
        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-secondary">{icon}</span>
        </div>
      </div>
      {footnote && <p className="mt-4 text-caption text-on-surface-variant">{footnote}</p>}
    </div>
  );
}
