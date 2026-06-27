// src/pages/Home.jsx — Homepage
// Replaces Flask route: @app.route("/") + templates/index.html

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useScrollReveal from "../components/useScrollReveal";

export default function Home() {
  // Apply scroll-reveal animations after the component mounts
  useScrollReveal();

  // Update the browser tab title — replaces <title> in each Flask template
  useEffect(() => {
    document.title = "AVENIR AUTOMATION | Smart Living";
  }, []);

  return (
    <>
      {/* ── Hero Section ──────────────────────────────────────── */}
      <section id="home" className="hero">
        {/* Background image div — styled in CSS with the zoom animation */}
        <div className="hero-bg"></div>

        <div className="container hero-content">
          <h1>Simplify Your Space,<br />Amplify Your Life</h1>
          <p>We deliver intelligent automation solutions that enhance comfort, security, and lifestyle.</p>

          {/* Feature badges */}
          <div className="hero-badges">
            <div className="badge"><i className="fas fa-lightbulb"></i> Lighting</div>
            <div className="badge"><i className="fas fa-shield-alt"></i> Security</div>
            <div className="badge"><i className="fas fa-microphone"></i> Voice Control</div>
            <div className="badge"><i className="fas fa-robot"></i> Automation</div>
          </div>

          {/* CTA button — Link keeps navigation within React without full reload */}
          <Link to="/contact" className="btn btn-primary">
            <i className="fas fa-calendar-check"></i> Book Free Consultation
          </Link>
        </div>
      </section>

      {/* ── Why Smart Living Section ──────────────────────────── */}
      <section className="section">
        <div className="container">
          <h2>Why Smart Living?</h2>
          <div className="grid-4">
            <div className="card">
              <i className="fas fa-couch"></i>
              <h3>Comfort</h3>
              <p>Adaptive environments that respond to you.</p>
            </div>
            <div className="card">
              <i className="fas fa-leaf"></i>
              <h3>Energy Saving</h3>
              <p>Optimize usage and reduce bills.</p>
            </div>
            <div className="card">
              <i className="fas fa-mobile-alt"></i>
              <h3>Remote Access</h3>
              <p>Control from anywhere via app.</p>
            </div>
            <div className="card">
              <i className="fas fa-shield-virus"></i>
              <h3>Safety</h3>
              <p>24/7 monitoring and alerts.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
