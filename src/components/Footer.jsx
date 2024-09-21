import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

// import { FooterOverlay, NewsLetter } from "./sub-components";
import FooterOverlay from "./sub-components/FooterOverlay";
import NewsLetter from "./sub-components/NewsLetter";
import images from "../constants/images";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <FooterOverlay />
        <NewsLetter />
        <div className="footer_links">
          <div className="footer_contact">
            <h1 className="headtext">Contact Us</h1>
            <p className="nunito">9 W 53rd St, New York, NY 10019, USA</p>
            <p className="nunito">+1 212-344-1230</p>
            <p className="nunito">+1 212-555-1230</p>
          </div>
          <div className="footer_logo">
            <img src={images.gericht} alt="images Footer" />
            <p className="nunito" style={{ textAlign: "center" }}>
              "The best way to find yourself is to lose yourself in the service
              of others.”
            </p>
            <img src={images.spoon} style={{ marginTop: "15px" }} alt="spoon" />
            <div className="footer_icons">
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </div>
          </div>
          <div className="footer_work">
            <h1 className="headtext">Working Hours</h1>
            <p className="nunito">Monday-Friday</p>
            <p className="nunito">08:00 am - 12:00am</p>
            <p className="nunito">Saturday-Sunday</p>
            <p className="nunito">07:00am - 11:00pm</p>
          </div>
        </div>

        <div className=" copyright">
          <p className="nunito">&copy; 2023 Geritcht. All Rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
