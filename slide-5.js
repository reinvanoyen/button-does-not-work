import Slide from "./slide.js";

export default class Slide5 extends Slide {
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
			<button id="next-slide">Go to next slide</button>
			<div id="dots"></div>
		`;

		const dots = document.getElementById('dots');

		const randomBetween = (min, max) => { // min and max included
			return Math.floor(Math.random() * (max - min + 1) + min);
		};

		const generateDots = () => {
			const randomAmount = randomBetween(100, 500);
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
		}, 2000);

		const nextSlideButton = document.getElementById('next-slide');

		nextSlideButton.addEventListener('click', e => {
			const answer = parseInt(prompt('How many dots?'));
			if (answer === dots.children.length) {
				this.manager.goToNext();
				return;
			}

			alert('Nope');
		});
	}

	destroy() {
		clearInterval(this.generateDotsInterval);
	}

	getTips() {
		return `
			<h3>Notes</h3>
			<div>Use the Properties panel inside the Elements tool to investigate</div>
			<div>Use the Console tool</div>
			<div>Use the special <span>$0</span> variable</div>
			<div>↳ Special mention for these helpers: <span>$1</span> <span>$2</span> <span>$3</span> <span>$4</span> <span>$_</span> <span>$('#dots')</span> <span>$$('#dots>div')</span> <span>inspect()</span></div>
			<div>Use Expressions to watch for changes</div>
		`;
	}
}