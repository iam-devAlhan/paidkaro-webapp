from fastapi import FastAPI

app = FastAPI(
    docs_url="/",title="PaidKaro Application", description="Created and Developed using FastAPI"
)

@app.get("/")
async def read_root():
    return {"message": "Hello World"}
