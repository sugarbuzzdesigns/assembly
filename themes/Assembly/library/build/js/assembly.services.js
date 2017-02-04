/* repo: assembly/ - Package Version: 1.0.0 - 2017-02-03 07:07 pm - User: Phoydar */
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
			var $landingContent = $('.landing.content'),
				$allTiles = $('.individual-service[data-service]'),
				$servicesToHide = $('.individual-service[data-service!="'+ option + '"]'),
				$servicesToShow = $('.individual-service[data-service="'+ option + '"]');

				console.log($servicesToShow);

			if(option === 'all'){
				$landingContent.show();
				$allTiles.hide();
			} else {
				$landingContent.hide();
				$servicesToHide.hide();
				$servicesToShow.show();
				// $.when($allTiles.fadeOut(500)).done(function(){
				// 	$servicesToShow.fadeIn(500);
				// });
			}
		}
	};

	$(function(){
		assembly.services.init();
	});
})(jQuery);