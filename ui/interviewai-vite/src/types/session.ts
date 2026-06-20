// -----------------------------
// SESSION
// -----------------------------

export type SessionCreate = {
  domain: string;
  interview_type: string;
};

// Payload for scheduling a future interview. `scheduled_at` is an ISO 8601
// datetime string (e.g. "2026-06-25T14:30:00"), matching what a Python
// backend would typically expect for a datetime field.
export type ScheduleSessionCreate = {
  domain: string;
  interview_type: string;
  scheduled_at: string;
};

export type Session = {
  id: string;
  domain: string;
  interview_type: string;
  difficulty: number;
  question_count: number;
  current_score: number;
  // "scheduled" is added on the frontend's expected contract for sessions
  // created via scheduleSession; adjust here if the backend names it
  // differently.
  status: "active" | "completed" | "scheduled";
  scheduled_at?: string | null;
};

export type EndSessionResponse = {
  status: "completed";
};
