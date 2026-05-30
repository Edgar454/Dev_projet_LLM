from fastapi import APIRouter , HTTPException

from api.schemas.interview import (
    SessionCreate,
    AnswerRequest
)

from api.services.interview_service import InterviewService

router = APIRouter()
service = InterviewService()


@router.post("/session")
def create_session(payload: SessionCreate):
    return service.create_session(
        payload.domain,
        payload.interview_type
    )

@router.get("/session/{session_id}")
def get_session(session_id: str):
    try:
        return service.get_session(session_id)
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))

@router.get("/session/{session_id}/next-question")
def next_question(session_id: str):

    return {
        "question": service.generate_question(session_id)
    }

@router.post("/session/{session_id}/answer")
def submit_answer(payload: AnswerRequest):

    # IMPORTANT: in real version, fetch last question from DB
    question = service.get_last_question(payload.session_id)

    result = service.process_answer(
        payload.session_id,
        payload.answer,
        question
    )

    return result




@router.get("/session/{session_id}/history")
def get_session_history(session_id: str):
    return service.get_history(session_id)

@router.get("/session/{session_id}/results")
def get_results(session_id: str):
    return service.generate_results(session_id)

@router.post("/session/{session_id}/end")
def end_session(session_id: str):
    return service.end_session(session_id)
