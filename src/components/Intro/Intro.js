import React from 'react';
import GifFusee from '../../assets/gif/fuseeQuiGalere.gif';
import '../../assets/sound/fusee.mp3';
import './Intro.css';

const decollageFusee = () => {
	document.documentElement.requestFullscreen();
	document.getElementById('fuseeKiDecol').style.animationPlayState = 'running';
	document.getElementById('button-container').style.opacity = 0;
	const sound = new Audio(require('../../assets/sound/fusee.mp3'));
	return sound.play();
};

const Intro = () => {
	return (
		<div id="intro-bg">
			<fuseeLourde />
			<div className="container-fusee">
				<img id="fuseeKiDecol" src={GifFusee} />
			</div>

			<div id="button-container" class="button-container">
				<button onClick={decollageFusee} class="redbutton">
					<span class="launch">LAUNCH</span>
				</button>
				<div class="redbutton-shadow" />
			</div>

			<div id="intro-smoke" />
		</div>
	);
};

export default Intro;
