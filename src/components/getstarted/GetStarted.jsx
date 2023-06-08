import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <section className="G-wrapper" id = "GetStarted">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter innerContainer">
          <span className="primaryText">Get started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.<br/> Find your
            residence soon
          </span>
          <button className="button"><a href = "mailto:antibug050@gmail.com">Get Started</a></button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
