import 'swiper';

var newsSlider = new Swiper('.news-slider__slider-container', {
	slidesPerView: 3,
	spaceBetween: 45,
	loop: true,
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	breakpoints: {
	// when window width is <= 767px
		767: {
			slidesPerView: 1
			// spaceBetween: 10
		}
	}
});
