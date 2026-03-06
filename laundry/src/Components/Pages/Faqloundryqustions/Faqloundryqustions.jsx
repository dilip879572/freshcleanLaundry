// import { Divide } from "lucide-react";
// import React from "react";

// export default function Faqloundryqustions(){
//     return(
//         <div>

//         </div>
//     )
// }

import React, { useEffect } from "react";
import "../LaundryPrice/LaundryPrice.css";
import FaqAccordion from "./FqsAccordion/FaqAccordion";
import AOS from "aos";
import "aos/dist/aos.css";
const fqsqustions= "/images/home/5asec-FAQs.webp";
export default function Faqloundryqustions() {
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
    <section className="laundry-price-section">
      <div className="laundry-container mt-5 px-5">
        
        {/* LEFT IMAGES */}
        <div className="image-section mt-5" data-aos="fade-right">
      
          <img
src={fqsqustions}
alt="Mobile App"
            className="image image-large"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="content-section"  data-aos="fade-up" data-aos-delay="200"  >
          <h2 className="mt-4">FAQs</h2>
          <h3>How can we help
</h3>
          <p className="description">
          Here are some of the most asked questions by our customers. If you cannot find answers to the questions you have, please contact our team and we will be happy to assist. 


          </p>


          <div className="button-group">
            <button className="btn phone-btn">
              📞 Order via Phone
            </button>
            <button className="btn whatsapp-btn">
              💬 Order via WhatsApp
            </button>
          </div>
        </div>

      </div>
    </section>
          <FaqAccordion />

    </div>
  );
}
