import React, { useState,useEffect } from "react";
import "../../Downloadbaners/Downloadbaners.css";
import { CiWallet } from "react-icons/ci";
import { MdOutlinePayments } from "react-icons/md";
import { MdBorderLeft, MdOutlineInsertPhoto } from "react-icons/md";
import { SiLivechat } from "react-icons/si";
import { IoMdAdd } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

import { Button } from "react-bootstrap";
const phone= "/images/home/phone.png";
const faqData = [
  {
    question: "What is the MAXIMA Service?",
    answer:<p>The MAXIMA Service is our premium garment care option, designed specifically for delicate, bespoke, and high-end branded garments. This service provides an extra-gentle treatment process with multiple stages of care, ensuring meticulous attention to every detail for each piece.</p>
  },
  {
    question: "How is MAXIMA different from standard cleaning services?",
    answer: <p>MAXIMA uses specialized cleaning techniques, extra-gentle handling, and eco-friendly products to preserve the integrity and quality of luxury fabrics and intricate detailing. Additionally, MAXIMA garments go through multiple inspection and care stages to ensure a flawless finish.</p>
  },
  {
    question: "What types of garments are suitable for the MAXIMA Service?",
    answer: <p>MAXIMA is ideal for delicate, couture, designer wear, rare fabrics, and any high-end branded items that require extra care. It’s perfect for garments with embellishments, fine fabrics, or items that need extra attention to detail.</p>
  },
  {
    question: "Are there specific cleaning methods used in MAXIMA?",
    answer: <p>Yes, the MAXIMA Service offers specialized techniques, including hand-washing, delicate cleaning, and eco-friendly dry cleaning. Each garment is individually evaluated to select the safest and most effective cleaning approach.</p>
  },
  {
    question: "WHAT PAYMENT OPTIONS ARE AVAILABLE?",
    answer: <p>Cash, Card, Online Payments & App Payments accepted.</p>
  },

 {
    question: " Does MAXIMA Service include garment repairs?",
    answer: <p>Yes, as part of the MAXIMA Service, we offer minor repair services including mending embellishments, fixing hems, and re-sewing buttons if needed. We ensure that your garments are returned in their best possible condition.</p>
  },

   {
    question: "Can you guarantee the preservation of my garment’s quality",
    answer: <p>While we take every precaution with the MAXIMA Service to maintain and even enhance the quality of your garment, we cannot guarantee outcomes due to factors like prior damage or unknown fabric conditions. However, our team is highly skilled and experienced, committed to delivering the best possible results.</p>
  },
   {
    question: "How is my garment returned after the MAXIMA Service?",
    answer: <p>Following service completion, each garment undergoes a quality inspection. It is then carefully packaged in a reusable garment bag, making it ready for immediate storage or wear.</p>
  }
  ,
   {
    question: "How do I book the MAXIMA Service?",
    answer: <p>Booking is simple! You can reach out to us through our website at5asec.ae, Mobile app, WhatsApp at +971508052732, Toll-free at 8005asec (52732), or visit one of our stores. A representative will be happy to guide you through the process and answer any questions.</p>
  }
    ,
   {
    question: "Is the MAXIMA Service eco-friendly?",
    answer: <p>Absolutely. We use only eco-friendly, high-quality products and air-dry garments whenever possible to minimize environmental impact while preserving your garment’s original qualities.</p>
  }
];

export default function DownloadThe5asec() {
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
 <section className="download-section">
      <div className="container">
        <div className="row">

          {/* LEFT CONTENT */}
          <div
            className="col-lg-6 col-md-12 px-5 download-content"
            data-aos="fade-right"
          >
            <h2 className="download-title">
              Download The Fresh App Today And  Get Started.
            </h2>

            <p className="download-subtitle">
              Join the thousands of people across Dubai and Abu Dhabi enjoying
              the Fresh way of getting laundry done.
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
            className="col-lg-6 col-md-12 px-5 image-wrapper"
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


      <div className="faq-wrapper mt-4">
        <div className="faq-left">
       <p className="subtitle mt-4"  style={{color:"#0e4d96;",fontSize:"30px"}}>Terms & Conditions
</p>
<div className="px-2">
  <ul style={{textAlign:"justify",padding:"10px 15px"}}>
 <li>Standard delivery within 48hrs</li>
<li>  Next day delivery available with a surcharge </li>
<li>Items cleaned according to care label instructions</li>
<li>Service Charges between ê5 to ê 10 based</li>
<li>on the pickup address on all orders under ê 150 </li>
<li> Minimum charge of ê 55 per order</li>
<li> Prices are exclusive of 5% VAT</li> 
  </ul>
       <p className="subtitle" style={{color:"#062951;"}}>  Ready to Order

</p>

    <button className="order-btn m-2">
            <i className="fab fa-whatsapp"></i> Get Started

          </button>


    <button className="order-btn m-2">
           <IoIosArrowBack />  Price List

          </button>
        
</div>
        </div>

        <div className="faq-right">
                <p className="subtitle mt-4" style={{color:"#062951;",fontSize:"25px" }}>Frequently Asked Questions</p>

          {faqData.map((item, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
            >
              <div
                className="faq-question-maxima "
                onClick={() => toggleFaq(index)}
              >
                <p style={{textAlign:"justify"}}>{item.question}</p> 
                <span className="icon">
                  {activeIndex === index ?  <IoCloseSharp className="fs-4"/>:<IoMdAdd/> }
                </span>
              </div>

              {activeIndex === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
            <Button className="book-btn-downold" style={{backgroundColor:"#062951"}}>
                Learn More →
              </Button>
        </div>
      </div>
    </div>
    </div>
   
  );
}
