// src/pages/Products.jsx
// Replaces Flask route: @app.route("/products") + templates/products.html

import React, { useEffect } from "react";
import useScrollReveal from "../components/useScrollReveal";

export default function Products() {
  useScrollReveal();

  useEffect(() => {
    document.title = "Our Products | AVENIR AUTOMATION";
  }, []);

  return (
    <section className="section" style={{ paddingTop: "150px" }}>
      <div className="container">
        <h2>Our Products</h2>
        <div className="grid-3">
          <div className="card">
            <i className="fas fa-toggle-on"></i>
            <h3>Smart Switches</h3>
            <p>Minimalist design, touch &amp; voice ready.</p>
          </div>
          <div className="card">
            <i className="fas fa-tablet-alt"></i>
            <h3>Touch Panels</h3>
            <p>Centralized control with elegant interface.</p>
          </div>
          <div className="card">
            <i className="fas fa-video"></i>
            <h3>Cameras</h3>
            <p>4K IP cameras with night vision.</p>
          </div>
          <div className="card">
            <i className="fas fa-lock"></i>
            <h3>Digital Locks</h3>
            <p>Fingerprint, RFID, and PIN access.</p>
          </div>
          <div className="card">
            <i className="fas fa-satellite-dish"></i>
            <h3>Sensors</h3>
            <p>Motion, door/window, leak detectors.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
