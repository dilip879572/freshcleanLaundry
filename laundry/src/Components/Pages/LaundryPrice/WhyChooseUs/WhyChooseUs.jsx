// WhyChooseUs.jsx
import React from "react";
import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-container">
        {/* LEFT */}
        <div className="why-left">
          <h2>Why Choose Us</h2>
          <p>
            Experience hassle-free laundry with quick, reliable service,
            affordable rates, and premium care for every item. We prioritize
            convenience with easy scheduling, doorstep pickup and delivery,
            and eco-friendly products for a fresher, greener clean.
          </p>

          <h3>Values & Experience</h3>
          <p>
            Our service is designed to make laundry simple and stress-free. We
            use high-quality, eco-friendly products to protect both your clothes
            and the environment. With flexible scheduling, we offer fast
            turnarounds to fit your lifestyle, plus transparent pricing with no
            hidden fees.
          </p>

          <button className="why-btn">Get Service Now</button>
        </div>

        {/* RIGHT */}
        <div className="why-right">
          <Feature title="Eco-Friendly" desc="Our front loading machines consume 3 times less water than the conventional washing machines." icon="🌱" />
          <Feature title="Affordable Pricing" desc="The amount we charge is equivalent to the cost you bear to get the laundry done at your home." icon="%" />
          <Feature title="Convenience" desc="With just a tap of a button, your laundry gets done, giving your leisure time to spend with family and friends." icon="⏱" />
          <Feature title="Packaging" desc="Trust our team to handle every item with care, from delicate fabrics to everyday essentials." icon="👕" />
          <Feature title="Quality" desc="We use products that revive your clothes and give a new feel to them." icon="🏅" />
          <Feature title="Community" desc="We collect your donated clothes and spread your love & care to the needy ones." icon="🤝" />
        </div>
      </div>
    </section>
  );
}

function Feature({ title, desc, icon }) {
  return (
    <div className="feature-box">
      <div className="feature-icon">{icon}</div>
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}


