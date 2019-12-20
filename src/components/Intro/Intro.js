import React from 'react';
import GifFusee from '../../assets/gif/fuseeQuiGalere.gif';
import '../../assets/sound/fusee.mp3';
import './Intro.css';

const decollageFusee = () => {
	const sound = new Audio(require('../../assets/sound/fusee.mp3'));
	document.getElementById('fuseeKiDecol').style.animation="slideIn";
	return sound.play();
};

const Intro = () => {

	return (
		<div id="intro-bg">
			<fuseeLourde />
			<div className="container-fusee">
				<img id="fuseeKiDecol" src={GifFusee} className="visible" />
			</div>

			<div class="button-container">
			<button onClick={decollageFusee} class="redbutton">
                <span class="launch">LAUNCH</span>
            </button>
            <div class="redbutton-shadow"></div>
			</div>

			<div id="intro-smoke" />
		</div>
	);
};

export default Intro;
