from database import Base
from sqlalchemy import Column, Integer, String, ForeignKey, Text
from sqlalchemy.orm import relationship

class Reviews(Base):
    __tablename__ = "reviews"
    rev_id = Column(Integer, primary_key=True)
    client_id = Column(Integer, ForeignKey("users.u_id"))
    review_text = Column(Text)
    rating = Column(Integer)

    client_remarks = relationship("User", back_populates="user_reviews")