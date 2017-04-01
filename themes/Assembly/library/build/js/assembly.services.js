/* repo: assembly/ - Package Version: 1.0.0 - 2017-03-31 11:07 pm - User: Phoydar */
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
			// this.setInitialTranslate();
			this.$currentServiceContainer = $('.all-services');
		},

		initSelect2: function(){
			this.select2Filter = this.$selectFilter.select2({
				minimumResultsForSearch: -1
			});
		},

		setInitialContainerHeights: function(){
			console.log('set setInitialContainerHeights');
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
				$('.scroll-overlay').addClass('going-down');
				$('.scroll-overlay').removeClass('going-up');
				if(_this.$filterMenu.hasClass('show') && $(window).scrollTop() > 50){
					_this.$filterMenu.removeClass('show');
				}
			});

			assembly.util.env.$win.on('scroll-up', function(){
				if(typeof assembly.scrollAnimating !== 'undefined' && assembly.scrollAnimating === false){
					$('.scroll-overlay').addClass('going-up');
					$('.scroll-overlay').removeClass('going-down');
				}
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
				if(assembly.util.useragent === 'desktop'){
					_this.$servicesContainer.css({
						height: _this.$currentServiceContainer.outerHeight()
					});
				}
			});

			$('.all-services .tile').on('click', function(e){
				e.preventDefault();

				_this.filterProjectsByCategory($(this).data('service-id'), true);

				$('.filter-menu [data-value].active').removeClass('active');
				$('.filter-menu [data-value="'+ $(this).data('service-id') +'"]').addClass('active');

				_this.$selectFilter.val($(this).data('service-id')).trigger('change');
			});

			$('.all-services.show').imagesLoaded( function() {
			  	_this.setInitialContainerHeights();
			  	_this.loadServicesImages();
			});

			$('#interior-logo').imagesLoaded( function() {
				console.log('main logo loaded');
			});
		},

		loadServicesImages: function(){
			$('[data-src]').each(function(i, img){
				$(img).attr('src', $(img).data('src'));
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

		filterProjectsByCategory: function(option, tileClick){
			var _this = this,
				$landingContent = $('[data-service="all"]'),
				$allTiles = $('[data-service]'),
				$serviceToHide = $('[data-service].show'),
				$serviceToShow = $('[data-service="'+ option + '"]');

			$serviceToHide.removeClass('show').addClass('hide');
			$serviceToShow.removeClass('hide').addClass('show');

			if(assembly.util.useragent.deviceType !== 'desktop'){
				setTimeout(function(){
					_this.$servicesContainer.css({
						height: $serviceToShow.outerHeight()
					});
				}, 400);
			} else {
				_this.$servicesContainer.css({
					height: $serviceToShow.outerHeight()
				});
			}

			if(assembly.util.useragent.deviceType !== 'desktop' && tileClick){
				assembly.scrollAnimating = true;
				$('html, body').delay(500).animate({ scrollTop: $('.mobile-filter').offset().top - 20 }, 1000, 'easeOutCubic', function(){
					assembly.scrollAnimating = false;
				});
			}
		}
	};

	$(function(){
		assembly.services.init();
	});
})(jQuery);