from database import Base
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

class User(Base):
    __tablename__ = "Users"

    u_id = Column(Integer, primary_key=True)
    u_name = Column(String(50))
    u_email = Column(String(50), nullable=False, unique=True)
    firebase_uid = Column(String(255), unique=True, nullable=False)
    org_joinedID = Column(Integer)
    profile_picurl = Column(String(255))
    description = Column(String(500))

    


