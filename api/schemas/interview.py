from pydantic import BaseModel
from typing import List, Optional


class SessionCreate(BaseModel):
    domain: str
    interview_type: str


class AnswerRequest(BaseModel):
    session_id: str
    answer: str


class QuestionResponse(BaseModel):
    question: str
    difficulty: int


class AnalysisResponse(BaseModel):
    technical_score: int
    clarity_score: int
    strengths: List[str]
    weaknesses: List[str]