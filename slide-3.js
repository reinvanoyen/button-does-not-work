import {observeDisplayChange} from "./style-observer.js";
import Slide from "./slide.js";

export default class Slide3 extends Slide {
	init() {

		const style = document.createElement('style');
		style.innerHTML = `
		  .button-a:hover + .button-b {
			display: block !important;
		  }
		`;

		document.head.appendChild(style);

		// Overwrites the DOM in each iteration, re-creating the button each time
		document.getElementById('content').innerHTML = `
			<button class="button-a">Not the button</button>
			<button class="button-b" id="next-slide" style="display: none; position: absolute; top: 0; left: 0;">Go to next slide</button>
		`;

		const nextSlideButton = document.getElementById('next-slide');
		observeDisplayChange(nextSlideButton, () => {
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
			<div>Use Force state on an element</div>
		`;
	}
}