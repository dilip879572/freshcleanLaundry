import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { FaCheckCircle, FaLeaf, FaTruck } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RatingMaxima.css";
import AOS from "aos";
import "aos/dist/aos.css";
// Custom Arrows
const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
        <FaChevronCircleLeft />
    </div>
);
const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
        <FaChevronCircleRight />
    </div>
);
const reviews = [
    {
        text:
            "Left a winter cape for cleaning a few weeks ago: perfectly cleaned, ironed and delivered on time for reasonable price. They even fixed a hook without asking.",
        author: "SOPHIE L.",
    },
    {
        text:
            "Amazing service and very professional staff. Clothes came back spotless and perfectly folded. Pickup and delivery was super smooth. Highly recommended!",
        author: "JAMES K.",
    },
    {
        text:
            "Fast, reliable, and great quality. Customer support is very helpful and polite. Best laundry experience in the city so far.",
        author: "EMMA R.",
    },
    {
        text:
            "Outstanding attention to detail. Even small issues I didn’t mention were fixed. Truly premium service!",
        author: "MICHAEL T.",
    },
    {
        text:
            "Perfect quality and on-time delivery. Will definitely use their service again. Five stars from my side!",
        author: "SARAH P.",
    },
];

const videoimages ="/images/home/Untitled design.png";

export default function RatingMaxima() {
    const [play, setPlay] = useState(false);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200, // small laptop
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768, // tablet
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
        breakpoint: 576, // For phones
        settings: {
          slidesToShow: 1, // Show 1 slide for phones
          slidesToScroll: 1,
        },
      },
        ],
    };


    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: "ease-in-out",
            once: true,
            offset: 80,
        });
    }, []);
    return (
        <div className="slider-wrapper">
            <Slider {...settings}>
                {reviews.map((item, index) => (
                    <div key={index}>
                        <div className="slide-box" data-aos="zoom-in-down">
                            <span className="author">{item.author}</span>

                            <span className="review-text">{item.text}</span>
                            <img
                                src="https://berqwp-cdn.sfo3.cdn.digitaloceanspaces.com/cache/5asec.ae/wp-content/uploads/2024/03/62c29a4e49a83b803a014fbe_washmen-google-rating-04-04.svg?hash=ab7f9c19370fa61a732ef150fde7d670"
                                alt="Google Rating"
                                className="rating-img"
                            />

                        </div>
                    </div>
                ))}
            </Slider>









            <section className="mtl-wrap mt-5">
                <div className="mtl-container">
                    {/* LEFT IMAGES */}
                    <div className="mtl-images">
                        {!play ? (
                            <div className="video-thumbnail" onClick={() => setPlay(true)}>
                                <img
src={videoimages}
alt="Video Thumbnail"
                                />
                                <div className="play-btn">▶</div>
                            </div>
                        ) : (
                            <video
                                src="https://5asec.ae/wp-content/uploads/2024/10/Maxima.mp4"
                                controls
                                autoPlay
                                className="video-popup"
                            />
                        )}
                    </div>
                    {/* RIGHT CONTENT */}
                    <div className="mtl-content" data-aos="zoom-out-up" style={{ textAlign: "justify" }}>
                        <h2 style={{ textAlign: "start", color: "#4B2E83", fontWeight: "700" }}>Exceptional Care for Your Most Treasured Garments</h2>
                        <p>
                            We highly recommend our Maxima service for your delicate, bespoke, or high-end branded garments. This service provides extra gentle treatment and meticulous attention to detail, ensuring your cherished pieces receive the care they deserve. Each garment goes through multiple stages of care, further enhancing the quality and precision of our service.            </p>

                        <div>

                            <ul>
                                <li>
                                    Maxima is the highest quality cleaning developed over the years by5asec
                                </li>
                                <li>
                                    Minor Repairs and Restoration of garments
                                </li>
                                <li>
                                    Extra care to protect buttons, beads, and other delicate accessories during our cleaning process

                                </li>
                                <li>
                                    Air Drying to protect the fibres and detailing on your garments

                                </li>
                            </ul>
                        </div>
                    </div>
       

                </div>
            </section>












    <section className="mtl-wrap mt-5">
                <div className="mtl-container">
                    {/* LEFT IMAGES */}
                 
                    {/* RIGHT CONTENT */}
                    <div className="mtl-content" data-aos="zoom-out-up" style={{ textAlign: "justify" }}>
                        <h2 style={{ textAlign: "start", color: "#4B2E83", fontWeight: "700" }}>Over 55 years of commitment to Luxury Garment Care</h2>
                        <p>

                            We are proud to be a leading provider of luxury garment care from 55 years, specializing in the careful cleaning and restoration of couture, designer wear, rare fabrics, and exquisite attire.

Our extensive range of services includes various cleaning techniques, such as hand washing, dry cleaning, and delicate washing, all performed with premium eco-friendly products. To maintain the quality of your garments, we ensure that each piece is air-dried.

Alongside our cleaning services, we also provide a variety of alteration options, including mending and replacing embellishments, fixing hems, and re-sewing buttons. Our commitment is to deliver the utmost level of care and meticulous attention to detail throughout the entire process.
</p>
                        <div>

                            
                        </div>
                    </div>
                   <div className="mtl-images">
                        {!play ? (
                            <div className="video-thumbnail" onClick={() => setPlay(true)}>
                                <img
                                    src="https://5asec.ae/wp-content/uploads/2024/10/Maxima-1.jpg"
                                    alt="Video Thumbnail"
                                />
                                <div className="play-btn">▶</div>
                            </div>
                        ) : (
                            <video
                                src="https://5asec.ae/wp-content/uploads/2024/10/Maxima.mp4"
                                controls
                                autoPlay
                                className="video-popup"
                            />
                        )}
                    </div>

                </div>
            </section>
        </div>
    );
}
