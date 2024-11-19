import './style.css'
import SlideManager from "./slide-manager.js";
import Slide1 from "./slide-1.js";
import Slide2 from "./slide-2.js";
import Slide3 from "./slide-3.js";
import Slide4 from "./slide-4.js";
import Slide5 from "./slide-5.js";
import Slide6 from "./slide-6.js";
import Slide7 from "./slide-7.js";
import Slide8 from "./slide-8.js";
import Slide9 from "./slide-9.js";
import LastSlide from "./last-slide.js";

const slideManager = new SlideManager([
	new Slide1(),
	new Slide2(),
	new Slide3(),
	new Slide4(),
	new Slide5(),
	new Slide6(),
	new Slide7(),
	new Slide8(),
	new Slide9(),
	new LastSlide()
]);