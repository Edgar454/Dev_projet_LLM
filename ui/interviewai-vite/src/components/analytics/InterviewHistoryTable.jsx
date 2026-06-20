import EmptyState from "./EmptyState";

// NOTE: there's no GET /sessions (or similar list) endpoint yet, so this
// table can't be populated. Structure is kept so it's a drop-in once the
// backend exposes a session history list — just map rows into <tr>s below.
export default function InterviewHistoryTable() {
  return (
    <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden">
      <div className="px-stack-md py-4 border-b border-outline-variant flex justify-between items-center">
        <h3 className="text-headline-md font-headline-md text-primary">Interview History</h3>
        <button
          disabled
          className="text-on-surface-variant text-label-md font-label-md flex items-center gap-1 opacity-50 cursor-not-allowed"
        >
          Export CSV <span className="material-symbols-outlined text-sm">download</span>
        </button>
      </div>

      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left">
          <thead className="bg-surface text-on-surface-variant text-caption uppercase tracking-wider">
            <tr>
              <th className="px-stack-md py-4 font-semibold">Date</th>
              <th className="px-stack-md py-4 font-semibold">Position</th>
              <th className="px-stack-md py-4 font-semibold">Score</th>
              <th className="px-stack-md py-4 font-semibold">Duration</th>
              <th className="px-stack-md py-4 font-semibold text-right">Action</th>
            </tr>
          </thead>
        </table>
        <EmptyState
          icon="history"
          message="Your past interviews will show up here once session history is available."
        />
      </div>
    </div>
  );
}
