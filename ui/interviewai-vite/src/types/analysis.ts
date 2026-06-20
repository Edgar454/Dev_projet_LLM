// -----------------------------
// ANALYSIS
// -----------------------------

export type AnalysisResponse = {
  technical_score: number;
  clarity_score: number;
  strengths: string[];
  weaknesses: string[];
};
