import React from "react";
import "../PressOnly/PressOnly.css";
import SuitableFor from "../PressOnly/SuitableFor"
const pressImg =
  "/Jaime.jpg";

export default function JaiMaRobe() {
  return (
    <div>
   <section className="pressonly-wrap">
      <div className="pressonly-container mt-5">
        {/* LEFT IMAGE */}
        <div className="pressonly-image">
          <img src={pressImg} alt="Press Only" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="pressonly-content">
          <h2>Jai’me Ma Robe</h2>

          <p>
           Thorough cleaning and accurate preservation are key to protecting your precious gown from fabric deterioration and discoloration. We have partnered with, a renowned French bridal gown preservation company, to provide the most meticulous cleaning and preservation service that exists today. We use the same materials and methods that have been protecting national collections for over 40 years in European museums and Parisian Haute Couture fashion houses.
          </p>

          <div className="pressonly-buttons">
            <button className="btn-book">Book Now</button>
            <button className="btn-price">Pricing</button>
          </div>
        </div>
      </div>
    </section>
<SuitableFor />
    </div>
 
  );
}
