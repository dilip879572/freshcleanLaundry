import React, { useEffect } from "react";
import "./CleanPress.css";
import { AiOutlineApple } from "react-icons/ai";
import FeedbackClean from "./FeedbackClean/FeedbackClean";
import AOS from "aos";
import "aos/dist/aos.css";

const cleanpres = "/sabmenu/woman-holding-pile-clean-clothes.jpg";

export default function CleanPress() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <div className="Container-fluid">
      <section className="cleanpress-main">
        <div className="cleanpress-container">
          {/* LEFT CONTENT */}
          <div className="clean-left" data-aos="zoom-in-down">
            <h1 className="clean-brand">Clean & Press</h1>

            <p className="clean-desc">
              Clean & Press service is the most popular laundry service we
              provide. We expertly wash, press and deliver your garments looking
              fresh and immaculate.
            </p>

            {/* ACTION BUTTONS */}
            <div className="btn-group">
              <button className="btn primary order-cleanpress">
                Order
              </button>
              <button className="btn secondary pricing-cleanpress">
                Pricing
              </button>
            </div>

            {/* APP BUTTONS */}
            <div className="app-group">
              <div className="store-btn ios">
                iOS App <span className="icon"><AiOutlineApple /></span>
              </div>
              <div className="store-btn android">
                Android App <span className="icon">▶</span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="maxima-right" data-aos="fade-down">
            <div className="circle-ringsbxhujhsauj">
              <img src={cleanpres} alt="Clean Press" />
            </div>
          </div>
        </div>
      </section>

      <FeedbackClean />
    </div>
  );
}
