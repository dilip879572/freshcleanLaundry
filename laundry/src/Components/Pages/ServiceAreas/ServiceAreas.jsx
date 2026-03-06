import React, { useEffect } from "react";
import { useLocation,useParams } from "react-router-dom";
import "./ServiceAreas.css";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Areas from "./Areas";

export default function ServiceAreas() {
  const location = useLocation();
  const { name } = useParams();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
  }, []);

  const isAreaDetailPage = location.pathname.startsWith("/area/");

  return (
    <div className="Container-fluid">
      <section className="serviceAreas-hero mt-4">
        <div className="serviceAreas-container px-4 mt-5" data-aos="fade-up">
          {/* LEFT CONTENT */}
          <div className="serviceAreas-left" data-aos="zoom-in-down">
            <h1 className="serviceAreas-brand mt-4">
               Premium laundry & dry cleaning services for {name || "Dubai & Abu Dhabi"}
            </h1>

            <div className="app-group">
              <button className="btn primary order-serviceAreas">
                <FaArrowRight /> Book Now
              </button>
            </div>

            <div className="app-group">
              <div className="store-btn ios">
                IOS App <span className="icon"></span>
              </div>

              <div className="store-btn android-serviceAreas">
                Android App <span className="icon">▶</span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="serviceAreas-right">
            <div className="circle-ring" data-aos="fade-down">
              <img
                src="https://5asec.ae/wp-content/uploads/2025/09/AreasHeader1.webp"
                alt="Model"
              />
            </div>
          </div>
        </div>
      </section>

      {!isAreaDetailPage && <Areas />}
    </div>
  );
}
