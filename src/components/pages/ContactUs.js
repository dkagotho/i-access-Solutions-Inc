import React from "react";
import "./ContactUs.css";
import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <div className="contact-container1">
      <section className="contact-container">
        <h1>Contact Us</h1>
      </section>
      <div className="contact-container2">
        <h2>You can reach us through email or call us!</h2>
      </div>
      <div class="social-icons-email">
        <section className="social-icons-items">
          <p className="ptag">ikenwibe@gmail.com</p>
          <Link
            class="social-icon-link email"
            to="/"
            target="_blank"
            aria-label="mailto:ikenwibe@gmail.com"
          >
            <i class="fas fa-envelope-open-text" />
          </Link>

          <p className="ptag" style={{ marginLeft: "9rem" }}>
            647-561-8312
          </p>
          <Link
            class="social-icon-link phone"
            to="/"
            target="_blank"
            aria-label="Phone number"
          >
            <i class="fas fa-mobile-alt" />
          </Link>
        </section>
      </div>
    </div>
  );
}
export default ContactUs;
