import React from "react";
import "./Homeworks.css";
import { FaTruck, FaRunning, FaCoffee } from "react-icons/fa"; // Using react-icons for icons

const steps = [
  {
    icon: <FaRunning />,
    title: "Schedule a Pick-up",
    desc: `Order via5asec App, Chat with us on WhatsApp, or Visit our store. Simply prepare your items using the5asec bag and stickers to specify your service.`,
    bgColor: "#d3c6d8",
  },
  {
    icon: <FaCoffee />,
    title: "Relax, your items are in good hands",
    desc: `Each item carefully inspected, tagged and carefully washed using Eco-Friendly detergents and energy efficient machines.`,
    bgColor: "#f9d1b0",
  },
  {
    icon: <FaTruck />,
    title: "We Deliver",
    desc: `Your immaculately cleaned items are delivered to your door by our smiling store associates`,
    bgColor: "#d3c6d8",
  },
];

export default function HowItWorks() {
  return (
    <div className="how-it-works-container">
      <div className="how-it-works-header">
        <h2  style={{ textAlign: "center", color: "#4B2E83",fontWeight:"700" }}>How It Works</h2>
        <p className="sub-title">Premium laundry made simple.</p>
        <p className="desc">
          We have designed our laundry service to work around your lifestyle.
          Our omni-channel customer care options ensure your convenience comes
          first.
        </p>
      </div>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div
              className="icon-circle"
              style={{ backgroundColor: step.bgColor }}
            >
              {step.icon}
            </div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
