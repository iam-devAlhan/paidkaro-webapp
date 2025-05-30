from typing import Optional
from pydantic import BaseModel

class UserInfo(BaseModel):
    u_id: int
    firebase_id: str
    u_name: str
    
    class Config:
        from_attributes = True

class PostOutByUser(BaseModel):
    post_id: int
    post_title: str
    post_imgurl: str
    description: str
    budget: float
    currency: str
    user_id: int

    class Config:
        from_attributes = True


