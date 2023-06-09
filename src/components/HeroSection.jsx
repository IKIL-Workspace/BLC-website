import React, { useRef, useState } from "react";

import heroVideo from "../assets/hero.mp4";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import GradientBtn from "./GradientBtn";
import style from "../assets/style.css"

const HeroSection = ({ isMenuShown }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const videoRef = useRef();

  const handleVideoPause = () => {
    videoRef.current.pause();
    setIsVideoPlaying(false);
  };

  const handleVideoPlay = () => {
    videoRef.current.play();
    setIsVideoPlaying(true);
  };

  return (
    <div className="flex items-end justify-center w-full h-screen text-center">
      <video
        ref={videoRef}
        src={heroVideo}
        autoPlay
        loop
        muted
        className="object-cover h-full w-full absolute -z-10"
      />

      <div
        className={`banner-pad flex flex-col items-center justify-center duration-500 w-full ${
          isVideoPlaying ? "opacity-50" : "bg-black/80"
        } ${isMenuShown ? "opacity-20" : "opacity-100"}`}>


          <div className="main-h1">
						<img src="#" className="logo-img"/>
						<h1>Billion Local Coin </h1>
					</div>

        {/* <h1 className="text-5xl lg:text-7xl capitalize mb-12">
          the the <span className="text-thBlue font-bold">future</span> is here
        </h1> */}

        <div className="flex flex-row justify-center items-center">
          <GradientBtn className="capitalize" title="get anton" />
          <GradientBtn className="capitalize mx-12" title="products" />

          {isVideoPlaying ? (
            <FaPauseCircle
              size={30}
              onClick={handleVideoPause}
              className="cursor-pointer hover:scale-110 duration-200 text-thBlue"
            />
          ) : (
            <FaPlayCircle
              size={30}
              onClick={handleVideoPlay}
              className="cursor-pointer hover:scale-110 duration-200 text-thBlue"
            />
          )}
        </div>


      </div>
    </div>
  );
};

export default HeroSection;
