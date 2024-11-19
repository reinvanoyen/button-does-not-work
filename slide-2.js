
import {observeDisplayChange} from "./style-observer.js";
import Slide from "./slide.js";

export default class Slide2 extends Slide {
	async init() {

		const style = document.createElement('style');
		style.innerHTML = `
			#overlay {
				position: absolute;
				z-index: 9999;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				background-color: black;
				opacity: .5;
			}
		`;

		document.head.appendChild(style);

		// Overwrites the DOM in each iteration, re-creating the button each time
		document.getElementById('content').innerHTML = `
			<button id="next-slide" style="z-index: 10;">Go to next slide</button>
			<div id="overlay"></div>
		`;

		const nextSlideButton = document.getElementById('next-slide');
		const overlay = document.getElementById('overlay');

		observeDisplayChange(overlay, () => {
			alert('Cheater');
			nextSlideButton.remove();
		});

		nextSlideButton.addEventListener('click', e => {
			this.manager.goToNext();
		});
	}

	getTips() {
		return `
			<h3>Notes</h3>
			<div>Use Layers panel to debug z-index</div>
		`;
	}
}