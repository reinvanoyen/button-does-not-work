import Slide from "./slide.js";

export default class LastSlide extends Slide {
	init() {
		document.getElementById('content').innerHTML = `
			<h1>Hooray!</h1>
		`;
	}
}