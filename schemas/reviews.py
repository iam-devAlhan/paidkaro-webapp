from database import Base
from sqlalchemy import Column, Integer, String, ForeignKey, Text, DateTime, func
from sqlalchemy.orm import relationship

class Reviews(Base):
    __tablename__ = "reviews"
    rev_id = Column(Integer, primary_key=True)
    client_id = Column(Integer, ForeignKey("users.u_id"))
    review_text = Column(Text)
    rating = Column(Integer)
    created_at = Column(DateTime, default=func.now())

    client_remarks = relationship("User", back_populates="user_reviews")