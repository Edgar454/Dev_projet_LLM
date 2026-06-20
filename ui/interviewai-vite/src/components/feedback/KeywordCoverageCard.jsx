// NOTE: ResultsResponse has no per-competency breakdown (no keyword
// coverage data from the backend yet). Rendering this with invented
// numbers would be misleading, so it's shown as an empty/coming-soon
// state instead of fake percentages. Wire this up once the API exposes
// a competencies/keywords field on /session/{id}/results.
export default function KeywordCoverageCard() {
  return (
    <div className="col-span-12 md:col-span-7 glass-card p-stack-md rounded-xl animate-fade-in">
      <div className="flex justify-between items-center mb-stack-md">
        <h4 className="text-headline-md font-headline-md">Competency Keyword Coverage</h4>
        <span className="text-caption text-on-surface-variant italic">Based on JD analysis</span>
      </div>

      <div className="flex flex-col items-center justify-center text-center py-stack-lg gap-2">
        <span className="material-symbols-outlined text-on-surface-variant text-[32px]">
          insights
        </span>
        <p className="text-caption text-on-surface-variant max-w-xs">
          Keyword coverage breakdown isn't available from the backend yet.
        </p>
      </div>
    </div>
  );
}
