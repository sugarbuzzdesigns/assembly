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
			};

			function hideMenu(){
				$('html').removeClass('menu-open');
			};
		}
	};

	$(function(){
		assembly.navigation.init();
	});
})(jQuery);