from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend to call this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or use ["http://localhost:5173"] for stricter policy
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class EmotionRequest(BaseModel):
    text: str

class EmotionResponse(BaseModel):
    emotion: str
    confidence: float

@app.post("/analyze", response_model=EmotionResponse)
async def analyze_emotion(request: EmotionRequest):
    # Fake analysis logic
    fake_emotions = ["Happy", "Sad", "Excited", "Anxious", "Calm", "Angry"]
    import random
    emotion = random.choice(fake_emotions)
    confidence = round(random.uniform(0.7, 0.99), 2)
    return {"emotion": emotion, "confidence": confidence}
