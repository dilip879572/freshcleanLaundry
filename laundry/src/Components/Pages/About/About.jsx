import React, { useEffect, useState } from "react";
import "./About.css";

const tabContent = {
    uae: {
      title: "Fresh Clean Premium Laundry Made Simple",
      desc: `Fresh Clean core concept was simple, yet innovative from the very beginning:
      Provide high-quality service at fair and transparent pricing and make it accessible to everyone.
      A lot has changed since, but the core promise of the brand stands and has allowed for the rapid
      expansion and success Fresh Clean around the globe.`,
      extra: "5asecis available across Dubai and Abu Dhabi for convenient pickup and delivery."
    },
    history: {
      title: "Our History",
      desc: `Fresh Clean tarted with a vision to make premium dry cleaning accessible to everyone.
      Over the years, the brand has expanded globally while maintaining quality and trust.`,
      extra: "Today,Fresh Clean operates in more than 33 countries worldwide."
    },
    health: {
      title: "Protecting Your Health",
      desc: `We use eco-friendly and skin-safe cleaning processes to ensure your clothes
      are safe for you and your family.`,
      extra: "Our facilities follow international hygiene and safety standards."
    }
  };

export default function About() {
  const [count, setCount] = useState(1);
  const [activeTab, setActiveTab] = useState("uae");

      useEffect(() => {
    if (count < 55) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 40); // speed control (kam = fast, zyada = slow)      
      return () => clearTimeout(timer);
    }
  }, [count]);

    return (
        <div className="container-fluid mt-5">
            <div className="row mt-5 container-about">
                {/* <h3 className="mt-5">WELCOME TO ABOUT PAGES</h3> */}
                <div className="row second-container">
                    <div className="col-sm-6">
                        <h3 className="about-header">About</h3>
                          <div className="second-header-wrapper">
      <div className="second-header">
        <h3>
          <span className="counter">{count}+</span> Years
        </h3>

        <h4>of Dry Cleaning & Laundry Excellence</h4>
      </div>

      <ul className="stats-list">
        <li>33 Countries</li>
        <li>1800+ Stores</li>
        <li>114000+ Daily Customers</li>
        <li>285000+ Daily Items</li>
      </ul>
    </div>
                       </div>
                    <div className="col-sm-6"></div>
                </div>
            </div>




            <div className="five-sec-wrapper">
      {/* LEFT MENU */}
      <div className="five-sec-menu">
        <div
          className={`menu-item ${activeTab === "uae" ? "active" : ""}`}
          onClick={() => setActiveTab("uae")}
        >
        5asec UAE
        </div>

        <div
          className={`menu-item ${activeTab === "history" ? "active" : ""}`}
          onClick={() => setActiveTab("history")}
        >
          History
        </div>

        <div
          className={`menu-item ${activeTab === "health" ? "active" : ""}`}
          onClick={() => setActiveTab("health")}
        >
          Protecting Your Health
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="five-sec-content">
        <h2>{tabContent[activeTab].title}</h2>
        <p>{tabContent[activeTab].desc}</p>
        <p className="extra-text">{tabContent[activeTab].extra}</p>
      </div>
    </div>
        </div>
    )
}