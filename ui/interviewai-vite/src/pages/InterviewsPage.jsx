import PageHeading from "../components/dashboard/PageHeading";
import InterviewSetupCard from "../components/dashboard/InterviewSetupCard";
import UpcomingSimulations, {
  DEFAULT_SIMULATIONS,
} from "../components/dashboard/UpcomingSimulations";
import useStartInterview from "../hooks/useStartInterview";
import useScheduledSimulations from "../hooks/useScheduledSimulations";

export default function InterviewsPage() {
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
        title="Interviews"
        subtitle="Set up a new simulation or check what's coming up."
      />

      <div className="bento-grid">
        <InterviewSetupCard
          onStart={handleStart}
          loading={starting}
          onSchedule={onSchedule}
          scheduling={scheduling}
        />
        <UpcomingSimulations
          className="col-span-12"
          simulations={[...scheduledSimulations, ...DEFAULT_SIMULATIONS]}
        />
      </div>

      {error && (
        <p className="mt-stack-md text-caption text-error font-bold">{error}</p>
      )}
    </>
  );
}
