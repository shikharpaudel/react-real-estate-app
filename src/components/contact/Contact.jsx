import React from "react";
import {MdCall} from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';
import "./Contact.css";
const Contact = () => {
  return (
    <section className="c-wrapper" id = "Contact>
      <div className="paddings innerWidth flexCenter c-container">
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>
          <div className="flexColStart contactModes">
            {/*first row */}
            <div className="flexStart row">
              <div className="flexCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size = {25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">call</span>
                    <span className="secondaryText">+977 9867908894</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
              {/*second row */}
              <div className="flexCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size = {25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">chat</span>
                    <span className="secondaryText">+977 9867893121</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>

              {/*second row */}
              <div className="flexStart row">
              <div className="flexCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size = {25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">+977 9867908894</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>
              {/*second row */}
              <div className="flexCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size = {25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">+977 9867893121</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flexCenter c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="contact Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
