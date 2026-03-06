import React from "react";
import "./SuitableFor.css";

const items = [
  {
    title: "Tshirt",
    icon: "/sabmenu/5asec_Iconsv4-01.svg",
  },
  {
    title: "Wedding Dresses",
    icon: "/sabmenu/5asec_Iconsv4-07.svg",
  },
  {
    title: "Special Gowns",
    icon: "/sabmenu/5asec_Iconsv4-16.svg",
  },
  {
    title: "Shirt",
    icon: "/sabmenu/5asec_Iconsv4-17.svg",
  },
];

export default function SuitableFor() {
  return (
    <section className="suitable-wrap">
      <div className="suitable-container">
        {/* HEADER */}
        <div className="suitable-header">
          <h2>Suitable For</h2>
          <p style={{fontSize:"20px",color:"#5b1f5d",fontWeight:"bold"}}>
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
                <span>{item.title}</span>
              </div>
            ))}
          </div>

          {/* RIGHT CARD */}
          <div className="suitable-card">
            <h3>fresh clean Advises You</h3>
            <div className="card-body">
              <p>
                Steam iron is the best way to iron the clothes. Since it will
                protect the garments from getting shine marks and ensure the
                long-lasting of the color and texture of the garments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
