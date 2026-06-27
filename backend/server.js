// server.js — Main Express server
// Replaces Flask's app.py. Handles the contact form POST and serves data.

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ──────────────────────────────────────────────────────────────
// Allow the React frontend (running on a different port) to call this API
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  methods: ["GET", "POST"],
}));

// Parse incoming JSON bodies (replaces Flask's request.form)
app.use(express.json());

// ── Data file ───────────────────────────────────────────────────────────────
// Replaces MySQL. Contact submissions are stored in a local JSON file.
const DATA_FILE = path.join(__dirname, "data", "contacts.json");

// Make sure the file exists on first run
function ensureDataFile() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
  }
}

// Read all contacts from the JSON file
function readContacts() {
  ensureDataFile();
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw);
}

// Append a new contact to the JSON file
function saveContact(contact) {
  const contacts = readContacts();
  contacts.push(contact);
  fs.writeFileSync(DATA_FILE, JSON.stringify(contacts, null, 2));
}

// ── Routes ───────────────────────────────────────────────────────────────────

// GET /api/health — simple health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// POST /api/contact — handles the contact form submission
// Replaces Flask's: @app.route("/contact", methods=['POST'])
app.post("/api/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  // ── Validation (mirrors Flask's required fields) ──
  if (!name || !name.trim()) {
    return res.status(400).json({ success: false, message: "Name is required." });
  }
  if (!email || !email.trim()) {
    return res.status(400).json({ success: false, message: "Email is required." });
  }
  // Simple email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: "Please enter a valid email address." });
  }
  if (!message || !message.trim()) {
    return res.status(400).json({ success: false, message: "Message is required." });
  }

  try {
    // Build the contact record — equivalent to the MySQL INSERT
    const newContact = {
      id: Date.now(),                      // unique ID
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : "",    // phone is optional
      message: message.trim(),
      createdAt: new Date().toISOString(), // timestamp
    };

    saveContact(newContact);

    // Mirrors Flask's: flash('Thank you! Your message has been sent.', 'success')
    return res.json({
      success: true,
      message: "Thank you! Your message has been sent.",
    });
  } catch (error) {
    console.error("Error saving contact:", error);
    // Mirrors Flask's: flash(f'An error occurred: {str(e)}', 'danger')
    return res.status(500).json({
      success: false,
      message: "An error occurred. Please try again later.",
    });
  }
});

// ── Start server ─────────────────────────────────────────────────────────────
ensureDataFile();
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
