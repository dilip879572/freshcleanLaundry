import React from "react";
import "./LaundryPricing.css";

export default function LaundryPricing() {
  return (
    <div className="pricing-wrapper">
      <div className="pricing-card">
        {/* LEFT : PRICING */}
        <div className="pricing-left">
          <div className="pricing-header">
            <h2>Pricing</h2>
            <span>Price (฿)</span>
          </div>

          <ul className="price-list">
            <li><span>Top</span><span>22.50</span></li>
            <li><span>T-shirt (Folded)</span><span>23.50</span></li>
            <li><span>Shirt</span><span>26.00</span></li>
            <li><span>Shirt (Folded)</span><span>27.50</span></li>
            <li><span>Sweater</span><span>49.00</span></li>
            <li><span>Pleated Blouse</span><span>126.50</span></li>
            <li><span>Wedding Dress (Regular)</span><span>472.00</span></li>
            <li><span>Winter Coat</span><span>200.00</span></li>
          </ul>

          <button className="order-btn">
            <i className="fab fa-whatsapp"></i> Order Now
          </button>
        </div>

        {/* RIGHT : SERVICE DETAILS */}
        <div className="pricing-right">
          <h2>Service Details</h2>

          <ul className="service-list">
            <li>🔍 Detailed Assessment</li>
            <li>🛡️ Stain Removal</li>
            <li>🧥 Repairs and Restoration of Garments</li>
            <li>🧺 Cleaning</li>
            <li>✨ Finishing</li>
            <li>🔎 Quality Inspection</li>
            <li>📦 Packaging</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
