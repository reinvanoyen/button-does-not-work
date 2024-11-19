import fetchButton from "./fetch-button.js";
import Slide from "./slide.js";

export default class Slide8 extends Slide {
	async init() {

		document.getElementById('content').innerHTML = `
			<button id="next-slide">Go to next slide</button>
		`;

		const button = await fetchButton();

		if (button.isClickable) {

			document.getElementById('next-slide').addEventListener('click', e => {
				this.manager.goToNext();
			});
		}
	}

	getTips() {
		return `
			<h3>Notes</h3>
			<div>Use the Sources & Network tools to investigate the issue</div>
			<div>Persist persist network responses by overriding</div>
		`;
	}
}