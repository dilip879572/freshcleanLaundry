import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { FaCheckCircle, FaLeaf, FaTruck } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../ShoeCare/WorntoWow/WorntoWow.css";
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
        text: "/bagcare2.webp"
    },
    {
        text: "/bagcare3.webp"
    },
    {
        text: "/bagcare4.webp"
    },
    {
        text: "/bagcare5.webp"
    },
    {
        text: "/bagcare6.webp"
    },
    ,
    {
        text: "/bagcare7.webp"
    },
    ,
    {
        text: "/bagcare8.webp"
    },
    ,
    {
        text: "/bagcare3.webp"
    },

];

export default function WornWonder() {
    const [play, setPlay] = useState(false);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2,
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
            <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                    <div className="worntoWow-wrapper">
                        <h2 style={{ fontSize: "30px", color: "rgb(75, 46, 131)", fontWeight: "bold" }}>From Worn to Wonder

                        </h2>
                        <p>Professional shoe cleaning and restoration services that bring the shine back.

                        </p>
                        <Slider {...settings}>
                            {reviews.map((item, index) => (
                                <div key={index}>
                                    <div className="worntoWow-box" data-aos="zoom-in-down">
                                        <span className="review-text">
                                            <img src={item.text} alt="" style={{ width: "100%", height: "250px" }} />
                                        </span>


                                    </div>
                                </div>
                            ))}
                        </Slider>

                    </div>

                </div>

                <div className="col-sm-1"></div>

            </div>







            <section className="mtl-wrap mt-5">
                <div className="mtl-container">
                    {/* LEFT IMAGES */}
                    <div className="mtl-images">

                        <div className="video-thumbnail">
                            <img
                                src="https://5asec.ae/wp-content/uploads/2024/08/bag-care-1.png"
                                alt="Video Thumbnail"
                            />
                            {/* <div className="play-btn">▶</div> */}
                        </div>


                    </div>
                    {/* RIGHT CONTENT */}
                    <div className="mtl-content" data-aos="zoom-out-up" style={{ textAlign: "justify" }}>
                        <h2 style={{ textAlign: "start", color: "#4B2E83", fontWeight: "700", fontSize: "30px" }}>Elevate Your BagCare Routine with Professional Touch
                        </h2>
                        <p>
                          5asec UAE specialises expert cleaning and restoration of all types of Bag. The service includes glueing, stain protections, colour spraying and restoration treatments                        </p>
                        <span>
                            We have designed our bag care service to work around your lifestyle. Our omni-channel customer care options ensure your convenience comes first.                        </span>
                        <div>


                        </div>
                    </div>


                </div>
            </section>
            <section className="mtl-wrap mt-5">
                <div className="mtl-container">
                    {/* LEFT IMAGES */}

                    {/* RIGHT CONTENT */}
                    <div className="mtl-content" data-aos="zoom-out-up" style={{ textAlign: "justify" }}>
                        <h2 style={{ textAlign: "start", fontSize: "30px", color: "#4B2E83", fontWeight: "700" }}>Expertly Crafted BagCare Service
                        </h2>
                        <p>

                            Our Bag Cleaning service has been developed exclusively by our textile expert to produce the best outcomes using the most natural products.                        </p>
                        <div>
                        </div>
                    </div>
                    <div className="mtl-images">
                        {!play ? (
                            <div className="video-thumbnail" onClick={() => setPlay(true)}>
                                <img
                                    src="https://5asec.ae/wp-content/uploads/2024/08/maxresdefault.jpg"
                                    alt="Video Thumbnail"
                                />
                                <div className="play-btn">▶</div>
                            </div>
                        ) : (
                            <video
                                src="https://www.youtube.com/watch?v=2mYJyvUQVzE&t=7s"
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
