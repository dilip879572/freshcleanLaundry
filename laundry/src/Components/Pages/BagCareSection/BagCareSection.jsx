import React, { useEffect } from "react";
import "./BagCareSection.css"
import { FaApple, FaGooglePlay } from "react-icons/fa";
import RatingMaxima from "../Maxima/RatingMaxima/RatingMaxima";
// import WorntoWow from "./WorntoWow/WorntoWow";
import LaundryPricing from "../Maxima/LaundryPricing/LaundryPricing";
// import SuitableFor from "../Maxima/SuitableFor/SuitableFor";
import RatingShoeCare from "../ShoeCare/RatingShoeCare/RatingShoeCare";
// import FromSneakers from "./FromSneakers/FromSneakers";
import EverydayTotes from "./EverydayTotes/EverydayTotes"
import WornWonder from "./WornWonder/WornWonder"

import DownloadThe5asecfrom from "../Maxima/Downloadthe5asec/DownloadThe5asec"
import AOS from "aos";
import "aos/dist/aos.css";
const shosecare ="/BagCare-1.webp";
export default function BagCareSection() {
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
      <section className="shoecare-main mt-4">
        <div className="maxima-container px-4 mt-5">
          {/* LEFT CONTENT */}
          <div className="maxima-left" data-aos="zoom-in-down">
            <h1 className="shoecare-brand mt-4">Expert BagCare

</h1>
            {/* <h2 style={{ textAlign: "left", fontSize: "20px" }}>
              Luxury Laundry for Designer and Delicate Garment Care
            </h2> */}

            <p style={{fontSize:"17px"}}>
Experience the BagCare with5asec for expert Bag cleaning, polishing and sanitization to keep your favorite handbags looking like new.            </p>
            <div className="app-group">
              <button className="btn primary order-hoecare">Order</button>
              <button className="btn secondary pricing-hoecare">Pricing</button>
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
            <div className="bagecare-ring" data-aos="fade-down">
              <img
                src={shosecare}
                alt="Model"
              />
            </div>
          </div>

        </div>
      </section>
      <div data-aos="fade-up">
        <WornWonder/>
      </div>
      {/* <div data-aos="fade-up">
        <FromSneakers/>
      </div> */}
      <div data-aos="fade-up">
        <EverydayTotes/>
      </div>

        <div data-aos="fade-up">
        <LaundryPricing />
      </div>
        <div data-aos="fade-up">
              <RatingShoeCare/>
            </div>
         {/* <div data-aos="fade-up">
        <RatingShoeCare/>
      </div> */}
      <div data-aos="fade-up">
        <DownloadThe5asecfrom/>
      </div>
      
      <div>
      </div>
    </div>

  );
}
