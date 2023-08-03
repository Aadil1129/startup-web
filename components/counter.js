import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Counter() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)}>
      <div className="counter-container">
        <div className="counter-box1">
          <div className="counter-number">+14K</div>
          <div className="counter-heading">Tech Jobs</div>
        </div>
        <div className="counter-box2">
          <div className="counter-number">
            {counterOn && <CountUp start={0} end={998374} duration={2} delay={0} />}
          </div>
          <div className="counter-heading">Matches Made</div>
        </div>
        <div className="counter-box3">
          <div className="counter-number">
            {counterOn && <CountUp start={0} end={1233} duration={2} delay={0} />}
          </div>
          <div className="counter-heading">Company</div>
        </div>
      </div>
    </ScrollTrigger>
  );
}
