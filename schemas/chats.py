from database import Base
from sqlalchemy import Column, DateTime, Enum, Integer, String, ForeignKey, Text, func
from sqlalchemy.orm import relationship

class Chats(Base):
    __tablename__ = "chats"

    chat_id = Column(Integer, primary_key=True)
    sender_id = Column(Integer, ForeignKey("users.u_id"))
    receiver_id = Column(Integer, ForeignKey("users.u_id"))
    message = Column(Text)
    message_type = Column(Enum("Image", "Text", "Video", "Voice", name="chat_type_enum"))
    created_at = Column(DateTime, default=func.now())

    sender = relationship("User", foreign_keys=[sender_id], back_populates="sender_user")
    receiver = relationship("User", foreign_keys=[receiver_id], back_populates="receiver_user")