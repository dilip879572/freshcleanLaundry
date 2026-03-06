import React from "react";
import "./SuitableFor.css";

const items = [
  {
    title: "Silk",
        img: "/maxima/Artboard-1-copy-3.webp",

    desc: "Maxima is perfect for silk due to its low-temperature wash, gentle cleaning cycle and products and air-drying."
  },
  {
    title: "Beads",
    img: "/maxima/Artboard-1-copy-6.webp",
    desc: "Maxima protects beads and keeps them in place and in the right colour due to the gentle cycle and air-drying."
  },
  {
    title: "Sequins / Strass",
    img: "/maxima/Artboard-1.webp",
    desc: "Maxima protects sequins and strass from mechanical action and heat during the drying process. We air-dry all items as part of the Maxima service."
  },
  {
    title: "Embroidery",
    img: "/maxima/Artboard-1-copy-2.webp",
        desc: "Maxima is very gentle embroidery due to the delicate cycle, Low temperature and Air drying."
  },

  {
    title: "Wool",
    img: "/maxima/Artboard-1-copy-4.webp",
    desc: "  Maxima chemicals reduce felting in the wool and ensures the fabric stays in shape, fluffy and soft"
  }
  ,
   {
    title: "Cashmere",
    img: "/maxima/Artboard-1-copy-5.webp",
    desc: "Maxima cleaning process leaves solvent residues left on cashmere fibres, leaving it looking vibrant and feeling soft.​ "
  }
  

    ,
   {
    title: "Lace",
    img: "/maxima/Artboard-1.webp",
    desc: "Maxima cleaning process leaves solvent residues left on cashmere fibres, leaving it looking vibrant and feeling soft.​ "
  }
    ,
   {
    title: "Branded Clothing",
    img: "/maxima/branded-1.webp",
    desc: "Maxima gives your extra expert care for your favourite designer brands like Gucci, Chanel, Louis Vuitton, Hermes, etc​ "
  }


];

export default function SuitableFor() {
  return (
    <section className="suitable-section">
      <h2 style={{textAlign:"center"}}>Suitable For</h2>
      <p className="subtitle-point">
        Our team is available if you require any advice on the best service for your garments
      </p>

      <div className="suitable-grid">
        {items.map((item, i) => (
          <div className="suitabless-card" key={i}>
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
