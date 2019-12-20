import React from 'react';
import GifFusee from '../../assets/gif/fuseeQuiGalere.gif';
import '../../assets/sound/fusee.mp3';
import './Intro.css';

const decollageFusee = () => {
	const sound = new Audio(require('../../assets/sound/fusee.mp3'));
	return sound.play();
};

const Intro = () => {
	decollageFusee();

	return (
		<div id="intro-bg">
			<fuseeLourde />
			<div className="container-fusee">
				<img id="fuseeKiDecol" src={GifFusee} className="visible" />
			</div>

			<div id="intro-smoke" />
		</div>
	);
};

export default Intro;
