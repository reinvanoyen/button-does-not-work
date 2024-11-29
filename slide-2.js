
import {observeDisplayChange} from "./style-observer.js";
import Slide from "./slide.js";
import {style} from "./style.js";

export default class Slide2 extends Slide {
	async init() {

		style(`
		
			#content {
				position: relative;
			}
		
			.overlay-1, .overlay-2, .overlay-3, .overlay-4 {
				position: fixed;
				z-index: 100;
				inset: 0;
				background-color: black;
				opacity: .5;
			}
			
			.overlay-2 {
				z-index: 200;
				inset: 10%;
			}
			
			.overlay-3 {
				z-index: 300;
				inset: 20%;
			}
			
			.overlay-4 {
				z-index: 400;
				inset: 40%;
			}
		
			#next-slide {
				position: sticky;
				z-index: 0;
			}
		`);

		// Overwrites the DOM in each iteration, re-creating the button each time
		document.getElementById('content').innerHTML = `
			<button id="next-slide">Go to next slide</button>
			<div class="overlay-1"></div>
			<div class="overlay-2"></div>
			<div class="overlay-3"></div>
			<div class="overlay-4"></div>
		`;

		const nextSlideButton = document.getElementById('next-slide');

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