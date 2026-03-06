import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import TheaderHeader from "../TheaderHeader/TheaderHeader";

import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import "./Header.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
const logo = "./main_logos.png"
const image23 = "/sabmenu/images.avif"
const image25 = "/sabmenu/GettyImages-929976910.jpg";

const image26 = "/sabmenu/images56.jpg";

function Header() {
  const [lang, setLang] = useState("EN");
  const [showServices, setShowServices] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const [showMega, setShowMega] = useState(false);

  const handleMenuClick = () => {
    setShowOffcanvas(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  const handleMenuClickitmes = () => {
    setShowMega(false)
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>


      <div className="theaderHeader">
        <div className="marquee">
          <div className="marquee-content">
            <span>📢 Premium & Delicate Garment Care</span>
            <span className="divider">|</span>
            <span>
              Get 30% Cashback on your first laundry order. Use Code:
              <strong className="code"> APP30 </strong>
            </span>
            <span className="divider">|</span>
            <span>5% Cashback on your first laundry order. T&C Apply</span>

            {/* Duplicate for smooth infinite scroll */}
            <span>📢 Premium & Delicate Garment Care</span>
            <span className="divider">|</span>
            <span>
              Get 30% Cashback on your first laundry order. Use Code:
              <strong className="code"> APP30 </strong>
            </span>
            <span className="divider">|</span>
            <span>5% Cashback on your first laundry order. T&C Apply</span>
          </div>
        </div>
      </div>
      <Navbar expand="xl" className="main-navbar mt-4" fixed="top">
        <Container fluid className="px-5 mt-3">

          {/* LOGO */}
          <Navbar.Brand href="/" className="logo" to="/">
            {/* <span className="logo-text">5àSec</span>
          <small>TEXTILE EXPERT</small> */}

            <div className="logo-wrapper">
              <img src={logo} alt="" className="logo" />
            </div>
          </Navbar.Brand>

          {/* TOGGLER */}
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-sm" style={{ backgroundColor: "white", color: "black" }}
            onClick={() => setShowOffcanvas(true)}
          />
          {/* OFFCANVAS */}
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-xl"
            placement="end"
            className="main-offcanvas"
            show={showOffcanvas}
            onHide={() => setShowOffcanvas(false)}
          >

            <Offcanvas.Header closeButton className="mobile-header">
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body className="menu-body">

              {/* CENTER MENU */}
              <Nav className="main-menu">
                <div
                  className="services-mega-wrapper"
                  onMouseEnter={() => window.innerWidth > 991 && setShowMega(true)}
                  onMouseLeave={() => window.innerWidth > 991 && setShowMega(false)}
                >
                  <span
                    className="nav-link mega-trigger"
                    onClick={() => setShowMega(prev => !prev)}
                  >
                    SERVICES ▾
                  </span>


                  {showMega && (
                    <div className="mega-menu">
                      <div className="mega-grid" onMouseLeave={() => setShowMega(false)}
                      >

                        {/* COLUMN 1 */}
                        <div className="mega-col" onClick={handleMenuClickitmes}>
                          <img
                            src={image23}
                            alt=""
                          />
                          <h6>Expert Services</h6>
                          <NavLink to="/expert-services" onClick={handleMenuClick}
                            style={{ textDecoration: "none" }}>
                            <p>Clean & Press</p>
                          </NavLink>
                          <NavLink to="/press-only" style={{ textDecoration: "none" }} onClick={handleMenuClick}>
                            <p> Press Only</p>
                          </NavLink>

                          <NavLink to="/drycleaning" style={{ textDecoration: "none" }} onClick={handleMenuClick}>
                            <p>Dry Cleaning</p>
                          </NavLink>
                          <NavLink to="/washfold" style={{ textDecoration: "none" }} onClick={handleMenuClick}>
                            <p>Wash & Fold</p>
                          </NavLink>
                        </div>



                        {/* COLUMN 2 */}
                        <div className="mega-col" onClick={handleMenuClickitmes}>
                          <img
                            src={image25}
                            // src="https://5asec.ae/wp-content/uploads/2023/03/Rectangle-20.png"
                            alt=""
                          />
                          <h6>5asecExclusive Services
                          </h6>

                          <NavLink to="/maxima" style={{ textDecoration: "none" }} onClick={handleMenuClick}>
                            <p>Maxima</p>
                          </NavLink>
                          <NavLink to="/jaimarobe" style={{ textDecoration: "none" }} onClick={handleMenuClick}>
                            <p>J’aime ma</p>
                          </NavLink>
                          <NavLink to="/finishing" style={{ textDecoration: "none" }} onClick={handleMenuClick}>
                            <p>Robe Finishing</p>
                          </NavLink>

                          {/* <p>Starching</p> */}
                        </div>

                        {/* COLUMN 3 */}
                        <div className="mega-col" onClick={handleMenuClickitmes}>
                          <img
                            src="https://5asec.ae/wp-content/uploads/2023/03/Rectangle-21.png"
                            alt=""
                          />
                          <h6>          ADD-ON SERVICES

                          </h6>
                          <NavLink to="/whiteplus" style={{ textDecoration: "none" }} onClick={handleMenuClick}>
                            <p>White+</p>
                          </NavLink>

                          <NavLink to="/finishing" style={{ textDecoration: "none" }} onClick={handleMenuClick}>
                            <p>Finishing</p>
                          </NavLink>


                          <NavLink to="/stain-revention" style={{ textDecoration: "none" }} onClick={handleMenuClick}>
                            <p>Stain Prevention</p>            </NavLink>


                          <NavLink to="/starching" style={{ textDecoration: "none" }} onClick={handleMenuClick}>

                            <p>Starching</p>
                          </NavLink>

                        </div>

                        {/* COLUMN 4 */}
                        <div className="mega-col" onClick={handleMenuClickitmes}>
                          <img
                            src="https://5asec.ae/wp-content/uploads/2023/03/image-47.png"
                            alt=""
                          />
                          <h6>SHOE & BAG CARE</h6>

                          <NavLink to="/shoe-care" style={{ textDecoration: "none" }} onClick={handleMenuClick}>

                            <p>Shoe Care</p>
                          </NavLink>
                          <NavLink to="/bagcare-section" style={{ textDecoration: "none" }} onClick={handleMenuClick}>

                            <p>Bag Care</p>
                          </NavLink>



                        </div>


                        <div className="mega-col" onClick={handleMenuClickitmes}>
                          <img
                            src="https://5asec.ae/wp-content/uploads/2023/03/image-49.png"
                            alt=""
                          />
                          <h6>HOME, HEALTH & HYGIENE</h6>

                          <NavLink to="/sanitization-service" style={{ textDecoration: "none" }} onClick={handleMenuClick}>
                            <p>Home Sanitization Service</p>
                          </NavLink>

                          <p>Linen Care</p>


                          <NavLink to="/carpet-cleaning" style={{ textDecoration: "none" }} onClick={handleMenuClick}>
                            <p>Carpet Cleaning</p>
                          </NavLink>

                        </div>
                        <div className="mega-col" onClick={handleMenuClickitmes}>
                          <img
                            src={image26} alt=""
                          />
                          <h6> MONTHLY PLANS</h6>
                          <NavLink to="/monthly-plans" style={{ textDecoration: "none" }} onClick={handleMenuClick}>
                            <p>Wash & Fold</p>
                          </NavLink>


                          <NavLink to="/expert-services" onClick={handleMenuClick}
                            style={{ textDecoration: "none" }}>
                            <p>Clean & Press</p>
                          </NavLink>
                        </div>

                      </div>
                    </div>
                  )}
                </div>


                <NavLink
                  to="/laundry-offer"
                  className="nav-link"
                  onClick={handleMenuClick}
                >
                  OFFERS
                </NavLink>

                <NavLink
                  to="/laundry-price"
                  className="nav-link"
                  onClick={handleMenuClick}
                >
                  PRICES
                </NavLink>

                <NavLink
                  to="/maxima"
                  className="nav-link"
                  onClick={handleMenuClick}
                >
                  MAXIMA
                </NavLink>

                <NavLink
                  to="/booknow-laundry"
                  className="nav-link"
                  onClick={handleMenuClick}
                >
                  <Button className="book-btn-header">
                    BOOK NOW →
                  </Button>

                </NavLink>

                {/* <NavLink to="/booknow-laundry">
                
                </NavLink> */}
              </Nav>

              {/* RIGHT SIDE / BOTTOM SAME SECTION */}
              <div className="right-section">
                {/* <NavDropdown
                  title={
                    <span className="lang-trigger">
                      🇬🇧 {lang}
                    </span>
                  }
                  align="end"
                  className="lang-dropdown"
                >
                  <NavDropdown.Item onClick={() => setLang("EN")}>
                    🇬🇧 EN
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setLang("AR")}>
                    🇸🇦 AR
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setLang("RU")}>
                    🇷🇺 RU
                  </NavDropdown.Item>
                </NavDropdown> */}

                <Button
                  className="app-btn call-btn p-2 mt-3"
                  onClick={() => window.location.href = "tel:0545718455"}
                >
                 <i className="fas fa-phone-alt"></i> &nbsp; &nbsp; 0545718455
                </Button>


                {/* MOBILE EXTRA */}
                <div className="mobile-bottom">
                  <div className="download-sectionsss">
                    <p>Download Our Mobile App</p>

                    <div className="store-buttons">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                        alt="Google Play"
                      />
                      <img
                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                        alt="App Store"
                      />
                    </div>
                  </div>

                  <div className="social-section">
                    <p>Follow Us</p>
                    <div className="social-icons">
                      <FaFacebookF />
                      <FaTwitter />
                      <FaLinkedinIn />
                      <FaInstagram />
                      <FaWhatsapp />
                    </div>
                  </div>
                </div>

              </div>

            </Offcanvas.Body>
          </Navbar.Offcanvas>

        </Container>
      </Navbar>
    </div>

  );
}

export default Header;
