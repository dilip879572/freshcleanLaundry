import React, { useEffect, useState } from "react";
import "./cookie.css";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("laundry_cookie_consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("laundry_cookie_consent", "accepted");
    setShow(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("laundry_cookie_consent", "rejected");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-overlay">
      <div className="cookie-box">
        <h3>We value your privacy</h3>
        <p>
          We use cookies to improve your laundry booking experience,
          process orders, and analyze website traffic.
        </p>

        <div className="cookie-actions">
          <button className="btn-outline" onClick={rejectCookies}>
            Reject All
          </button>
          <button className="btn-primary" onClick={acceptCookies}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
