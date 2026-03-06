// import 
import React, { useEffect } from "react";
import WhitePlusfor from "./WhitePlusfor"
import "../PressOnly/PressOnly.css";

import AOS from "aos";
import "aos/dist/aos.css";
const pressImg =
  "/white.jpg";
export default function WhitePlus() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <div>
      <section className="pressonly-wrap">
        <div className="pressonly-container mt-5">
          {/* LEFT IMAGE */}
          <div className="pressonly-image">
            <img src={pressImg} alt="Press Only" />
          </div>
          {/* RIGHT CONTENT */}
          <div className="pressonly-content" data-aos="zoom-in-down">
            <h2>WhitePlus
            </h2>

            <p>
              The exclusive White+ treatment is chlorine-free and treats efficiently your delicate garments while preserving their natural qualities, making them fresher and brighter
              <br />
              White+ is essential to revive the white of textiles that have gone gray or yellow.
              <br /><br />
              White clothes and linens easily get dirty and their fiber can quickly be damaged by some whitening treatments. Our White+ treatment has a bleaching effect without using chlorine.
              It revives the white of your clothes that are affected by grey and yellow tones and emphasizes the clean and crisp effect of your already white garmen
            </p>


            <div className="pressonly-buttons">
              <button className="btn-book">Book Now</button>
              <button className="btn-price">Pricing</button>
            </div>
          </div>
        </div>
      </section>
      <div data-aos="fade-up">
        <WhitePlusfor />
      </div>
    </div>

  );
}
