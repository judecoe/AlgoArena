# 🧠 AlgoArena

AlgoArena is a full-stack LeetCode-style coding challenge platform that lets users solve algorithm problems in an in-browser editor, view live results, track progress, and compete on leaderboards.

Built with:

- ⚛️ React + Vite (Frontend)
- 🟩 Node.js + Express (Backend)
- 🛢️ MongoDB or PostgreSQL (Database)
- 🐳 Docker (for secure code execution)

---

## 🚀 Features

- 🧩 Browse algorithm challenges by difficulty, topic, or popularity
- 💻 In-browser code editor with syntax highlighting
- ✅ Secure backend code evaluation and test case feedback
- 📈 User profiles with XP, stats, and submission history
- 🏆 Leaderboards and achievement badges
- 💬 Community discussion under each problem
- 🔐 User authentication and roles (user/admin)

---

## 📁 Project Structure

```bash
AlgoArena/
│
├── client/                # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── hooks/
│       └── utils/
│
├── server/                # Node.js + Express backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── services/
│   │   └── sandbox/       # Docker-based code execution logic
│
├── prisma/ or migrations/ # Optional - for PostgreSQL schema
├── docker/                # Docker configs
├── .env                   # Environment variables
├── .gitignore
├── README.md
└── package.json
```
