import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../Maxima/RatingMaxima/RatingMaxima.css";
import AOS from "aos";
import "aos/dist/aos.css";

const cleahomepages = "/sabmenu/clean-clothes.jpg";
const cleahomepagess = "/sabmenu/helloji.jpg";

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
      "Left a winter cape for cleaning a few weeks ago: perfectly cleaned, ironed and delivered on time for reasonable price.",
    author: "SOPHIE L.",
  },
  {
    text:
      "Amazing service and very professional staff. Clothes came back spotless and perfectly folded.",
    author: "JAMES K.",
  },
  {
    text:
      "Fast, reliable, and great quality. Customer support is very helpful and polite.",
    author: "EMMA R.",
  },
];

export default function FeedbackClean() {
  const [play1, setPlay1] = useState(false);
  const [play2, setPlay2] = useState(false);

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
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
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
      {/* REVIEW SLIDER */}
      <Slider {...settings}>
        {reviews.map((item, index) => (
          <div key={index}>
            <div className="slide-box" data-aos="zoom-in-down">
              <span className="author">{item.author}</span>
              <span className="review-text">{item.text}</span>

              <img
                src="https://berqwp-cdn.sfo3.cdn.digitaloceanspaces.com/cache/5asec.ae/wp-content/uploads/2024/03/62c29a4e49a83b803a014fbe_washmen-google-rating-04-04.svg"
                alt="Google Rating"
                className="rating-img"
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* SECTION 1 */}
      <section className="mtl-wrap mt-5">
        <div className="mtl-container">
          {/* LEFT */}
          <div className="mtl-images">
            {!play1 ? (
              <div className="video-thumbnail" onClick={() => setPlay1(true)}>
                <img src={cleahomepages} alt="Video Thumbnail" />
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

          {/* RIGHT */}
          <div className="mtl-content" data-aos="zoom-out-up">
            <h2>Expert laundry and dry cleaning service</h2>
            <p>
              For over 55 years, fresh clean has been a leader in development of
              innovative and effective laundry and dry cleaning solutions.
            </p>
            <p>
              We have designed our laundry service to work around your lifestyle.
              Our omni-channel customer care ensures your convenience comes
              first.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="mtl-wrap mt-5">
        <div className="mtl-container reverse">
          {/* LEFT */}
          <div className="mtl-content" data-aos="zoom-out-up">
            <h2>Advanced garment care programs</h2>
            <p>
              Our washing programs are developed exclusively through extensive
              research in partnership with equipment and detergent manufacturers.
            </p>
            <p>
              Our wide range of detergents allows the most effective cleaning
              while extending garment life with low environmental impact.
            </p>
          </div>

          {/* RIGHT */}
          <div className="mtl-images">
            {!play2 ? (
              <div className="video-thumbnail" onClick={() => setPlay2(true)}>
                <img
                  src={cleahomepagess}
                  alt="Video Thumbnail"
                />
                <div className="play-btn">▶</div>
              </div>
            ) : (
              <iframe
                className="video-popup"
                src="https://www.youtube.com/embed/WKDj0_5z4_I"
                title="YouTube video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
