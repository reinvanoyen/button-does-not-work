import Slide from "./slide.js";

export default class Slide7 extends Slide {
	init() {

		document.getElementById('content').innerHTML = `
			<button id="next-slide">Go to next slide</button>
		`;

		if (getComputedStyle(document.getElementById('tips')).borderColor === 'rgb(255, 0, 0)') {
			const nextSlideButton = document.getElementById('next-slide');

			nextSlideButton.addEventListener('click', e => {
				this.manager.goToNext();
			});
		}
	}

	getTips() {
		return `
			<h3>Notes</h3>
			<div>Use the Sources panel to investigate the issue</div>
			<div>Persist CSS changes by overriding</div>
			<div>Use the Changes panel to keep track of changes</div>
		`;
	}
}