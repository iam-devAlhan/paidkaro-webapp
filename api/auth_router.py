from fastapi import APIRouter, HTTPException, Depends, status, UploadFile, Form, Cookie
from fastapi.responses import JSONResponse
from typing import Annotated
from sqlalchemy.orm import Session
from database import get_db
from firebase.firebase_config import auth as firebase_auth
from models.users import UserVerification, UserDetails
from cloudinary_config.cloudinary_config import cloudinary
from schemas.user import User
import traceback
from cloudinary.uploader import upload as cloudinary_uploader
from io import BytesIO


db_dependency = Annotated[Session, Depends(get_db)]
router = APIRouter(
    prefix="/api/v1",
    tags=["Add user using Firebase Auth Token"]
)

@router.post("/auth/signup_user", status_code=status.HTTP_201_CREATED)
async def create_user_account(db: db_dependency, user_name:str = Form(...), firebase_token: str = Form(...), profile_pic: UploadFile = Form(...)):
    try:
        decoded = firebase_auth.verify_id_token(firebase_token)
        firebaseID = decoded["uid"]
        user_email = decoded.get("email")

        contents = await profile_pic.read()
        upload_result = cloudinary_uploader(BytesIO(contents), folder="paidkaro-profile")
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
        
        response = JSONResponse({"message": "Login Success!", "user": {
            "name" : user.u_name,
            "email": user.u_email,
        }})

        response.set_cookie(
            key="session",
            value=firebaseID,
            secure=False,
            httponly=True,
            samesite="lax"
        )
        return response
    except:
        raise HTTPException(status_code=401, detail="Invalid Token")
    
@router.get("/auth/photo_url/", status_code=status.HTTP_200_OK, response_model=UserDetails)
async def get_user_profile_picurl(db: db_dependency, session: Annotated[str | None, Cookie()] = None):
    try:
        if not session:
            raise HTTPException(status_code=404, detail="User not authenticated!")
        
        user = db.query(User).filter(User.firebase_uid == session).first()
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        return UserDetails(u_id=user.u_id, u_name=user.u_name, profile_picurl=user.profile_picurl)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    
