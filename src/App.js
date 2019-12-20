import React from "react";
import "./assets/stylesheets/App.css";
import ScolarSystem from "./components/SolarSystem/SolarSystem";
import Teslablackhole from "./components/blackhole/Teslablackhole";

function App() {
  return (
    <div className="App">
      {/* <h1 className="Title">The S<span className="Title-c">c</span>olar System</h1> */}
      {/* <ScolarSystem /> */}
      <Teslablackhole />
    </div>
  );
}

export default App;
