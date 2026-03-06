import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { FaCheckCircle, FaLeaf, FaTruck } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Maxima/MaximaHero.css";
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

export default function RatingShoeCare() {
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









        </div>
    );
}
