// src/components/Navbar.jsx — Shared navigation bar
// Replaces the <nav> block duplicated in every Flask HTML template.
// NavLink from React Router automatically adds the "active" class
// to the link that matches the current URL — replacing Flask's manual class logic.

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  // Controls mobile menu open/close — mirrors the JS toggle in main.js
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when a link is clicked (good UX on mobile)
  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    <nav>
      <div className="container nav-container">
        {/* Logo — clicking takes you home */}
        <NavLink to="/" className="logo" onClick={handleLinkClick}>
          AVENIR AUTOMATION
        </NavLink>

        {/* Hamburger icon — only visible on mobile (CSS hides it on desktop) */}
        <div
          className="menu-toggle"
          id="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fas fa-bars"></i>
        </div>

        {/* Navigation links
            NavLink adds className="active" automatically when the URL matches */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" end onClick={handleLinkClick}>Home</NavLink>
          <NavLink to="/services" onClick={handleLinkClick}>Services</NavLink>
          <NavLink to="/products" onClick={handleLinkClick}>Products</NavLink>
          <NavLink to="/projects" onClick={handleLinkClick}>Projects</NavLink>
          <NavLink to="/about" onClick={handleLinkClick}>About</NavLink>
          <NavLink to="/contact" onClick={handleLinkClick}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}
