import React, { useEffect, useRef } from "react";
import "../../assets/stylesheets/Teslablackhole.css";
import gsap from "gsap";

import imgOne from "../../assets/img/tesla_cartoon_espace.png";
import imgTwo from "../../assets/img/bigbang.jpg";

const Teslablackhole = () => {
  const tl = useRef(gsap.timeline({ paused: true }));
  const intro = useRef(null);
  const bigBang = useRef(null);

  useEffect(() => {
    tl.current = gsap
      .timeline()
      .set(bigBang.current, {
        opacity: 0
      })
      .set(intro.current, {
        top: "0",
        left: "0",
        position: "absolute"
      })
      .fromTo(
        intro.current,
        { scale: 0.1 },
        { scale: 0.8, duration: 5, ease: "none", repeat: 0 }
      )
      .set(bigBang.current, {
        opacity: 1
      });
  });

  return (
    <div>
      <div className="blackhole"></div>
      <div id="tesla">
        <img src={imgOne} ref={intro} />
        <img src={imgTwo} ref={bigBang} />
      </div>
      <section className="intro"></section>
    </div>
  );
};

export default Teslablackhole;
