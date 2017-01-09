/*!
 * Assembly Menu Navigation
 */
var assembly = assembly || {};

(function($){
	assembly.services = {
		init: function(){
			this.$selectFilter = $('.select-filter');
			this.initSelect2();
			this.bindEvents();
		},

		initSelect2: function(){
			this.select2Filter = this.$selectFilter.select2({
				minimumResultsForSearch: -1
			});
		},

		bindEvents: function(){
			var _this = this;

			_this.$selectFilter.on('change', function selectFilterOnChange(evt){
				_this.filterProjectsByCategory(this.value);
			});
		},
		filterProjectsByCategory: function(option){
			console.log(option);
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