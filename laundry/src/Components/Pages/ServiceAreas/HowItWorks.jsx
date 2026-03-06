import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h3 className="how-title">How It Works</h3>
      <h6 className="how-subtitle">Premium laundry made simple.</h6>

      <p className="how-desc">
        We offer premium dry cleaning & laundry services with expert care. We
        pride ourselves on providing convenient, high-quality laundry solutions
        to our valued customers, and here’s how our service works:
      </p>

      <div className="how-steps">
        <div className="step">
          <div className="icon_work purple">👤</div>
          <h5>Schedule a Pickup or Visit our Physical Store</h5>
          <p>
            Order via5asec App, Chat with us on WhatsApp, or Visit our store.
            Simply prepare your items using the5asec bag and stickers.
          </p>
        </div>

        <div className="step">
          <div className="icon_work orange">☕</div>
          <h5>Relax, your items are in good hands</h5>
          <p>
            Each item is inspected, tagged and washed using eco-friendly
            detergents and energy-efficient machines.
          </p>
        </div>

        <div className="step">
          <div className="icon_work gray">🚚</div>
          <h5>We deliver to your doorstep or pickup</h5>
          <p>
            Your immaculately cleaned items are delivered to your door by our
            smiling store associates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
