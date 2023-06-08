import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "./Residiencies.css";
import "swiper/css";
import data from "../../utils/slider.json";
import { sliderSetting } from "../../utils/sliderSetting";
const Residiencies = () => {
  return (
    <section className="r-wrapper"id = "Residiencies">
      <div className="paddings innerWidth r-container">
        <div className=" flexColStart r-head">
          <section className="orangeText">Best Choices</section>
          <section className="primaryText">Popular Residiencies</section>
        </div>
        <Swiper {...sliderSetting}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card ">
                <img src={card.image} alt="Home" />

                <span className="secondaryText">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residiencies;
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button className="button" onClick={() => swiper.slidePrev()}>Prev</button>
      <button className="button" onClick={() => swiper.slideNext()}>Next</button>
    </div>
  );
};
