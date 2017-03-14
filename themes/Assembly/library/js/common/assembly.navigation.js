/*!
 * Assembly Menu Navigation
 */
var assembly = assembly || {};

(function($){
	assembly.navigation = {
		init: function(){
			this.$mainMenuBtn = $('.main-menu-btn');

			this.bindEvents();
		},

		bindEvents: function(){
			var _this = this;

			_this.$mainMenuBtn.on('click', function(){
				_this.toggleMainMenu(this);
			});

			$('.menu-bg').on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(evt){
				if(evt.originalEvent.animationName === 'hideMenuBg'){
					$('html').removeClass('close-menu');
				}
			});

			$('.home .to-top').on('click', function(){
				$('html, body').animate({
					scrollTop: $('.main-content').offset().top
				})
			});
		},

		toggleMainMenu: function(){
			var _this = this;

			if($('html').hasClass('menu-open')){
				hideMenu();
			} else {
				showMenu();
			}

			function showMenu(){
				$('html').addClass('menu-open');

				$('.main-menu').css({
					opacity: 1,
					height: '100vh',
					width: '100vw',
				    'margin-top': '0',
				    'margin-right': '0'
				});

				$('.main-menu-btn .letter').addClass('fadeOut');
				$('.main-menu-btn .border').addClass('fadeOut');

				$('.header-mask.landing-logo').height('auto');

				var queue = $({}); //use the default animation queue
			    $('nav li').each(function(i, elm) {
			        queue.queue(createWorkQueueFunction($(this), i));
			        queue.delay(200);
			    });

				function createWorkQueueFunction($element, i) {
				    return function(next) {
				        $element.addClass('show-nav-item');
						next();
				    };
				}
			};

			function hideMenu(){
				$('nav li').removeClass('show-nav-item');

				$('.main-menu').css({
					opacity: 0,
					height: '30px',
					width: '30px',
				    'margin-top':' 59px',
				    'margin-right': 'calc(49%/1440*100)'
				});

				$('.main-menu-btn .letter').removeClass('fadeOut');
				$('.main-menu-btn .border').removeClass('fadeOut');

				$('html').removeClass('menu-open');
			};
		}
	};

	$(function(){
		assembly.navigation.init();
		$('.main-menu-btn').addClass('animate'); //temporary
	});
})(jQuery);