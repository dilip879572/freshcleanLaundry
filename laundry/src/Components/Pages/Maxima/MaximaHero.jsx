import React, { useEffect } from "react";
import "./MaximaHero.css";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import RatingMaxima from "./RatingMaxima/RatingMaxima";
import LaundryPricing from "./LaundryPricing/LaundryPricing";
import SuitableFor from "./SuitableFor/SuitableFor";
import DownloadThe5asec from "./Downloadthe5asec/DownloadThe5asec"
// import DownloadThe5asecfrom "./Downloadthe5asec/DownloadThe5asec";
import AOS from "aos";
import "aos/dist/aos.css";
// const maximaero ="/maxima/home.jpg";
const maximaero ="/maxima/homes.jpg";

export default function MaximaHero() {
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
      <section className="maxima-hero mt-4">
        <div className="maxima-container px-4 mt-5">
          {/* LEFT CONTENT */}
          <div className="maxima-left" data-aos="zoom-in-down">
            <h1 className="brand mt-4">MAXIMA</h1>
            <h2 style={{ textAlign: "left", fontSize: "20px" }}>
              Luxury Laundry for Designer and Delicate Garment Care
            </h2>

            <p>
              An exclusive laundry service dedicated to the expert care of
              designer, branded, and delicate clothing.
              MAXIMA ensures that every garment is handled meticulously to
              preserve its elegance, quality, and longevity, delivering pristine
              results for your most valued pieces.
            </p>
            <div className="app-group">
              <button className="btn primary order-maximas">Order</button>
              <button className="btn secondary pricing-maximas">Pricing</button>
            </div>

            {/* APP BUTTONS */}
            {/* APP BUTTONS */}
            <div className="app-group">
              <div className="store-btn ios">
                IOS App <span className="icon"></span>
              </div>

              <div className="store-btn android">
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
                src={maximaero}
                alt="Model"
              />
            </div>
          </div>

        </div>
      </section>
      <div data-aos="fade-up">
        <RatingMaxima />
      </div>
      <div data-aos="fade-up">
        <LaundryPricing />
      </div>
      <div data-aos="fade-up">
        <SuitableFor />
      </div>
      <div data-aos="fade-up">
        <DownloadThe5asec/>
      </div>
      
      <div>
      </div>
    </div>

  );
}
