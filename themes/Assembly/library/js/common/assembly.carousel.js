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
			var $slides, start, position, $carousel, numSlides;

			$('.carousel-module').not('.employee-carousel').each(function(i, module){
				$carousel = $(module).find('.carousel');
				$slides = $carousel.find('.slide');
				numSlides = $slides.length;

				start = $carousel.data('mobile-start') === 'front' ? 0 : numSlides - 1;
				position = $carousel.data('mobile-position');

				$carousel.slick({
					slidesToShow: 1.2,
					initialSlide: start,
					infinite: false,
					touchMove: false,
					arrows: false,
					easing: 'ease-in',
					speed: 500
				});
			});

			var employeeCarousel = $('.employee-carousel').slick({
				slidesToShow: 1,
				initialSlide: 0,
				infinite: false,
				touchMove: false,
				arrows: false,
				easing: 'ease-in',
				speed: 500
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
		}
	}

	$(function(){
		assembly.carousel.init();
	});
})(jQuery);