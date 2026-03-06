import React, { useEffect } from "react";
import "./ServiceCards.css";
import AOS from "aos";
import "aos/dist/aos.css";
const services = [
  {
    title: "Apartments",
    image:
      "https://5asec.ae/wp-content/uploads/2020/11/WebBlog3.jpg",
  },
  {
    title: "Villas",
    image:
      "https://5asec.ae/wp-content/uploads/2020/11/WebBlog1-1.jpg",
  },
  {
    title: "Cars",
    image:
      "https://5asec.ae/wp-content/uploads/2020/11/WebBlog2.jpg",
  },
];

export default function ServiceCards() {
      useEffect(() => {
        AOS.init({
          duration: 1200,
          easing: "ease-in-out",
          once: true,
          offset: 80,
        });
      }, []);
  return (
    <section className="service-section">
      <div className="service-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <div
              className="service-image"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="service-title">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
