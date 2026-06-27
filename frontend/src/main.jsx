// src/main.jsx — React application entry point
// Renders the root <App /> component into the #root div in index.html

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css"; // Global CSS (exact copy of original styles.css)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
