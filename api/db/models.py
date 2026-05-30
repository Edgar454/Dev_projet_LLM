from sqlalchemy import Column, String, Integer, Float, Text, ForeignKey, TIMESTAMP
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
import uuid

from api.db.session import Base


class Session(Base):
    __tablename__ = "sessions"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    domain = Column(String, nullable=False)
    interview_type = Column(String, nullable=False)
    difficulty = Column(Integer, default=1)
    question_count = Column(Integer, default=0)
    current_score = Column(Float, default=0)
    created_at = Column(TIMESTAMP, server_default=func.now())
    updated_at = Column(TIMESTAMP, server_default=func.now(), onupdate=func.now())


class Message(Base):
    __tablename__ = "messages"
    id = Column(Integer, primary_key=True)
    session_id = Column(UUID(as_uuid=True), ForeignKey("sessions.id"))
    role = Column(String)  # question / answer
    question_id = Column(Integer, nullable=True)
    content = Column(Text)
    technical_score = Column(Integer, nullable=True)
    clarity_score = Column(Integer, nullable=True)
    created_at = Column(TIMESTAMP, server_default=func.now())