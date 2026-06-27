# AVENIR AUTOMATION — React + Node.js Conversion

Converted from Flask + MySQL to **React (Vite) + Node.js (Express)** with a JSON file replacing the MySQL database.

---

## 📁 Folder Structure

```
avenir-automation/
├── backend/                   ← Node.js + Express server
│   ├── data/
│   │   └── contacts.json      ← Replaces MySQL: stores contact form submissions
│   ├── server.js              ← Main Express server (replaces app.py)
│   ├── package.json
│   └── .env.example           ← Copy to .env and fill in values
│
└── frontend/                  ← React app (Vite)
    ├── public/
    ├── src/
    │   ├── assets/
    │   │   └── home_theatre.webp   ← Bundled by Vite (was Static/Images/)
    │   ├── components/
    │   │   ├── Navbar.jsx          ← Shared nav bar (was repeated in every template)
    │   │   ├── Footer.jsx          ← Shared footer (was repeated in every template)
    │   │   └── useScrollReveal.js  ← Replaces Static/js/main.js scroll logic
    │   ├── pages/
    │   │   ├── Home.jsx            ← Replaces templates/index.html
    │   │   ├── Services.jsx        ← Replaces templates/services.html
    │   │   ├── Products.jsx        ← Replaces templates/products.html
    │   │   ├── Projects.jsx        ← Replaces templates/projects.html
    │   │   ├── About.jsx           ← Replaces templates/about.html
    │   │   └── Contact.jsx         ← Replaces templates/contact.html
    │   ├── App.jsx                 ← Root component + React Router setup
    │   ├── main.jsx                ← React entry point
    │   └── styles.css             ← Exact copy of Static/css/styles.css
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── .env.example
```

---

## ⚙️ Installation

### 1. Backend
```bash
cd backend
npm install
```

### 2. Frontend
```bash
cd frontend
npm install
```

---

## 🚀 Running Locally

### Start the backend (in one terminal):
```bash
cd backend
npm run dev        # uses nodemon for auto-reload
# or: npm start   # plain node, no auto-reload
```
Backend runs at: **http://localhost:5000**

### Start the frontend (in another terminal):
```bash
cd frontend
npm run dev
```
Frontend runs at: **http://localhost:5173**

> The Vite dev server automatically proxies `/api/*` requests to `http://localhost:5000`,
> so CORS is not an issue during development.

---

## 🔗 How Frontend and Backend Communicate

```
User fills contact form
        ↓
React (Contact.jsx) calls fetch("http://localhost:5000/api/contact", { method: "POST", body: JSON })
        ↓
Express (server.js) validates input, appends to contacts.json, responds with { success: true, message: "..." }
        ↓
React displays the flash message inline (no page reload)
```

---

## 🏗️ Building for Production

```bash
cd frontend
npm run build
```
This creates a `frontend/dist/` folder with optimised static files ready for Vercel/Cloudflare.

---

## 🌐 Free Deployment Guide

### Part 1 — Deploy the Backend to Render

1. Go to **https://render.com** → Sign up (free)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repo (push the `backend/` folder)
4. Configure:
   - **Name**: `avenir-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Under **Environment Variables**, add:
   - `FRONTEND_URL` = *(leave blank for now, fill in after deploying frontend)*
6. Click **"Create Web Service"**
7. Wait ~2 minutes. Copy your URL, e.g. `https://avenir-backend.onrender.com`

---

### Part 2 — Deploy the Frontend to Vercel

1. Go to **https://vercel.com** → Sign up with GitHub (free)
2. Click **"Add New Project"** → import your repo
3. Configure:
   - **Root Directory**: `frontend`
   - **Framework Preset**: Vite (auto-detected)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Under **Environment Variables**, add:
   - `VITE_API_URL` = `https://avenir-backend.onrender.com` *(your Render URL)*
5. Click **Deploy**
6. After ~1 minute, you get a live URL like `https://avenir-automation.vercel.app`

---

### Part 3 — Connect them

1. Go back to **Render** → your backend service → **Environment**
2. Update `FRONTEND_URL` = `https://avenir-automation.vercel.app`
3. Click **Save** → Render redeploys automatically

Your site is now fully live. ✅

---

## 🔄 Flask → React/Express: What Changed and Why

| Flask Feature | React+Express Equivalent | Notes |
|---|---|---|
| `@app.route("/")` | `<Route path="/" element={<Home />}>` in App.jsx | React Router handles URL routing client-side |
| `render_template("index.html")` | React component returns JSX | Templates become components |
| `{{ url_for('static', ...) }}` | `import img from "./assets/img.webp"` | Vite bundles assets automatically |
| `{{ url_for('contact') }}` | `<Link to="/contact">` | React Router Link — no page reload |
| `flash('msg', 'success')` | `setFlashMessage({ text, type })` via useState | State-driven, instant, no redirect needed |
| `get_flashed_messages()` in Jinja | `{flashMessage && <p>...</p>}` in JSX | Conditional rendering replaces Jinja2 blocks |
| `request.form['name']` | `req.body.name` in Express | JSON body parsed by express.json() middleware |
| MySQL INSERT | `fs.writeFileSync(DATA_FILE, ...)` | JSON file replaces database for simplicity |
| Jinja2 `{% for %}` loops | `.map()` in JSX | JavaScript array methods replace template loops |
| Repeated `<nav>` in every template | `<Navbar />` component | One file, reused everywhere via React composition |
