

import React, { useEffect } from "react";
import SuitableFor from "../PressOnly/SuitableFor"
import "../PressOnly/PressOnly.css";
import AOS from "aos";
import "aos/dist/aos.css";
import CleanServicesLaundry from "../CleanServicesLaundry/CleanServicesLaundry";
const pressImg =
  "/dryCleaning.jpg";

export default function DryCleaning() {
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
          <div className="pressonly-content">
            <h2>Dry Cleaning</h2>

            <p>
              A dry-cleaning machine is similar to a washing machine, except that it is larger and uses a closed-loop system: the solvent is recovered, filtered, and reused in the next cleaning cycle. This treatment combines mechanical action of the machine program with the efficiency of a solvent and is used for garments that cannot be washed in water because they could either shrink, discolor or lose its original shape.


              <br />
              Our fully computerized controlled machines with tailored programs, high-quality solvents, and additives along with correct loading of the machine are key to ensure the quality of cleaning. Proprietary programs, unique 100% distillation of quality solvents in recycling and quality training
              ensure the best available dry-cleaning service in the industry
            </p>


            <div className="pressonly-buttons">
              <button className="btn-book">Book Now</button>
              <button className="btn-price">Pricing</button>
            </div>
          </div>
        </div>
      </section>
 <div className="" data-aos="zoom-in-right">
 <SuitableFor/>
 </div>
     

          <div className="" data-aos="zoom-in-right">
          <CleanServicesLaundry/>
      </div>
    </div>

  );
}
