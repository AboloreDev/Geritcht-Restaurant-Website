import React from "react";
import { images } from "../../constants";
import Subheading from "./Subheading";
import Button from "./Button";
const FindUs = () => {
  return (
    <section className="app_bg">
      <div className="findus_container">
        <div className="findus_content">
          <Subheading>Contact</Subheading>
          <h1 className="cormorant" style={{ marginBottom: "3rem" }}>
            Find Us
          </h1>
          <div className="findus_text">
            <p className="nunito">
              Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
            </p>
            <p
              className="cormorant"
              style={{ color: "#DCCA78", margin: "2rem 0" }}
            >
              Opening Hours
            </p>
            <p className="nunito" style={{ marginBottom: "2rem" }}>
              Mon - Fri: 10:00 am - 02:00 am
            </p>
            <p className="nunito" style={{ marginBottom: "2rem" }}>
              Sat - Sun: 10:00 am - 03:00 am
            </p>
          </div>
          <Button>Visit Us</Button>
        </div>
        <div className="findus_image">
          <img src={images.findus} alt="find-us-image" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default FindUs;
