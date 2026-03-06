import React from 'react'
import "./Laundrybaba.css";
const looimages= "/Group-53.svg";
export default function Laundrybaba() {
  return (
    <div className="Container-fluid laundrybaba-main">
      <div className="express-section">
  {/* LEFT CONTENT */}
  <div className="express-content">

    <div className="badge-lunderyss">
      ⚡ <span>EXPRESS at ₹150/kg</span>
    </div>

    <h1>
      FRESH  <span>CLEAN</span>
    </h1>

    <p>
      Laundry Baba Express is your go-to for urgent laundry needs—washed,
      pressed, and delivered Next Day or 1 Day. Perfect for last-minute plans
      or when your favorite outfit can’t wait!
    </p>

    <button className="express-btn">
      Zap My Laundry in 24h
    </button>
  </div>

  {/* RIGHT CREST */}
  <div className="express-visual">
    <div className="express-crest">
      <span className="ring ring-1"></span>
      <span className="ring ring-2"></span>
      <span className="ring ring-3"></span>

      <img
      src={looimages}
        alt="Express"
        className="crest-icon"
      />
    </div>
  </div>
</div>

    </div>
  )
}
