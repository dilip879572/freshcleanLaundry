import React from "react";
import "./ContactUs.css";
const connect ="/images/connect.png"
const ContactUs = () => {
  return (
    <div className="Container-fluid home-contactUs">
      {/* Banner */}
             <div className="overlay">
          <h1 style={{color:"white"}}>Contact Us</h1>
          <p style={{color:"white"}}>We are here to take care of your laundry</p>
        </div>
      <div className="contact-banner">
        <div className="overlay">
          <h1>Contact Us</h1>
          <p>We are here to take care of your laundry</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-container">
        {/* Left Info */}
    <div className="contact-info">
  <h2>Get In Touch</h2>
  <p>
    Have questions about our laundry services? Reach out to us anytime.
  </p>

  <div className="info-box">
    <i className="fas fa-map-marker-alt"></i>
    <span style={{color:"black"}}>Dubai, UAE</span>
  </div>

  <div className="info-box">
    <i className="fas fa-phone-alt"></i>
    <span style={{color:"black"}}>+971 50 123 4567</span>
  </div>

  <div className="info-box">
    <i className="fas fa-envelope"></i>
    <span style={{color:"black"}}>support@laundry.com</span>
  </div>

  {/* Social Media */}
  <div className="social-icons">
    <a href="#" aria-label="Facebook">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="#" aria-label="Instagram">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="#" aria-label="Twitter">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="#" aria-label="WhatsApp">
      <i className="fab fa-whatsapp"></i>
    </a>
  </div>
</div>

        {/* Right Form */}
        <div className="contact-form">
          <h2>Send Message</h2>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Phone Number" />
            <textarea placeholder="Your Message" rows="5"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="map-container">
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
