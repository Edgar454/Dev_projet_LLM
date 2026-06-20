import PageHeading from "../components/dashboard/PageHeading";
import InterviewSetupCard from "../components/dashboard/InterviewSetupCard";
import PerformanceStats from "../components/dashboard/PerformanceStats";
import UpcomingSimulations, {
  DEFAULT_SIMULATIONS,
} from "../components/dashboard/UpcomingSimulations";
import RecommendationCard from "../components/dashboard/RecommendationCard";
import DashboardFooter from "../components/dashboard/DashboardFooter";
import useStartInterview from "../hooks/useStartInterview";
import useScheduledSimulations from "../hooks/useScheduledSimulations";

export default function DashboardPage() {
  const { handleStart, starting, handleSchedule, scheduling, error } = useStartInterview();
  const { scheduledSimulations, addScheduledSimulation } = useScheduledSimulations();

  const onSchedule = async (payload) => {
    const session = await handleSchedule(payload);
    if (session) {
      addScheduledSimulation(session, payload);
    }
  };

  return (
    <>
      <PageHeading
        title="Welcome back, Alex."
        subtitle="Your interview readiness score is up by 12% this week."
      />

      <div className="bento-grid">
        <InterviewSetupCard
          onStart={handleStart}
          loading={starting}
          onSchedule={onSchedule}
          scheduling={scheduling}
        />
        <PerformanceStats />
        <UpcomingSimulations simulations={[...scheduledSimulations, ...DEFAULT_SIMULATIONS]} />
        <RecommendationCard />
      </div>

      {error && (
        <p className="mt-stack-md text-caption text-error font-bold">{error}</p>
      )}

      <DashboardFooter />
    </>
  );
}
