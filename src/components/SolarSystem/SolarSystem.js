import React from 'react';
import '../../assets/stylesheets/SolarSystem.css';

function SolarSystem() {
	return (
		<div id="universe">
			<div id="sun" />

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
		</div>
	);
}

export default SolarSystem;
