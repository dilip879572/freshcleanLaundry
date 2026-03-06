// import React from "react";

// export default function CarpetCleaning(){
//     return(
//         <div>
//           CarpetCleaning  
//         </div>
//     )
// }

import React, { useEffect } from "react";
import "../PressOnly/PressOnly.css";
// import SuitableFor from "../PressOnly/SuitableFor"
import CarpetBenefits from "./CarpetBenefits/CarpetBenefits";
import HiddenDangers from "./HiddenDangers/HiddenDangers";
import CleaningProcess from "./CleaningProcess/CleaningProcess";
import AOS from "aos";
import "aos/dist/aos.css";
const pressImg =
    "/Jaime.jpg";

export default function CarpetCleaning() {
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
            <section className="pressonly-wrap">
                <div className="pressonly-container mt-5">
                    {/* LEFT IMAGE */}
                    <div className="pressonly-image">
                        <img src={pressImg} alt="Press Only" />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="pressonly-content">
                        <h2>Fresh N Clean: Your Trusted Carpet Cleaning Solution
                        </h2>

                        <p>
                            Premium carpet care that transforms your home and protects your family's
                            health with professional-grade cleaning services.
                        </p>

                        <div className="pressonly-buttons">
                            <button className="btn-book">Book Now</button>
                            <button className="btn-price">Pricing</button>
                        </div>
                    </div>
                </div>
            </section>

            <div data-aos="fade-up">
                <CarpetBenefits />
            </div>


            <div data-aos="fade-up">
                <HiddenDangers />

            </div>

            <div data-aos="fade-up">
                <CleaningProcess />

            </div>

        </div>

    );
}
