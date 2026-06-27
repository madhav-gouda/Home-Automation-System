// src/components/Footer.jsx — Shared footer
// Replaces the <footer> block duplicated in every Flask HTML template.
// Link from React Router is used instead of <a href> for internal navigation.

import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand section */}
        <div className="footer-section">
          <h2 className="logo">AVENIR</h2>
          <p>Making homes smarter, safer,<br /> and more efficient.</p>
        </div>

        {/* Quick links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 Hebbal Kempapura, Bengaluru, Karnataka</p>
          <p>📞 9980029427</p>
          <p>✉ help@homeiq.com</p>
        </div>

        {/* Social icons */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        © 2025 KeyNex. All rights reserved.
      </div>
    </footer>
  );
}
