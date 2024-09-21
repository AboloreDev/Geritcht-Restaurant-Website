import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../constants/images";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    // NAVBAR
    <nav className="app_navbar">
      <div className="navbar_container">
        {/* Logo */}
        <div className="navbar_logo">
          <img src={images.gericht} alt="Logo" />
        </div>
        {/* List of navs */}
        <ul className="navbar_links">
          <li className="links">
            <a href="#home">Home</a>
          </li>
          <li className="links">
            <a href="#about">About</a>
          </li>
          <li className="links">
            <a href="#menu">Menu</a>
          </li>
          <li className="links">
            <a href="#awards">Awards</a>
          </li>
          <li className="links">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Login */}
        <div className="login">
          <li className="login_links">
            <a href="#login">Log In / Register</a>
          </li>
          <li className="login_links">
            <a href="#login">Book Table</a>
          </li>
        </div>

        {/* HamburgerMenu */}
        <div className="small_screen">
          {/* Hamburger Menu */}
          <GiHamburgerMenu
            color="#fff"
            fontSize="25px"
            onClick={handleToggleMenu}
            cursor="pointer"
          />

          {/* Mobile screen Menu */}
          {isOpen && (
            <div className="navbar_smallscreen_overlay flex_center slide_bottom">
              <MdOutlineRestaurantMenu
                fontSize="25px"
                className="close"
                onClick={handleToggleMenu}
              />
              <ul className="small_screen_links">
                <li className="links">
                  <a href="#home">Home</a>
                </li>
                <li className="links">
                  <a href="#about">About</a>
                </li>
                <li className="links">
                  <a href="#menu">Menu</a>
                </li>
                <li className="links">
                  <a href="#awards">Awards</a>
                </li>
                <li className="links">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
