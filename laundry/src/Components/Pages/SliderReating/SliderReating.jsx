import React,{useEffect} from  "react";
import Slider from "react-slick";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { FaCheckCircle, FaLeaf, FaTruck } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import AOS from "aos";
import "aos/dist/aos.css";
const LaundryServices="/images/home/MorethanJustLaundry-2-png.webp";
const newiconsLe = "/images/home/newiconsLe-png.webp";
const GoogleRating = "/images/home/googlerating.svg"
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


const services = [
  "Shoes Cleaning and Restoration",
  "Bag Cleaning and Restoration",
  "Wedding Dress Cleaning",
  "Soft Toy Cleaning",
  "Leather Garments Cleaning",
  "Alterations",
  "Home Sanitisation",
  "Carpet Cleaning",
];

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

export default function SliderRating() {
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
      <h4 style={{textAlign:"center"}}>
        <span style={{fontSize:"35px",fontFamily:"system-ui",color:"rgb(75, 46, 131)"}}>  Loved by More than 5000 Clients</span>  <br />
          <br />
<span style={{fontSize:"20px",marginTop:"5px"}}>
  We’ve earned the trust of over 5000 clients in tricity through reliable service, premium <br /> quality, quick turnaround, and unmatched convenience.
  </span> 
      </h4>
      <Slider {...settings}>
        {reviews.map((item, index) => (
          <div key={index}>
            <div className="slide-box" data-aos="zoom-in-down">
                              <span className="author">{item.author}</span>

              <span className="review-text">{item.text}</span>
                 <img
                 src={GoogleRating}
                  alt="Google Rating"
                  className="rating-img"
                />
            
            </div>
          </div>
        ))}
      </Slider>

       <div className="expertise-wrapper" data-aos="zoom-in-left">
        <h2 className="expertise-title">
          55+ Years Of Laundry Expertise Ready To Serve You
        </h2>

        <p className="expertise-subtitle">
          Over 120,000+ customers in 33 countries Fresh clean for their dry
          cleaning and laundry needs everyday.
        </p>

        <div className="expertise-grid" data-aos="fade-right">
          {/* Card 1 */}
          <div className="expertise-card card-grey">
            <div className="icon-circle icon-purple">
              <FaCheckCircle />
            </div>
            <h3>Convenience</h3>
            <p>
              Access our Services through the5asec App, Toll-Free Number,
              WhatsApp, Live Chat, or In-Store
            </p>
          </div>

          {/* Card 2 */}
          <div className="expertise-card card-green" data-aos="fade-up">
            <div className="icon-circle icon-green">
              <FaLeaf />
            </div>
            <h3>Eco-Friendly Laundry</h3>
            <p>
            5asec leads the way in expertise on sustainable laundry practices and detergents
            </p>
          </div>


          {/* Card 3 */}
          <div className="expertise-card card-orange" data-aos="fade-left">
            <div className="icon-circle icon-orange">
              <FaTruck />
            </div>
            <h3>Delivery Across Dubai & Abu Dhabi</h3>
            <p>
              Same day collection and efficient delivery services at home or
              work.
            </p>
          </div>
        </div>
      </div>
      <section className="mtl-wrap">
        <div className="mtl-container">
          {/* LEFT IMAGES */}
          <div className="mtl-images">
            <img
            src={LaundryServices}
              alt="Laundry Services"
              className="mtl-img-main"
            />


          </div>
          {/* RIGHT CONTENT */}
          <div className="mtl-content" data-aos="zoom-out-up" style={{ textAlign: "justify" }}>
            <h2 style={{ textAlign: "start", color: "#4B2E83",fontWeight:"700" }}>More Than Just Laundry</h2>
            <h4>Unique services built around your lifestyle.</h4>
            <p>
              We don’t just stop at laundry. Our expertise includes
            </p>
            <div className="row">
              <div className="col-sm-6">
                <p>Leather Garments Cleaning</p>
                <p>Alterations</p>
                <p>Home Sanitisation</p>
                <p>Carpet Cleaning</p>
              </div>
              <div className="col-sm-6">
                <p>Shoes Cleaning and Restoration</p>
                <p>Bag Cleaning and Restoration</p>
                <p>Wedding Dress Cleaning</p>
                <p>Soft Toy Cleaning</p>
        
              </div>
                            <img
src={newiconsLe}
alt="Laundry Icons"
            style={{height:"100px",width:"350px"}}
        />
            </div>
            {/* <img
            src="https://berqwp-cdn.sfo3.cdn.digitaloceanspaces.com/cache/5asec.ae/wp-content/uploads/2024/03/newiconsLe-png.webp?bwp"
            alt="Laundry Icons"
            className="mtl-img-icons"
          /> */}
          </div>
        </div>
      </section>

    </div>
  );
}
