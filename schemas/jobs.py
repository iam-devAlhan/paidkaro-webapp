from database import Base
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Text, func
from sqlalchemy.orm import relationship

class Jobs(Base):
    __tablename__ = "jobs"

    job_id = Column(Integer, primary_key=True)
    job_title = Column(String(255))
    user_id = Column(Integer, ForeignKey("users.u_id"))
    job_description = Column(Text)
    job_type = Column(String(255))
    created_at = Column(DateTime, default=func.now())

    jobs = relationship("User", back_populates="user_jobs")