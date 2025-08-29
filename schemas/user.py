from database import Base
from sqlalchemy import func, Column, Integer, String, Text, ForeignKey, DateTime
from sqlalchemy.orm import relationship

from schemas.chats import Chats
from schemas.payment import Payment
from schemas.organization import Organization

class User(Base):
    __tablename__ = "users"

    u_id = Column(Integer, primary_key=True)
    u_name = Column(String(50))
    u_email = Column(String(50), nullable=False, unique=True)
    firebase_uid = Column(String(255), unique=True, nullable=False)
    org_joinedid = Column(Integer, ForeignKey("Organization.org_id"))
    profile_picurl = Column(String(255))
    description = Column(Text)
    created_at = Column(DateTime, default=func.now())

    org_joined_user = relationship("OrganizationUsers",  back_populates="org_joined_user", uselist=False)
    organization = relationship("Organization", foreign_keys=[Organization.org_leaderid],back_populates="organization_user", uselist=False)
    user_reviews = relationship("Reviews", back_populates="client_remarks")
    freelancer_user = relationship("Proposals", back_populates="freelancer", uselist=False)
    project_created_by_user = relationship("Projects", back_populates="client")
    post = relationship("Posts", back_populates="user_post")
    user_jobs = relationship("Jobs", back_populates="jobs")
    
    sender_user = relationship("Chats", foreign_keys=[Chats.sender_id], back_populates="sender")
    receiver_user = relationship("Chats", foreign_keys=[Chats.receiver_id], back_populates="receiver")
    
    pay_sent = relationship("Payment", foreign_keys=[Payment.from_id], back_populates="payment_sent")
    pay_received = relationship("Payment", foreign_keys=[Payment.to_id] ,back_populates="payment_received")

