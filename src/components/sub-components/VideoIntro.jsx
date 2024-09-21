import React, { useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

const VideoIntro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = React.useRef();

  function handleVideo() {
    setPlayVideo((previousPlayVideo) => !previousPlayVideo);

    playVideo ? vidRef.current.pause() : vidRef.current.play();
  }

  return (
    <section className="video">
      <video
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        ref={vidRef}
      />
      <div className="video_overlay">
        <div className="circle_video_overlay" onClick={handleVideo}>
          {playVideo ? (
            <BsPauseFill color="#ccc" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#ccc" fontSize={30} />
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;
