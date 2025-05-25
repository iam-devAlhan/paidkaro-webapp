from database import Base
from sqlalchemy import Column, Integer, String, ForeignKey, Text, DateTime, Float, Enum
from sqlalchemy.orm import relationship

class Posts(Base):
    __tablename__ = "posts"

    post_id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.u_id"))
    post_title = Column(String(255))
    post_imgurl = Column(String(255))
    description = Column(Text)
    budget = Column(Float(decimal_return_scale=2))
    currency = Column(Enum("USD", "PKR", "INR", "EUR"))
    created_at = Column(DateTime)

    user_post = relationship("Users", back_populates="post")
