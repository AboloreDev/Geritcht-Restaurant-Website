import React from "react";

const Button = ({ children, fontSize, width = "max-content" }) => {
  return (
    <button type="button" className="custom_button" style={{ fontSize, width }}>
      {children}
    </button>
  );
};

export default Button;
