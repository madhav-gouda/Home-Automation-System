// src/pages/Services.jsx
// Replaces Flask route: @app.route("/services") + templates/services.html

import React, { useEffect } from "react";
import useScrollReveal from "../components/useScrollReveal";

export default function Services() {
  useScrollReveal();

  useEffect(() => {
    document.title = "Our Services | AVENIR AUTOMATION";
  }, []);

  return (
    <section className="section" style={{ paddingTop: "150px" }}>
      <div className="container">
        <h2>Our Services</h2>

        {/* Home Automation */}
        <div className="service-category">
          <h3><i className="fas fa-home"></i> Home Automation</h3>
          <ul className="service-list">
            <li><i className="fas fa-check-circle"></i> Home &amp; Building Automation</li>
            <li><i className="fas fa-check-circle"></i> BMS (Building Management System)</li>
            <li><i className="fas fa-check-circle"></i> Guest Room Automation</li>
            <li><i className="fas fa-check-circle"></i> Smart Lighting (RGB, scenes)</li>
            <li><i className="fas fa-check-circle"></i> Curtain Automation</li>
            <li><i className="fas fa-check-circle"></i> HVAC Control</li>
            <li><i className="fas fa-check-circle"></i> Fan Control</li>
          </ul>
        </div>

        {/* Security Systems */}
        <div className="service-category">
          <h3><i className="fas fa-lock"></i> Security Systems</h3>
          <ul className="service-list">
            <li><i className="fas fa-check-circle"></i> CCTV (IP Cameras)</li>
            <li><i className="fas fa-check-circle"></i> Door Access Systems</li>
            <li><i className="fas fa-check-circle"></i> Motion Sensors</li>
            <li><i className="fas fa-check-circle"></i> Intrusion Protection</li>
          </ul>
        </div>

        {/* Access Control */}
        <div className="service-category">
          <h3><i className="fas fa-door-open"></i> Access Control</h3>
          <ul className="service-list">
            <li><i className="fas fa-check-circle"></i> Video Door Phone</li>
            <li><i className="fas fa-check-circle"></i> Digital Locks</li>
            <li><i className="fas fa-check-circle"></i> Gate Automation</li>
          </ul>
        </div>

        {/* AV & Entertainment */}
        <div className="service-category">
          <h3><i className="fas fa-film"></i> AV &amp; Entertainment</h3>
          <ul className="service-list">
            <li><i className="fas fa-check-circle"></i> Home Theatre</li>
            <li><i className="fas fa-check-circle"></i> Multi-room Audio</li>
            <li><i className="fas fa-check-circle"></i> AV Integration</li>
            <li><i className="fas fa-check-circle"></i> Acoustic Design</li>
          </ul>
        </div>

        {/* Smart Living Add-ons */}
        <div className="service-category">
          <h3><i className="fas fa-plus-circle"></i> Smart Living Add-ons</h3>
          <ul className="service-list">
            <li><i className="fas fa-check-circle"></i> Central Vacuum System</li>
            <li><i className="fas fa-check-circle"></i> Mechanical Ventilation (Fresh Air)</li>
          </ul>
        </div>

        {/* Unique Features highlight box */}
        <div style={{ marginTop: "40px", background: "var(--bg-card)", padding: "30px", borderRadius: "20px" }}>
          <h3 style={{ color: "var(--accent-gold)" }}>🔥 Unique Features</h3>
          <div className="grid-3" style={{ marginTop: "20px" }}>
            <div><i className="fas fa-lightbulb" style={{ color: "var(--accent-gold)" }}></i> Adaptive Lighting &amp; RGB</div>
            <div><i className="fas fa-microphone-alt" style={{ color: "var(--accent-gold)" }}></i> Voice Control (Alexa/Google)</div>
            <div><i className="fas fa-film" style={{ color: "var(--accent-gold)" }}></i> Scenes: Movie / Dinner / Relax</div>
            <div><i className="fas fa-mobile-alt" style={{ color: "var(--accent-gold)" }}></i> Full App-Based Control</div>
          </div>
        </div>
      </div>
    </section>
  );
}
