import React, { useState, useEffect } from "react";
import "./Downloadbaners.css";
import { CiWallet } from "react-icons/ci";
import { MdOutlinePayments } from "react-icons/md";
import { MdBorderLeft, MdOutlineInsertPhoto } from "react-icons/md";
import { SiLivechat } from "react-icons/si";
import { Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
const faqData = [
  {
    question: "HOW CAN I PLACE AN ORDER FOR LAUNDRY?",
    answer: (
      <>
        <p>Call <strong> 0545718455</strong></p>
        <p>WhatsApp <strong>+ 0545718455</strong></p>
        <p>Live Chat: wwwfuclaundry.com</p>
        <p>Download the fuclaundry App on iOS & Android</p>
        <p>
          Visit our <span className="link">store locations</span> in Marina,
          DIFC and Jumeirah
        </p>
      </>
    )
  },
  {
    question: "DO YOU PROVIDE SERVICES IN ABU DHABI?",
    answer: <p>Currently, services are available only in Dubai locations.</p>
  },
  {
    question: "WHAT ARE YOUR TURNAROUND TIMES?",
    answer: <p>Standard delivery within 48 hours. Express available.</p>
  },
  {
    question: "DO YOU HAVE A MINIMUM ORDER CHARGE?",
    answer: <p>Yes, minimum order value applies based on location.</p>
  },
  {
    question: "WHAT PAYMENT OPTIONS ARE AVAILABLE?",
    answer: <p>Cash, Card, Online Payments & App Payments accepted.</p>
  },

  {
    question: "  Where are your stores located",
    answer: <p>Cash, Card, Online Payments & App Payments accepted.</p>
  },

  {
    question: "How should I PREPARE FOR MY FIRST ORDER?",
    answer: <p>Cash, Card, Online Payments & App Payments accepted.</p>
  }
];

const phone = "/images/home/phone.png";
const homemian = "/images/home/homemain.jpeg";
export default function Downloadbaners() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
    <div>
      <section className="download-section">
        <div className="container" data-aos="fade-down">
          <div className="row px-5">

            {/* LEFT CONTENT */}
            <div
              className="col-lg-6 col-md-12 download-content"
              data-aos="fade-right"
            >
              <h2 className="download-title">
                Download The fresh Clean App Today And  Get Started.
              </h2>

              <p className="download-subtitle">
                Join the thousands of people across Dubai and Abu Dhabi enjoying
                the fresh Clean way of getting laundry done.
              </p>

              <ul className="features-list">
                <li><CiWallet /> Convenient5asec Wallet</li>
                <li><MdOutlinePayments /> Multiple Payment Options</li>
                <li><MdBorderLeft /> Detailed Order Summary</li>
                <li><MdOutlineInsertPhoto /> Monthly Subscription Plans</li>
                <li><SiLivechat /> Live Chat Support with Real Agents</li>
                <li><MdOutlineInsertPhoto /> Special Requests with Photo Option</li>
                <li><MdBorderLeft /> Exclusive Offers & Vouchers</li>
              </ul>

              <div className="store-buttons">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                />
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                />
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div
              className="col-lg-6 col-md-12 image-wrapper"
              data-aos="zoom-in"
            >
              <img
                src={phone}
                alt="5asecApp"
                className="app-image"
              />
            </div>

          </div>
        </div>
      </section>
      <div className="faq-container">
        <h2 className="title" >Want To Know More?</h2>
        <div className="faq-wrapper mt-4">
          <div className="faq-left">
            <img
              src={homemian}
              alt="Staff"
              className="faq-image"
            />
          </div>

          <div className="faq-right">
            <p className="subtitle mt-4" style={{ fontSize: "20px" }}>Most frequently asked questions..</p>

            {faqData.map((item, index) => (
              <div
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                key={index}
              >
                <div
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  {item.question}
                  <span className="icon">
                    {activeIndex === index ? "▲" : "▼"}
                  </span>
                </div>

                {activeIndex === index && (
                  <div className="faq-answer">{item.answer}</div>
                )}
              </div>
            ))}
            <Button className="book-btn-downold">
              Learn More →
            </Button>
          </div>
        </div>
      </div>
    </div>

  );
}
