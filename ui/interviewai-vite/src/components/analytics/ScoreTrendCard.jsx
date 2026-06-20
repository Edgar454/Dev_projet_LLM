import EmptyState from "./EmptyState";

// NOTE: requires a time-series of scores per session (e.g. monthly
// averages), which the backend doesn't expose yet. Swap EmptyState for
// the bar chart once a history/trend endpoint exists.
export default function ScoreTrendCard() {
  return (
    <div className="lg:col-span-2 bg-surface-container-lowest p-stack-md rounded-xl border border-outline-variant shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-headline-md font-headline-md text-primary">Score Trend</h3>
        <select
          disabled
          className="bg-surface-container-low border-none rounded-lg text-label-md px-3 py-1 text-on-surface-variant opacity-60"
        >
          <option>Last 6 Months</option>
        </select>
      </div>

      <div className="chart-container flex items-center justify-center">
        <EmptyState
          icon="show_chart"
          message="Score history isn't available yet. Complete more interviews to see your trend."
        />
      </div>
    </div>
  );
}
