from backend.llm.chains import (
    question_chain,
    analysis_chain
)


question= question_chain.invoke(

{
"domain":"software engineering",
"interview_type":"technical",
"difficulty":2,
"weaknesses":[],
"history":[]
}

)

print(question)


analysis= analysis_chain.invoke(
{
"question":question,
"answer":"SQL indexes speed up search"
}
)

print(analysis)