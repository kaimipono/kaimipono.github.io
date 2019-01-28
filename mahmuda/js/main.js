// Navigation

	function expandMenu() {
		console.log('clicked!!');
		let navMenu = document.getElementsByClassName('navigation__menu')[0];
		if (navMenu.className === 'navigation__menu') {
			navMenu.className += ' expanded';
		} else {
			navMenu.className = 'navigation__menu';
		}
	}

// Gallery slider
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
	  var slides = document.getElementsByClassName("slide");
	  var dots = document.getElementsByClassName("slide__thumb");

	  if (n > slides.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	    slides[i].style.display = "none";
	  }
	  for (i = 0; i < dots.length; i++) {
	    dots[i].className = dots[i].className.replace(" active", "");
	  }
	  // dots[n].style.display = 'none';
	  slides[slideIndex-1].style.display = "block";
	  dots[slideIndex-1].className += " active";
	}

// Pagination 

	var pageIndex = 1;
	showPages(pageIndex);

	// Next/previous controls
	function plusPages(n) {
	  showPages(pageIndex += n);
	}

	// Button controls
	function currentPage(n) {
	  showPages(pageIndex = n);
	}

	function showPages(n) {
	  var j;
	  var pages = document.getElementsByClassName("page");
	  var btns = document.getElementsByClassName("btn_numb");
	  if (n > pages.length) {pageIndex = 1} 
	  if (n < 1) {pageIndex = pages.length}
	  for (j = 0; j < pages.length; j++) {
	      pages[j].style.display = "none"; 
	  }
	  for (j = 0; j < btns.length; j++) {
	      btns[j].className = btns[j].className.replace(" active", "");
	  }
	  pages[pageIndex-1].style.display = "block"; 
	  btns[pageIndex-1].className += " active";
	}

// Dinamicaally download picture from UnSplash

	$.getJSON('https://api.unsplash.com/photos/random/?count=8&client_id=16e4cac50e6d4bf03acabe4a96c11f33ccba8677d65e4cec32c94f409283dd49', function(data) {
  		console.log(data);
  		for(let i = 0; i < 8; i++) {
  			let imageURL = data[i].urls.thumb;
  			let id = '#photo__random' + i;
  			$(id).attr('src', imageURL);
  		}
	});