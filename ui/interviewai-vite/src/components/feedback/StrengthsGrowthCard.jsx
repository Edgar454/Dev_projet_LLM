// The API only returns strengths/weaknesses per-answer (AnalysisResponse),
// not a session-level summary. Until the backend exposes an aggregated
// list, this component takes flat arrays already merged by the caller
// (see FeedbackPage, which dedupes across submitAnswer history if present,
// or simply shows what's available).
export default function StrengthsGrowthCard({ strengths = [], weaknesses = [] }) {
  return (
    <div className="col-span-12 md:col-span-8 glass-card p-stack-md rounded-xl animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md h-full">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-secondary">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </span>
            <h4 className="text-headline-md font-headline-md">Key Strengths</h4>
          </div>
          {strengths.length === 0 ? (
            <p className="text-caption text-on-surface-variant">No strengths recorded yet.</p>
          ) : (
            <ul className="space-y-3">
              {strengths.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-body-md text-on-surface">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="space-y-4 border-l border-outline-variant/30 pl-gutter">
          <div className="flex items-center gap-2 text-error">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              error
            </span>
            <h4 className="text-headline-md font-headline-md">Areas for Growth</h4>
          </div>
          {weaknesses.length === 0 ? (
            <p className="text-caption text-on-surface-variant">No growth areas recorded yet.</p>
          ) : (
            <ul className="space-y-3">
              {weaknesses.map((w, i) => (
                <li key={i} className="flex items-start gap-3 text-body-md text-on-surface">
                  <span className="w-1.5 h-1.5 rounded-full bg-error mt-2.5 shrink-0" />
                  {w}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
