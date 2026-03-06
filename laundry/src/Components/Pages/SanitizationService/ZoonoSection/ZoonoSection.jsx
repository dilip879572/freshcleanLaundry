import React from "react";
import "./ZoonoSection.css";

export default function ZoonoSection() {
  return (
    <section className="zoono-section">
      <div className="zoono-container">

        {/* LEFT SIDE */}
        <div className="zoono-left">
          <img
            src="https://5asec.ae/wp-content/uploads/2020/11/thumb-3-236x300.png"
            alt="Zoono Products"
          />

          <div className="zoono-text">
            <h2>We Use Zoono</h2>
            <p>
              Zoono is the most advanced sanitiser and protectant in the market
              and eliminates germs and ensure long-lasting protection.
            </p>

            <ul>
              <li>Last up to 30 Days on surfaces</li>
              <li>Tested in over 140 Labs across the world</li>
              <li>Certified by Dubai Municipality</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="zoono-right">
          <div className="zoono-card">
            <div className="circle">
            <img src="https://5asec.ae/wp-content/uploads/2020/11/HS-Icons-01.svg" alt="" />
            </div>
            <h4>Kills Germs</h4>
            <p>Proven to eliminate up to 99% of germs</p>
          </div>

          <div className="zoono-card">
            <div className="circle">
            <img src="https://5asec.ae/wp-content/uploads/2020/11/HS-Icons-02.svg" alt="" />
            </div>
            <h4>Long Lasting Active Protection</h4>
            <p>Up to 30 days on surfaces</p>
          </div>

          <div className="zoono-card">
            <div className="circle">
             <img src="https://5asec.ae/wp-content/uploads/2020/11/HS-Icons-03.svg" alt="" />
            </div>
            <h4>Zero Alcohol</h4>
            <p>Water-based, Food safe, Alcohol-free.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
