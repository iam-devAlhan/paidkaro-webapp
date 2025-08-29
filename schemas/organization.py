from database import Base
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, func
from sqlalchemy.orm import relationship

class Organization(Base):
    __tablename__ = "Organization"

    org_id = Column(Integer, primary_key=True)
    org_name = Column(String(50))
    org_leadername = Column(String(50))
    location_at = Column(String(100))
    created_at = Column(DateTime, default=func.now())
    org_leaderid = Column(Integer, ForeignKey("users.u_id"))

    organization_user = relationship("User",foreign_keys=[org_leaderid], back_populates="organization")
    org_joined = relationship("OrganizationUsers", back_populates="relevant_organization")
