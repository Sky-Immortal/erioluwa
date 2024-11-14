import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

function SocialButton() {
  const phoneNumber = "+234 815 615 6947"; // Replace with your actual phone number

  const copyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      alert("Phone number copied to clipboard!"); // Optional: Notify the user
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
  };

  return (
    <div className="hero__social position-absolute top-50 start-0 translate-middle-y d-none d-md-block">
      <div className="p-2">
        <OverlayTrigger
          placement="right"
          overlay={<Tooltip id="phone-tooltip">{phoneNumber}</Tooltip>} // Show the phone number on hover
        >
          <button className="nav-link active" onClick={copyToClipboard}>
            <i className="fa-solid fa-phone fa-xl"></i> {/* Phone icon */}
          </button>
        </OverlayTrigger>
      </div>
      <div className="p-2">
        <OverlayTrigger
          placement="right"
          overlay={<Tooltip id="email-tooltip">Email: derricck61@gmail.com</Tooltip>}
        >
          <a className="nav-link active" href="mailto:derricck61@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-envelope fa-xl"></i> {/* Mail icon */}
          </a>
        </OverlayTrigger>
      </div>
    </div>
  );
}

export default SocialButton;