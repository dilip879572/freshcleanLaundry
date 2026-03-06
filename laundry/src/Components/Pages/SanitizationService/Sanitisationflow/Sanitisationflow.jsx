import React from "react";
import "./SanitisationSection.css";
const sanitisationSection="/sabmenu/OIP.jpg";
export default function SanitisationSection() {
  return (
    <section className="sanitisation-section">
      <div className="sanitisation-container">

        {/* LEFT IMAGE */}
        <div className="sanitisation-image">
          <div className="badge">Home <span>Sanitisation</span></div>
          <img
src={sanitisationSection}
alt="Sanitisation"
          />

   

          {/* Bottom Bar */}
          <div className="bottom-bar">
            <span>More than just laundry</span>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="sanitisation-content">
          <h2>
            Home Sanitisation <br />
            <span>The Freash Clean Way</span>
          </h2>

          <p className="subtitle">
            Long lasting-protection for you and your family
          </p>
          <p className="desc">
          5asec now provides full home sanitisation services for your home and car.
            Using harm-free alcohol-free Zoono products, our sanitisation service
            provides long-lasting protection.
          </p>
          <ul>
            <li>Water-Based</li>
            <li>Baby Safe</li>
            <li>Pet Safe</li>
            <li>Furniture Safe</li>
          </ul>

          <p className="footer-text">
            Home and Car Sanitisation Available across Dubai
          </p>
        </div>

      </div>
    </section>
  );
}
