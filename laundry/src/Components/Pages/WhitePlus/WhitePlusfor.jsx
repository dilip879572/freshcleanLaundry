import React from "react";
import "../PressOnly/SuitableFor.css";

const items = [
  {
    title: "Tshirt",
    icon: "https://5asec.ae/wp-content/uploads/2020/06/5asec_Iconsv4-01.svg",
  },
  {
    title: "Wedding Dresses",
    icon: "https://5asec.ae/wp-content/uploads/2020/06/5asec_Iconsv4-16.svg",
  },
  {
    title: "Special Gowns",
    icon: "https://5asec.ae/wp-content/uploads/2020/06/5asec_Iconsv4-07.svg",
  },
  {
    title: "Shirt",
    icon: "https://5asec.ae/wp-content/uploads/2020/06/5asec_Iconsv4-17.svg",
  },
    {
    title: "Trousers",
    icon: "  https://5asec.ae/wp-content/uploads/2020/06/5asec_Iconsv4-03.svg",
  },

     {
    title: "Traditional",
    icon: "  https://5asec.ae/wp-content/uploads/2020/06/5asec_Iconsv4-39.svg",
  },
];

export default function WhitePlusfor() {
  return (
    <section className="suitable-wrap">
      <div className="suitable-container">
        {/* HEADER */}
        <div className="suitable-header">
          <h2>Suitable For</h2>
          <p>
            Our team is available if you require any advice on the best service
            for your garments
          </p>
        </div>

        {/* CONTENT */}
        <div className="suitable-content">
          {/* LEFT ICON GRID */}
          <div className="suitable-grid">
            {items.map((item, i) => (
              <div className="suitable-item" key={i}>
                <div className="suitable-circle">
                  <img src={item.icon} alt={item.title} />
                </div>
                <span >{item.title}</span>
              </div>
            ))}
          </div>

          {/* RIGHT CARD */}
          <div className="suitable-card">
            <h3>Freash Clean Advises You</h3>
            <div className="card-body">
              <p>
White plus treatment is very effective on natural fibers like cotton, and this treatment requires 50 degrees of temperature in the cleaning process, and garments that are opted for this service should be cleanable at this temperature.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
