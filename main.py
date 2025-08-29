from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.auth_router import router as auth_router
from routes.post_crud_router import post_router
from database import engine, Base
from schemas import *

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="PaidKaro Application", description="Created and Developed using FastAPI"
)
app.include_router(auth_router)
app.include_router(post_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"message": "Server is running on Port 8000"}
