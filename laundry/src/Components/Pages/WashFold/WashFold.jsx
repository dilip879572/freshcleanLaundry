import React, { useEffect } from "react";
import "./WashFold.css";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import FeedbackClean from "../ExpertServices/CleanPress/FeedbackClean/FeedbackClean"
import SuitableforCleaen from "../ExpertServices/Suitablefor/Suitablefor"; 
import LaundryPricing from "../Maxima/LaundryPricing/LaundryPricing";
import DownloadThe5asecfrom from "../Maxima/Downloadthe5asec/DownloadThe5asec"
import AOS from "aos";
import "aos/dist/aos.css";
export default function WashFold() {
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
      <section className="mawashFold mt-4">
        <div className="mawashFold-container px-4 mt-5">
          {/* LEFT CONTENT */}
          <div className="mawashFold-left" data-aos="zoom-in-down">
            <h1 className="mawashFold-brand mt-4">Wash & Fold
</h1>
            {/* <h2 style={{ textAlign: "left", fontSize: "20px" }}>
              Luxury Laundry for Designer and Delicate Garment Care
            </h2> */}

            <p>
            Ideal for every day items & suited to wash temperatures  
            washing without pressing. 
             Enjoy a hassle free laundry experience that takes care
              of washing, drying, and folding. Fill out bag up to the brim for just ê 77!
            </p>
            <div className="app-group">
              <button className="btn primary order-washfold">Order</button>
              <button className="btn secondary pricing-washfold">Pricing</button>
            </div>

            {/* APP BUTTONS */}
            {/* APP BUTTONS */}
            <div className="app-group">
              <div className="washfold-btn ios">
                IOS App <span className="icon"></span>
              </div>

              <div className="washfold-btn android">
                Android App <span className="icon">▶</span>
              </div>
            </div>




            {/* RATING */}
            {/* <div className="rating-box">
            <img
              src="https://i.imgur.com/zYxDCQT.png"
              alt="Van"
              className="van"
            />
            <div className="rating">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google"
                className="google"
              />
              <span>4.8 rating</span>
              <div className="stars">★★★★★</div>
            </div>
          </div> */}
          </div>

          {/* RIGHT IMAGE */}
          <div className="maxima-right">
            <div className="circle-ring" data-aos="fade-down">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
                alt="Model"
              />
            </div>
          </div>

        </div>
      </section>
 
      <FeedbackClean />

     <div data-aos="fade-up">
         <SuitableforCleaen/>
      </div>
      <div data-aos="fade-up">
                  <LaundryPricing/>
      </div>
      {/* <div data-aos="fade-up">
        <SuitableFor />
      </div> */}
      <div data-aos="fade-up">
                          <DownloadThe5asecfrom/>
      </div>

      <div>
      </div>
    </div>

  );
}
