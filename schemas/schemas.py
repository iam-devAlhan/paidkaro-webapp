from pydantic import BaseModel

# Here the pydantic models to retrieve SQL Model Values, If the model / table is user table then the model will consist the necessary attrbutes
# required for POST / GET REQUESTS Endpoints, Let's say an example

class UserBaseModel(BaseModel):
    # The attributes here you want
    class Config:
        orm_mode = True

    
