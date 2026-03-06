import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./areaDetail.css";
import ServiceAreas from "./ServiceAreas";
import HowItWorks from "./HowItWorks";
import DownloadThe5asec from "../Maxima/Downloadthe5asec/DownloadThe5asec"
import AOS from "aos";
import "aos/dist/aos.css";
const serverares = "/images/home/MorethanJustLaundry-2-png.webp";
const serveraressecond = "/images/home/pohp.jpg";

const AreaDetail = () => {
  const { name } = useParams();
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
  }, []);
  return (
    <>
        <div data-aos="fade-up">
     <ServiceAreas />
        </div>
 

      <section className="area-detail">
        <div className="container">
          <div className="row align-items-center mt-4">
            {/* LEFT CONTENT */}
            <div className="col-md-5">
              <h2 className="area-title">{name}</h2>

              <p className="text-start"> 
                {name} is one of the world’s largest and nicely planned waterfront
                developments which gives the pleasure and vibrancy of a sublime,
                urban lifestyle making it more high quality to live on the water.
              </p>

              <p className="text-start">
                As the cheapest laundry and dry cleaning in {name},5asec’s main
                goal is to offer laundry services to hold clients’ clothes from
                grimy and wrinkled to smooth, pressed and hung.
              </p>

              <p className="text-start">
                Schedule your laundry pickup today and enjoy a top-notch comfort
                and experience that sets us apart from competitors.
              </p>

              <button className="btn primary area-detail">Book Now</button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-md-7">
              <img
                className="area-img-second"
                src={serveraressecond}
                alt={name}
              />
            </div>
          </div>
        </div>
      </section>
        <div data-aos="fade-up">
      <HowItWorks />
  </div>

  <section className="area-detail">
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT CONTENT */}
              <div className="col-md-5">
              <img
                className="area-img"
                src={serverares}
                alt={name}
              />
            </div>
            <div className="col-md-7">
              <h2 className="area-title">Features</h2>

              <p className="text-start"> 
              5asec provides the best dry cleaning & laundry services in Jumeirah and our services include: Clean & Press, Press Only, Wash and Fold, Maxima, Shoe care, Bag Care, Stain Removal, Home sanitization etc 
<br />
We examine the garment, considering factors such as fabric type, colour, and material, to determine the appropriate washing method.<br />
Our Associate takes some customer’s information to know exactly what the customer wants<br /> 
We take the appropriate measures to wash or dry clean all clothes and we avoid using PERCHLO for our dry cleaning processing because we value the health of our customers and workers <br />
Conditioning your laundry is imperative. Your vibrant clothes elevate your appearance, exuding luxury and enhancing your attractiveness <br />
After washing and dry-cleaning, we ensure that garments are expertly hung and steam-pressed. For delicate fabrics, this step is optional to prevent any potential damage. <br />
We provide hanging and packaging services for suits and garment sets. Conversely, we also offer folding options, tailored to your preferences and the organisation of your wardrobe. <br />
              </p>

           

              {/* <button className="btn primary area-detail">Book Now</button> */}
            </div>

            {/* RIGHT IMAGE */}
          
          </div>
        </div>
      </section>


        <div data-aos="fade-up">
              <DownloadThe5asec/>
            </div>
    </>
  );
};

export default AreaDetail;
