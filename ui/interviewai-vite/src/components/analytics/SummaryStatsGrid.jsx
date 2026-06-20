import StatSummaryCard from "./StatSummaryCard";

// NOTE: backend has no multi-session aggregate endpoint yet (no GET /sessions
// or stats route), so all values are placeholders ("—") rather than
// fabricated numbers. Wire each `value`/`hint` up once that data exists.
export default function SummaryStatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
      <StatSummaryCard label="Total Interviews" value={null} hint={null} />
      <StatSummaryCard label="Avg. Performance Score" value={null} hint={null} />
      <StatSummaryCard label="Questions Answered" value={null} hint={null} />
      <StatSummaryCard label="Skill Consistency" value={null} hint={null} />
    </div>
  );
}
