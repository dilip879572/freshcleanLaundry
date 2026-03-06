import React from "react";
import "./ShirtsMonthlyPlans.css";

export default function ShirtsMonthlyPlans() {
  return (
    <section className="wash-section">
      <h2 className="wash-title">Shirts & Trousers Monthly Plans
</h2>

      <div className="shirtsmonths-container">
        {/* LEFT CARD */}
        <div className="wash-left">
            {/* <div className="wash-logo">5àsec<br /><span>TEXTILE EXPERT</span></div> */}

           

            <div className="bag">
              <img
                src="https://5asec.ae/wp-content/uploads/2022/07/Screen-Shot-2022-07-25-at-8.34.22-PM.png"
                alt="Laundry Bag"
              />
            </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="wash-right">
          <h4  style={{textAlign:"start"}}>For immaculate work outfits
</h4>



          <ul className="wash-list-price">
            <b style={{textAlign:"start"}}>Just ê 300.00 per month</b>
            <li>20 Shirts/Polo Shirts </li>
            <li>15 Shirts/Polo Shirts + 5 Trousers </li>
            <li>
              10 Shirts/ Polo Shirts + 10 Trousers
            </li>
          </ul>

<h6 style={{textAlign:"start"}}>50 Shirts Package </h6>
<p  style={{textAlign:"start"}}>50 Shirt/Polo Shirts valid for 3 months from ê 14.50 per shirt
</p>

          <h5>T&Cs Apply</h5>
          <ul className="wash-list">
            <li>Valid for 30 days from the date purchased</li>
            <li>Ironing not included</li>
            <li>For items washable up to 40°C</li>
            <li>All items washed, dried, and folded</li>
            <li>Cannot be combined with other offers</li>
            <li>Unused bags balance cannot be refunded</li>
            <li>Unused bags balance cannot be rolled onto the next month</li>
            <li>Not applicable for Urgent Service</li>
            <li>Prices are exclusive of 5% VAT</li>
          </ul>

          <div className="subscribe-box">
            <h5>How To Subscribe</h5>
            <p>
              Open5asec App → Go to Offers page → Monthly Plans → Select Your
              Package → Make Payment → Place your order
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
