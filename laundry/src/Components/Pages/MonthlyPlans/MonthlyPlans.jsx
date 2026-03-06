import React, { useEffect } from "react";
import "./Monthlyplans.css";
import AOS from "aos";
import "aos/dist/aos.css";
import WashFoldPlans from "./WashFoldPlans/WashFoldPlans";
import ShirtsMonthlyPlans from "./ShirtsMonthlyPlans/ShirtsMonthlyPlans";
const monthlyPlans ="/sabmenu/1750755601.jpg"
export default function MonthlyPlans() {
      useEffect(() => {
        AOS.init({
          duration: 1200,
          easing: "ease-in-out",
          once: true,
          offset: 80,
        });
      }, []);
  return (
    <div className="">
   <section className="monthly-section ">
      <div className="monthly-container mt-5">

        {/* LEFT IMAGE */}
        <div className="monthly-images">
          <div className="card-single">
            <img
src={monthlyPlans}
alt="5asecMonthly Plans"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="monthly-content">
          <h2>Fresh Clean Monthly Plans</h2>

          <h4>Monthly Plans - Convenient, Easy, Affordable.</h4>

          <p>
            Pay monthly and simply book our contactless pick-up service whenever
            you’re ready.
          </p>

          <p className="vat-text">
            All prices are in ₫ and are exclusive of 5% VAT
          </p>
        </div>
      </div>
    </section>
          <div data-aos="fade-up">

<WashFoldPlans/>
</div>
          <div data-aos="fade-up">

<ShirtsMonthlyPlans/>
</div>


    </div>
 
  );
}
