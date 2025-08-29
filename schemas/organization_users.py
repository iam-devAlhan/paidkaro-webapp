from database import Base
from sqlalchemy import Column, DateTime, Enum, Integer, String, ForeignKey, func
from sqlalchemy.orm import relationship
class OrganizationUsers(Base):
    __tablename__ = "organization_users"

    org_user_id = Column(Integer, primary_key=True)
    org_name = Column(String(50))
    user_id = Column(Integer, ForeignKey("users.u_id"))
    org_id = Column(Integer, ForeignKey("Organization.org_id"))
    status = Column(Enum("Joined", "Fired", "Not Joined", name="organizations_status_enum"))
    joined_at = Column(DateTime, default=func.now())

    org_joined_user = relationship("User", back_populates="org_joined_user")
    relevant_organization = relationship("Organization", back_populates="org_joined")
