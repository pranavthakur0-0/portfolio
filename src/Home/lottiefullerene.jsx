import lottie from "lottie-web";
import pentest from './fullerene.json';
import React, { useEffect, useRef } from "react";

const Sectionicon = () => {
    const anime = useRef(null);
    useEffect(() => {
      lottie.loadAnimation({
        container: anime.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData:  pentest,
      });
      return () => lottie.stop();
    }, []);
    return <div style={{ height: 700, width: 750 }} ref={anime}></div>;
  };
  
  export default Sectionicon;