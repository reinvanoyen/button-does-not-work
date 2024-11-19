export default class SlideManager {
	constructor(slides = []) {
		this.slides = slides;
		this.slides.forEach(slide => slide.manager = this);
		this.currentSlideIndex = parseInt(window.location.hash.replace('#', '')) || 0;
		this.initSlide();
	}

	initSlide() {
		const slide = this.slides[this.currentSlideIndex];
		window.location.hash = this.currentSlideIndex;

		document.getElementById('header').innerHTML = `
			<h1>${this.currentSlideIndex === 0 ? 'Devtools !== console.log' : `Slide ${this.currentSlideIndex + 1}`}</h1>
		`;
		document.getElementById('tips').innerHTML = slide.getTips() || '';

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
}