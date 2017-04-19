/*!
 * Assembly Carousel Modules
 */
var assembly = assembly || {};

(function($){
	assembly.carousel = {
		init: function(){
			this.initializeCarousels();
			this.currentEmployeeSlide = 0;
		},

		initializeCarousels: function(){
			var _this = this, $slides, start, position, $carousel, numSlides, slickCarousel, $employeeCarousel, hasVariableWidth = false, dots = false, slidesToShow = 1.2;

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
					infinite: true,
					touchMove: false,
					arrows: false,
					easing: 'ease-in',
					speed: 500,
					variableWidth: hasVariableWidth
				});
			});

			var $ourApproachCarousel = $('.carousel.our-approach');

			$ourApproachCarousel.on('init', function(slick){
				$('.our-approach.carousel-module .slick-dots li').each(function(i, dot){
					var $nav = $('<nav class="up-down-nav"></nav>');
					var $navArrowUp = $('.nav-arrow-up').clone().removeClass('nav-arrow-up').addClass('up');
					var $navArrowDown = $('.nav-arrow-up').clone().removeClass('nav-arrow-up').addClass('down');
					var $count = $('<span class="num">0'+ (i+1) +'</span>');

					$nav.append($navArrowUp, $count, $navArrowDown);

					$(dot).append($nav);
				});

				$('.our-approach.carousel-module .slick-slide').each(function(i, slide){
					var $slideNumber = $('<div class="slide-number">0'+ (i+1) +'</div>');

					$(slide).find('.tile-copy').prepend($slideNumber);
				});

				$('.our-approach.carousel-module .slick-dots').append('<li class="track"></li>');

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
				infinite: true,
				touchMove: false,
				arrows: false,
				easing: 'ease-in',
				fade: true,
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

			$employeeCarousel = $('.employee-carousel');

			$employeeCarousel.on('init', function(slick){

				$curCarousel = $(this);

				$curCarousel.closest('.carousel-inner').find('.nav-arrow-right').on('click', function(){
					$(this).siblings('.carousel').slick('slickNext');
				});
			});

			$employeeCarousel.slick({
				slidesToShow: 1,
				initialSlide: 0,
				infinite: true,
				touchMove: false,
				arrows: false,
				easing: 'ease-in',
				speed: 500,
				variableWidth: hasVariableWidth
			});

			$employeeCarousel.on('beforeChange', function(event, slick, currentSlide, nextSlide){
				var $thisCarousel = $(this);
				var slideCount = $thisCarousel.find('.slide').length;

				if(slideCount === nextSlide + 1){
					$thisCarousel.closest('.carousel-module').addClass('atEnd');
				} else {
					$thisCarousel.closest('.carousel-module').removeClass('atEnd');
				}
			});

			$employeeCarousel.on('afterChange', function(event, slick, currentSlide, nextSlide){
				if(_this.currentEmployeeSlide === currentSlide){
					return;
				} else {
					_this.currentEmployeeSlide = currentSlide;
				}

				var num = $(this).find('.slide').eq(currentSlide).data('years-experience')*1;
				count(num, $('.years-experience.interactive .tens'), $('.years-experience.interactive .ones'));
			});

			function count(num, $tens, $ones){
				var $num1 = $tens;
				var $num2 = $ones;

				var num1Start = $num1.html();
				var num2Start = $num2.html();
				var fullNum = (num1Start+num2Start)*1;
				var newNum = num;

				var tens = Math.floor(newNum/10);
				var ones = newNum - Math.floor(newNum/10) * 10;
				var total = fullNum;

				var countUp = setInterval(function(){

					if(fullNum > newNum){
						total-=1;
					} else {
						total+=1;
					}

					if((""+total).length === 1){
						$num2.html(total);
					} else {
						$num1.html((""+total).split("")[0]);
						$num2.html((""+total).split("")[1]);
					}

					if(total === newNum){																				clearInterval(countUp);
					}
				}, 50);
			}

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