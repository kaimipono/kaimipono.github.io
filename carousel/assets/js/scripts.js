$(document).ready(function(){
	if ($(window).width() <= 768) {
			$('body').addClass('device');
	} else {
			$('body').removeClass('device');
	}
	setHeightOnLoadAndResize();

	$( window ).resize(function() {
		setHeightOnLoadAndResize();
		if ($(window).width() <= 768) {
			$('body').addClass('device');
		} else {
			$('body').removeClass('device');
		}
	});

	function setHeightOnLoadAndResize() {
		$('.slide__desc').height($('slide__img').height());
	}
})



const prev = document.querySelector('.carousel__prev');
const next = document.querySelector('.carousel__next');

prev.addEventListener('click', () => plusSlides(-1));
next.addEventListener('click', () => plusSlides(1));

function plusSlides(n) {
  let isActiveDot = document.querySelector('.is-active__dot');
  let numberActiveSlide = Number(isActiveDot.dataset.dotnumber);
  showSlides(numberActiveSlide += n);
}

function currentSlide(n) {
	showSlides(n);
}

function showSlideGeneral(n, firstTranslate, firstOffset, secondOffset) {
	const slides = document.querySelectorAll('.slide');
	const dots = document.querySelectorAll('.carousel__dot');

	const len = slides.length;

	if (n < 0) {
		n = len - 1;
	}

	if (n > len - 1) {
		n = 0;
	}

	let translateForFirst = firstTranslate - n * firstOffset;

	for (let i = 0; i < n; i++) {
		slides[i].classList.add('prevSlide');
		dots[i].classList.remove('is-active__dot');
		slides[i].classList.remove('is-active__slide');
	}
	for (let i = n; i < len; i++) {
		slides[i].classList.remove('prevSlide');
		dots[i].classList.remove('is-active__dot');
		slides[i].classList.remove('is-active__slide');
	}

	slides[n].classList.add('is-active__slide');
	dots[n].classList.add('is-active__dot');

	for (let i = 0; i < n; i++) {
		let translate = (translateForFirst - secondOffset * i) + '%';
		slides[i].style.transform = `translateX(${translate})`;
	}
	for (let i = n; i < len; i++) {
		let translate = (translateForFirst - secondOffset * n) + '%';
		slides[i].style.transform = `translateX(${translate})`;
	}
}

function showSlides(n) {
	if (!document.body.classList.contains('device')) {
		showSlideGeneral(n, 20, 71.8, 40);
	} else {
		showSlideGeneral(n, 0, 100, 0);
	}
}