import { useNavigate } from "react-router-dom";
import PageHeading from "../components/dashboard/PageHeading";
import SummaryStatsGrid from "../components/analytics/SummaryStatsGrid";
import ScoreTrendCard from "../components/analytics/ScoreTrendCard";
import SkillBalanceCard from "../components/analytics/SkillBalanceCard";
import InterviewHistoryTable from "../components/analytics/InterviewHistoryTable";
import MissedKeywordsCard from "../components/analytics/MissedKeywordsCard";
import GrowthBanner from "../components/analytics/GrowthBanner";

export default function AnalyticsPage() {
  const navigate = useNavigate();

  return (
    <>
      <PageHeading
        title="Performance Analytics"
        subtitle="Track how your performance evolves across every session."
      />

      <div className="space-y-stack-md">
        <SummaryStatsGrid />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          <ScoreTrendCard />
          <SkillBalanceCard />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-start">
          <InterviewHistoryTable />
          <MissedKeywordsCard />
        </div>

        <GrowthBanner onScheduleNext={() => navigate("/interviews")} />
      </div>
    </>
  );
}
