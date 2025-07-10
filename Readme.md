# 🫠 Emotion Reflection Tool

A simple full-stack web app where users can reflect on how they feel by submitting a short sentence (e.g., “I feel nervous about my interview”) and receive a mock emotion analysis (like "Anxious" with 94% confidence).

This project demonstrates frontend-backend integration using **React + TypeScript** and **FastAPI**, including basic API handling and user interaction.

---

## 📦 Tech Stack

### 🖥️ Frontend

* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Axios](https://axios-http.com/) (for API calls)

### 🧠 Backend

* [FastAPI](https://fastapi.tiangolo.com/)
* [Uvicorn](https://www.uvicorn.org/) (ASGI server)

---

## 📂 Project Structure

```
emotion-reflection-tool/
├── frontend/                # React + TypeScript frontend
│   ├── src/
│   │   ├── App.tsx         # main logic + emotion form & API call
│   │   └── api.ts          # emotion API abstraction
│   └── ...
│
└── backend/                 # FastAPI backend
    ├── main.py
    └── requirements.txt
```

---

## 🛠️ Setup Instructions

### ▶️ 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/emotion-reflection-tool.git
cd emotion-reflection-tool
```

---

### ▶️ 2. Backend Setup (FastAPI)

```bash
cd backend
python -m venv venv
venv\Scripts\activate         # For Windows
# source venv/bin/activate    # For Mac/Linux
pip install -r requirements.txt
uvicorn main:app --reload
```

* Backend will run at: `http://127.0.0.1:8000`
* API docs available at: `http://127.0.0.1:8000/docs`

---

### ▶️ 3. Frontend Setup (React + TypeScript)

```bash
cd ../frontend
npm install
npm start
```

* Frontend will run at: `http://localhost:3000`
* Make sure the backend is running before submitting the form.

---

## 🧪 Sample API Request

### POST `/analyze`

**Request:**

```json
{
  "text": "I feel nervous about my interview."
}
```

**Response:**

```json
{
  "emotion": "Anxious",
  "confidence": 0.94
}
```

---

## ✨ Features

* Clean and mobile-friendly UI
* Textarea input with loading feedback
* POSTs to FastAPI backend
* Displays emotion and confidence
* Handles API errors gracefully

---

## 🚀 Future Enhancements

* Replace mock logic with real NLP/ML model (e.g., Hugging Face)
* Add emotion color themes or charts
* Store user input history (localStorage or backend)
* Deploy backend (Render, Railway), frontend (Vercel, Netlify)

---

## 👩‍💻 Author

**Komal Sinha**
[GitHub – @komalsinha1811](https://github.com/komalsinha1811)



