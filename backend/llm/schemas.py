from pydantic import BaseModel


class AnalysisOutput(BaseModel):
    technical_score:int
    clarity_score:int
    strengths:list[str]
    weaknesses:list[str]