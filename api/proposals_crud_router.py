from fastapi import APIRouter, HTTPException, status
from typing import List
from database import get_db
from .auth_router import db_dependency

from models.proposals import ProposalByUser, ProjectProposals, CreateProposal
from schemas.proposals import Proposals
from schemas.user import User
from schemas.projects import Projects

router = APIRouter(
    prefix="/api/v1/proposals",
    tags=["User Proposals to Client CRUD", "Proposals CRUD"]
)

@router.post("/create_proposals/{project_id}")
async def create_proposal(db: db_dependency, project_id: int, firebase_id: str, data: CreateProposal):
    try:
        # For now I am just sending raw firebase id, I will then convert it into session to verify using firebase sdk in python
        get_user_id = db.query(User.u_id).filter(User.firebase_uid==firebase_id).scalar()
        if not get_user_id:
            raise HTTPException(status_code=400, detail="User not authenticated or not available!")
        new_proposal = Proposals(freelancer_id=get_user_id, project_id=project_id, **data.model_dump())
        if not new_proposal:
            raise HTTPException(status_code=400, detail="Failed to add proposal!")
        db.add(new_proposal)
        db.commit()
        db.refresh(new_proposal)

        return {"message": "Proposal sent successfully to client!"}
    except:
        raise HTTPException(status_code=500, detail="Failed to add proposal!")

@router.get("/get_proposals/{project_id}", response_model=ProjectProposals)
async def get_proposals_by_project(db: db_dependency, project_id: int):
    try:
        proposals = db.query(Proposals).filter(Proposals.project_id == project_id).all()
        if not proposals:
            raise HTTPException(status_code=400, detail="Proposals of this project doesn't exist!")
        
        return ProjectProposals(
            project_id=project_id,
            proposals=proposals
        )
    
    except:
        raise HTTPException(status_code=400, detail="Failed to get proposals!")

@router.put("/update_proposal/{freelancer_id}")
async def update_your_proposal_on_project(db: db_dependency, freelancer_id: int):
    pass

@router.delete("/delete_proposal/{freelancer_id}")
async def delete_your_proposal(db: db_dependency, freelancer_id: int):
    pass