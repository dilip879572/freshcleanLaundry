import React, { useEffect } from "react";
import "./Home.css";
import SliderReating from "../SliderReating/SliderReating";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurServices from "../OurServices/OurServices";
import Button from "react-bootstrap/Button";
import  Downloadbaners from "../Downloadbaners/Downloadbaners";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
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
      {/* HERO SECTION */}
      <section className="hero">
        <video className="bg-video" autoPlay muted loop playsInline>
          <source
            src="https://5asec.ae/wp-content/uploads/2025/11/Website_1.mp4"
            type="video/mp4"
          />
        </video>

        <div className="overlay" />
        <div className="hero-content-wrapper mt-5">
  <div className="hero-content mt-2" data-aos="fade-right">
    <h1 data-aos="fade-up" className="mt-5">
      Premium laundry & dry <br />
      cleaning services in <br />
      Dubai & Abu Dhabi
    </h1>
    <p data-aos="fade-up" data-aos-delay="200">
      Your Trusted Dry Cleaning and Laundry <br />
      Solution for Over 55 Years
    </p>
    <button
      className="book-btn-home"
      data-aos="zoom-in"
      data-aos-delay="400"
    >
      Book Now <span>→</span>
    </button>

    <div className="app-group">
  <div className="store-btn ios">
    IOS App <span className="icon"></span>
  </div>

  <div className="store-btn android">
    Android App <span className="icon">▶</span>
  </div>
</div>

    {/* <div className="app-buttons" data-aos="fade-up" data-aos-delay="600">
      <Button variant="outline-light" className="store-btn px-2">
         IOS App
      </Button>
      <Button variant="outline-light" className="store-btn px-2">
        ▶ Android App
      </Button>
    </div> */}
  </div>
</div>


        {/* Floating Buttons */}
        <a
          href="https://wa.me/918795720084"
          target="_blank"
          rel="noreferrer"
          className="float whatsapp"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>

        <div className="float chat">💬</div>
      </section>

      {/* OTHER SECTIONS */}
      <div data-aos="fade-up">
        <SliderReating />
      </div>

      <div data-aos="fade-up">
        <HowItWorks />
      </div>

      <div data-aos="fade-up">
        <OurServices />
      </div>

<div data-aos="fade-up">
<Downloadbaners />
      </div>

      
    </>
  );
}


// import { useEffect, useState } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";

// const images = [
//   "/home.jpg",
//   "/home1.avif",
//   "/home2.avif",
//   "/home3.avif",
//   "/home4.avif",
// ];

// export default function LaundryHero() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section style={{ background: "#eef7f5", padding: "80px 0" }}>
//       <Container>
//         <Row className="align-items-center">
//           {/* LEFT CONTENT */}
//           <Col lg={6} md={12} className="mb-5 mb-lg-0">
//             <h1 style={{ fontSize: "clamp(32px, 4vw, 46px)", fontWeight: 700 }}>
//               Your Professional <br />
//               <span style={{ color: "#4fa9a6" }}>Friendly Laundromat</span>
//             </h1>
//             <p style={{ marginTop: 18, color: "#555", fontSize: 16, maxWidth: 520 }}>
//               They handle your garments with the utmost care and attention,
//               ensuring thorough Cleaning, Ironing, and Folding.
//             </p>

//             <div className="mt-4 d-flex gap-3 flex-wrap">
//               <Button variant="dark" size="lg">Book Now</Button>
//               <Button variant="outline-dark" size="lg">Schedule Time</Button>
//             </div>
//           </Col>

//           {/* RIGHT IMAGE SLIDER */}
//           <Col lg={6} md={12} className="text-center">
//             <div
//               style={{
//                 // background: "#1f2a44",
//                 borderRadius: 24,
//                 padding: 16,
//                 width: "100%",
//                 maxWidth: 640,
//                 margin: "0 auto",
//               }}
//             >
//               <img
//                 src={images[index]}
//                 alt="Laundry"
//                 style={{
//                   width: "100%",
//                   height: "clamp(260px, 40vw, 420px)",
//                   objectFit: "cover",
//                   borderRadius: 20,
//                   transition: "opacity 0.6s ease-in-out",
//                 }}
//               />
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }
