# 📚 DataHive — Locally Running LLM Powered LMS

**DataHive** is a centralized platform designed to efficiently manage student data within a college environment. It provides a secure system for faculty and staff to manage student information while allowing students to access their personal academic records.

The platform integrates **AI-powered insights using a locally running Large Language Model (LLM)** to provide intelligent responses and data insights.

---

# 🚀 Features

### 📊 Student Data Management

Centralized storage and management of:

* Academic performance
* Attendance records
* Internship details

### 🔐 Secure Access

* Role-based authentication
* Separate access levels for **faculty, staff, and students**

### 🤖 AI-Driven Insights

* Integration with **locally running LLM**
* Personalized responses and intelligent insights for academic data

### 🎨 Modern UI

* Clean and responsive interface
* Built using **React + Vite**

---

# 🛠 Tech Stack

### Frontend

* React.js
* Vite
* JavaScript / TypeScript
* Modern UI components

### Backend

* FastAPI
* Python
* REST APIs

### AI / LLM

* Ollama
* Llama 3 Model

---

# 📦 Prerequisites

Make sure the following are installed on your system:

* Node.js and npm
* Python **3.8 or higher**
* Virtual environment tool (`venv` or `virtualenv`)
* Ollama installed
* Python libraries listed in `requirements.txt`

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/adithyan9895/locally-running-llm-powered-lms-DataHive.git
cd locally-running-llm-powered-lms-DataHive
```

---

# 🎨 Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the frontend development server:

```bash
npm run dev
```

The frontend will start at:

```
http://localhost:5173
```

---

# ⚡ Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

---

### Create Virtual Environment

```bash
python -m venv venv
```

Activate virtual environment:

**Windows**

```bash
venv\Scripts\activate
```

**Linux / Mac**

```bash
source venv/bin/activate
```

---

### Install Dependencies

```bash
pip install -r requirements.txt
```

Install FastAPI and CORS support if needed:

```bash
pip install fastapi fastapi[all] fastapi-cors
```

---

### Install Ollama

Install Ollama from the official site:

https://ollama.com

---

### Pull Llama 3 Model

```bash
ollama pull llama3
```

---

### Run Backend Server

```bash
uvicorn main:app --reload --port 8000
```

Backend will start at:

```
http://localhost:8000
```

---

# 📂 Project Structure

```
DataHive
│
├── frontend/              # React + Vite frontend
│
├── backend/               # FastAPI backend
│   ├── main.py
│   ├── requirements.txt
│
├── data/                  # Additional files or datasets
│
└── README.md              # Project documentation
```

---

# ▶️ Usage

1. Start the **backend server**
2. Start the **frontend server**
3. Open the frontend URL in your browser
4. Interact with the system to manage student data and access AI insights

---

