from database import Base
from sqlalchemy import Column, DateTime, Enum, Float, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

class Payment(Base):
    __tablename__ = "payments"

    payment_id = Column(Integer, primary_key=True)
    from_id = Column(Integer, ForeignKey("users.u_id"))
    to_id = Column(Integer, ForeignKey("users.u_id"))
    created_at = Column(DateTime)
    amount = Column(Float(decimal_return_scale=2))
    payment_channel = Column(String(255))
    currency = Column(Enum("USD", "PKR"))
    pay_status = Column(Enum("Paid","Not Paid"))
    proposal_id = Column(Integer, ForeignKey("proposals.proposals_id"))

    payment_sent = relationship("Users", foreign_keys=[from_id], back_populates="pay_sent")
    payment_received = relationship("Users", foreign_keys=[to_id], back_populates="pay_received")
    proposal_payment = relationship("Proposals", back_populates="proposal_pay")