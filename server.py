from fastapi import FastAPI

app = FastAPI(
    docs_url="/"
)

@app.get("/")
async def read_root():
    return {"message": "Welcome to PaidKaro Fastapi backend"}
