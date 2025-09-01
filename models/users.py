from pydantic import BaseModel
# Pydantic models used for receiving firebase auth token for validation
# Note this is a firebase JWT Token

class UserVerification(BaseModel):
    firebase_token : str

class UserDetails(BaseModel):
    u_id: int
    u_name: str
    profile_picurl: str

    class Config:
        from_attributes = True