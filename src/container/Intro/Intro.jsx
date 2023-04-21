import React, { useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = React.useRef();
  return (
    <div className="app__video">
      <video
        ref={videoRef}
        src={meal}
        type="video/mp4"
        controls={false}
        muted
        loop
      />

      <div
        className={
          "app__video-overlay flex__center " + (!playVideo && "paused")
        }
      >
        <div
          className={
            "app__video-overlay_circle flex__center " + (playVideo && "playing")
          }
          onClick={() => {
            setPlayVideo((preValue) => !preValue);
            if (playVideo) {
              videoRef.current.pause();
            } else {
              videoRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
