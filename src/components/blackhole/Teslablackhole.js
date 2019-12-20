import React, { useEffect, useRef, useState } from "react";
import "../../assets/stylesheets/Teslablackhole.css";
import gsap from "gsap";

import imgOne from "../../assets/img/tesla_cartoon_espace.png";
import imgTwo from "../../assets/img/universe.gif";
import imgThree from "../../assets/img/birth.gif";

const Teslablackhole = () => {
  const [value, setValue] = useState("nope");
  // const changeName = () => {
  //   setValue("yup");
  // };

  const tl = useRef(gsap.timeline({ paused: true }));
  const blackhole = useRef(null);
  const intro = useRef(null);
  const bigBang = useRef(null);
  const emptyness = useRef(null);
  const birth = useRef(null);

  useEffect(() => {
    tl.current = gsap
      .timeline()
      .set(birth.current, {
        opacity: 0
      })
      .set(bigBang.current, {
        opacity: 0
      })
      .set(intro.current, {
        top: "0",
        left: "0",
        width: "100%",
        heigth: "100vh",
        position: "absolute"
      })
      .fromTo(
        intro.current,
        { scale: 0.1 },
        { scale: 0.8, duration: 5, ease: "none", repeat: 0 }
      )
      .to(intro.current, {
        opacity: 0
      })
      .set(bigBang.current, {
        duration: 2,
        opacity: 1
      })
      .set(blackhole.current, {
        opacity: 0
      })
      .to(bigBang.current, {
        duration: 6,
        opacity: 0
      })
      .to(emptyness.current, {
        duration: 2,
        opacity: 1
      })
      .set(birth.current, {
        opacity: 1
      });
  }, [value]);
  console.log(value);
  return (
    <div>
      <div id={value}>
        <button
          className={value}
          type="button"
          onClick={() => setValue("close")}
        >
          X
        </button>

        <div className="blackhole" ref={blackhole} />
        <img alt="imgOne" src={imgOne} ref={intro} />
        <img alt="imgThree" src={imgTwo} ref={bigBang} />
        <div className="emptyness" ref={emptyness} />
        <img alt="imgThree" src={imgThree} ref={birth} />
      </div>
    </div>
  );
};

export default Teslablackhole;
