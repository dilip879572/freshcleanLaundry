import React from "react";
import "./HeroVideo.css";
import SanitisationSection from "./Sanitisationflow/Sanitisationflow";
import ServiceCards from "./ServiceCards/ServiceCards";
import ZoonoSection from "./ZoonoSection/ZoonoSection";
import TermsFaq from "./TermsFaq/TermsFaq"
const hero ="/sabmenu/family-doing-laundry_566707-324.jpg"
export default function SanitizationService() {
  return (
    <div>
           <section className="hero-video mt-5">
      {/* Background Video */}
   
      <img src={hero} alt=""         className="hero-bg-video"
 />
      <div className="hero-content">
        <h1>
          Sanitisation <br />
          For Your Home & Car <br />
          <span>The Freash Clean Way</span>
        </h1>

        <button className="play-btn">
          ▶
        </button>
      </div>
    </section>
    {/* SanitisationSection */}
        <div data-aos="fade-up">
          <SanitisationSection />
          </div>

            <div data-aos="fade-up">
             <ServiceCards/>
          </div>
            <div data-aos="fade-up">
            <ZoonoSection />
          </div>
         <div data-aos="fade-up">
             <TermsFaq />
          </div>
    </div>
  
  );
}
