import { useCallback, useEffect, useRef, useState } from "react";
import { getNextQuestion, submitAnswer, endSession, getSession } from "../api/client";

/**
 * Drives a single interview chat session against the backend.
 *
 * Responsibilities:
 * - Fetches the first question on mount
 * - Appends question/answer messages to a local transcript for rendering
 * - Submits answers and exposes the latest live AnalysisResponse
 * - Tracks question count for the progress indicator
 * - Ends the session and reports completion so the page can redirect
 *
 * NOTE: the backend doesn't return a total question count, so progress
 * is shown as "Question N" (count-up) rather than "N of 10".
 */
export default function useInterviewSession(sessionId) {
  const [session, setSession] = useState(null);
  const [messages, setMessages] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [latestAnalysis, setLatestAnalysis] = useState(null);

  const [loadingQuestion, setLoadingQuestion] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [ending, setEnding] = useState(false);
  const [error, setError] = useState(null);

  const messageId = useRef(0);
  const nextMessageId = () => {
    messageId.current += 1;
    return messageId.current;
  };

  const fetchNextQuestion = useCallback(async () => {
    if (!sessionId) return;
    setLoadingQuestion(true);
    setError(null);
    try {
      const q = await getNextQuestion(sessionId);
      setCurrentQuestion(q.question);
      setQuestionNumber((n) => n + 1);
      setMessages((prev) => [
        ...prev,
        {
          id: nextMessageId(),
          role: "ai",
          content: q.question,
          timestamp: new Date(),
        },
      ]);
    } catch (err) {
      setError("Couldn't load the next question.");
      console.error(err);
    } finally {
      setLoadingQuestion(false);
    }
  }, [sessionId]);

  // Load the first question as soon as we have a session id
  useEffect(() => {
    if (sessionId) {
      getSession(sessionId).then(setSession).catch((err) => console.error(err));
      fetchNextQuestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  const sendAnswer = useCallback(
    async (answerText) => {
      if (!sessionId || !answerText.trim()) return;

      setMessages((prev) => [
        ...prev,
        {
          id: nextMessageId(),
          role: "user",
          content: answerText,
          timestamp: new Date(),
        },
      ]);

      setSubmitting(true);
      setError(null);
      try {
        const analysis = await submitAnswer(sessionId, answerText);
        setLatestAnalysis(analysis);
        // Move on to the next question automatically
        await fetchNextQuestion();
      } catch (err) {
        setError("Couldn't submit your answer. Please try again.");
        console.error(err);
      } finally {
        setSubmitting(false);
      }
    },
    [sessionId, fetchNextQuestion]
  );

  const finishInterview = useCallback(async () => {
    if (!sessionId) return null;
    setEnding(true);
    setError(null);
    try {
      const result = await endSession(sessionId);
      return result;
    } catch (err) {
      setError("Couldn't end the interview. Please try again.");
      console.error(err);
      return null;
    } finally {
      setEnding(false);
    }
  }, [sessionId]);

  return {
    session,
    messages,
    currentQuestion,
    questionNumber,
    latestAnalysis,
    loadingQuestion,
    submitting,
    ending,
    error,
    sendAnswer,
    finishInterview,
  };
}
