import React from "react";
import "./CleanServicesLaundry.css";
import { FaTruck, FaRunning, FaCoffee } from "react-icons/fa"; // Using react-icons for icons
const launderclean ="./images/Services/laundry-dry-cleaning.webp"
const steps = [
  {
    icon: "./images/Services/Saree-Lehenga-Dry-Clean.webp",
    title: "Haute Couture Dry Cleaning",
    desc: `Hohenstein certified dry cleaning process to restore the lustre of your silk sarees and designer wears.`,
    bgColor: "#d3c6d8",
  },
  {
    icon: "./images/Services/Shoe-Bag-Dry-Clean-Repair.webp",
    title: "Shoes, Bag Cleaning and Repair",
    desc: `Professional cleaning, laundry, and repair of your shoes and bags to make them look new again. Customized treatment as per the fabric.`,
    bgColor: "#f9d1b0",
  },
  {
    icon: "./images/Services/Sweater-Jacket-Dry-Clean.webp",
    title: "Woolens Dry Cleaning",
    desc: `With our Woolmark approved Lagoon technology, your woolen clothes will retain their shape, size and fluffiness.`,
    bgColor: "#d3c6d8",
  },




  {
    icon: "./images/Services/Curtain-Dry-Clean (1).webp",
    title: "Curtain Cleaning",
    desc: `One stop solution for dry cleaning your silk, cotton, velvet or chenille curtains. We remove and hang the curtains back after cleaning as a complimentary service.`,
    bgColor: "#d3c6d8",
  },
  {
    icon: "./images/Services/Leather-Dry-Clean-Repair.webp",
    title: "Leather Dry Cleaning and Repair",
    desc: `Dry cleaning process using Italian creams, oils and machines for your leather shoes, handbags, jackets, wallets/purses and belts. Repair services are also available.`,
    bgColor: "#f9d1b0",
  },
  {
    icon: "./images/Services/Carpet-Dry-Clean.webp",
    title: "Carpet Cleaning",
    desc: `An intense, deep-cleaning of carpets with 100% eco-friendly detergents and technologically advanced machines. Experts in Persian rugs, Silk carpets and Turkish carpets.`,
    bgColor: "#d3c6d8",
  },
];

export default function CleanServicesLaundry() {
  return (
    <div className="how-it-works-container mt-3">
      <div className="how-it-works-header">
        <h2  style={{ textAlign: "center", color: "#4B2E83",fontWeight:"700" }}>Our Expert Dry Clean Services
</h2>
        {/* <p className="sub-title">Our Expert Dry Clean Services</p> */}
        <p className="desc">
          We have designed our laundry service to work around your lifestyle.
          Our omni-channel customer care options ensure your convenience comes
          first.
        </p>
      </div>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card-servicesLaundry">
            <div
            //   className="icon-circle"
              style={{ backgroundColor: step.bgColor }}
            >
              
              <img src={step.icon} alt="" style={{height:"200px",width:"100%"}} />
            </div>
            <h3>{step.title}</h3>
         <p>
  {step.desc}
</p>

          </div>
        ))}
      </div>


    
    <div className="mt-5" style={{textAlign:"center"}}>
       <h4 style={{color:"#3e0c50",fontFamily:"revert-layer",fontWeight:"bold"}}>WELCOME TO FRESH CLEAN LAUNDRY COMPANY</h4>  
   <h2 style={{color:"#220bd2",fontFamily:"revert-layer",fontWeight:"bold",textAlign:"center"}}>Laundry And Dry Cleaning Service in Dhabi</h2>  
   <p className="m-3 fs-5">Laundry And Dry Cleaning is a common challenge when doing laundry, and treating stains correctly can make a huge difference. Here's a general guide to help with different types of stains:</p>
 
<div className="laundry-steps-section">
  {/* LEFT IMAGE */}
  <div className="laundry-image">
    <img
      src={launderclean}  // apni image ka path
      alt="Laundry Service"
    />
  </div>

  {/* RIGHT CONTENT */}
  <div className="laundry-content">
    <h2>General Steps for Laundry Service:</h2>

    <p>
      <strong>Wash & Fold Services:</strong> This includes washing, drying, and
      folding regular clothes. It is convenient for customers who want to save
      time on their daily laundry routine.
    </p>

    <p>
      <strong>Wash & Iron Services:</strong> This service ensures clothes are not
      only cleaned but also ironed for a crisp, wrinkle-free look, perfect for
      workwear or special occasions.
    </p>

    <p>
      <strong>Dry Cleaning Services:</strong> Specialized cleaning for delicate
      fabrics, suits, silk garments, and clothing with stains that require
      chemical treatment.
    </p>

    <p>
      <strong>Pickup & Delivery:</strong> Many providers offer doorstep pickup
      and delivery services for added convenience.
    </p>
  </div>
</div>

    </div>
    </div>
  );
}
