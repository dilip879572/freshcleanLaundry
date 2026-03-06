import Slider from "react-slick";
import { FaTshirt } from "react-icons/fa";
 
 
const services = [
  {
    title: "Clean & Press",
    iconColor: "#FF6600",
     icons:["/images/Services/bagcare-1-n-png.webp"], 
    description: "Expert Dry Cleaning and Laundry",
    subDescription: "Cleaned according to care label instructions",
  },
  {
    title: "Press Only",
    iconColor: "#4B2E83",
     icons:["/images/Services/Clean-and-Press-png.jpeg"], 
    description: "Quality pressing done the fresh Clean",
    subDescription: "Items pressed according to care label instructions",
  },
  {
    title: "Maxima",
    iconColor: "#F0B429",
     icons:["/images/Services/Maxima-e1660667625318-png.jpeg"], 
    description: "Perfect for most delicate and designer items",
    subDescription: "Ideal for items with beads, sequins, silk, wool, sache, bespoke detailing etc.",
  },
   {
    title: "Maxima",
    iconColor: "#F0B429",
     icons:["/images/Services/PressOnlyIcons-png.jpeg"], 
    description: "Perfect for most delicate and designer items",
    subDescription: "Ideal for items with beads, sequins, silk, wool, sache, bespoke detailing etc.",
  },
 
   {
    title: "Maxima",
    iconColor: "#F0B429",
     icons:["/images/Services/shoecare-1-n-png.webp"], 
    description: "Perfect for most delicate and designer items",
    subDescription: "Ideal for items with beads, sequins, silk, wool, sache, bespoke detailing etc.",
  },
];
 
const OurServices = () => {
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  pauseOnHover: true,

  autoplay: true,          // ✅ automatic slide
  autoplaySpeed: 1000,     // ✅ 3 seconds me next slide

  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
};

 
  return (
    <div className="mt-3" style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem" }}>
      <h2 style={{ textAlign: "center", color: "#4B2E83",fontWeight:"700" }}>Our Services</h2>
      <p style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
      Freash Clean is committed to providing high-quality, sustainable dry cleaning  and laundry services. 
         excellence ensures a wide array of services and products tailored to our customers in the UAE.
          
      </p>
      <Slider {...settings}>
        {services.map((service, idx) => (
          <div key={idx} style={{ padding: "1rem" }}>
            <div
              style={{
                background: "#F7EFEA",
                borderRadius: "10px",
                textAlign: "center",
                padding: "2rem 1rem",
                minHeight: "400px",
              }}
            >
         
              {/* <h3 style={{ color: "#4B2E83", marginBottom: "1rem" }}>
                {service.title}
              </h3> */}
 
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                  marginBottom: "1rem",
                }}
              >
                {service.icons.map((icon, i) => (
                  <div
                    key={i}
                  
                  >
      <img src={icon} alt="service icon" style={{width:"200px",height:"200px"}} />
                  </div>
                ))}
              </div>
 
              <p style={{ fontSize: "14px", color: "#666" }}>
                Items charged separately
              </p>
              <h4 style={{ color: "#4B2E83", margin: "0.5rem 0" }}>
                {service.description}
              </h4>
              <p style={{ fontSize: "14px", color: "#666" }}>
                {service.subDescription}
              </p>
 
              <button
                style={{
                  background: "#164887",
                  border: "none",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginTop: "1rem",
                }}
              >
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
 
export default OurServices;