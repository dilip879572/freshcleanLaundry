import React, { useState } from "react";
import "./TermsFaq.css";

const faqs = [
  {
    q: "What products/chemicals do you use?",
    a: "We use advanced, water-based, alcohol-free Zoono products that are safe for babies, pets, and furniture while providing long-lasting protection."
  },
  {
    q: "How can you ensure that my house/room is sanitize well and free from germs?",
    a: "Our trained professionals follow a standardized sanitisation process using certified equipment and Zoono solutions that eliminate up to 99.99% of germs."
  },
  {
    q: "How often should I sanitise my home?",
    a: "We recommend sanitising high-touch areas every 2–4 weeks depending on usage and household size for optimal protection."
  },
  {
    q: "Is your product approved by Municipality?",
    a: "Yes, all products used in our sanitisation services are certified and approved by Dubai Municipality."
  }
];

export default function TermsFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="termsfaq-section">
      <div className="termsfaq-container">

        {/* LEFT SIDE */}
        <div className="terms-box">
          <h2>Terms and Conditions</h2>
          <ul>
            <li>Not Applicable for 50% Cashback first-time order discount</li>
            <li>Not Applicable for 5% Cashback rewards</li>
            <li>Service only available in Dubai</li>
            <li>Reward points cannot be used to purchase</li>
            <li>Contactless payment options available</li>
            <li>Cannot be combined with any Partnership & Loyalty discounts</li>
            <li>Cannot be combined with any offers, promotions, or vouchers</li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="faq-box">
          <h2>FAQs</h2>

          {faqs.map((item, index) => (
            <div
              className={`faq-item ${openIndex === index ? "active" : ""}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span className="faq-icon">
                  {openIndex === index ? "−" : "+"}
                </span>
                <p>{item.q}</p>
              </div>

              <div className="faq-answer">
                {item.a}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
