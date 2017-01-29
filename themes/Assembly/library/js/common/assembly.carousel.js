/*!
 * Assembly Carousel Modules
 */
var assembly = assembly || {};

(function($){
	assembly.carousel = {
		init: function(){
			this.initializeCarousels();
		},

		initializeCarousels: function(){
			var $slides, start, position, $carousel, numSlides, slickCarousel, employeeCarousel, hasVariableWidth = false, dots = false, slidesToShow = 1.2;

			$('.carousel-module').not('.employee-carousel, .our-approach, .add-contact-photo').each(function(i, module){
				if($(this).is('.our-approach')){
					hasVariableWidth = true;
					dots = true;
				}

				$carousel = $(module).find('.carousel');
				$slides = $carousel.find('.slide');
				numSlides = $slides.length;

				start = $carousel.data('mobile-start') === 'front' ? 0 : numSlides - 1;
				position = $carousel.data('mobile-position');

				if(assembly.util.useragent.deviceType != 'mobile'){
					slidesToShow = 1;
					start = 0;
				}

				$carousel.on('init', function(slick){

					$curCarousel = $(this);

					$curCarousel.closest('.carousel-inner').find('.nav-arrow-right').on('click', function(){
						$(this).siblings('.carousel').slick('slickNext');
					});
				});

				$carousel.on('beforeChange', function(event, slick, currentSlide, nextSlide){
					var $thisCarousel = $(this);
					var slideCount = $thisCarousel.find('.slide').length;

					if(slideCount === nextSlide + 1){
						$thisCarousel.closest('.carousel-module').addClass('atEnd');
					} else {
						$thisCarousel.closest('.carousel-module').removeClass('atEnd');
					}
				});

				slickCarousel = $carousel.slick({
					slidesToShow: slidesToShow,
					initialSlide: start,
					infinite: false,
					touchMove: false,
					arrows: false,
					easing: 'ease-in',
					speed: 500,
					variableWidth: hasVariableWidth
				});
			});

			var $ourApproachCarousel = $('.carousel.our-approach');

			$ourApproachCarousel.on('init', function(slick){
				$('.our-approach.carousel-module .carousel-next').appendTo($ourApproachCarousel);

				$('.our-approach .carousel-next').on('click', function(evt){
					evt.preventDefault();

					$ourApproachCarousel.slick('slickNext');
				});

				$('.our-approach .carousel').data('slideCount', $('.our-approach .slick-slide').length);

				$('.our-approach .slick-dots button').on('click', function(evt){
					evt.preventDefault();
					var slideNum = $(this).attr('tabindex');

					$('.our-approach .slick-dots li.slick-active').removeClass('slick-active');
					$(this).parent().addClass('slick-active');
					$ourApproachCarousel.slick('slickGoTo', slideNum);
				});
			});

			$ourApproachCarousel.slick({
				slidesToShow: 1,
				initialSlide: 0,
				infinite: false,
				touchMove: false,
				arrows: false,
				easing: 'ease-in',
				speed: 500,
				variableWidth: hasVariableWidth
			});

			$ourApproachCarousel.on('beforeChange', function(event, slick, currentSlide, nextSlide){
				var slideCount = $('.our-approach .carousel').data('slideCount');

				updateCountText(nextSlide, $('.our-approach .slide-number'));
				updateCustomDots(nextSlide);

				if(nextSlide + 1 === $('.our-approach .slick-slide').length){
					$('.our-approach .carousel').addClass('atEnd');
				} else {
					if($('.our-approach .carousel').hasClass('atEnd')){
						$('.our-approach .carousel').removeClass('atEnd');
					}
				}
			});

			employeeCarousel = $('.employee-carousel').slick({
				slidesToShow: 1,
				initialSlide: 0,
				infinite: false,
				touchMove: false,
				arrows: false,
				easing: 'ease-in',
				speed: 500,
				variableWidth: hasVariableWidth
			});

			employeeCarousel.on('beforeChange', function(event, slick, currentSlide, nextSlide){
				$('.years-experience-numbers').addClass('counting');
			});

			employeeCarousel.on('afterChange', function(event, slick, currentSlide, nextSlide){
				var year1 = $('.years-experience-numbers .num').eq(0),
					year2 = $('.years-experience-numbers .num').eq(1),
					years = $('.years-experience-numbers .num').html(),
					yearsExp = $(this).find('.slide').eq(currentSlide).data('years-experience');

				var numArr = yearsExp.toString().split('');

				year1.html(numArr[0]);
				year2.html(numArr[1]);

				$('.years-experience-numbers').removeClass('counting');
			});

			function updateCountText(nextSlide, $num){
				var num = nextSlide += 1,
					newNum = 'error';

				if(num.toString().length === 1){
					newNum = '0' + num;
				} else {
					newNum = num;
				}

				$num.html(newNum);
			}

			function updateCustomDots(nextSlide){
				$('.our-approach .slick-dots li.slick-active').removeClass('slick-active');
				$('.our-approach .slick-dots li').eq(nextSlide).addClass('slick-active');
			}
		}
	}

	$(function(){
		assembly.carousel.init();
	});
})(jQuery);