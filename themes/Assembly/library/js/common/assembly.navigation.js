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
				console.log(evt);
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
				$('html').removeClass('close-menu');

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
				$('html').removeClass('menu-open');
				$('html').addClass('close-menu');
				$('nav li').removeClass('show-nav-item');
			};
		}
	};

	$(function(){
		assembly.navigation.init();
	});
})(jQuery);