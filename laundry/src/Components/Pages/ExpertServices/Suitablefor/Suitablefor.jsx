// import React from "react";

// export default function Suitablefor(){
//     return(
//         <div className="">

//         </div>
//     )
// }


import React from "react";
import "./SuitableforCleaen.css";

const items = [
    {
        title: "Shirts & Blouses",
        img: "https://5asec.ae/wp-content/uploads/2020/06/5asec_Iconsv4-17.svg",
        // desc: "Maxima is perfect for silk due to its low-temperature wash, gentle cleaning cycle and products and air-drying."
    },
    {
        title: "Suits & Jackets",
        img: "https://5asec.ae/wp-content/uploads/2020/06/5asec_Iconsv4-06.svg",
        // desc: "Maxima protects beads and keeps them in place and in the right colour due to the gentle cycle and air-drying."
    },
    {
        title: "Casual & Summer Dresses",
        img: "https://5asec.ae/wp-content/uploads/2020/06/5asec_Iconsv4-07.svg",
        // desc: "Maxima protects sequins and strass from mechanical action and heat during the drying process. We air-dry all items as part of the Maxima service."
    },
    {
        title: "Kandoras & Guthras",
        img: "https://5asec.ae/wp-content/uploads/2020/06/5asec_Iconsv4-39.svg",
        // desc: "Maxima is very gentle embroidery due to the delicate cycle, Low temperature and Air drying."
    },

    {
        title: "Kids & Babies Items",
        img: "https://5asec.ae/wp-content/uploads/2020/06/5asec_Iconsv4-38.svg",
        // desc: "  Maxima chemicals reduce felting in the wool and ensures the fabric stays in shape, fluffy and soft"
    }
    ,
    {
        title: "Ties & Accessories",
        img: "https://5asec.ae/wp-content/uploads/2020/06/5asec_Iconsv4-10.svg",
        // desc: "Maxima cleaning process leaves solvent residues left on cashmere fibres, leaving it looking vibrant and feeling soft.​ "
    }
    ,
    {
        title: "Bedding Linen",
        img: "https://5asec.ae/wp-content/uploads/2020/06/5asec_Iconsv4-37.svg",
        // desc: "Maxima cleaning process leaves solvent residues left on cashmere fibres, leaving it looking vibrant and feeling soft.​ "
    }
    ,
    {
        title: "Curtains",
        img: "https://5asec.ae/wp-content/uploads/2020/06/5asec_Iconsv4-22.svg",
        // desc: "Maxima gives your extra expert care for your favourite designer brands like Gucci, Chanel, Louis Vuitton, Hermes, etc​ "
    }


];

export default function SuitableforCleaen() {
    return (
        <section className="suitable-section">
            <h2>Suitable For
            </h2>
            <p className="subtitlecleasn">
                Our team is available if you require any advice on the best service for your garment
            </p>
            <p className="subtitlesedone">
                <span style={{ color: "orange" }}>fresh clean Advices You:  </span> Please do not cut the care label from your garments, since it has full details of the composition of different types of textiles and the best-recommended mode of cleaning. It is advisable not to try on stain removing since every stain has a different way of removing and applying the wrong method will make the stain permanent and hard to rem      </p>



            <div className="suitable-grid">
                {items.map((item, i) => (
                    <div className="suitable-card-Cleaen" key={i}>
                        <div className="image-box-suitable">
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
