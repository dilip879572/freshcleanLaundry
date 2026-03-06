// import React from "react";
// import "./Footer.css";
// import { NavLink } from "react-router-dom";
// const logo = "./logo1.jpg"
// export default function Footer() {
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   };

//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="row footer-row">

//           {/* BRAND */}
//           <div className="col-lg-4 col-md-6 footer-col brand-col">
//             <img src={logo} alt="5asec" className="footer-logo" />

//             <p className="footer-text">
//               5asec is the world leader in dry cleaning and laundry operating in
//               33 countries across Europe, Asia, Africa, Australia and the Middle East.
//               Available in Dubai and Abu Dhabi.
//             </p>

//             <div className="payment-icons">
//               <i className="fa-brands fa-cc-visa"></i>
//               <i className="fa-brands fa-cc-mastercard"></i>
//               <i className="fa-brands fa-apple-pay"></i>
//             </div>

//             <p className="copyright">
//               ©5asec. All Rights Reserved
//             </p>
//           </div>

//           {/* LINKS */}
//           <div className="col-lg-2 col-md-6 footer-col">
//             <h5 className="footer-title">Explore</h5>
//             <ul className="footer-links">
//               <li>
//                 <NavLink to="/about" className="nav-link" onClick={scrollToTop}>
//                   About Us
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink to="/sustainability" className="nav-link" onClick={scrollToTop}>
//                   Sustainability
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink to="/service-sreas" className="nav-link" onClick={scrollToTop}>
//                   Service Areas
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink to="/laundry-price" className="nav-link" onClick={scrollToTop}>
//                   Prices
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink to="/faqloundry-qustions" className="nav-link" onClick={scrollToTop}>
//                   FAQs
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink to="/conditions-teams" className="nav-link" onClick={scrollToTop}>
//                   Terms & Conditions
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink to="/contactus" className="nav-link" onClick={scrollToTop}>
//                   Contact Us
//                 </NavLink>
//               </li>

//             </ul>
//           </div>

//           {/* CONTACT */}
//           <div className="col-lg-3 col-md-6 footer-col">
//             <h5 className="footer-title">Contact</h5>
//             <p className="hotline">📞 0545718455</p>
//             <p className="email">✉ support@freash.ae</p>

//             <h5 className="footer-title mt-4">Follow Us</h5>
//             <div className="social-icons">
//               <a href="https://www.facebook.com/share/1DkKUVs6HK/?mibextid=wwXIfr">
//                 <i className="fa-brands fa-facebook-f"></i>
//               </a>

//               <a href="">
//                 <i className="fa-brands fa-instagram"></i>
//               </a>
//               <a href="">
//                 <i className="fa-brands fa-whatsapp"></i>
//               </a>
//               <a href="">
//                 <i className="fa-brands fa-youtube"></i>
//               </a>
//               <a href="">
//                 <i className="fa-brands fa-linkedin-in"></i>
//               </a>
//             </div>
//           </div>

//           {/* APP */}
//           <div className="col-lg-3 col-md-6 footer-col app-col">
//             <h4 className="tagline">Laundry. Redefined.</h4>

//             <h5 className="footer-title">Download App</h5>

//             <div className="app-buttons">
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
//                 alt="Google Play"
//               />
//               <img
//                 src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
//                 alt="App Store"
//               />
//             </div>

//             <a
//                                 href="https://wa.me/0545718455"
//                                 target="_blank"
//                                 rel="noreferrer"
//                                 className="float whatsapp"
//                             >
//                                 <i className="fa-brands fa-whatsapp"></i>
//                             </a>

//                             <div className="float chat">💬</div>
//           </div>


//         </div>
//       </div>
//     </footer>
//   );
// }



import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const logo = "./main_logos.png"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT */}
        <div className="footer-col brand">
          <img src={logo} alt="BrightNok" className="footer-logo" />
          <p>
            Freash Clean Laundry provides premium washing and dry cleaning service
            leveraging mobile based technology. We provide high quality and
            is the world leader in dry cleaning and laundry operating in
            Available in Dubai and Abu Dhabi.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1DkKUVs6HK/?mibextid=wwXIfr"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>






        {/* SERVICES */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li>
              <NavLink to="/expert-services" onClick={scrollToTop}
                style={{ textDecoration: "none" }}>
                <p>Clean & Press</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/press-only" style={{ textDecoration: "none" }} onClick={scrollToTop}>
                <p> Press Only</p>
              </NavLink>
            </li>
            <li>

              <NavLink to="/drycleaning" style={{ textDecoration: "none" }} onClick={scrollToTop}>
                <p>Dry Cleaning</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/washfold" style={{ textDecoration: "none" }} onClick={scrollToTop}>
                <p>Wash & Fold</p>
              </NavLink>
            </li>


            <li>
              <NavLink to="/whiteplus" style={{ textDecoration: "none" }} onClick={scrollToTop}>
                <p>White+</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/monthly-plans" style={{ textDecoration: "none" }} onClick={scrollToTop}>
                <p>Wash & Fold</p>
              </NavLink>

            </li>
            <li>
              <NavLink to="/expert-services" onClick={scrollToTop}
                style={{ textDecoration: "none" }}>
                <p>Clean & Press</p>
              </NavLink>
            </li>


          </ul>
        </div>

        {/* USEFUL LINKS */}
        <div className="footer-col">
          <h3>Usefull link</h3>
          <ul>
           
            <li>
              <NavLink to="/about" className="nav-link" onClick={scrollToTop}>
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink to="/sustainability" className="nav-link" onClick={scrollToTop}>
                Sustainability
              </NavLink>
            </li>

            <li>
              <NavLink to="/service-sreas" className="nav-link" onClick={scrollToTop}>
                Service Areas
              </NavLink>
            </li>

            <li>
              <NavLink to="/laundry-price" className="nav-link" onClick={scrollToTop}>
                Prices
              </NavLink>
            </li>

            <li>
              <NavLink to="/faqloundry-qustions" className="nav-link" onClick={scrollToTop}>
                FAQs
              </NavLink>
            </li>

            <li>
              <NavLink to="/conditions-teams" className="nav-link" onClick={scrollToTop}>
                Terms & Conditions
              </NavLink>
            </li>

            <li>
              <NavLink to="/contactus" className="nav-link" onClick={scrollToTop}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt /> 86, 2nd main road, 4th cross road BEML layout, 33 countries across Europe, Asia, Africa, Australia and the Middle East.               Available in Dubai and Abu Dhabi</p>
          <p><FaPhoneAlt /> 0545718455</p>
          <p><FaEnvelope /> support@freashclean.in</p>
        </div>

        <a
          href="https://wa.me/0545718455"
          target="_blank"
          rel="noreferrer"
          className="float whatsapp"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>

        <div className="float chat">💬</div>
      </div>

      <div className="footer-bottom">
        © Freash Clean Private Limited 2023 | All rights reserved.
      </div>
    </footer>
  );
}

