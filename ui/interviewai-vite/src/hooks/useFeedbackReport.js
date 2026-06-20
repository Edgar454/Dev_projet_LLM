import { useEffect, useState } from "react";
import { getResults, getHistory } from "../api/client";

/**
 * Loads the data needed for the post-interview feedback report:
 * - results: ResultsResponse — average_score is computed server-side
 *   and used directly as the "Global Score" ring value.
 * - history: full Message[] transcript (shown in the transcript panel).
 */
export default function useFeedbackReport(sessionId) {
  const [results, setResults] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!sessionId) return;

    let cancelled = false;
    setLoading(true);
    setError(null);

    Promise.all([getResults(sessionId), getHistory(sessionId)])
      .then(([resultsData, historyData]) => {
        if (cancelled) return;
        setResults(resultsData);
        setHistory(historyData.history || []);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error(err);
        setError("Couldn't load the feedback report.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [sessionId]);

  const globalScore = results ? Math.round(results.average_score) : 0;

  return {
    results,
    history,
    globalScore,
    loading,
    error,
  };
}
