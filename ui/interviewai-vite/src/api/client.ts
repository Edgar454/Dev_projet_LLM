import axios from "axios";

import type { AnalysisResponse } from "../types/analysis";
import type { HistoryResponse } from "../types/history";
import type { QuestionResponse, AnswerRequest } from "../types/question";
import type { SessionCreate, Session, EndSessionResponse, ScheduleSessionCreate } from "../types/session";
import type { ResultsResponse } from "../types/resultResponse";

// -----------------------------
// Axios instance
// -----------------------------

const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

// -----------------------------
// SESSION
// -----------------------------

export const createSession = async (payload: SessionCreate): Promise<Session> => {
  const res = await api.post("/session", payload);
  return res.data;
};

// NOTE: endpoint path is a guess ("/session/schedule") since the backend
// route doesn't exist yet. Update this path once it's implemented.
export const scheduleSession = async (payload: ScheduleSessionCreate): Promise<Session> => {
  const res = await api.post("/session/schedule", payload);
  return res.data;
};

export const getSession = async (sessionId: string): Promise<Session> => {
  const res = await api.get(`/session/${sessionId}`);
  return res.data;
};

// -----------------------------
// INTERVIEW FLOW
// -----------------------------

export const getNextQuestion = async (sessionId: string): Promise<QuestionResponse> => {
  const res = await api.get(`/session/${sessionId}/next-question`);
  return res.data;
};

export const submitAnswer = async (
  sessionId: string,
  answer: string
): Promise<AnalysisResponse> => {
  const payload: AnswerRequest = {
    session_id: sessionId,
    answer,
  };

  const res = await api.post(`/session/${sessionId}/answer`, payload);

  return res.data;
};

// -----------------------------
// HISTORY
// -----------------------------

export const getHistory = async (sessionId: string): Promise<HistoryResponse> => {
  const res = await api.get(`/session/${sessionId}/history`);
  return res.data;
};

// -----------------------------
// RESULTS
// -----------------------------

export const getResults = async (sessionId: string): Promise<ResultsResponse> => {
  const res = await api.get(`/session/${sessionId}/results`);
  return res.data;
};

// -----------------------------
// END SESSION
// -----------------------------

export const endSession = async (sessionId: string): Promise<EndSessionResponse> => {
  const res = await api.post(`/session/${sessionId}/end`);
  return res.data;
};

export default api;
