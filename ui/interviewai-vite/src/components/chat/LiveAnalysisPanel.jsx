import ScoreBar from "./ScoreBar";

export default function LiveAnalysisPanel({ analysis }) {
  const hasAnalysis = Boolean(analysis);

  return (
    <div>
      <h4 className="text-label-md text-on-surface-variant uppercase tracking-widest mb-4">
        Real-time Analysis
      </h4>

      <div className="bg-surface-container rounded-2xl p-4 mb-4 space-y-stack-sm">
        <ScoreBar label="Technical Score" value={analysis?.technical_score} />
        <ScoreBar label="Clarity Score" value={analysis?.clarity_score} />
      </div>

      <div className="space-y-4">
        <span className="text-caption font-bold text-on-surface-variant">
          Latest Answer Feedback
        </span>

        {!hasAnalysis && (
          <p className="text-caption text-on-surface-variant">
            Feedback on your answers will appear here once you respond.
          </p>
        )}

        {hasAnalysis && analysis.strengths?.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-secondary">
              <span
                className="material-symbols-outlined text-[16px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <span className="text-caption font-bold">Strengths</span>
            </div>
            <ul className="space-y-1.5">
              {analysis.strengths.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-caption text-on-surface">
                  <span className="w-1 h-1 rounded-full bg-secondary mt-1.5 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}

        {hasAnalysis && analysis.weaknesses?.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-error">
              <span
                className="material-symbols-outlined text-[16px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                error
              </span>
              <span className="text-caption font-bold">To Improve</span>
            </div>
            <ul className="space-y-1.5">
              {analysis.weaknesses.map((w, i) => (
                <li key={i} className="flex items-start gap-2 text-caption text-on-surface">
                  <span className="w-1 h-1 rounded-full bg-error mt-1.5 shrink-0" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
