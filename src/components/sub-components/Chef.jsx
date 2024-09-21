import React from "react";
import { images } from "../../constants";
import Subheading from "./Subheading";

const Chef = () => {
  return (
    <section className="app_chef app_bg">
      <div className="chef_container">
        <div className="chef_image_container">
          <img src={images.chef} alt="chef" loading="lazy" />
        </div>

        <div className="chef_info">
          <Subheading>Chef's Word</Subheading>
          <h1 className="cormorant">What We Believe In</h1>

          <div className="chef_content">
            <div className="chef_quote">
              <img src={images.quote} alt="quote" />
              <p className="nunito">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                voluptate ad expedita nihil culpa vel, nostrum error fugit
                excepturi facilis?
              </p>
            </div>

            <p className="nunito">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In id
              libero cumque sunt minus voluptatem earum cum recusandae
              voluptates numquam.
            </p>
          </div>

          <div className="chef_signature">
            <p className="cormorant" style={{ fontSize: "25px" }}>
              Kevin Luo
            </p>
            <p className="nunito">Chef & Founder</p>
            <img src={images.sign} alt="sign" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chef;
