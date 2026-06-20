from fastapi import FastAPI
from api.routes import router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(router.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5175",  # React frontend
        "http://frontend:5173",
    ],
    allow_methods=["GET", "POST", "DELETE", "PUT", "PATCH" , "OPTIONS"],
    allow_headers=["*"],
)