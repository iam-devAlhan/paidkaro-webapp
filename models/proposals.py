from pydantic import BaseModel
from typing import List

class ProposalByUser(BaseModel):
    freelancer_id: str
    description: str
    bid_amount: float
    status: str
    created_at: str

    class Config:
        from_attributes = True

class ProjectProposals(BaseModel):
    project_id: int
    proposals: List[ProposalByUser]

    class Config:
        from_attributes = True