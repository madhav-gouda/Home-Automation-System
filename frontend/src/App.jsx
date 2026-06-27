// src/App.jsx — Root component that sets up client-side routing
// Replaces Flask's URL routes (@app.route). React Router handles navigation
// without full page reloads — much faster than Flask's server-side rendering.

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Page components — one per Flask route
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Shared layout components rendered on every page
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar is always visible at the top */}
      <Navbar />

      {/* Routes map URL paths to page components — mirrors Flask @app.route decorators */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer is always visible at the bottom */}
      <Footer />
    </BrowserRouter>
  );
}
