

import React from "react";
import SuitableFor from "../PressOnly/SuitableFor"
import "../PressOnly/PressOnly.css";
const pressImg =
  "/saint.jpg";

export default function StainPrevention() {
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
          <h2>Stain Prevention</h2>

          <p>
Be protected from coffee, oil stains, dust residue, or other. This treatment is essential to protect your garments against moisture of any kind.

          
          
          <br />
                Stain prevention is equipped with a specific technology that leaves a thin layer over your garments which prevents future stains, protects wool fibers from felting, and limits water rings.
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
