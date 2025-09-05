from io import BytesIO
from fastapi import Form, status, APIRouter, HTTPException, UploadFile
from fastapi.responses import JSONResponse
from .auth_router import db_dependency
from typing import List
from sqlalchemy.orm import Session
from database import get_db
from cloudinary_config.cloudinary_config import cloudinary
from cloudinary.uploader import upload

from schemas.user import User
from schemas.projects import Projects
from models.projects import ProjectDetails

router = APIRouter(
    prefix="/api/v1/projects",
    tags=["Create Projects for freelancer","Client Projects"]
)

@router.get("/get_projects", response_model=List[ProjectDetails], status_code=status.HTTP_200_OK)
async def get_list_of_all_projects(db: db_dependency):
    try:
        projects = db.query(Projects).all()
        if not projects:
            raise HTTPException(status_code=404, detail="Projects not found!")
        return projects
    except:
        raise HTTPException(status_code=500, detail="Failed to get projects!")

@router.post("/post_project", status_code=status.HTTP_201_CREATED)
async def create_client_project(db: db_dependency, firebase_id: str = Form(...), project_name: str = Form(...), project_pic_url: UploadFile = Form(...), status: str = Form(...), description: str = Form(...)):
    try:
        get_relevant_user = db.query(User).filter(firebase_id == User.firebase_uid).first()

        if not get_relevant_user:
            raise HTTPException(status_code=404, detail="User not Found or is not authenticated!")
        
        file_content = await project_pic_url.read()
        result = upload(BytesIO(file_content), folder="paidkaro-projects")
        project_post = result.get("secure_url")

        new_project = Projects(user_id=get_relevant_user.u_id, project_name=project_name, project_pic_url=project_post, status=status, description=description)
        db.add(new_project)
        db.commit()
        db.refresh(new_project)

        return {"message" : "Created a Project Successfully!"}
    except:
        raise HTTPException(status_code=500, detail="Failed to add project in a server!")
