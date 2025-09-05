from sqlalchemy import Column, Enum, Numeric, String, Integer, ForeignKey, Text, Float, DateTime, func
from sqlalchemy.orm import relationship
from database import Base

class Proposals(Base):
    __tablename__ = "proposals"

    proposals_id = Column(Integer, primary_key=True)
    project_id = Column(Integer, ForeignKey("projects.project_id"))
    freelancer_id = Column(Integer, ForeignKey("users.u_id"))
    description = Column(Text)
    bid_amount = Column(Numeric(10, 2))
    status = Column(Enum("Accepted", "Not Accepted", "Pending", name="proposals_status"))
    created_at = Column(DateTime, default=func.now())

    freelancer = relationship("User", back_populates="freelancer_user", uselist=False)
    project_proposal = relationship("Projects", back_populates="project_proposals")
    proposal_pay = relationship("Payment", back_populates="proposal_payment")