from fastapi import APIRouter, HTTPException, Depends, status, UploadFile, Form
from typing import Annotated
from sqlalchemy.orm import Session
from database import get_db
from firebase.firebase_config import auth as firebase_auth
from schemas.users_schema import UserVerification
from cloudinary_config.cloudinary_config import cloudinary
from models.user import User
import traceback
from cloudinary.uploader import upload as cloudinary_uploader
from io import BytesIO


db_dependency = Annotated[Session, Depends(get_db)]
router = APIRouter(
    prefix="/api/v1",
    tags=["Authentication using Firebase"]
)

@router.post("/auth/signup_user", status_code=status.HTTP_201_CREATED)
async def create_user_account(db: db_dependency, firebase_token: str = Form(...), profile_pic: UploadFile = Form(...)):
    try:
        decoded = firebase_auth.verify_id_token(firebase_token)
        firebaseID = decoded["uid"]
        user_email = decoded.get("email")
        user_name = decoded.get("name")

        contents = await profile_pic.read()
        upload_result = cloudinary_uploader(BytesIO(contents), folder="paidkaro_pics")
        profile_pic_url = upload_result.get("secure_url")
        user = db.query(User).filter(User.firebase_uid == firebaseID).first()
        if not user:
            new_user = User(u_name=user_name, u_email=user_email, firebase_uid=firebaseID, profile_picurl=profile_pic_url)
            db.add(new_user)
            db.commit()
            db.refresh(new_user)
            return {"message":"User Created Successfully"}
        else:
            raise HTTPException(status_code=400, detail="User already exists")
    except:
        traceback.print_exc()
        raise HTTPException(status_code=400, detail="Invalid Token or Backend Server Problem")
    
@router.post("/auth/login_token", status_code=status.HTTP_200_OK)
async def verify_login_by_token_validation(payload: UserVerification, db: db_dependency):
    try:
        decoded = firebase_auth.verify_id_token(payload.firebase_token)
        firebaseID = decoded["uid"]
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