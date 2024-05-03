/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Mobile Menu Js
03. Common Js
04. Menu Controls JS
05. Offcanvas Js
06. Search Js
07. cartmini Js
08. filter
09. Body overlay Js
10. Sticky Header Js
11. Theme Settings Js
12. Nice Select Js
13. Smooth Scroll Js
14. Slider Activation Area Start
15. Masonary Js
16. Wow Js
17. Counter Js
18. InHover Active Js
19. Line Animation Js
20. Video Play Js
21. Password Toggle Js
****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);
	////////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load', function () {
		$("#loading").fadeOut(500);
	});


	// 08. Nice Select Js
	$('select').niceSelect();


	///////////////////////////////////////////////////
	// 07. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 400) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});


	////////////////////////////////////////////////////
	// 09. Sidebar Js
	$(".tp-menu-bar").on("click", function () {
		$(".tpoffcanvas").addClass("opened");
		$(".body-overlay").addClass("apply");
	});
	$(".close-btn").on("click", function () {
		$(".tpoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
	});
	$(".body-overlay").on("click", function () {
		$(".tpoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
	});

	// for header
	if ($("#tp-header-top__value-toogle").length > 0) {
		window.addEventListener('click', function(e){
		
			if (document.getElementById('tp-header-top__value-toogle').contains(e.target)){
				$(".tp-header-top__value-submenu").toggleClass("open");
			}
			else{
				$(".tp-header-top__value-submenu").removeClass("open");
			}
		});
	}


	// for header
	if ($("#tp-header-top__lang-toogle").length > 0) {
		window.addEventListener('click', function(e){
		
			if (document.getElementById('tp-header-top__lang-toogle').contains(e.target)){
				$(".tp-header-top__lang-submenu").toggleClass("open");
			}
			else{
				$(".tp-header-top__lang-submenu").removeClass("open");
			}
		});
	}

	////////////////////////////////////////////////////
	// 03. Common Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$("[data-text-color]").each(function () {
		$(this).css("color", $(this).attr("data-text-color"));
	});

	$(".has-img").each(function () {
		var imgSrc = $(this).attr("data-menu-img");
		var img = `<img class="mega-menu-img" src="${imgSrc}" alt="img">`;
		$(this).append(img);

	});

	////////////////////////////////////////////////////
	// 12. Nice Select Js
	$('.tp-header-search-category select').niceSelect();

	////////////////////////////////////////////////////
	// 13. Smooth Scroll Js
	function smoothSctoll() {
		$('.smooth a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 120
				}, 1500);
			}
		});
	}
	smoothSctoll();

	function back_to_top() {
		var btn = $('#back_to_top');
		var btn_wrapper = $('.back-to-top-wrapper');

		windowOn.scroll(function () {
			if (windowOn.scrollTop() > 300) {
				btn_wrapper.addClass('back-to-top-btn-show');
			} else {
				btn_wrapper.removeClass('back-to-top-btn-show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});
	}
	back_to_top();


	// testimonial
	$('.tp-list-details-slider-active').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		speed:1000,
		asNavFor: '.tp-list-details-nav-active',
		autoplay: false,
	});
	
	$('.tp-list-details-nav-active').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.tp-list-details-slider-active',
		dots: false,
		arrows: false,
		focusOnSelect: true,
		centerPadding: '0',
		centerMode: false,
		speed:1000,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					slidesToShow: 1,
				}
			}
		]
	});
	
	////brand-slider
	var city = new Swiper('.tp-brand-active', {
		speed:1500,
		loop: true,
		slidesPerView: 5,
		autoplay: true,
		spaceBetween: 30,
		breakpoints: {
			'1400': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 5,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		a11y: false,
	});

	////city-slider
	var city = new Swiper('.tp-city-active', {
		speed:1500,
		loop: true,
		slidesPerView: 6,
		autoplay: true,
		spaceBetween: 50,
		breakpoints: {
			'1600': {
				slidesPerView: 6,
			},
			'1400': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			'0': {
				slidesPerView: 1,
				spaceBetween: 30,
			},
		},
		a11y: false,
		pagination: {
			el: ".tp-city-dots",
			clickable:true,
		},
	});

	////testimonial-slider
	var listing = new Swiper('.tp-listing-2-active-2', {
		speed:500,
		loop: true,
		slidesPerView: 1,
		autoplay: true,
		spaceBetween: 0,
	    effect:'fade',
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		a11y: false,
		// Navigation arrows
		navigation: {
			nextEl: '.list-2-prev',
			prevEl: '.list-2-next',
		},
	});

	////testimonial-slider
	var listing2 = new Swiper('.tp-listing-2-active', {
		speed:500,
		loop: true,
		slidesPerView: 1,
		autoplay: true,
		spaceBetween: 0,
	    effect:'fade',
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		a11y: false,
		// Navigation arrows
		navigation: {
			nextEl: '.list-prev',
			prevEl: '.list-next',
		},
	});

	////testimonial-slider
	var testimonial = new Swiper('.tp-list-details-active', {
		speed:1500,
		loop: true,
		slidesPerView: 3,
		autoplay: true,
		spaceBetween: 10,
		breakpoints: {
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		a11y: false,
	});

	////testimonial-slider
	var testimonial = new Swiper('.tp-testimonial-active', {
		speed:1500,
		loop: true,
		slidesPerView: 2,
		autoplay: true,
		spaceBetween: 30,
		breakpoints: {
			'1400': {
				slidesPerView: 2,
			},
			'1200': {
				slidesPerView: 2,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		a11y: false,
		// Navigation arrows
		navigation: {
			nextEl: '.test-prev',
			prevEl: '.test-next',
		},
	});

	////category-slider
	var category = new Swiper('.tp-category-2-active', {
		speed:1500,
		loop: true,
		slidesPerView: 4,
		autoplay: true,
		spaceBetween: 50,
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		a11y: false,
		// Navigation arrows
		navigation: {
			nextEl: '.category-prev',
			prevEl: '.category-next',
		},
	});

	////testimonial-2-slider
	var testimonial = new Swiper('.tp-testimonial-2-active', {
		slidesPerView: 1,
		speed:1500,
		loop: true,
		autoplay:true,
		spaceBetween: 50,
		// effect:'fade',
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
				spaceBetween: 30,
			},
		},
		a11y: false,
		// Navigation arrows
		navigation: {
			nextEl: '.test-prev',
			prevEl: '.test-next',
		},
	});

	////postbox-slider
	var testimonial = new Swiper('.postbox__thumb-slider-active', {
		speed:1000,
		slidesPerView: 1,
		loop: true,
		autoplay:true,
		effect:'fade',
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		// Navigation arrows
		navigation: {
			nextEl: '.postbox-arrow-next',
			prevEl: '.postbox-arrow-prev',
		},
		a11y: false,
	});
	////////////////////////////////////////////////////

	// 09. Home-1-Slider js
	$('.tp-category-slider-active').slick({
	speed: 7000,
	autoplay: true,
	autoplaySpeed: 0,
	centerMode: true,
	cssEase: 'linear',
	slidesToShow: 1,
	slidesToScroll: 1,
	variableWidth: true,
	infinite: true,
	initialSlide: 1,
	arrows: false,
	buttons: false,
	focusOnSelect: true,
	pauseOnHover:true,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
			}
		},
		{
			breakpoint: 992,
			settings: {
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}
	]
	});

	////////////////////////////////////////////////////
	// 15. Masonary Js
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.grid-sizer',
			}
		});


		// filter items on button click
		$('.masonary-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$('.masonary-menu button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});

	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	////////////////////////////////////////////////////
	// 17. Counter Js
	new PureCounter();
	new PureCounter({
		filesizing: true,
		selector: ".filesizecount",
		pulse: 2,
	});

	if ($('.tp-header-height').length > 0) {
		var headerHeight = document.querySelector(".tp-header-height");      
		var setHeaderHeight = headerHeight.offsetHeight;	
		
		$(".tp-header-height").each(function () {
			$(this).css({
				'height' : setHeaderHeight + 'px'
			});
		});
	  }

	if($('.tp-main-menu-content').length && $('.tp-main-menu-mobile').length){
		let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
		let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
		mobileNavContainer.innerHTML = navContent;
	
	
		let arrow = $(".tp-main-menu-mobile .has-dropdown > a");
	
		arrow.each(function () {
			let self = $(this);
			let arrowBtn = document.createElement("BUTTON");
			arrowBtn.classList.add("dropdown-toggle-btn");
			arrowBtn.innerHTML = "<i class='fal fa-angle-right'></i>";
	
			self.append(function () {
			  return arrowBtn;
			});
	
			self.find("button").on("click", function (e) {
			  e.preventDefault();
			  let self = $(this);
			  self.toggleClass("dropdown-opened");
			  self.parent().toggleClass("expanded");
			  self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
			  self.parent().parent().children(".tp-submenu").slideToggle();
			});
	
		});
	}

	
	// for header
	if ($("#tp-copyright__lang-toogle").length > 0) {
		window.addEventListener('click', function (e) {

			if (document.getElementById('tp-copyright__lang-toogle').contains(e.target)) {
				$(".tp-copyright__lang-submenu").toggleClass("open");
			}
			else {
				$(".tp-copyright__lang-submenu").removeClass("open");
			}
		});
	}
	// for header
	if ($("#tp-header__lang-toogle").length > 0) {
		window.addEventListener('click', function (e) {

			if (document.getElementById('tp-header__lang-toogle').contains(e.target)) {
				$(".tp-header__lang").toggleClass("open");
			}
			else {
				$(".tp-header__lang").removeClass("open");
			}
		});
	}
	// for header
	if ($("#tp-header__category-toogle").length > 0) {
		window.addEventListener('click', function (e) {

			if (document.getElementById('tp-header__category-toogle').contains(e.target)) {
				$(".tp-header__category").toggleClass("open");
			}
			else {
				$(".tp-header__category").removeClass("open");
			}
		});
	}
	// for header
	if ($("#tp-header__area-toogle").length > 0) {
		window.addEventListener('click', function (e) {

			if (document.getElementById('tp-header__area-toogle').contains(e.target)) {
				$(".tp-header__area").toggleClass("open");
			}
			else {
				$(".tp-header__area").removeClass("open");
			}
		});
	}



})(jQuery);