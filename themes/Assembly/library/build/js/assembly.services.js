/* repo: assembly/ - Package Version: 1.0.0 - 2017-03-19 11:59 am - User: Phoydar */
/*!
 * Assembly Menu Navigation
 */
var assembly = assembly || {};

(function($){
	assembly.services = {
		init: function(){
			this.$selectFilter = $('.select-filter');
			this.$filterMenu = $('.filter-menu');
			this.$filterMenuLinks = $('.filter-menu a');
			this.$servicesContainer = $('.content');
			this.initSelect2();
			this.bindEvents();
			this.waypoints();
			this.countTilesAndAddClass();
			this.setInitialTranslate();
			this.$currentServiceContainer = $('.all-services');

			this.setContainerHeights();
		},

		initSelect2: function(){
			this.select2Filter = this.$selectFilter.select2({
				minimumResultsForSearch: -1
			});
		},

		setContainerHeights: function(){
			this.$servicesContainer.css({
				height: this.$currentServiceContainer.height()
			});
		},

		bindEvents: function(){
			var _this = this;

			_this.$selectFilter.on('change', function selectFilterOnChange(evt){
				_this.filterProjectsByCategory(this.value);
			});

			_this.$filterMenuLinks.on('click', function filterMenuLinksClickHandler(evt){
				evt.preventDefault();

				$(this).parent().siblings().removeClass('active');
				$(this).parent().addClass('active');

				_this.filterProjectsByCategory($(this).parent().data('value'));
			});

			assembly.util.env.$win.on('scroll-down', function(){
				if(_this.$filterMenu.hasClass('show')){
					_this.$filterMenu.removeClass('show');
				}
			});

			assembly.util.env.$win.on('scroll-up', function(){
				if(!_this.$filterMenu.hasClass('show')){
					_this.$filterMenu.addClass('show');
				}
			});

			assembly.util.env.$win.on('scroll', function(){
				$('.tile').each(function(i, tile){
					// _this.setTranslate(tile);
				});
			});

			assembly.util.env.$win.on('windowResize', function(){
				_this.$servicesContainer.css({
					height: _this.$currentServiceContainer.outerHeight()
				});
			});
		},

		setInitialTranslate: function(elm){
			var _this = this;

			$('.tile').each(function(i, tile){
				// _this.setTranslate(tile);
			});
		},

		setTranslate: function(elm, onload){
			var $elm = $(elm),
				firstTop = $elm.offset().top - $elm.offsetParent().offset().top,
				winScrollTop = $(window).scrollTop(),
				shiftDistance = (firstTop - winScrollTop) * $elm.data('speed');

			if($elm.is('.inview') || onload){
				$elm.css({
					transform: 'translate3d(0,'+ shiftDistance +'px,0)'
				});
			}
		},

		waypoints: function(){
			var _this = this;

			$('.tile').each(function(i, tile){
				new Waypoint.Inview({
					element: $(tile)[0],
					enter: function(direction) {
						$(tile).addClass('inview');
					},
					exited: function(direction) {
						$(tile).removeClass('inview');
					}
				});

				// _this.setTranslate(tile, 'true');
			});
		},

		countTilesAndAddClass: function(){
			$('.content.landing').find('.tile').each(function(tileNum, tile){
				$(tile).addClass('tile-' + (tileNum+1));
			});

			$('.content.dynamic .individual-service').each(function(serviceNum, service){
				$(service).find('.tile').each(function(serviceTileNum, tile){
					$(tile).addClass('tile-' + (serviceTileNum+1));
				});
			});
		},

		filterProjectsByCategory: function(option){
			var $toShow,
				$landingContent = $('[data-service="all"]'),
				$allTiles = $('.individual-service[data-service]'),
				$servicesToHide = $('.individual-service[data-service!="'+ option + '"]'),
				$servicesToShow = $('.individual-service[data-service="'+ option + '"]');

			if(option === 'all'){
				$toShow = $landingContent.addClass('show');
				$allTiles.removeClass('show');
			} else {
				$landingContent.removeClass('show');
				$servicesToHide.removeClass('show  animate');
				$toShow = $servicesToShow.addClass('show');
				setTimeout(function(){
					$servicesToShow.addClass('animate');
				}, 100);
				// $.when($allTiles.fadeOut(500)).done(function(){
				// 	$servicesToShow.fadeIn(500);
				// });
			}

			this.$servicesContainer.css({
				height: $toShow.height()
			});
		}
	};

	$(function(){
		assembly.services.init();
	});
})(jQuery);