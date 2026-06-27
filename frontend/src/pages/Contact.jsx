// src/pages/Contact.jsx
// Replaces Flask route: @app.route("/contact", methods=['GET', 'POST'])
// + templates/contact.html
//
// Key difference from Flask:
//   - Flask submits the form to the server and re-renders the whole page with a flash message.
//   - React keeps the user on the same page and shows the message instantly using state,
//     with no full page reload. The form data is sent as JSON to the Express API via fetch().

import React, { useEffect, useState } from "react";
import useScrollReveal from "../components/useScrollReveal";

// The Express API URL — reads from environment variable in production,
// falls back to localhost for development.
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Contact() {
  useScrollReveal();

  useEffect(() => {
    document.title = "Contact Us | AVENIR AUTOMATION";
  }, []);

  // Form field values — replaces request.form in Flask
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Flash message state — replaces Flask's flash() + get_flashed_messages()
  const [flashMessage, setFlashMessage] = useState(null); // { text, type }

  // Loading state — prevents double-submission while the API call is in progress
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update form state when user types — works like a controlled form in React
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault(); // Stop the browser from doing a traditional form POST
    setIsSubmitting(true);
    setFlashMessage(null);

    try {
      // POST to Express backend — replaces Flask's form action="url_for('contact')"
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // Mirrors: flash('Thank you! Your message has been sent.', 'success')
        setFlashMessage({ text: data.message, type: "success" });
        // Reset the form after successful submission
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        // Mirrors: flash(f'An error occurred: ...', 'danger')
        setFlashMessage({ text: data.message, type: "danger" });
      }
    } catch (error) {
      // Network error (e.g. server is offline)
      setFlashMessage({
        text: "Could not connect to the server. Please try again later.",
        type: "danger",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="section" style={{ paddingTop: "150px" }}>
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-grid">

          {/* Left: contact info — same as contact.html */}
          <div className="contact-info">
            <div className="contact-info-item">
              <i className="fas fa-phone-alt"></i>
              <div>
                <h4>Call Us</h4>
                <p>9980029427</p>
              </div>
            </div>
            <div className="contact-info-item">
              <i className="fab fa-whatsapp"></i>
              <div>
                <h4>WhatsApp</h4>
                <p>9980029427</p>
              </div>
            </div>
            <div className="contact-info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Visit Us</h4>
                <p>Hebbal Kempapura, Bengaluru, Karnataka</p>
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <div>
            {/* onSubmit replaces <form method="POST" action="..."> */}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                <i className="fas fa-paper-plane"></i>{" "}
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Flash message — replaces Jinja2's {% with messages = get_flashed_messages() %} */}
            {flashMessage && (
              <p className={`flash-message ${flashMessage.type}`}>
                {flashMessage.text}
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
