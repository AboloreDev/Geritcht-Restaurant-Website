import React from "react";
import { BsInstagram } from "react-icons/bs";

const PhotoGallery = ({ image }) => {
  return (
    <div className="gallery_images_card">
      <img src={image} alt="images" loading="lazy" />
      <BsInstagram className="gallery_icon" />
    </div>
  );
};

export default PhotoGallery;
