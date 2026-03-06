import React, { useEffect } from "react";
import "./LaundryPrice.css";
import ServiceAccordion from "../ServiceAccordion/ServiceAccordion";
import WhyChooseUs from "../../Pages/LaundryPrice/WhyChooseUs/WhyChooseUs"
import AOS from "aos";
import "aos/dist/aos.css";
const serveotp = "/images/Services/OIPs.jpg"
export default function LaundryPrice() {
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
              src={serveotp}
              alt="Mobile App"
              className="image image-large"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="content-section" data-aos="fade-up" data-aos-delay="200"  >
            <h2 className="mt-4">Transparent Pricing</h2>
            <p className="description">
              We are committed to offer consistent, transparent, and fair prices
              to our customers. Our garments are priced according to their
              approximate weight and dimensions, along with the usual complexity
              of the fabric and the service required.
            </p>

            <ul className="price-listlaundryprice">
              <li>All prices are exclusive of 5% VAT.</li>
              <li>
                Service Charges between Ð 7.00 to Ð 10.00 based on the pickup
                address on all orders under Ð 150.00
              </li>
              <li>
                Service Charges of Ð 5.00 for orders under Ð 150.00 dropped off at
                any5asec store.
              </li>
              <li>Minimum charge of Ð 55.00 per order</li>
              <li>All prices are in Ð</li>
            </ul>

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

    <div data-aos="fade-up">
<WhyChooseUs />
    </div>

        <div data-aos="fade-up">
      <ServiceAccordion />
    </div>  

    </div>
  );
}
