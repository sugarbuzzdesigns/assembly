/* repo: assembly/ - Package Version: 1.0.0 - 2017-02-17 05:16 pm - User: Phoydar */
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
			this.countTilesAndAddClass();
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

		countTilesAndAddClass: function(){
			$('.content.landing').find('.tile').each(function(tileNum, tile){
				console.log($(tile).addClass('tile-' + (tileNum+1)));
			});

			$('.content.dynamic .individual-service').each(function(serviceNum, service){
				$(service).find('.tile').each(function(serviceTileNum, tile){
					console.log('tile-' + (serviceTileNum+1));
					console.log($(tile).addClass('tile-' + (serviceTileNum+1)));
				});
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