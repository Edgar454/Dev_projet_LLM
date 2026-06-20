// -----------------------------
// HISTORY
// -----------------------------

export type MessageRole = "question" | "answer";

export type Message = {
  id: number;
  role: MessageRole;
  content: string;
  question_id?: number | null;
  technical_score?: number | null;
  clarity_score?: number | null;
  created_at?: string | null;
};

export type HistoryResponse = {
  session_id: string;
  history: Message[];
};
