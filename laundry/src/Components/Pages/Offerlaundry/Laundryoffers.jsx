import React, { useEffect } from "react";
import OffersPromotions from "./OffersPromotions/OffersPromotions";
import { Container, Row, Col, Button } from "react-bootstrap";
import Laundrybaba from "../LaundryEXPRESS/Laundrybaba"; 
import "./OffersPromotions/OffersPromotions.css";
import AOS from "aos";
import "aos/dist/aos.css";
const ShoeCare = "/images/home/ShoeCare.png";
const ShirtsPlan = "/images/home/ShirtsPlan.png";
const ORDER = "/images/home/ORDER.png";
const phones = "/images/home/phone.png"
export default function Laundryoffers() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
  }, []);
  return (
    <div className="Container-fluid py-5">
      <OffersPromotions />
      <section className="shoecare-section" data-aos="zoom-in-down">
        <Container>
          <Row className="align-items-center">
            {/* LEFT CONTENT */}
            <Col lg={6} md={12} className="content">
              <h1>
                Freash Clean ShoeCare <span>30%</span>
                <br />
                CASHBACK ON FIRST ORDER
              </h1>

              <h5 className="mt-3">
                Revive your shoes with Fresh Clean Shoecare
              </h5>

              <div className="offer-text">
                <p>
                  Get your branded shoes cleaned and restored by the experts at Fresh Clean.
                  <br />
                  Book your order across Dubai and get 30% Cashback your first ShoeCare
                  service order today.
                </p>

                <p className="tcs">T&amp;Cs Apply</p>

                <ul className="offer-list">
                  <li>30% Cashback valid for first order only</li>
                  <li>Partnership &amp; Loyalty discounts not applicable</li>
                  <li>5% Cashback rewards not applicable</li>
                  <li>5 days service turnaround</li>
                </ul>
              </div>

              <Button className="offer-btn mt-3">Get Offer</Button>
            </Col>

            {/* RIGHT IMAGE */}
            <Col lg={6} md={12} className="image-col">
              <img
                src={ShoeCare}
                alt="Shoe Care"
                className="banner-img"
              />
            </Col>
          </Row>
        </Container>
      </section>



      <section className="shoecare-section" data-aos="fade-down">
        <Container>
          <Row className="align-items-center">
            {/* LEFT CONTENT */}
            <Col lg={6} md={12} className="content">
              <img
                src={ShirtsPlan}
                alt="Shoe Care"
                className="banner-img"
              />
            </Col>

            {/* RIGHT IMAGE */}
            <Col lg={6} md={12} className="image-col">
              <h1>
                The New 50 Shirts Plan
                <span>30%</span>
              </h1>
              <h5 className="mt-3">
                Revive your shoes with fresh clean Shoecare
              </h5>

              <div className="offer-text">
                <p>
                  Perfect for users who love crisp shirts and polo shirts. Try the new prepaid 50 Shirts plan from5asec valid for three months at ê14.50 per shirt. Pay once and book pick up of your shirts whenever you need it. Simple.
                </p>


                <p className="tcs">T&amp;Cs Apply</p>

                <ul className="offer-list">
                  {/* <li>Valid for Shirts and Polo T-shirts only</li> */}
                  <li>Valid for 3 months from the date purchased</li>
                  <li>Service for Clean & Press service</li>
                  <li>Items will be delivered on a Hanger</li>

                  <li>Not eligible for Cashback
                  </li>
                  <li>Cannot be combined with offers and discounts
                  </li>

                  <li>Balance cannot be transferred to another account

                  </li>

                </ul>
              </div>

              <Button className="offer-btn mt-3">Get Offer</Button>
            </Col>
          </Row>
        </Container>
      </section>


 <div data-aos="fade-up">
<Laundrybaba/>
 </div>


      <section className="shoecare-section">
        <Container>
          <Row className="align-items-center">
            {/* LEFT CONTENT */}
            {/* RIGHT IMAGE */}
            <Col lg={6} md={12} className="image-col">
              <h1>
                <span>30%</span> Cashback on Your First Order
              </h1>
              <div className="offer-text">
                <p>
                  Experience eco-friendly services from #1 trusted laundry and dry cleaning brand in the world.                </p>


                <p className="tcs">T&amp;Cs Apply</p>



                <ul className="offer-list">
                  <li>Applicable for new customers only</li>
                  <li>Offer cannot be used in conjunction with other offers, discounts, promotions or cashback offers
                  </li>
                  <li>Not valid Carpet Cleaning pick up service, Gown preservation service, Alterations Services and Wash & Fold, Linen Care</li>


                </ul>
              </div>

              <Button className="offer-btn mt-3">Get Offer</Button>
            </Col>
            <Col lg={6} md={12} className="content" data-aos="zoom-in-right">
              <img
                src="https://5asec.ae/wp-content/uploads/2025/11/offer-laundry-done.jpeg"
                alt="Shoe Care"
                className="banner-img"
              />
            </Col>
          </Row>
        </Container>
      </section>



      <section className="shoecare-section" data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} className="content">
              <img
                src={ORDER}
                alt="Shoe Care"
                className="banner-img"
              />
            </Col>
            <Col lg={6} md={12} className="image-col">
              <h1>
                fresh clean BagCare – <span>30%</span> CASHBACK ON FIRST ORDER

              </h1>

              <h5 className="mt-3">
                Give your bags a Reju venating staycation at  fresh clean

              </h5>
              <div className="offer-text">
                <p>
                  Get your luxury bags cleaned and  immaculately restored by the experts at5asec. Book your order across Dubai and  Abu Dhabi and enjoy 30% Cashback on your first BagCare service today.
                </p>
                <p className="tcs">T&amp;Cs Apply</p>
                <ul className="offer-list">
                  <li>30% Cashback valid for first BagCare order</li>
                  <li>Partnership & Loyalty discounts not applicable

                  </li>
                  <li>
                    5% Cashback rewards not applicable
                  </li>
                  <li>
                    7 days service turnaround

                  </li>

                </ul>
              </div>

              <Button className="offer-btn mt-3">Get Offer</Button>
            </Col>

          </Row>
        </Container>
      </section>
      <section className="shoecare-section">
        <Container>
          <Row className="align-items-center">

            <Col lg={6} md={12} className="image-col" data-aos="zoom-in">
              <h1>
                Get started in 3 easy steps

              </h1>


              <p className="tcs">T&amp;Cs Apply</p>
              <h5 className="mt-3" style={{ textAlign: "justify" }}>
                1. Download the fresh clen  App
              </h5>
              <div className="offer-text" >
                <p style={{ textAlign: "justify" }}>
                  Available for iOS and Android devices
                </p>
              </div>
              <h5 className="mt-3" style={{ textAlign: "justify" }}>
                2. Schedule A Pick-Up

              </h5>
              <div className="offer-text" >
                <p style={{ textAlign: "justify" }}>
                  Select your FREE pick-up and drop off time slots
                </p>

              </div>
              <h5 className="mt-3" style={{ textAlign: "justify" }}>
                3. Enjoy Efficient Delivery


              </h5>
              <div className="offer-text" >
                <p style={{ textAlign: "justify" }}>
                  We provide fully contactless home delivery in Dubai and Abu Dhabi laundry.
                </p>
              </div>

              <Button className="offer-btn mt-3">Get Offer</Button>
            </Col>


            <Col lg={6} md={12} className="content" data-aos="zoom-in-up">
              <img
                src={phones}
                alt="Shoe Care"
                className="banner-img-phone"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
