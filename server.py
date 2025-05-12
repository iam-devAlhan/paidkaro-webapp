from fastapi import FastAPI
from routes.auth_router import router as auth_router
from database import engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="PaidKaro Application", description="Created and Developed using FastAPI"
)
app.include_router(auth_router)

@app.get("/")
async def read_root():
    return {"message": "Server is running on Port 8000"}
