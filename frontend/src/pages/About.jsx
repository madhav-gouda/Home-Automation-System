// src/pages/About.jsx
// Replaces Flask route: @app.route("/about") + templates/about.html

import React, { useEffect } from "react";
import useScrollReveal from "../components/useScrollReveal";

export default function About() {
  useScrollReveal();

  useEffect(() => {
    document.title = "About Us | AVENIR AUTOMATION";
  }, []);

  return (
    <section className="section" style={{ paddingTop: "150px" }}>
      <div className="container">
        <h2>About Us</h2>
        <div className="about-grid">

          {/* Left column — text and stats */}
          <div>
            <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
              We are a team of automation experts with over a decade of experience
              in smart living technologies. We partner with architects, interior
              designers, and builders to create seamless, intelligent environments.
            </p>
            <div className="stats">
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>

          {/* Right column — why choose us card */}
          <div style={{ background: "var(--bg-card)", padding: "40px", borderRadius: "20px" }}>
            <h3 style={{ color: "var(--accent-gold)", marginBottom: "20px" }}>Why choose us?</h3>
            <ul style={{ listStyle: "none" }}>
              <li style={{ marginBottom: "15px" }}>
                <i className="fas fa-gem" style={{ color: "var(--primary-blue)", marginRight: "10px" }}></i>
                Premium quality products
              </li>
              <li style={{ marginBottom: "15px" }}>
                <i className="fas fa-headset" style={{ color: "var(--primary-blue)", marginRight: "10px" }}></i>
                24/7 after-sales support
              </li>
              <li style={{ marginBottom: "15px" }}>
                <i className="fas fa-paint-roller" style={{ color: "var(--primary-blue)", marginRight: "10px" }}></i>
                Seamless integration with interior design
              </li>
              <li style={{ marginBottom: "15px" }}>
                <i className="fas fa-tachometer-alt" style={{ color: "var(--primary-blue)", marginRight: "10px" }}></i>
                Future-proof technology
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
