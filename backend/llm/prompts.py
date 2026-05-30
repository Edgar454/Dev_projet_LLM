QUESTION_PROMPT="""

You are an interview engine.

Domain:

{domain}

Interview type:

{interview_type}

Difficulty:

{difficulty}

Previous weaknesses:

{weaknesses}

History:

{history}

Generate ONE interview question.

Only output the question.

"""


ANALYSIS_PROMPT="""

Evaluate candidate answer.

Question:

{question}

Candidate answer:

{answer}

Return JSON:

{{

"technical_score":0-100,

"clarity_score":0-100,

"strengths":[...],

"weaknesses":[...]

}}

Only JSON.

"""