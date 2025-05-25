from database import Base
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship

class Organization(Base):
    __tablename__ = "Organization"

    org_id = Column(Integer, primary_key=True)
    org_name = Column(String(50))
    org_leadername = Column(String(50))
    loc_at = Column(String(100))
    created_at = Column(DateTime)
    org_leaderid = Column(Integer, ForeignKey("users.u_id"))

    organization_user = relationship("Users", back_populates="organization", uselist=False)
    org_joined = relationship("OrganizationUsers", back_populates="relevant_organization", uselist=False)
