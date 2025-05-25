from database import Base
from sqlalchemy import Column, DateTime, Enum, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime, UTC
class OrganizationUsers(Base):
    __tablename__ = "organization_users"

    org_user_id = Column(Integer, primary_key=True)
    org_name = Column(String(50))
    user_id = Column(Integer, ForeignKey("users.u_id"))
    org_id = Column(Integer, ForeignKey("Organization.org_id"))
    status = Column(Enum("Joined", "Fired", "Not Joined"))
    joined_at = Column(DateTime(timezone=True))

    org_joined_user = relationship("Users", back_populates="org_joined_user", uselist=False)
    relevant_organization = relationship("Organization", back_populates="org_joined", uselist=False)
