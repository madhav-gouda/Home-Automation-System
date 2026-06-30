# AVENIR AUTOMATION — React + Node.js Web App

🌐 **Live Site:** [https://home-automation-system-two.vercel.app/](https://home-automation-system-two.vercel.app/)

A smart home automation business website, built using **React (Vite) + Node.js (Express)**, with a JSON file replacing the database. Built and deployed completely free using Vercel and Render.

---

## ✨ Live Demo

| | |
|---|---|
| 🔗 Website | [home-automation-system-two.vercel.app](https://home-automation-system-two.vercel.app/) |
| 🖥️ Frontend Hosting | Vercel |
| ⚙️ Backend Hosting | Render |

> ⚠️ Note: The backend runs on Render's free tier, which sleeps after 15 minutes of inactivity. The **first** contact form submission after idle time may take 30–50 seconds to respond while the server wakes up — this is expected behavior, not a bug.

---

## 📁 Folder Structure

```
avenir-automation/
├── backend/                   ← Node.js + Express server
│   ├── data/
│   │   └── contacts.json      ← Stores contact form submissions (replaces MySQL)
│   ├── server.js              ← Main Express server
│   ├── package.json
│   └── .env.example
│
└── frontend/                  ← React app (Vite)
    ├── public/
    ├── src/
    │   ├── assets/
    │   │   └── home_theatre.webp
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── Footer.jsx
    │   │   └── useScrollReveal.js
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Services.jsx
    │   │   ├── Products.jsx
    │   │   ├── Projects.jsx
    │   │   ├── About.jsx
    │   │   └── Contact.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── styles.css
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── .env.example
```

---

## ⚙️ Features

- Fully responsive multi-page website (Home, Services, Products, Projects, About, Contact)
- Client-side routing with React Router (no page reloads)
- Working contact form with validation, connected to a live Express API
- Scroll reveal animations
- Mobile-friendly navigation menu

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, React Router
- **Backend:** Node.js, Express
- **Storage:** JSON file (no database required)
- **Hosting:** Vercel (frontend) + Render (backend)

---

## 📄 License

This project is for demonstration purposes.

---

## 🙋 Author

**Madhav Gouda**
[GitHub](https://github.com/madhav-gouda) · Live Site: [home-automation-system-two.vercel.app](https://home-automation-system-two.vercel.app/)
