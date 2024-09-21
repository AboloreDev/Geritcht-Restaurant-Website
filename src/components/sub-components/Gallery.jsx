import React from "react";
import { images } from "../../constants";
import PhotoGallery from "./PhotoGallery";

import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import Subheading from "./Subheading";
import Button from "./Button";

const galleryImage = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  function scroll(direction) {
    const { current } = scrollRef;

    direction === "left"
      ? (current.scrollLeft -= 300)
      : (current.scrollLeft += 300);
  }
  return (
    <section className="gallery">
      <div className="gallery_container">
        <div className="gallery_content">
          <Subheading>Instagram</Subheading>
          <h1 className="cormorant" style={{ fontSize: "35px" }}>
            Photo Gallery
          </h1>
          <p className="nunito" style={{ color: "#aaa", marginTop: "2rem" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur molestiae repellendus optio voluptate vel, officia eaque
            amet est inventore sint!
          </p>
          <Button>View More</Button>
        </div>

        <div className="gallery_images">
          <div className="gallery_images_container" ref={scrollRef}>
            {galleryImage.map((image, index) => (
              <PhotoGallery image={image} key={index + 1} />
            ))}
          </div>

          <div className="gallery_arrows">
            <BsArrowLeftShort
              className="arrow_icon"
              onClick={() => scroll("left")}
            />
            <BsArrowRightShort
              className="arrow_icon"
              onClick={() => scroll("right")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
