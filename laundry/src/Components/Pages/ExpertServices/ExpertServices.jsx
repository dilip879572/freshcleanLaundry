import React, { useEffect } from "react";
import CleanPress from "./CleanPress/CleanPress"
import SuitableforCleaen from "./Suitablefor/Suitablefor";
import LaundryPricing from "../Maxima/LaundryPricing/LaundryPricing";
// import DownloadThe5asecfrom "../Maxima/Downloadthe5asec/DownloadThe5asec";
import DownloadThe5asecfrom from "../Maxima/Downloadthe5asec/DownloadThe5asec"
import AOS from "aos";
import "aos/dist/aos.css";
export default function ExpertServices(){
      useEffect(() => {
        AOS.init({
          duration: 1200,
          easing: "ease-in-out",
          once: true,
          offset: 80,
        });
      }, []);
    return(
        <div className="Container-fluid py-4 mt-5">
            <div data-aos="fade-up">
                 <CleanPress />
            </div>
               <div data-aos="fade-up">
                            <SuitableforCleaen/>
            </div>
                <div data-aos="fade-up">
            <LaundryPricing/>

            </div>
                 <div data-aos="fade-up">
                             <DownloadThe5asecfrom/>

            </div>

            
        </div>
    )
}