import React from "react";
import Image from "next/image";
import Logo from "../public/images/logo.jpg";
import Background from "../public/images/background.png";
import { BsFillCheckCircleFill } from "react-icons/bs";

export default function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-page-container" data-aos="fade-right">
        <div className="landing-page-line1">THE CLIENT PORTAL FOR BULLHORN</div>
        <div className="landing-page-line2">
          Make candidate <span className="landing-page-line2-underline">submissions</span>
        </div>
        <div className="landing-page-line3">your competitive advantage</div>
        <div className="landing-page-line4">
          <div className="landing-page-line4-display">
            <BsFillCheckCircleFill style={{ color: "green" }} />
            50% faster client feedback
          </div>
          <div className="landing-page-line4-display">
            <BsFillCheckCircleFill style={{ color: "green" }} />
            Improve fill ratios
          </div>
        </div>
        <div className="landing-page-line5">
          <button className="landing-page-line5-button">Book a demo</button>
        </div>
        <div className="landing-page-line6">
          Submit candidates to clients as a branded link instead of attaching resumes to an email.
        </div>
      </div>
      <Image
        className="landing-page-image"
        src={Background}
        width="400px"
        height="400px"
        data-aos="fade-left"
        alt="landing page"
      />
    </div>
  );
}
