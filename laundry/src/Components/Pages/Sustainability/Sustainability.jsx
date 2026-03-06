import React, { useEffect } from 'react'
import "./Sustainability.css";
import AOS from "aos";
import { Container, Row, Col, Button } from "react-bootstrap";
import "aos/dist/aos.css";
const showimages = "/sabmenu/family-doing-laundry_566707-324.jpg";
const showimages2 = "/sabmenu/beautiful-young-woman-is-smiling-while-doing-laundry-home_566707-2447.jpg";
const showimages3 = "/sabmenu/istockphoto-1313552720-612x612.jpg";
const showimages4 = "/sabmenu/helloji.jpg";

export default function Sustainability() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
  }, []);
  return (
    <div className="container-fluid sustainability-main mt-5">
      <section class="sustainability-section">
        <div class="container">
          <div class="left-images">
            <img
              src={showimages} alt="Eco bag"
              class="img-overlay"
            />
          </div>

          <div class="right-content">
            <h2>Sustainability</h2>
            <h4>Leading the way for Eco-friendly laundry in UAE</h4>
            <p>
              Acting responsibly in the industry we work in is one of our
              core brand values and we take pride in our decision-making
              process which always considers the environmental and social
              impact as a key factor.
            </p>
          </div>
        </div>
      </section>


      <section className="sustainability-section" data-aos="fade-down">
        <Container>
          <Row className="align-items-center">
            {/* LEFT CONTENT */}
            {/* RIGHT IMAGE */}
            <Col lg={6} md={12} className="image-col">
              <img
                src="https://5asec.ae/wp-content/uploads/elementor/thumbs/Re-usable-Laundry-Bags-q5v2l9glht6tpfw9h5ts6j536yvw8smry97tlz2y4c.png"
                alt="" />
              <h1>
                Reusable SuitBags
              </h1>
              <div className="offer-text mt-5">
                <p>
                  We wash your laundry and your laundry bag. Instead of working with plastic bags, we provide you with your own laundry bag, which you can conveniently fill and pass over to us when we collect your items or you drop your order in-store. We then wash your items and your bags and deliver it back to you to start the cycle again.
                  <br />
                  <br />
                  We will not charge you to wash your laundry bag along with your items. All additional laundry bags can be purchased at 15ê per bag (please note this cost comes with no profit to5asec UAE.)
                </p>

              </div>

            </Col>
            <Col lg={6} md={12} className="content">
              <img
                src={showimages2}
                alt="Shoe Care"
                className="sustainability-img"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="products-section" data-aos="fade-down">
        <Container>
          <Row className="align-items-center">
            {/* LEFT CONTENT */}


            {/* RIGHT IMAGE */}
            <Col lg={6} md={12} className="image-col">
              <h1>
                Our products and ingredients are 100% perchlo free.
              </h1>
              <h2>
                Good for your laundry, Good for you...
              </h2>
              <div className="offer-text mt-5">


              </div>

            </Col>
            <Col lg={6} md={12} className="content">
              <img
                src="https://5asec.ae/wp-content/uploads/2022/07/Screen-Shot-2022-07-22-at-1.06-1.png"
                alt="Shoe Care"
                className="sustainability-img"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sustainability-section" data-aos="fade-down">
        <Container>
          <Row className="align-items-center">
            {/* LEFT CONTENT */}


            {/* RIGHT IMAGE */}
            <Col lg={6} md={12} className="image-col">
              <img
                src="https://5asec.ae/wp-content/uploads/elementor/thumbs/Perchlo-free-dry-cleaning-q5v2l9glht6tpfw9h5ts6j536yvw8smry97tlz2y4c.png"

                alt="" />
              <h1>
                Perchlo Free Dry Cleaning

              </h1>
              <div className="offer-text mt-5">
                <p>
                  Perchlorethylene, also known as just ‘perchlo’ is a commonly used dry-cleaning solvent, particularly outside of the EU and US. Perchlo has a very controversial reputation as repeated inhalation and/or physical contact with the solvent is considered to cause severe health conditions to humans. This can be due to exposure in laundry production facilities but also perc residues that remain in clothing post the dry-cleaning process.                  <br />
                  5asec has completely eliminated the use of perchlo in the dry-cleaning process and has moved to another process which uses a hydrocarbon-based solvent. This solvent has undergone testing on its effects on humans’ health with no reported harmful effects, yet has the same effective cleaning effect as perchlo. It is also important to point out that hydrocarbon solvents break down naturally in the environment, therefore avoid groundwater contamination.     <br />
                  In addition to the use of hydrocarbon, we also clean our machines and particularly the so called ‘water separator’ and ‘distillation tank’ once a week. This is done with an exclusively developed disinfectant which ensures all accumulated bacteria from previous cycles are fully removed and not pushed into any future cleaning programs.
                </p>
              </div>

            </Col>
            <Col lg={6} md={12} className="content">
              <img
                src={showimages3}
                alt="Shoe Care"
                className="sustainability-img"
              />
            </Col>
          </Row>
        </Container>
      </section>









      <section className="sustainability-section" data-aos="fade-down">
        <Container>
          <Row className="align-items-center">
            {/* LEFT CONTENT */}
            <Col lg={6} md={12} className="content">
              <img
                src={showimages4}
                alt="Shoe Care"
                className="sustainability-img"
              />
            </Col>

            {/* RIGHT IMAGE */}
            <Col lg={6} md={12} className="image-col">
              <img src="https://5asec.ae/wp-content/uploads/elementor/thumbs/Reduction-of-water-usage-q5v2l9glht6tpfw9h5ts6j536yvw8smry97tlz2y4c.png" alt="" />
              <h1>
                30% Less Water
              </h1>
              <div className="offer-text mt-5">
                <p>
                  Our dry cleaning and laundry service utilizes machine programs and detergents that consume 30% less water than standard commercial washing machines.
                  <br />
                  <br />
                  For standard detergents to function effectively, a lot of foam must be created, which requires a lot of water to rinse off afterward. Our programs and detergents produce a small amount of foam when they activate, hence using less water during rinsing.
                  <br />
                  <br />
                  Each cleaning program includes a final step that neutralizes all cleaning agents used to treat the clothing in order to protect the fiber and our customer’s skin.
                </p>
              </div>

            </Col>

          </Row>
        </Container>
      </section>



      <section className="products-section" data-aos="fade-down">
        <Container>
          <Row className="align-items-center">
            {/* LEFT CONTENT */}
            <Col lg={6} md={12} className="content">
              <img
                src="https://5asec.ae/wp-content/uploads/2022/07/hanger-1.png"
                alt="Shoe Care"
                className="sustainability-img"
              />
            </Col>

            {/* RIGHT IMAGE */}
            <Col lg={6} md={12} className="image-col">
              <img src="https://5asec.ae/wp-content/uploads/elementor/thumbs/Hanger-recycling-program-1-q5v2l9glht6tpfw9h5ts6j536yvw8smry97tlz2y4c.png" alt="" />
              <h1>
                Hanger ReUse Initiative
              </h1>

              <div className="offer-text mt-5">
                <p>
                  In our attempt to offer a sustainable laundry service in Dubai, our hanger recycling program, which allows our customers to return our hangers for reuse, is a simple but effective way for customers to help us reduce our reliance on single-use hangers and the associated environmental impact of getting them produced and transported to us. All hangers are sanitised and reused for customer orders.
                </p>

              </div>

            </Col>

          </Row>
        </Container>
      </section>





      <section className="sustainability-section" data-aos="fade-down">
        <Container>
          <Row className="align-items-start">
            {/* LEFT CONTENT */}


            {/* RIGHT IMAGE */}
            <Col lg={6} md={12} className="image-col">
              <img src="https://5asec.ae/wp-content/uploads/elementor/thumbs/Washing-on-low-temperatures-q5v2l9glht6tpfw9h5ts6j536yvw8smry97tlz2y4c.png" alt="" />
              <h1>
                30% Less Energy

              </h1>
              <div className="offer-text mt-5">
                <p>
                  Our custom built programs and detergents allow us to wash at lower temperatures than laundry industry averages, whilst achieving the same outcomes and sterilization of garments.                  <br />
                  <br />
                  5asec has invested in extensive research working in collaboration with detergent suppliers, textile engineers and machine manufacturers to create washing programs that reduce energy consumption by up to 30%.                  <br />
                  <br />
                  With our expert laundry services, the lifecycle of your clothes and their colours will extend when washed with lower-temperature water.                </p>
              </div>

            </Col>

            <Col lg={6} md={12} className="image-col">
              <img src="https://5asec.ae/wp-content/uploads/elementor/thumbs/100_-Phosphate-free-chemicals-q5v2l9glht6tpfw9h5ts6j536yvw8smry97tlz2y4c.png" alt="" />
              <h1>
                100% Phosphate-Free Chemicals

              </h1>
              <div className="offer-text mt-5">
                <p>
                  Phosphate is a mineral used in detergents for the laundry industry, as well as your conventional washing machines at home.
                  <br />

                  Though a very commonly used ingredient, phosphate has a severe negative impact on the ecosystem of our waters. It provokes a strong growth of algae, which then consumes large amounts of oxygen in the water, ultimately sharply reducing or eliminating all fish stock and other organisms to survive in our local waters.                  <br />
                  <br />
                  We at5asec have completely stepped away from the use of phosphate in any of our detergents and have opted for the eco-friendly range. Alternatives are indeed readily available for all providers and users, however, come with an additional cost and are therefore often neglected.                </p>
              </div>

            </Col>
          </Row>
        </Container>
      </section>

    </div>

  )
}


