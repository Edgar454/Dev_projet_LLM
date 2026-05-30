from langchain_core.prompts import ChatPromptTemplate    

from langchain_core.output_parsers import (
    StrOutputParser,
    PydanticOutputParser

)

from .client import get_llm
from .prompts import *
from .schemas import *


llm=get_llm()


question_chain=(
    ChatPromptTemplate.from_template(
        QUESTION_PROMPT
    )
    | llm
    | StrOutputParser()

)


analysis_chain=(
    ChatPromptTemplate.from_template(
        ANALYSIS_PROMPT
    )
    | llm
    | PydanticOutputParser(
        pydantic_object=AnalysisOutput
    )
)