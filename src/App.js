import React from "react";
import "./assets/stylesheets/App.css";
import Planet from "./components/Planet";
import ScolarSystem from "./components/SolarSystem/SolarSystem";

function App() {
  return (
    <div className="App">
      {/* <h1 className="Title">The S<span className="Title-c">c</span>olar System</h1> */}
      <ScolarSystem />
      {/* <Planet /> */}
    </div>
  );
}

export default App;
