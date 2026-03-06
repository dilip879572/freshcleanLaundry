import React from "react";
import { useNavigate } from "react-router-dom";
import "./areas.css";
import { areasData } from "./data/areasData";

const Areas = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid areas-container">
      <h1 className="text-center">Areas we serve</h1>
      <p className="subtitle text-center">
        Reliable laundry & dry cleaning services available across Dubai and Abu Dhabi
      </p>

      <div className="row">
        {/* LEFT SPACE */}
        <div className="col-sm-1"></div>

        {/* CENTER CONTENT */}
        <div className="col-sm-10">
          {/* DUBAI */}
          <h2>Dubai</h2>
          <div className="grid">
            {areasData.Dubai.map((area) => (
              <div
                key={area}
                className="area-item"
                onClick={() => navigate(`/area/${area}`)}
              >
                ✔ {area}
              </div>
            ))}
          </div>

          {/* ABU DHABI */}
          <h2 style={{ marginTop: "50px" }}>Abu Dhabi</h2>
          <div className="grid">
            {areasData["Abu Dhabi"].map((area) => (
              <div
                key={area}
                className="area-item"
                onClick={() => navigate(`/area/${area}`)}
              >
                ✔ {area}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SPACE */}
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
};

export default Areas;
