<p align="center">
  <img src="frontend/src/assets/logo.png" alt="Digit Identifier Logo" style="width:100%; max-width:300px;">
</p>

<h1 align="center">Handwritten Digit Identifier</h1>

A smart, AI‑powered web application that identifies handwritten digits (0–9) from uploaded images using Google Gemini.  
This project includes a polished responsive UI, secure authentication, and a serverless backend deployed on Vercel.

---

## ✨ Features

- 🔢 **AI‑powered digit recognition** using Google Gemini 2.5 Flash  
- 📤 **PNG/JPG image upload** with preview  
- 🎨 **Fully responsive, modern UI** with custom styling  
- 🪄 **Gemini serverless API** running on Vercel Functions  
- 🔐 **Login & Signup** using Firebase Authentication  
- ☁️ **Deployed frontend + backend** on Vercel    
- 📱 Works across desktop, tablet, and mobile flawlessly  

---

## 🚀 Live Demo

👉 **https://digit-identification.vercel.app/**  

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Custom CSS (no Tailwind required)
- Firebase Authentication
- Vercel Hosting

### Backend
- Vercel Serverless Functions
- Google Gemini API (`@google/generative-ai`)

### Tools
- Git & GitHub
- Vercel CI/CD

---

## 📁 Directory Structure

```
digit-identification/
│
├── frontend/               # Main application
│   ├── api/                # Vercel serverless functions
│   │   └── predict.js
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── components/
│   │   │   ├── AuthModal.jsx
│   │   │   ├── ImageUpload.jsx
│   │   │   ├── Loader.jsx
│   │   │   └── ResultDisplay.jsx
│   │   ├── AuthContext.jsx
│   │   ├── firebaseClient.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── index.css
│
├── Other Files and Folders
└── README.md
```

---

## 🔧 Installation & Local Development

### 1. Clone the repository
```bash
git clone https://github.com/Mozeel-V/digit-identification.git
cd digit-identification/frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Firebase Authentication

Go to:

**Firebase Console → Authentication → Get Started → Email/Password → Enable**

Update your config in `frontend/src/firebaseClient.js`

### 4. Set up Gemini environment variable

Create:

`frontend/.env.local`

Add:

`GEMINI_API_KEY=your_gemini_key_here`

### 5. Run the app locally (Vercel mode)
```bash
vercel dev
```

Runs on:

👉 **http://localhost:3000**

This includes:
- React frontend  
- Serverless function `/api/predict`  
- Auth  

---

## 🚀 Deployment (Vercel)

### 1. Push code to GitHub
```bash
git add .
git commit -m "Initial version"
git push origin main
```

### 2. Go to https://vercel.com → New Project  
Select repository → Set **Root Directory = frontend**

### 3. Add environment variable

| Key | Value |
|-----|--------|
| GEMINI_API_KEY | your key |

### 4. Deploy 🔥  
Vercel builds everything automatically.

---

## 🧪 Usage Guide

1. Click **Login / Sign up** to create an account  
2. Upload a PNG/JPG containing a handwritten digit  
3. Click **Identify Digit**  
4. The model returns the predicted digit

---

## ⭐ Future Enhancements

- Store user prediction history  
- Upload images to Firebase Storage  
- Add dark/light theme toggle  
- Multi-digit recognition  
- Draw‑your‑digit canvas

---

## 🧾 License

MIT License © 2025

---

## 👨‍💻 Author
**Mozeel Vanwani**  
Email: *vanwani.mozeel@gmail.com* 
