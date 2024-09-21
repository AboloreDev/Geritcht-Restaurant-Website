import React from "react";
import images from "../../constants/images";
import Subheading from "./Subheading";
import Button from "./Button";

const About = () => {
  return (
    <section className="app_about app_bg">
      <div className="about_container">
        {/* About Background Letter G */}
        <div className="about_overlay">
          <img src={images.G} alt="G" loading="lazy" />
        </div>
        {/* About Us Content */}
        <div className="about_content">
          {/* Left side */}
          <div className="about-us">
            <Subheading fontSize="45px">About Us</Subheading>
            <p className="nunito">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
            </p>
            <Button>Know More</Button>
          </div>
          {/* Middle Knife img */}
          <div className="about_knife">
            <img src={images.knife} alt="About Knife" loading="lazy" />
          </div>
          {/* Right side */}
          <div className="our_history">
            <Subheading fontSize="45px">Our History</Subheading>
            <p className="nunito">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
            </p>
            <Button>Know More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
