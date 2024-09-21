import React from "react";
import Subheading from "./Subheading";
import images from "../../constants/images";
import Button from "./Button";

const Header = () => {
  return (
    <header className="app_header" id="home">
      <div className="header_container">
        <div className="app_wrapper_info">
          <Subheading>Chase the new Flavor</Subheading>
          <h1 className="header_h1">The Key to Fine Dining</h1>
          <p className="nunito" style={{ margin: "2rem 0", maxWidth: "500px" }}>
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus
          </p>
          <Button>Explore Menu</Button>
        </div>
        <div className="header_img">
          <img src={images.welcome} alt="welcome" />
        </div>
      </div>
    </header>
  );
};
export default Header;
