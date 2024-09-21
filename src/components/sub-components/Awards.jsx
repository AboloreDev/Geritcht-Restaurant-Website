import React from "react";
import { images, data } from "../../constants";
import Subheading from "./Subheading";
import AwardCard from "./AwardList";

const Awards = () => {
  return (
    <section className="app_bg">
      <div className="awards_container">
        <div className="awards_info">
          <Subheading>Awards & Recognition</Subheading>
          <h1 className="cormorant" style={{ fontSize: "40px" }}>
            Our Laurels
          </h1>
          <div className="awards">
            {data.awards.map((awards, i) => (
              <AwardCard
                key={i}
                image={awards.imgUrl}
                title={awards.title}
                subtitle={awards.subtitle}
              />
            ))}
          </div>
        </div>
        <div className="awards_img">
          <img src={images.laurels} alt="Laurels" />
        </div>
      </div>
    </section>
  );
};

export default Awards;
