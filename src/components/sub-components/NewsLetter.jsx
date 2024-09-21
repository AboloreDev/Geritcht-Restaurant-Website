import React from "react";
import Subheading from "./Subheading";
import Button from "./Button";
const NewsLetter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter_heading">
        <Subheading>NewsLetter</Subheading>
        <h1 className="cormorant">Subscribe To Our Newsletter</h1>
        <p className="nunito">And never miss out on great offers</p>
      </div>
      <div className="newsletter_input">
        <input type="email" placeholder="Enter your email address" />
        <Button>Subscribe</Button>
      </div>
    </div>
  );
};

export default NewsLetter;
