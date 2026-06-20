import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createSession, scheduleSession } from "../api/client";

/**
 * Shared "start" and "schedule" interview flows. Used by both
 * DashboardPage and InterviewsPage so InterviewSetupCard behaves
 * identically wherever it's rendered.
 *
 * `handleSchedule` resolves with the created Session (or null on failure)
 * so the caller can optimistically add it to an "Upcoming Simulations"
 * list without waiting on a backend list endpoint.
 */
export default function useStartInterview() {
  const navigate = useNavigate();
  const [starting, setStarting] = useState(false);
  const [scheduling, setScheduling] = useState(false);
  const [error, setError] = useState(null);

  const handleStart = async ({ domain, interviewType }) => {
    setError(null);
    setStarting(true);
    try {
      const session = await createSession({
        domain,
        interview_type: interviewType,
      });
      navigate(`/interviews/chat/${session.id}`);
    } catch (err) {
      setError("Couldn't start the interview. Please try again.");
      console.error(err);
    } finally {
      setStarting(false);
    }
  };

  const handleSchedule = async ({ domain, interviewType, scheduledAt }) => {
    setError(null);
    setScheduling(true);
    try {
      // scheduledAt comes from <input type="datetime-local"> as
      // "YYYY-MM-DDTHH:mm" (no seconds, no timezone). Append seconds so
      // it's a complete ISO-like string a Python datetime.fromisoformat()
      // call can parse directly.
      const isoLocal = scheduledAt.length === 16 ? `${scheduledAt}:00` : scheduledAt;

      const session = await scheduleSession({
        domain,
        interview_type: interviewType,
        scheduled_at: isoLocal,
      });
      return session;
    } catch (err) {
      setError("Couldn't schedule the interview. Please try again.");
      console.error(err);
      return null;
    } finally {
      setScheduling(false);
    }
  };

  return { handleStart, starting, handleSchedule, scheduling, error };
}
