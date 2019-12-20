import React from "react";
import "./assets/stylesheets/App.css";
// import ScolarSystem from "./components/SolarSystem/SolarSystem";
import Teslablackhole from "./components/blackhole/Teslablackhole";
import FlipClock from "./components/clock/FlipClock";

function App() {
  return (
    <div className="App">
      {/* <h1 className="Title">The S<span className="Title-c">c</span>olar System</h1> */}
      {/* <ScolarSystem /> */}
      {/* <FlipClock /> */}
      <Teslablackhole />
    </div>
  );
}

export default App;
