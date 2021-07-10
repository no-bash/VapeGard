$(document).ready(function(){
	
	var footerHeight = document.querySelector('footer').clientHeight;
	document.querySelector('.all-except-footer').style.paddingBottom = footerHeight + 'px';
	
	$('.h__slider').slick({
		arrows: true,
		dots: true,
		pauseOnHover: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3500,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 850
	});

	$('.our-projects__slider').slick({
		arrows: true,
		dots: true,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 850
	});
	
	$('.products-shares__slider').slick({
		arrows: true,
		dots: false,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 2,
		responsive:	[
			{
				breakpoint: 992,
				settings: { slidesToShow: 3 }
			},
			{
				breakpoint: 768,
				settings: { slidesToShow: 2 }
			},
			{
				breakpoint: 550,
				settings: { 
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});

	$('.our-team__slider').slick({
		arrows: true,
		dots: true,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		speed: 850,
		responsive:	[
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
			/*
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			*/
		]
	});

	$('.agricmach-made__slider').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});
	$('.heavycargo-work__slider').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: $('.heavycargo-work__prev'),
		nextArrow: $('.heavycargo-work__next'),
		responsive: [
			{
				breakpoint: 1200,
				settings: { slidesToShow: 3 }
			},
			{
				breakpoint: 992,
				settings: { slidesToShow: 2 }
			},
			{
				breakpoint: 767,
				settings: { slidesToShow: 1 }
			}
		]
	});
	$('.heavycargo-partner__slider').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: $('.heavycargo-partner__prev'),
		nextArrow: $('.heavycargo-partner__next'),
		responsive: [
			{
				breakpoint: 1200,
				settings: { slidesToShow: 3 }
			},
			{
				breakpoint: 992,
				settings: { slidesToShow: 2 }
			},
			{
				breakpoint: 767,
				settings: { slidesToShow: 1 }
			}
		]
	});

	$('.heavycargo-topslider__slider').slick({
		arrows: false,
		dots: false,
		pauseOnHover: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3500,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 850
	});

	$('.heavycargo-office__slider').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: $('.heavycargo-office__prev'),
		nextArrow: $('.heavycargo-office__next'),
		responsive: [
			{
				breakpoint: 1200,
				settings: { slidesToShow: 1 }
			}
		]
	});

	$('.heavycargo-staff__slider').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: $('.heavycargo-staff__prev'),
		nextArrow: $('.heavycargo-staff__next'),
		responsive: [
			{
				breakpoint: 1200,
				settings: { slidesToShow: 3 }
			},
			{
				breakpoint: 992,
				settings: { slidesToShow: 2 }
			},
			{
				breakpoint: 767,
				settings: { slidesToShow: 1 }
			}
		]
	});

	$('.heavycargo-tractor__slider').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: $('.heavycargo-tractor__prev'),
		nextArrow: $('.heavycargo-tractor__next'),
		responsive: [
			{
				breakpoint: 1200,
				settings: { slidesToShow: 1 }
			}
		]
	});

	$('.heavycargo-made__slider1').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: $('.heavycargo-made__prev1'),
		nextArrow: $('.heavycargo-made__next1'),
		responsive: [
			{
				breakpoint: 1200,
				settings: { slidesToShow: 1 }
			}
		]
	});

	$('.heavycargo-made__slider2').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.heavycargo-made__prev2'),
		nextArrow: $('.heavycargo-made__next2'),
		responsive: [
			{
				breakpoint: 1200,
				settings: { slidesToShow: 1 }
			}
		]
	});

	$('.heavycargo-made__slider3').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: $('.heavycargo-made__prev3'),
		nextArrow: $('.heavycargo-made__next3'),
		responsive: [
			{
				breakpoint: 1200,
				settings: { slidesToShow: 1 }
			}
		]
	});

	$('.heavycargo-mail__slider').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: $('.heavycargo-mail__prev'),
		nextArrow: $('.heavycargo-mail__next'),
		responsive: [
			{
				breakpoint: 1200,
				settings: { slidesToShow: 3 }
			},
			{
				breakpoint: 992,
				settings: { slidesToShow: 2 }
			},
			{
				breakpoint: 767,
				settings: { slidesToShow: 1 }
			}
		]
	});

	$('#to-heavycargo-work').on('click', function(){
		$("html, body").animate({scrollTop: $('.heavycargo-work').offset().top-60+"px"}, 700);
	});
	$('#to-heavycargo-history').on('click', function(){
		$("html, body").animate({scrollTop: $('.heavycargo-history').offset().top-60+"px"}, 700);
	});
	$('#to-heavycargo-escort').on('click', function(){
		$("html, body").animate({scrollTop: $('.heavycargo-escort').offset().top-60+"px"}, 700);
	});

	
	/* ----- No click on tel ----- */
	
	if(screen.width > 767){
		var noClick = document.querySelectorAll('.no-click');
		
		for(var i = 0; i < noClick.length; i++){
			noClick[i].addEventListener('click', function(e){
				e.preventDefault();
			});
		}
	}

	if(screen.width <= 991 && screen.width > 768){
		var less1 = document.querySelector('.less1');
		var less2 = document.querySelector('.less2');

		less1.textContent = 'Перевозка грузов';
		less2.textContent = 'Оформление документов';
	}

	var body = document.querySelector('body');
	var hSecond = document.querySelector('.h__second');
	var hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', function(){
		this.classList.toggle('active');
		hSecond.classList.toggle('active');
		body.classList.toggle('scroll-off');
	});

	$("input[type=tel]").mask("+7(999) 999-9999");
	
	if(window.innerWidth > 767){
		var hFirst = document.querySelector('.h__first');
		var hFirstPaddingBottom = hSecond.getBoundingClientRect().height;
		var hSecondPaddingBottom = hFirst.getBoundingClientRect().height;
		var hSecond = document.querySelector('.h__second');
		var hSecondRectParams;
		
		window.addEventListener('scroll', function() {
			hSecondRectParams = hSecond.getBoundingClientRect();
			
			if(hSecondRectParams.top < pageYOffset){
				hSecond.classList.add('fixed');

				hFirst.style.paddingBottom = hFirstPaddingBottom + 'px';
				hSecond.style.paddingBottom = hSecondPaddingBottom + 'px'
			} else {
				hSecond.classList.remove('fixed');
				hFirst.style.paddingBottom = 0;
				hSecond.style.pad
			}
		});
	}

	
});
/*
document.querySelector('.burger').onclick = function(){
	this.classList.toggle('active');
	document.querySelector('.header__menu-block').classList.toggle('active');
	document.querySelector('body').classList.toggle('scroll-off');
};
*/