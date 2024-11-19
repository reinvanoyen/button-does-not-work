import Slide from "./slide.js";

export default class Slide9 extends Slide {
	init() {

		document.getElementById('content').innerHTML = `
			<button id="next-slide">Go to next slide</button>
		`;

		const bindClickEvent = () => {
			const nextSlideButton = document.getElementById('nextslide');

			nextSlideButton.addEventListener('click', e => {
				this.manager.goToNext();
			});
		};

		bindClickEvent();
	}

	getTips() {
		return `
			<h3>Notes</h3>
			<div>Read the error message, use the stack trace to investigate closer</div>
			<div>Use breakpoints to investigate further</div>
		`;
	}
}