

import React from "react";
import SuitableFor from "../PressOnly/SuitableFor"
import "../PressOnly/PressOnly.css";
const pressImg =
  "/searching.webp";

export default function Starching() {
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
          <h2>Starching</h2>
          <p>
Starching guarantees perfect ironing with a long-lasting glossy finish and a perfect shape. Starching your shirts adds stiffness to the fiber and maintains a crisp, pressed appearance even in hot or wet environments or during travels.
          <br />
For those who love perfect table settings, this treatment is also made for you.
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
