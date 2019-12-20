import React from "react";
import "../assets/stylesheets/Planet.css";

const Planet = input => (
  <div className="planet-popup">
    <img
      className="planet-image"
      src="https://www.numerama.com/content/uploads/2019/05/mars-espace-univers-planete-astronomie-systeme-solaire.jpg"
      alt={input.name}
    />
    <div className="planet-infos">
      <p className="planet-name">{input.name}</p>
      <p className="planet-description">{input.description}</p>
    </div>
    <div className="planet-test">
      <p className="planet-question">Quel est son rayon ?</p>
      <input className="planet-qcm" type="radio" />
      answer
      <input className="planet-qcm" type="radio" />
      answer
      <input className="planet-qcm" type="radio" />
      answer
      <p className="planet-question">Température moyenne ?</p>
      <input className="planet-qcm" type="radio" />
      -65
      <input className="planet-qcm" type="radio" />
      answer
      <input className="planet-qcm" type="radio" />
      answer
      <p className="planet-question">
        A quelle distance du soleil (minute-lumière) ?
      </p>
      <input className="planet-qcm" type="radio" />
      answer
      <input className="planet-qcm" type="radio" />
      answer
      <input className="planet-qcm" type="radio" />
      answer
      <p className="planet-question">Durée de révolution autour du soleil ?</p>
      <input className="planet-qcm" type="radio" />
      answer
      <input className="planet-qcm" type="radio" />
      answer
      <input className="planet-qcm" type="radio" />
      answer
      <p className="planet-question">Combien de lunes gravitent autour ?</p>
      <input className="planet-qcm" type="radio" />
      answer
      <input className="planet-qcm" type="radio" />
      answer
      <input className="planet-qcm" type="radio" />
      answer
    </div>
  </div>
);

export default Planet;
