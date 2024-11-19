import Slide from "./slide.js";

export default class slide4 extends Slide {
	init() {

		document.getElementById('content').innerHTML = `
			<button id="next-slide">Go to next slide</button>
		`;

		const nextSlideButton = document.getElementById('next-slide');

		nextSlideButton.addEventListener('click', e => {
			this.manager.goToNext();
		});

		nextSlideButton.addEventListener('click', e => {
			this.manager.goToPrev();
		});
	}

	getTips() {
		return `
			<h3>Notes</h3>
			<div>Investigate the event listeners of the button</div>
			<div>Use <span>monitorEvents()</span></div>
			<div>Use the Event Listeners tab in the Elements tool</div>
		`;
	}
}