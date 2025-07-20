from pydantic import BaseModel
# Pydantic models used for receiving firebase auth token for validation
# Note this is a firebase JWT Token

class UserVerification(BaseModel):
    firebase_token : str
    
class UserInfo(BaseModel):
    firebase_uid: str
    
class UserDetails(UserInfo):
    u_id: int
    u_name: str
    profile_picurl: str

    class Config:
        from_attributes = True