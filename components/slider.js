import React from "react";
import Image from "next/image";
import Company from "../public/images/company-logo.png";
import SliderApi from "./sliderApi";
import Counter from "./counter";

export default function Slider() {
  return (
    <div>
      {" "}
      <div style={{ textAlign: "center" }} data-aos="zoom-in-up">
        <Image src={Company} alt="company" />
      </div>
      <Counter />
      <div className="slider" data-aos="fade-up">
        <div className="slide-track">
          {SliderApi.map((value, i) => (
            <div className="slide" key={i}>
              <Image className="slide-image" src={value.url} alt="slider" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
