import React from "react";
import "./SuitableFor.css";

const items = [
    {
        title: "Formal Shoes",
        img: "https://5asec.ae/wp-content/uploads/2025/11/shoe4-2048x1417.png",
        desc:"ê 110 + VAT"
    },

    {
        title: "Designer Formal Shoes",
        img: "https://5asec.ae/wp-content/uploads/2025/11/shoe1-2048x1417.png",
        desc:"ê 145 + VAT"
    },
    {
        title: "Sport Sneakers",
        img: "https://5asec.ae/wp-content/uploads/2025/11/shoe2-2048x1417.png",
        desc:"ê 120 + VAT"
    },
    {
        title: "Sandals",
        img: "https://5asec.ae/wp-content/uploads/2025/11/shoe3-2048x1417.png",
        desc:"ê 90 + VAT"
    },

    {
        title: "Designer Sandals",
        img: "https://5asec.ae/wp-content/uploads/2025/11/shoe5-2048x1417.png",
        desc:"ê 170 + VAT"
    }
    ,
    {
        title: "Cashmere",
        img: "https://5asec.ae/wp-content/uploads/2025/11/shoe6-scaled.png",
        desc:"ê 120 + VAT"
    }


 


];

export default function FromSneakers() {
    return (
        <section className="fromsneakers-section">
            <h2 style={{color:"rgb(75, 46, 131)"}}>
                From Sneakers to Stilettos - Expert Care for Every Pair
            </h2>
            <p className="subtitle" style={{ fontSize: "15px" }}>
                From athletic sneakers and leather oxfords to suede boots and designer heels, our professional shoe cleaning services handle it all. We deep clean, deodorize, polish, and restore shoes of every material and style with expert precision.      </p>

            <div className="fromsneakers-grid">
                {items.map((item, i) => (
                    <div className="fromsneakers-card" key={i}>
                        <div className="fromsneakers-box">
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
