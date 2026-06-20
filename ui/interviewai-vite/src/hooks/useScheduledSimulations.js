import { useState } from "react";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function formatMeta(date) {
  const dayLabel = date.toLocaleDateString(undefined, { weekday: "short" });
  const timeLabel = date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  return `${dayLabel}, ${timeLabel}`;
}

/**
 * Turns a freshly-scheduled Session into a SimulationRow-shaped object and
 * keeps a local list of them, so newly scheduled interviews show up in
 * "Upcoming Simulations" immediately (optimistic update) without needing a
 * backend list endpoint yet.
 *
 * Usage: const { scheduledSimulations, addScheduledSimulation } = useScheduledSimulations();
 * <UpcomingSimulations simulations={[...scheduledSimulations, ...DEFAULT_SIMULATIONS]} />
 */
export default function useScheduledSimulations() {
  const [scheduledSimulations, setScheduledSimulations] = useState([]);

  const addScheduledSimulation = (session, { domain, interviewType, scheduledAt }) => {
    const date = new Date(scheduledAt);

    const item = {
      // Prefix to avoid colliding with default mock data's `key={title}`
      month: MONTHS[date.getMonth()] ?? "—",
      day: String(date.getDate()),
      title: `${domain} • ${interviewType}`,
      meta: `${formatMeta(date)} • Scheduled`,
      sessionId: session?.id,
    };

    setScheduledSimulations((prev) => [item, ...prev]);
  };

  return { scheduledSimulations, addScheduledSimulation };
}
