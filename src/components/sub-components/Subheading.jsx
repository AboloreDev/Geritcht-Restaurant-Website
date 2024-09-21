import React from "react";
import images from "../../constants/images";

const Subheading = ({ children, fontSize = "20px" }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p className="cormorant" style={{ fontSize }}>
        {children}
      </p>
      <img
        src={images.spoon}
        alt="spoon"
        className="spoon_img"
        loading="lazy"
      />
    </div>
  );
};

export default Subheading;
