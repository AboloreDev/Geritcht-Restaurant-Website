import React from "react";
import Header from "./sub-components/Header";
import About from "./sub-components/About";
import SpecialMenu from "./sub-components/SpecialMenu";
import Chef from "./sub-components/Chef";
import VideoIntro from "./sub-components/VideoIntro";
import Awards from "./sub-components/Awards";
import Gallery from "./sub-components/Gallery";
import FindUs from "./sub-components/FindUs";
const Main = () => {
  return (
    <div>
      <Header />
      <About />
      <SpecialMenu />
      <Chef />
      <VideoIntro />
      <Awards />
      <Gallery />
      <FindUs />
    </div>
  );
};

export default Main;
