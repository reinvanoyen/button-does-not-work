import Slide from "./slide.js";
import {style} from "./style.js";

export default class Slide1 extends Slide {
	init() {

		style(`
			#content {
				pointer-events: none;
			}
			
			#next-slide {
				pointer-events: none;
			}
		`);

		document.getElementById('content').innerHTML = `
			<h2>A game of "Button does not work"</h2>
			<button id="next-slide">Go to next slide</button>
		`;

		const nextSlideButton = document.getElementById('next-slide');

		nextSlideButton.addEventListener('click', e => {
			this.manager.goToNext();
		});
	}

	getTips() {
		return `
			<h3>Useful shortcuts</h3>
			<div>Inspect element <span>shift + cmd + c</span></div>
			<div>Toggle Devtools <span>option + cmd + i</span></div>
			<div>Run command <span>shift + cmd + p</span></div>
			<div>Toggle drawer <span>esc</span></div>
			<div>Search in Elements tool <span>cmd + f</span></div>
			<h3>Notes</h3>
			<div>The Elements panel has full keyboard support</div>
			<div>[Shift + inspect] to select / inspect elements with pointer-events: none;</div>
			<div>Use Computed Styles sidebar to investigate</div>
		`;
	}
}