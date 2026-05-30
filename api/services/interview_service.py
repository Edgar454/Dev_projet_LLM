from backend.llm.chains import question_chain, analysis_chain
from api.db.session import SessionLocal
from api.db.models import Session, Message


class InterviewService:

    # -------------------------
    # SESSION
    # -------------------------

    def create_session(self, domain, interview_type):
        db = SessionLocal()
        try:

            session = Session(
                domain=domain,
                interview_type=interview_type
            )

            db.add(session)
            db.commit()
            db.refresh(session)

            return session

        finally:
            db.close()


    def get_session(self, session_id):

        db = SessionLocal()
        try:

            return db.query(Session).filter(
                Session.id == session_id
            ).first()

        finally:
            db.close()


    def _get_session(self, db, session_id):

        session = db.query(Session).filter(
            Session.id == session_id
        ).first()

        if not session:
            raise ValueError("Session not found")

        return session


    # -------------------------
    # QUESTION GENERATION
    # -------------------------

    def generate_question(self, session_id):

        db = SessionLocal()

        try:

            session = self._get_session(db, session_id)

            question = question_chain.invoke({
                "domain": session.domain,
                "interview_type": session.interview_type,
                "difficulty": session.difficulty,
                "weaknesses": [],
                "history": []
            })


            question_msg = Message(
                session_id=session_id,
                role="question",
                content=question
            )

            db.add(question_msg)
            db.commit()

            return question

        finally:
            db.close()


    # -------------------------
    # ANSWER PROCESSING
    # -------------------------

    def process_answer(self, session_id, answer, question):

        db = SessionLocal()

        try:

            session = self._get_session(db, session_id)

            analysis = analysis_chain.invoke({
                "question": question,
                "answer": answer
            })

            # 1. store question
            question_msg = Message(
                session_id=session_id,
                role="question",
                content=question
            )

            db.add(question_msg)
            db.flush()  # get question ID

            # 2. store answer linked to question
            db.add(Message(
                session_id=session_id,
                role="answer",
                question_id=question_msg.id,
                content=answer,
                technical_score=analysis.technical_score,
                clarity_score=analysis.clarity_score
            ))

            # 3. update session state
            session.question_count += 1
            session.current_score = analysis.technical_score

            if analysis.technical_score > 80:
                session.difficulty += 1

            elif analysis.technical_score < 40:
                session.difficulty = max(1, session.difficulty - 1)

            db.commit()

            return analysis

        except Exception as e:
            db.rollback()
            raise e

        finally:
            db.close()


    # -------------------------
    # HISTORY
    # -------------------------

    def get_history(self, session_id: str):

        db = SessionLocal()

        try:

            messages = db.query(Message).filter(
                Message.session_id == session_id
            ).order_by(Message.id.asc()).all()

            history = []

            for m in messages:

                history.append({
                    "id": m.id,
                    "role": m.role,
                    "content": m.content,
                    "question_id": m.question_id,
                    "technical_score": m.technical_score,
                    "clarity_score": m.clarity_score,
                    "created_at": m.created_at.isoformat() if m.created_at else None
                })

            return {
                "session_id": session_id,
                "history": history
            }

        finally:
            db.close()


    # -------------------------
    # LAST QUESTION SAFETY
    # -------------------------

    def get_last_question(self, session_id):

        db = SessionLocal()

        try:

            question = db.query(Message).filter(
                Message.session_id == session_id,
                Message.role == "question"
            ).order_by(Message.id.desc()).first()

            if not question:
                raise ValueError("No question found for this session")

            answer = db.query(Message).filter(
                Message.question_id == question.id,
                Message.role == "answer"
            ).first()

            if answer:
                raise ValueError("Last question already answered")

            return question.content

        finally:
            db.close()


    # -------------------------
    # RESULTS
    # -------------------------

    def generate_results(self, session_id):

        db = SessionLocal()

        try:

            session = self._get_session(db, session_id)

            messages = db.query(Message).filter(
                Message.session_id == session_id
            ).all()

            scores = [
                m.technical_score
                for m in messages
                if m.technical_score is not None
            ]

            avg_score = sum(scores) / len(scores) if scores else 0

            return {
                "session_id": str(session_id),
                "domain": session.domain,
                "interview_type": session.interview_type,
                "average_score": avg_score,
                "questions_count": session.question_count,
                "final_difficulty": session.difficulty
            }

        finally:
            db.close()


    # -------------------------
    # END SESSION
    # -------------------------

    def end_session(self, session_id):

        db = SessionLocal()

        try:

            session = self._get_session(db, session_id)

            session.status = "completed"

            db.commit()

            return {
                "status": "completed"
            }

        finally:
            db.close()