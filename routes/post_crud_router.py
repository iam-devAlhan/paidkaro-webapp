from typing import List
from .auth_router import db_dependency
from fastapi import APIRouter, HTTPException, status, UploadFile, Form
from database import get_db
from cloudinary_config.cloudinary_config import cloudinary
from cloudinary.uploader import upload as cloudinary_uploader
from io import BytesIO

from models.posts import Posts
from models.user import User
from schemas.post_schema import PostOutByUser

post_router = APIRouter(
    prefix="/api/v1",
    tags=["Posts"]
)

@post_router.post("/posts/create_posts", status_code=status.HTTP_201_CREATED)
async def create_posts(db: db_dependency, firebase_id:str = Form(...), title: str = Form(...), post_img: UploadFile = Form(...), description: str = Form(...), budget: float = Form(...), currency: str = Form(...)):
    try:
        contents = await post_img.read()
        upload_result = cloudinary_uploader(BytesIO(contents), folder="paidkaro-posts")
        post_img_url = upload_result.get("secure_url")

        get_userid = db.query(User).filter(User.firebase_uid == firebase_id).first()
        if not get_userid:
            raise HTTPException(status_code=404, detail="user not found")
    
        new_post = Posts(user_id=get_userid.u_id, post_title=title, post_imgurl=post_img_url, description=description, budget=budget, currency=currency)
        db.add(new_post)
        db.commit()
        db.refresh(new_post)
        print(new_post)
        return {"message": "Post created successfully"}

    except Exception as e:
        e.with_traceback()
        raise HTTPException(status_code=400, detail="Error creating new posts")
    
@post_router.get("/posts/get_user_posts/{user_id}", response_model=List[PostOutByUser], status_code=status.HTTP_200_OK)
async def get_user_posts(db: db_dependency, user_id: int):
    get_posts = db.query(Posts).filter(Posts.user_id == user_id).all()
    if not get_posts:
        raise HTTPException(status_code=404, detail="Post not found")
    return get_posts

@post_router.get("/posts/get_post_count/{user_id}",status_code=status.HTTP_200_OK)
async def get_no_of_posts_by_user(db: db_dependency, user_id: int):
    get_post_count = db.query(Posts).filter(Posts.user_id == user_id).count()
    if get_post_count == 0:
        raise HTTPException(status_code=404, detail="No posts were found")
    return get_post_count

@post_router.get("/posts/get_all_posts", status_code=status.HTTP_200_OK, response_model=List[PostOutByUser])
async def get_all_posts(db: db_dependency):
    get_posts = db.query(Posts).all()
    if not get_posts:
        raise HTTPException(status_code=404, detail="posts not found")
    return get_posts

        


