function myFunction() {
    var x = document.getElementById("myTopnav");
    var logo = document.getElementById("logo");
    if (x.className === "topnav") {
    	logo.style.display = 'none';
        x.className += " responsive";
    } else {
    	logo.style.display = 'block';
        x.className = "topnav";
    }
}





var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

$(document).ready(function(){
 
	$(window).scroll(function(){
		if ($(this).scrollTop() > 300) {
			$('.up-button').fadeIn();
		} else {
			$('.up-button').fadeOut();
		}
	});
	 
	$('.up-button').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1000);
		return false;
	});

	$("#myTopnav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
 
});