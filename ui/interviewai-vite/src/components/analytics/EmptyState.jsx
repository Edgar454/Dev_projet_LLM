export default function EmptyState({
  icon = "insights",
  message = "Not available yet.",
  className = "",
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center py-stack-lg gap-2 ${className}`}
    >
      <span className="material-symbols-outlined text-on-surface-variant text-[32px]">
        {icon}
      </span>
      <p className="text-caption text-on-surface-variant max-w-xs">{message}</p>
    </div>
  );
}
