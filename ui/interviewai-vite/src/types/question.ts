// -----------------------------
// QUESTIONS / ANSWERS
// -----------------------------

export type QuestionResponse = {
  question: string;
  difficulty?: number;
};

export type AnswerRequest = {
  session_id: string;
  answer: string;
};
