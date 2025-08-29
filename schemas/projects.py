from database import Base
from sqlalchemy import Column, Enum, Integer, String, ForeignKey, Text, DateTime, func
from sqlalchemy.orm import relationship

class Projects(Base):
    __tablename__ = "projects"

    project_id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.u_id"))
    project_name = Column(String(255))
    project_pic_url = Column(String(255))
    status = Column(Enum("Active", "Completed", "Closed", name="projects_status"))
    description = Column(Text)
    created_at = Column(DateTime, default=func.now())

    client = relationship("User", back_populates="project_created_by_user")
    project_proposals = relationship("Proposals", back_populates="project_proposal")