import React from "react";
import "./CarpetBenefits.css";

const benefits = [
  {
    title: "Healthier Living Environment",
    desc: "Clean carpets remove allergens, dust mites, and bacteria that can trigger respiratory issues and allergies, creating a safer space for your family.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Enhanced Home Aesthetics",
    desc: "Fresh, clean carpets dramatically improve your home's appearance, making spaces feel welcoming, vibrant, and well-maintained.",
    img: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Extended Carpet Lifespan",
    desc: "Regular professional cleaning prevents premature wear and tear, protecting your investment and keeping carpets looking newer for years longer.",
    img: "https://images.unsplash.com/photo-1598300056393-4aac492f4344?auto=format&fit=crop&w=800&q=80"
  }
];

export default function CarpetBenefits() {
  return (
    <section className="carpet-section">
      <h2>Why Clean Carpets Matter for Your Home and Health</h2>

      <div className="carpet-grid">
        {benefits.map((item, index) => (
          <div className="carpet-card" key={index}>
            <div className="image-box">
              <img src={item.img} alt={item.title} />
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
