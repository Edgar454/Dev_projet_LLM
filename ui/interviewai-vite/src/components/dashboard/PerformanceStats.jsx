import ScoreCard from "./ScoreCard";
import StatCard from "./StatCard";

export default function PerformanceStats() {
  return (
    <section className="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
      <ScoreCard />
      <StatCard />
    </section>
  );
}
