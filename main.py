from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import uvicorn

import public_routes


app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

app.include_router(public_routes.router)

if __name__ == "__main__":
    uvicorn.run("main:app", reload=True)