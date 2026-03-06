import React, { useState } from "react";
import "./BookNow.css";

const BookNow = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    pickupLocation: "",
    service: "",
    request: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted!");
  };

  return (
    <div className="booking-container">
      <div className="form-section">
        <h2>Book Now</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <label>Full Name*</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Email*</label>
          </div>

          <div className="input-group">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <label>Phone Number*</label>
          </div>

          <div className="input-group">
            <input
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              required
            />
            <label>Pickup Location*</label>
          </div>

          <div className="input-group">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select Service</option>
              <option value="wash-fold">Wash & Fold</option>
              <option value="dry-clean">Dry Clean</option>
              <option value="ironing">Ironing</option>
            </select>
            <label>Select Service</label>
          </div>

          <div className="input-group">
            <textarea
              name="request"
              value={formData.request}
              onChange={handleChange}
              required
            ></textarea>
            <label>Write your Request*</label>
          </div>

          <button type="submit" className="submit-btn">
            submit
          </button>
        </form>
      </div>

      <div className="info-section">
        <h2>Ready to get a Laundry service?</h2>
        <p>
          Diva Laundry is one of Dubai’s leading laundry companies, known for
          its safe cleaning methods and transparent service. We’re committed to
          quality and open communication from the start.
        </p>
        <div className="buttons">
          <button className="check-btn">Check Prices</button>
          <button className="pickup-btn">📱 Schedule a Pickup</button>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
