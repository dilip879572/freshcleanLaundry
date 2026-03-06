import React from "react";
import "../../ShoeCare/FromSneakers/SuitableFor.css";

const items = [
    {
        title: "Belt",
        img: "/Professional  Beg/Belt-1.webp",
        desc: "ê 110 + VAT"
    },

    {
        title: "Clutch",
        img: "/Professional  Beg/bag2-1.webp",
        desc: "145 + VAT"
    },
    {
        title: "Sling Bag",
        img: "/Professional  Beg/bag1-1.webp",
        desc: "ê 120 + VAT"
    },
    {
        title: "Standard Size Handbag",
        img: "/Professional  Beg/bag3_copy-removebg-preview.webp",
        desc: "ê 90 + VAT"
    },

    {
        title: "Designer Standard Size",
        img: "/Professional  Beg/bag4-1.webp",
        desc: "ê 170 + VAT"
    }
    ,
    {
        title: "Designer Oversized Handbag",
        img: "/Professional  Beg/bag5-1.webp",
        desc: "120 + VAT"
    },
    {
        title: "Backpack",
        img: "/Professional  Beg/bag6-1.webp",
        desc: "130 + VAT"
    },
      {
         title: "Backpack (Branded)",
        img: "/Professional  Beg/bag6-1.webp",
        desc: "130 + VAT"
    },
    {
        title: "Luggage Bag (Hand Case) Branded",
        img: "/Professional  Beg/bag10-1.webp",
        desc: "220 + VAT"
    },
    {
        title: "Backpack (Branded)",
        img: "/Professional  Beg/bag9-1.webp",
        desc: "100 + VAT"
    },
 





];

export default function EverydayTotes() {
    return (
        <section className="fromsneakers-section">
            <h2 style={{ color: "rgb(75, 46, 131)" }}>
                From Everyday Totes to Designer Pieces – We Restore Them All

            </h2>
            <span style={{ fontSize: "15px" }}>
                Our professional bag restoration services revive designer handbags, leather totes, backpacks, and everyday bags with expert <br />
                cleaning, stain removal, and repair. Trust us to restore your bags to pristine condition, no matter the brand or material.
            </span>
            <div className="fromsneakers-grid mt-3">
                {items.map((item, i) => (
                    <div className="fromsneakers-card" key={i}>
                        <div className="fromsneakers-box">
                            <img src={item.img} alt={item.title} />
                        </div>
                        <h3>{item.title}</h3>
                        <p><span className="dirham-symbol">ê</span>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
