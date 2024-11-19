import Slide from "./slide.js";

export default class Slide6 extends Slide {
	init() {

		const style = document.createElement('style');
		style.innerHTML = `
		  #dots {
			position: relative;
			width: 400px;
			height: 200px;
			margin-top: 1rem;
		  }
		`;
		document.head.appendChild(style);

		document.getElementById('content').innerHTML = `
			<div style="display: flex; flex-direction: column">
				<input id="answer" name="answer" placeholder="How many dots I ask, HOW MANY?!" />
				<button id="next-slide">Go to next slide</button>
			</div>
			<div id="dots"></div>
		`;

		const nextSlideButton = document.getElementById('next-slide');
		const answer = document.getElementById('answer');
		const dots = document.getElementById('dots');

		const randomBetween = (min, max) => { // min and max included
			return Math.floor(Math.random() * (max - min + 1) + min);
		};

		const generateDots = () => {
			const randomAmount = randomBetween(0, 500);
			dots.innerHTML = '';

			for (let i = 0; i < randomAmount; i++) {
				let dot = document.createElement('div');
				dot.style.position = 'absolute';
				dot.style.width = '10px';
				dot.style.height = '10px';
				dot.style.borderRadius = '100%';
				dot.style.backgroundColor = '#747bff';
				dot.style.top = randomBetween(0, 100)+'%';
				dot.style.left = randomBetween(0, 100)+'%';

				dots.appendChild(dot);
			}
		};

		generateDots();

		this.generateDotsInterval = setInterval(() => {
			generateDots();

			if (parseInt(answer.value) === dots.children.length) {
				nextSlideButton.addEventListener('click', () => {
					this.manager.goToNext();
				});
			}
		}, 75);
	}

	destroy() {
		clearInterval(this.generateDotsInterval);
	}

	getTips() {
		return `
			<h3>Notes</h3>
			<div>JavaScript is fast...sometimes too fast</div>
			<div>Use DOM breakpoints to investigate</div>
		`;
	}
}