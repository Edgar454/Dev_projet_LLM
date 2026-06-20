import EmptyState from "./EmptyState";

// NOTE: needs aggregated weaknesses/keywords across answers, which the
// backend doesn't expose at the session-list level yet (only per-answer
// AnalysisResponse.weaknesses during a live session).
export default function MissedKeywordsCard() {
  return (
    <div className="bg-surface-container-lowest p-stack-md rounded-xl border border-outline-variant shadow-sm h-full">
      <h3 className="text-headline-md font-headline-md text-primary mb-4">
        Most Missed Keywords
      </h3>
      <p className="text-caption text-on-surface-variant mb-6">
        Terms and concepts you frequently omit in your technical responses.
      </p>

      <EmptyState
        icon="key"
        message="Keyword insights will appear after a few completed interviews."
      />

      <div className="mt-8 pt-6 border-t border-outline-variant">
        <h4 className="text-label-md font-bold text-primary mb-3">AI Recommendation</h4>
        <div className="bg-surface-container-low p-3 rounded-lg border-l-4 border-outline-variant">
          <p className="text-caption text-on-surface-variant leading-relaxed">
            Recommendations will be generated once your interview history is available.
          </p>
        </div>
      </div>
    </div>
  );
}
