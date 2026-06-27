// src/pages/Projects.jsx
// Replaces Flask route: @app.route("/projects") + templates/projects.html
// The local home_theatre.webp image is imported directly — Vite bundles it automatically.
// External Unsplash URLs stay as-is (no change needed).

import React, { useEffect } from "react";
import useScrollReveal from "../components/useScrollReveal";
import homeTheatreImg from "../assets/home_theatre.webp";

export default function Projects() {
  useScrollReveal();

  useEffect(() => {
    document.title = "Our Projects | AVENIR AUTOMATION";
  }, []);

  return (
    <section className="section" style={{ paddingTop: "150px" }}>
      <div className="container">
        <h2>Recent Projects</h2>
        <div className="grid-3">

          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Villa Automation"
            />
            <div className="project-overlay">
              <h3>Villa Automation</h3>
              <p>Palm Jumeirah</p>
            </div>
          </div>

          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Apartment Setup"
            />
            <div className="project-overlay">
              <h3>Apartment Setup</h3>
              <p>Downtown Dubai</p>
            </div>
          </div>

          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Security Installation"
            />
            <div className="project-overlay">
              <h3>Security Installation</h3>
              <p>Office Complex</p>
            </div>
          </div>

          {/* Local image imported at top of file — replaces Flask's url_for('static', ...) */}
          <div className="project-card">
            <img src={homeTheatreImg} alt="Home Theatre" />
            <div className="project-overlay">
              <h3>Home Theatre</h3>
              <p>Private Residence</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
