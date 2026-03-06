// import 



import React, { useEffect } from "react";
import SuitableForFinshing from "./SuitableForFinshing/SuitableForFinshing"
import "../PressOnly/PressOnly.css";

import AOS from "aos";
import "aos/dist/aos.css";

const pressImg =
  "/finishing.jpg";
export default function Finishing() {
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
        <div className="pressonly-content" data-aos="fade-up"
             data-aos-duration="1000">
          <h2>Finishing</h2>

          <p>
fresh clean developed this expert treatment to guarantee a professional ‘freshly ironed’ effect that lasts longer while protecting your textiles the fresh clean          
  </p>
  <p>        
Our finishing treatment makes the freshly ironed effect last longer, so that your suits, shirts, trousers, and dresses stay soft, neat and wrinkle-free and, with no shine marks.
       Finishing is a thin layer applied to your garment in order to improve its shape. It also revives the colors of your items while preventing stains from becoming embedded. For optimal results, the treatment should be done after each cleaning.
          </p>
        

          <div className="pressonly-buttons">
            <button className="btn-book">Book Now</button>
            <button className="btn-price">Pricing</button>
          </div>
        </div>
      </div>
    </section>


    <div className="" data-aos="zoom-in-right">
  <SuitableForFinshing />
    </div>

    </div>
 
  );
}
