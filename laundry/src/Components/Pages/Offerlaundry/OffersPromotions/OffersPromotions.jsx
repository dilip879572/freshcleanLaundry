import { Container, Row, Col, Button } from "react-bootstrap";
import "./OffersPromotions.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const caseback= "/images/home/cashback.png"
export default function OffersPromotions() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
  }, []);
  return (
    <section className="offers-section">
      <Container fluid className="px-lg-5" data-aos="fade-down">
        <Row className="align-items-center">
          {/* LEFT CONTENT */}
          <Col lg={6} md={12} className="text-white mb-5 mb-lg-0">
            <h1 className="offers-title">Offers & Promotions</h1>

            <p className="offers-desc">
              Check out the latest discounts and promotions on offers from  fresh clean.
              Send us a message if you require any information.
            </p>

            <p className="offers-sub">Try the fresh clean Experience Today</p>

                    <div className="app-group">
                <button className="btn primary order-offers">Order</button>
            <button className="btn secondary pricing-offers">Pricing</button>
</div>

            {/* <div className="rating-wrap mt-5 d-flex align-items-center gap-4 flex-wrap">
              <img src="https://berqwp-cdn.sfo3.cdn.digitaloceanspaces.com/cache/5asec.ae/wp-content/uploads/2024/03/new-van.webp?bwp" alt="5asecvan" className="van-img" />

              <div className="rating-box">
                <div className="rating-text">4.8 rating</div>
                <div className="stars">★★★★★</div>
              </div>
            </div> */}
          </Col>

          {/* RIGHT IMAGE */}
          <Col lg={6} md={12} className="text-center">
            <div className="circle-wrap">
             <img src={caseback}             
              alt="Cashback Offer" className="offer-img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
