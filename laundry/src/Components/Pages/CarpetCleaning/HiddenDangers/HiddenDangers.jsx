import React from "react";
import "./HiddenDangers.css";
import { Bug, Wind, AlertCircle, Cloud } from "lucide-react";
const homess1 ="/searching.webp";
const dangers = [
  {
    title: "Dust Mites",
    desc: "Microscopic pests that feed on dead skin cells and trigger allergies",
    icon: <Bug size={28} />
  },
  {
    title: "Harmful Bacteria",
    desc: "Disease-causing microorganisms that thrive in carpet fibers",
    icon: <AlertCircle size={28} />
  },
  {
    title: "Trapped Allergens",
    desc: "Pollen, pet dander, and other irritants embedded deep within",
    icon: <Wind size={28} />
  },
  {
    title: "Mold Spores",
    desc: "Fungal growth from moisture that can cause respiratory problems",
    icon: <Cloud size={28} />
  }
];

export default function HiddenDangers() {
  return (
    <section className="danger-section">
      <h2>The Hidden Dangers Lurking in Dirty Carpets</h2>

      <div className="danger-container">

        {/* LEFT BIG CARD */}
        <div className="danger-info">
          <h3>What's Really Living in Your Carpet?</h3>
          <p>
            Every day, carpets accumulate invisible threats that regular
            vacuuming simply can't remove. These contaminants multiply quickly
            and can seriously impact your indoor air quality.
          </p>
          <img src={homess1} alt="" style={{height:"250px",width:"100%"}}/>
        </div>

        {/* RIGHT GRID */}
        <div className="danger-grid">
          {dangers.map((item, index) => (
            <div className="danger-card" key={index}>
              <div className="icon-box">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
