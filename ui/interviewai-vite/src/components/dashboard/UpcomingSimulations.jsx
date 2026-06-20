import SimulationRow from "./SimulationRow";

export const DEFAULT_SIMULATIONS = [
  {
    month: "Oct",
    day: "14",
    title: "Senior UX Engineer Pitch",
    meta: "Tomorrow, 10:00 AM • 45 mins",
  },
  {
    month: "Oct",
    day: "17",
    title: "System Design Mock",
    meta: "Thu, 2:30 PM • 60 mins",
  },
  {
    month: "Oct",
    day: "20",
    title: "General HR Fit Interview",
    meta: "Sun, 11:15 AM • 30 mins",
  },
];

export default function UpcomingSimulations({
  simulations = DEFAULT_SIMULATIONS,
  onViewCalendar,
  className = "col-span-12 lg:col-span-7",
}) {
  return (
    <section
      className={`${className} bg-surface-container-lowest border border-outline-variant rounded-xl p-stack-md shadow-sm`}
    >
      <div className="flex items-center justify-between mb-stack-md">
        <h3 className="text-headline-md font-headline-md">Upcoming Simulations</h3>
        <button onClick={onViewCalendar} className="text-secondary text-label-md hover:underline">
          View Calendar
        </button>
      </div>
      <div className="space-y-4">
        {simulations.map((sim, i) => (
          <SimulationRow key={sim.sessionId ?? `${sim.title}-${i}`} {...sim} />
        ))}
      </div>
    </section>
  );
}
