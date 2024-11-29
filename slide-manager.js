export default class SlideManager {
	constructor(slides = []) {

		this.slides = slides;
		this.slides.forEach(slide => slide.manager = this);
		this.currentSlideIndex = parseInt(window.location.hash.replace('#', '')) || 0;

		this.isTipsPanelOpen = false;
		this.tipsPanelEl = document.getElementById('tips');
		this.clippyEl = document.getElementById('clippy');
		this.clippyEl.addEventListener('click', () => {
			this.toggleTips();
		});

		this.initSlide();
	}

	initSlide() {
		const slide = this.slides[this.currentSlideIndex];
		window.location.hash = this.currentSlideIndex;

		document.getElementById('header').innerHTML = `
			<h1>${this.currentSlideIndex === 0 ? 'Devtools !== console.log' : `Slide ${this.currentSlideIndex + 1}`}</h1>
		`;

		this.tipsPanelEl.innerHTML = slide.getTips() || '';

		this.clippyEl.children[0].src = `clippy-${this.currentSlideIndex+1}.gif`;

		this.hideTips();
		slide.init();
	}

	destroySlide() {
		const slide = this.slides[this.currentSlideIndex];
		slide.destroy();
	}

	goToNext() {
		this.destroySlide();
		this.currentSlideIndex++;
		this.initSlide();
	}

	goToPrev() {
		this.destroySlide();
		this.currentSlideIndex--;
		this.initSlide();
	}

	hideTips() {
		this.tipsPanelEl.style.display = 'none';
		this.isTipsPanelOpen = false;
	}

	openTips() {
		this.tipsPanelEl.style.display = 'block';
		this.isTipsPanelOpen = true;
	}

	toggleTips() {
		this.tipsPanelEl.style.display = (this.isTipsPanelOpen ? 'none' : 'block');
		this.isTipsPanelOpen = ! this.isTipsPanelOpen;
	}
}