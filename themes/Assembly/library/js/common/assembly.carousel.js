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
			var $slides, start, position, $carousel, numSlides, slickCarousel, employeeCarousel, hasVariableWidth = false, dots = false;

			$('.carousel-module').not('.employee-carousel, .our-approach').each(function(i, module){
				if($(this).is('.our-approach')){
					hasVariableWidth = true;
					dots = true;
				}

				$carousel = $(module).find('.carousel');
				$slides = $carousel.find('.slide');
				numSlides = $slides.length;

				start = $carousel.data('mobile-start') === 'front' ? 0 : numSlides - 1;
				position = $carousel.data('mobile-position');

				slickCarousel = $carousel.slick({
					slidesToShow: 1.2,
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
				$('.our-approach .carousel-next').on('click', function(evt){
					evt.preventDefault();

					$ourApproachCarousel.slick('slickNext');
				})
			});

			$ourApproachCarousel.slick({
				init: function(slick){
					console.log('initialized');
				},
				slidesToShow: 1,
				initialSlide: 0,
				infinite: false,
				touchMove: false,
				arrows: false,
				easing: 'ease-in',
				speed: 500,
				dots: true,
				variableWidth: hasVariableWidth
			});

			$ourApproachCarousel.on('beforeChange', function(event, slick, currentSlide, nextSlide){
				updateCountText(nextSlide, $('.our-approach .slide-number'));
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
		}
	}

	$(function(){
		assembly.carousel.init();
	});
})(jQuery);