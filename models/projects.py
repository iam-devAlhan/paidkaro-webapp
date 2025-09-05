from pydantic import BaseModel

class ProjectByUser(BaseModel):
    user_id: int
    project_id: int

class ProjectDetails(ProjectByUser):
    project_name: str
    project_pic_url: str
    status: str
    description: str
    created_at: str

