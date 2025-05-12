from fastapi import APIRouter, HTTPException, Depends, status
from typing import Annotated
from sqlalchemy.orm import Session
from database import get_db
from firebase.firebase_config import auth as firebase_auth
from schemas.users_schema import UserCreate, UserVerification
from models.user import User


db_dependency = Annotated[Session, Depends(get_db)]
router = APIRouter(
    prefix="/api/v1",
    tags=["Authentication"]
)

@router.post("/auth/signup_token", status_code=status.HTTP_201_CREATED)
async def create_user_account(payload: UserCreate, db: db_dependency):
    try:
        decoded = firebase_auth.verify_id_token(payload.firebase_token)
        firebaseID = decoded["uid"]
        user_email = decoded.get("email")
        user_name = decoded.get("name")

        user = db.query(User).filter(User.firebase_uid == firebaseID).first()
        if not user:
            new_user = User(u_name=user_name, u_email=user_email, firebase_uid=firebaseID, profile_picurl=payload.profileURL)
            db.add(new_user)
            db.commit()
            db.refresh(new_user)
            return {"message":"User Created Successfully"}
    except:
        raise HTTPException(status_code=400, detail="Invalid Token")
    
@router.post("/auth/login_token", status_code=status.HTTP_200_OK)
async def verify_login_by_token_validation(payload: UserVerification, db: db_dependency):
    try:
        decoded = firebase_auth.verify_id_token(payload.firebase_token)
        firebaseID = decoded["uid"]
        user_email = decoded.get("email")
        user_name = decoded.get("name")
        user = db.query(User).filter(User.firebase_uid == firebaseID).first()
        if not user:
            return {"message":"User not found!"}
        
        return {"message": "Login Successfull", "user" : [{
            "name" : user.u_name,
            "email" : user.u_email,
            "profileURL" : user.profile_picurl
        }]}
    except:
        raise HTTPException(status_code=401, detail="Invalid Token")