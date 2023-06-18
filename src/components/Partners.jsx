import React, { useRef, useState } from "react";

import bscscan from "../assets/BscScan-m-logo-1.png";
import dexview from "../assets/Dexview-m-logo-2.png";
import coinmarketcap from "../assets/Coinmarketcap-m-logo-3.png";
import pinksale from "../assets/Pinksale-m-logo-4.png";
import Subtitle from "./Subtitle";
import style from "../assets/style.css"
import heroVideo from "../assets/hero.mp4";


const Partners = ({isMenuShown}) => {
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
    <div className="">
    <video
      ref={videoRef}
      src={heroVideo}
      autoPlay
      loop
      muted
      className="object-cover h-full w-full absolute -z-10"
    />
    <Subtitle
    name="partners"
    title="BLC Partners & Support"
  >
    <center>
        <div className="container partners media-logo mt80px aos-init aos-animate" data-aos="fade-up">
      <div className="partners__block hvr-pop">
        <a href="https://bscscan.com/token/0x705a2ba14923bca7f31ee694c49ac9cb5c292a48" target="_blank">
          <img src={bscscan} 
          alt="BscScan logo" 
          className="partners__img" />
        </a>
      </div>
      <div className="partners__block hvr-pop">
        <a href="https://www.dexview.com/" target="_blank">
          <img src={dexview}
          alt="Dexview logo" 
          className="partners__img" />
        </a>
      </div>
      <div className="partners__block hvr-pop">
        <a href="https://coinmarketcap.com/" target="_blank">
          <img src={coinmarketcap}
           alt="Coinmarketcap logo" 
           className="partners__img" />
        </a>
      </div>
      <div className="partners__block hvr-pop">
        <a href="https://www.pinksale.finance/" target="_blank">
          <img src={pinksale}
          alt="Pinksale logo" 
          className="partners__img" />
        </a>
      </div>
    </div>
    </center>
    </Subtitle>
    </div>
  );
};

export default Partners;
