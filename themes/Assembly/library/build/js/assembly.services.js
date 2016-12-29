/* repo: assembly/ - Package Version: 1.0.0 - 2016-12-29 03:43 pm - User: Phoydar */
/*!
 * Assembly Menu Navigation
 */
var assembly = assembly || {};

(function($){
	assembly.services = {
		init: function(){
			this.$selectFilter = $('.select-filter');
			this.bindEvents();

			console.log(this.$selectFilter);
		},

		bindEvents: function(){
			var _this = this;

			_this.$selectFilter.on('change', function selectFilterOnChange(evt){
				_this.filterProjectsByCategory(this.value);
			});
		},
		filterProjectsByCategory: function(option){
			var $allTiles = $('.tile[data-sesrvice-category]'),
				$itemsToFilterOut = $('.tile[data-sesrvice-category!="'+ option + '"]'),
				$itemsInCategory = $('[data-sesrvice-category="'+ option + '"]');

			if(option === 'all'){
				$itemsInCategory = $allTiles;
			}

			$.when($allTiles.fadeOut(500)).done(function(){
				$itemsInCategory.fadeIn(500);
				$itemsInCategory.addClass('animated');
			});

		}
	};

	$(function(){
		assembly.services.init();
	});
})(jQuery);