import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderRating from "../../SliderReating/SliderReating";
import HowItWorks from "../../HowItWorks/HowItWorks";
import OurServices from "../../OurServices/OurServices";
import Button from "react-bootstrap/Button";
import Downloadbaners from "../../Downloadbaners/Downloadbaners";
import HiddenDangers from "../../CarpetCleaning/HiddenDangers/HiddenDangers";
import Laundrybaba from "../../LaundryEXPRESS/Laundrybaba";
import CleanServicesLaundry from "../../CleanServicesLaundry/CleanServicesLaundry"
// ✅ Correct imports for Swiper v10+
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import "./HeroSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
// Replace these with your images
const slides = [
    { src: "/images/diva-laundry4-1.webp", textLeft: true },
    { src: "/images/diva-laundry3.webp", textLeft: false },
    { src: "/images/diva-laundry2.webp", textLeft: true },
];

const HeroSection = () => {
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
            <Swiper
                modules={[Navigation, Pagination, Autoplay]} // modules fixed
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="hero-swiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className={`hero-slide ${slide.textLeft ? "text-left" : "text-right"}`}
                            style={{ backgroundImage: `url(${slide.src})` }}
                        >
                            <div className="hero-content">
                                <h1>THE PERFECT BLEND OF SUSTAINABILITY, QUALITY, AND TECHNOLOGY</h1>
                                <p>Making laundry all-inclusive, where you don’t have to take a second look.</p>
                                <div className="hero-buttons">
                                    <div className="hero-buttons">
                                        <a style={{ textDecoration: "none" }}
                                            href="https://wa.me/0545718455"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="pickup-btn"
                                        >
                                            📱 Schedule a Pickup
                                        </a>
                                        <a style={{ textDecoration: "none", color: "white" }} href="tel:+918003301XXX" className="toll-number">
                                            📞 Toll Free Number 0545718455
                                        </a>
                                    </div>

                                </div>
                            </div>
                         
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div data-aos="fade-up">
                <HiddenDangers />
            </div>

            <div data-aos="fade-up">
                <SliderRating />
            </div>


             <div data-aos="fade-up">
                <Laundrybaba />

            </div>
            <div data-aos="fade-up">
                <HowItWorks />
            </div>

               <div data-aos="fade-up">
                 <CleanServicesLaundry />
            </div>

 


            <div data-aos="fade-up">
                <OurServices />
            </div>

            <div data-aos="fade-up">
                <Downloadbaners />
            </div>    </div>

    );
};

export default HeroSection;
