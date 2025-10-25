# 📝 MERN To-Do App

This is a simple **To-Do List App** that I built using the **MERN stack (MongoDB, Express, React, Node.js)**.  
It lets users add, edit, delete.

---

## 🚀 What it does

- ➕ **Add new todo** with title and description  
- 📝 **Update / Edit** an existing todo  
- ❌ **Delete** a todo permanently  
- 🌐 All data is saved in **MongoDB Atlas**, so it stays even after refreshing the page  

---

## 🛠️ Tech Stack

| Part | Technology Used |
|------|------------------|
| Frontend | React.js (with hooks) |
| Backend | Node.js + Express |
| Database | MongoDB Atlas |
| Hosting | Frontend – Netlify, Backend – Render |

---

## 🧩 How it works

### 1. Backend (Render)
- Built with Express + Mongoose.
- Connected to MongoDB Atlas using `mongoose.connect()`.
- Routes:
  - `GET /api/todos` → get all todos
  - `POST /api/todos` → create new todo
  - `PUT /api/todos/:id` → update existing todo
  - `DELETE /api/todos/:id` → remove a todo

I used **CORS** so the React frontend (hosted on Netlify) can talk to the backend without issues.

---

### 2. Frontend (Netlify)
- Created with `create-react-app`
- Uses a custom hook called `useFetchTodos.js` to fetch and manage todos  
- Has basic form input for adding todos and buttons for editing/deleting  
- UI is clean and simple, made using pure CSS (no heavy libs)

---

## ⚙️ How to run locally

If u want to run this project on ur computer, here’s how:

1️⃣ Clone the repo:

git clone https://github.com/your-username/FULLSTACK-TODO-APP.git
2️⃣ Install dependencies:

bash
Copy code
cd backend
npm install
cd ../frontend
npm install

3️⃣ Create a .env file in the backend folder:

PORT=5000
MONGO_URI=your-mongodb-uri-here

4️⃣ Run backend:

bash
Copy code
cd backend
npm run dev
5️⃣ Run frontend:

bash
Copy code
cd frontend
npm run dev
Now open http://localhost:5000 — you should see your todo app running 🎉

🌍 Live Demo
Frontend (Netlify):
👉 https://assignment08tutedude.netlify.app/

Backend (Render):
👉 https://mern-todo-app-skhg.onrender.com


check the whole fullstack project:
👉 https://assignment08tutedude.netlify.app/

# screenshot

<img width="1366" height="768" alt="Screenshot 2025-10-25 144126" src="https://github.com/user-attachments/assets/cdb1df89-c85e-4d7f-a3c0-b6d2435d22e4" />

