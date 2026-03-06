
import React, { useEffect } from "react";
import "./PressOnly.css";
import SuitableFor from "./SuitableFor";
import CleanServicesLaundry from "../CleanServicesLaundry/CleanServicesLaundry"
import AOS from "aos";
import "aos/dist/aos.css";
const pressImg =
  "/sabmenu/servicesArtboard-1-copy-11.webp";

export default function PressOnly() {
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
        <div className="pressonly-content" data-aos="fade-down">
          <h2>Press Only</h2>

          <p>
            We will get those creases out of your summer dress and make that
            collar of your shirt crisp and clean as if it was new, by hand and
            with the attention to detail, you would expect. The fresh clean ironing
            way has been developed many years ago and remains an industry
            benchmark. No shortcuts are with excessive temperature to expedite
            work and our irons are protected to preserve the garments – no
            shine marks and perfect ironing.
          </p>

          <div className="pressonly-buttons">
            <button className="btn-book">Book Now</button>
            <button className="btn-price">Pricing</button>
          </div>
        </div>
      </div>
    </section>



    <div className="" data-aos="zoom-in-right">
    <CleanServicesLaundry />
</div>
<div className="" data-aos="zoom-in-right">
<SuitableFor />
</div>

    </div>
 
  );
}
