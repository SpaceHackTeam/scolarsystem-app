import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/stylesheets/Planet.css";

const Planet = input => {
  const [planetData, setPlanetData] = useState([]);

  // const [planetQcm, setPlanetQcm] = useState({
  //   radius: [],
  //   mean_temp: [],
  //   distance_light: [],
  //   rotation_period: [],
  //   qtyMoon: []
  // })

  useEffect(() => {
    axios
      .get("bdd.json")
      .then(res => setPlanetData(res.data[6]))
      .then(console.log(planetData));
  }, []);

  // const showAnswers = () =>
  //   planetData.qcm &&
  //   planetData.qcm.radius.map(element => (
  //     <div>
  //       <input className="planet-qcm" type="radio" /> {element}
  //     </div>
  //   ));

  return (
    <div className="planet-popup">
      <img
        className="planet-image"
        src={planetData.img_url}
        alt={planetData.name}
      />
      <div className="planet-infos">
        <p className="planet-name">{planetData.name}</p>
        <p className="planet-description">{planetData.description}</p>
      </div>
      <div className="planet-test">
        <p className="planet-question">Quel est son rayon ?</p>
        {/* {showAnswers()} */}

        <div>
          <input
            type="radio"
            id="rad1"
            name="radius"
            value={planetData.qcm && planetData.qcm.radius[0]}
            checked
          />
          <label for="rad1">{planetData.qcm && planetData.qcm.radius[0]}</label>
        </div>
        <div>
          <input
            type="radio"
            id="rad2"
            name="radius"
            value={planetData.qcm && planetData.qcm.radius[1]}
            checked
          />
          <label for="rad2">{planetData.qcm && planetData.qcm.radius[1]}</label>
        </div>
        <div>
          <input
            type="radio"
            id="rad3"
            name="radius"
            value={planetData.qcm && planetData.qcm.radius[2]}
            checked
          />
          <label for="rad3">{planetData.qcm && planetData.qcm.radius[2]}</label>
        </div>

        <p className="planet-question">Température moyenne ?</p>

        <div>
          <input
            type="radio"
            id="mTemp1"
            name="mean_temp"
            value={planetData.qcm && planetData.qcm.mean_temp[0]}
            checked
          />
          <label for="rad1">
            {planetData.qcm && planetData.qcm.mean_temp[0]}
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="mTemp2"
            name="mean_temp"
            value={planetData.qcm && planetData.qcm.mean_temp[1]}
            checked
          />
          <label for="rad2">
            {planetData.qcm && planetData.qcm.mean_temp[1]}
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="mTemp3"
            name="mean_temp"
            value={planetData.qcm && planetData.qcm.mean_temp[2]}
            checked
          />
          <label for="rad3">
            {planetData.qcm && planetData.qcm.mean_temp[2]}
          </label>
        </div>
      </div>
    </div>
  );
};
export default Planet;
