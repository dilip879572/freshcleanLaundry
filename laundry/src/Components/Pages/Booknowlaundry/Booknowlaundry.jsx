import React from "react";
import "./Booknowlaundry.css";
// exports default Booknowlaundry
import BookNowContanct from "../BookNowContanct/BookNow"
export default function Booknowlaundry() {
  return (
    <div className="container-fluid px-5 py-4 mt-5">

      {/* <BookNowContanct /> */}
      <h5 className="mb-3">Find Our Laundry Location</h5>

      <div className="map-responsive mt-5">
        <iframe
          src="https://www.google.com/maps?q=Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Laundry Location"
        ></iframe>
      </div>
    </div>
  );
}

