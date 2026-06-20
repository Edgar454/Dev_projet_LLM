function formatDuration(seconds) {
  if (!seconds && seconds !== 0) return null;
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return `${m}m ${s}s`;
}

export default function FeedbackSummaryHeader({
  title = "Interview Session",
  candidateName = "Alex Rivers",
  date,
  durationSeconds,
  transcriptVisible,
  onToggleTranscript,
}) {
  const formattedDate = date
    ? new Date(date).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;
  const duration = formatDuration(durationSeconds);

  const metaParts = [
    `Candidate: ${candidateName}`,
    formattedDate,
    duration ? `${duration} Duration` : null,
  ].filter(Boolean);

  return (
    <div className="flex justify-between items-end animate-fade-in">
      <div>
        <h3 className="text-display-lg font-display-lg text-primary">{title}</h3>
        <p className="text-body-lg text-on-surface-variant mt-2">{metaParts.join(" • ")}</p>
      </div>
      <button
        onClick={onToggleTranscript}
        className="flex items-center gap-2 px-6 py-3 border border-outline rounded-lg text-label-md font-label-md hover:bg-surface-container-low transition-all"
      >
        <span className="material-symbols-outlined">
          {transcriptVisible ? "close" : "description"}
        </span>
        {transcriptVisible ? "Close Transcript" : "View Full Transcript"}
      </button>
    </div>
  );
}
