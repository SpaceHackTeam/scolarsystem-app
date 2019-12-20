import React, { useState } from "react";
import "../../assets/stylesheets/SolarSystem.css";
import Teslablackhole from "../blackhole/Teslablackhole";

function SolarSystem() {
  const [easterEgg, setEasterEgg] = useState(null);
  if (easterEgg === 5) {
    document.getElementById("universe").style.zIndex = 10;
    // document.getElementById("intro-bg").style.opacity = 0;
    // document.getElementById("sun").style.fontSize = "15em";
  } else if (easterEgg > 5) {
    setEasterEgg(null);
  }

  return (
    <div id="universe">
      <div onClick={() => setEasterEgg(easterEgg + 1)} id="sun" />

      <div id="mercure" className="orbit">
        <div className="planet mercure" />
      </div>

      <div id="venus" className="orbit">
        <div className="planet venus" />
      </div>

      <div id="terre" className="orbit">
        <div className="planet terre" />
      </div>

      <div id="mars" className="orbit">
        <div className="planet mars" />
      </div>

      <div id="jupiter" className="orbit">
        <div className="planet jupiter" />
      </div>

      <div id="saturne" className="orbit">
        <div className="planet saturne" />
      </div>

      <div id="uranus" className="orbit">
        <div className="planet uranus" />
      </div>

      <div id="neptune" className="orbit">
        <div className="planet neptune" />
      </div>

      <div id="pluton" className="orbit">
        <div className="planet pluton" />
      </div>
      {easterEgg === 5 ? <Teslablackhole /> : null}
    </div>
  );
}

export default SolarSystem;
