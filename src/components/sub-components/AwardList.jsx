import React from "react";

const AwardCard = ({ title, image, subtitle }) => {
  return (
    <div className="award_card">
      <img src={image} alt="award" loading="lazy" />
      <div className="award_card_content">
        <p className="cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
        <p className="cormorant" style={{ color: "#999" }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default AwardCard;
