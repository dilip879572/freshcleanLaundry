import React from "react";
import "./WashFoldPlans.css";
const monthplay ="/sabmenu/1718881711.png"
export default function WashFoldPlans() {
  return (
    <section className="wash-section">
      <h2 className="wash-title">Wash & Fold Monthly Plans</h2>

      <div className="wash-container">
        {/* LEFT CARD */}
        <div className="wash-left">
            {/* <div className="wash-logo">5àsec<br /><span>TEXTILE EXPERT</span></div> */}

           

            <div className="bag">
              <img
src={monthplay}
alt="Laundry Bag" style={{marginTop:"140px",lineHeight:"100px"}}
              />
            </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="wash-right">
          <h4>For daily laundry</h4>

          <ul className="wash-list-price">
            <li>1x bag - <strong>77.00</strong></li>
            <li>3x bags per month - <strong>201.00</strong></li>
            <li>
              5x bags per month - <strong>300.1</strong> (just 62.02 per bag)
            </li>
          </ul>

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
