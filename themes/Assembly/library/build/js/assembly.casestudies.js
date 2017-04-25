/* repo: assembly/ - Package Version: 1.0.0 - 2017-04-25 10:51 am - User: Phoydar */
/*!
 * Assembly Case Studies Page
 */
var assembly = assembly || {};

(function($){
	assembly.casestudies = {
		init: function(){
			this.$landing = $('.landing');
			this.$landingSquares = $('.landing .case-study-category');
			this.$customLanding = $('.case-study-landing[data-kit-type="custom"]');
			this.$modularLanding = $('.case-study-landing[data-kit-type="modular"]');
			this.$mainContent = $('.content');
			this.mainContentHeight = $('.content').height();
			this.$caseStudyLandingTiles = $('.case-study-landing .tile');
			this.$selectFilter = $('.select-filter');
			this.$toggleFilter = $('.toggle-filter');
			this.$toggleFilterBtns = $('.toggle-filter a');
			this.$filterMenuLinks = $('.filter-menu a');
			this.$filterWrap = $('.filter-wrap');
			this.$filterMenu = $('.filter-menu');
			this.$caseStudyContainers = $('.case-study-container');
			this.$currentCaseStudyContainer = {};
			this.currentFilerStatus = {
				type: 'custom',
				category: 'all'
			};
			this.initSelect2();
			this.bindEvents();

			this.addClassTileCount();

			// $('.tile-img.lazy-load .img-container').eq(0).imagesLoaded(function(){
			// 	console.log('loaded');
			// });
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

			_this.$filterMenuLinks.on('click', function selectFilterOnChange(evt){
				evt.preventDefault();

				if($(this).parent().is('.active')){
					return;
				}

				_this.setFilterLinksClass($(this).parent());
				_this.filterProjectsByCategory($(this).parent().data('value'));
			});

			$('.back-box').on('click', function(evt){
				evt.stopPropagation();

				$('[data-value="all"] a').trigger('click');
			});

			_this.$toggleFilterBtns.on('click', function toggleFilterClickHandler(evt){
				evt.preventDefault();

				_this.toggleCaseStudyType(this);
			});

			_this.$caseStudyLandingTiles.on('click', function tileFilterClickHandler(evt){
				var kitType = $(this).closest('.case-study-container').attr('data-kit-type'),
					category = $(this).find('.tile-cat').html().trim().toLowerCase();

				_this.currentFilerStatus.type = kitType;
				_this.currentFilerStatus.category = category;

				_this.$selectFilter.val(category).trigger('change');
				_this.setFilterLinksClass($('[data-value="'+ category +'"]'));

				$('html, body').delay(500).animate({ scrollTop: 0 }, 1000);
			});

			// main landing screen with two big tiles for Custom/Modular
			_this.$landingSquares.on('click', function landingSquareClickHandler(evt){
				var $square = $(this),
					$type = $(this).is('.modular') ? 'modular' : 'custom';

				$(this).removeClass('hover').addClass('selected');
				$('.hover-spot').off('hover');

				_this.$selectedLandingTile = $square;
				_this.$selectedLandingType = $type;

				if(!$(this).is('.transitioning')){
					setLandingSelection();
				}
				// $('.case-study-category .default-content').off('hoverEventDone');

				// $('.case-study-category .default-content').one('hoverEventDone', function(){
				// 	console.log('clicked and hover done');
				// });
			});

			$('.case-study-category .default-content').on(transEndEventName, function(evt){
				$(this).parent().removeClass('transitioning');

				if($(evt.target).parent().is('.selected')){
					setLandingSelection();
				}

			}).children().on(transEndEventName, function(evt){
				evt.stopPropagation();
			});

			function setLandingSelection(){
				_this.showMainCaseStudies(_this.$selectedLandingTile);

				$('.toggle-filter a').removeClass('active');
				$('.toggle-filter [title=' + _this.$selectedLandingType + ']').addClass('active');
			};

			assembly.util.env.$win.on('scroll-down', function(){
				$('.scroll-overlay').addClass('going-down');
				$('.scroll-overlay').removeClass('going-up');

				if(_this.$filterWrap.hasClass('show') && $('.landing-inner').hasClass('hide')){
					_this.$filterWrap.removeClass('show');
				}
			});

			assembly.util.env.$win.on('scroll-up', function(){
				$('.scroll-overlay').addClass('going-up');
				$('.scroll-overlay').removeClass('going-down');

				if((!_this.$filterWrap.hasClass('show')) && $('.landing-inner').hasClass('hide')){
					_this.$filterWrap.addClass('show');
				}
			});

			assembly.util.env.$win.on('windowResize', function(){
				if(typeof _this.$currentCaseStudyContainer.outerHeight !== 'undefined'){
					$('.case-study-details').css({
						height: _this.$currentCaseStudyContainer.outerHeight()
					});
				}
			});

			$('.view-case-study').on('click', function(evt){
				evt.preventDefault();
				_this.$currentCaseStudyContainer.removeClass('show');

				_this.currentFilerStatus.type = $(this).data('title');

				$('html, body').animate({ scrollTop: 0 }, 1000);

				_this.showCaseStudyContent();
			});

			$('.hover-spot').hover(function(){
				$(this).parent().addClass('hover transitioning');
				$('.hover-content .main-logo').data('tl2').pause(0, true);
				$('.default-content .main-logo').data('tl2').pause(0, true);
			}, function(){
				$(this).parent().removeClass('hover transitioning');
			});

			$('.landing .main-logo .logo').off().hover(
				function(evt){
					$('.hover-content .main-logo').data('tl2').duration(1.2).play();
					$('.default-content .main-logo').data('tl2').duration(1.2).play();
				},
				function(evt){
					$('.hover-content .main-logo').data('tl2').duration(1.5).reverse();
					$('.default-content .main-logo').data('tl2').duration(1.5).reverse();
				}
			);

			$('.case-study-svg-cat .main').hover(function(){
				if($(this).closest('.case-study-svg-cat').is('.activated')){
					return;
				}

				$(this).closest('.case-study-svg-cat').addClass('hover');
			}, function(){
				$(this).closest('.case-study-svg-cat').removeClass('hover');
			});

			$('.case-study-svg-cat').on('click', function(evt){
				evt.preventDefault();

				var cat = $(this).data('svg-case-study-cat');

				$(this).removeClass('hover');

				_this.setFilterLinksClass($('.filter-menu [data-value='+ cat +']'));
				_this.filterProjectsByCategory($(this).data('svg-case-study-cat'));
			});

			_this.$landing.mousemove(function(){
				_this.parallaxBg();
			});


			$('html').on('loaded', function(){
				$('.main-logo').each(function(i, mainLogo){
					window.greensockLogoAnimation($(mainLogo));
				});

				if(window.location.hash){
					setTimeout(function(){
						$('[data-hash-selector="'+ window.location.hash +'"] .hover-spot').trigger('mouseover');
						$('[data-hash-selector="'+ window.location.hash +'"]').trigger('click');
					}, 500);
				}
			});
		},

		lazyLoadImages: function($container){
			if($container.hasClass('imagesLoaded')){
				return;
			}

			var totalImages = $('.tile-img.lazy-load', $container).length;
			var totalImagesLoaded = 0;

			$('.tile-img.lazy-load', $container).each(function(i, tile){
				var $tile = $(tile);
				var $imgContainer = $tile.find('.img-container');
				var $img = $tile.find('img');
				var imgSrc = $img.data('src');
				var imagesLoaded = $tile.imagesLoaded();

				$imgContainer.addClass('is-loading');

				$img.attr('src', imgSrc);

				imagesLoaded.progress(function( loader, image ) {
					$imgContainer
						.removeClass('is-loading')
						.addClass('is-loaded');

					totalImagesLoaded++;

					if(totalImagesLoaded === totalImages){
						$container.trigger('allImagesLoaded');
						$container.addClass('imagesLoaded');
					}
				});
			});
		},

		parallaxBg: function(){

		},

		showMainCaseStudies: function($landingTileClicked){
			var _this = this, $toshow, cat, type;

			cat = $landingTileClicked.data('landing-cat');

			_this.lazyLoadImages($('[data-category="all"][data-kit-type="'+ cat +'"]'));

			_this.currentFilerStatus.category = 'all';

			if($landingTileClicked.is('.modular')){
				$toShow = _this.$modularLanding;
				_this.currentFilerStatus.type = 'modular';

				_this.$modularLanding.addClass('show');
				_this.$customLanding.removeClass('show');
				// Link at bottom of page
				$('[data-title="modular"]').removeClass('show');
				$('[data-title="custom"]').addClass('show');
				// H2 tag at top of page
				$('[data-h2-title="modular"]').addClass('show');
				$('[data-h2-title="custom"]').removeClass('show');

				$('.case-study-svg.modular').addClass('show');
				$('.case-study-svg.custom').removeClass('show');
			} else {
				$toShow = _this.$customLanding;
				_this.currentFilerStatus.type = 'custom';

				_this.$customLanding.addClass('show');
				_this.$modularLanding.removeClass('show');
				// Link at bottom of page
				$('[data-title="modular"]').addClass('show');
				$('[data-title="custom"]').removeClass('show');
				// H2 tag at top of page
				$('[data-h2-title="modular"]').removeClass('show');
				$('[data-h2-title="custom"]').addClass('show');

				$('.case-study-svg.modular').removeClass('show');
				$('.case-study-svg.custom').addClass('show');
			}

			_this.$currentCaseStudyContainer = $toShow;

			$('.case-study-details').css({
				height: $toShow.outerHeight()
			});

			$('.landing-inner').addClass('hide');
			$('.filter-wrap').addClass('show');

			setTimeout(function(){
				$('.content-inner header.dark').addClass('fixme');
			}, 1500);

			$('html').addClass('landing-closed');
		},

		addClassTileCount: function(){
			this.$caseStudyContainers.each(function(i, caseStudyContainers){
				$(caseStudyContainers).find('.tile').each(function(tileIndex, tile){
					$(tile).addClass('tile-' + (tileIndex+1));
				})
			});
		},

		toggleCaseStudyType: function(toggleBtn){
			if($(toggleBtn).is('.active')){ return; }

			if($(toggleBtn).is('.active')){
				$('.toggle-filter a:not(.active)').addClass('active');
				$(toggleBtn).siblings().removeClass('active');
			} else {
				$('.toggle-filter a.active').removeClass('active');
				$(toggleBtn).addClass('active');
			}
			this.currentFilerStatus.type = $('.toggle-filter a.active').attr('title');

			this.showCaseStudyContent();
		},

		filterProjectsByCategory: function(option){
			this.currentFilerStatus.category = option;
			this.showCaseStudyContent();
		},

		setFilterLinksClass: function($linkParent){
			if($linkParent.is('active')){
				return;
			} else {
				$('.filter-menu .active').removeClass('active');
				$linkParent.addClass('active');
			}
		},

		showCaseStudyContent: function(){
			var _this = this,
				cat = this.currentFilerStatus.category,
				type = this.currentFilerStatus.type,
				$toShow = $('[data-kit-type="'+ type +'"][data-category="'+ cat +'"]'),
				$svgStage = $('.case-study-svg.'+ type),
				$svgStageSibling = $svgStage.siblings().removeClass('active'),
				$svgToShow = $('.case-study-svg.'+ type +' [data-svg-case-study-cat="'+ cat +'"]'),
				$activeSvg = $('.case-study-svg.'+ type + ' .case-study-svg-cat.active');

			_this.lazyLoadImages($toShow);

			if(this.currentFilerStatus.category === 'all'){
				$('.case-study-svg.'+ type + ' .case-study-svg-cat').removeClass('inactive hide activate');
				$activeSvg.removeClass('active');
				$svgStage.removeClass('active');
			} else {
				$activeSvg.removeClass('active').addClass('hide');
				$svgToShow.siblings('.case-study-svg-cat').removeClass('active').addClass('inactive');
				$svgToShow.removeClass('hide inactive').addClass('activate');

				if($svgStage.is('.active')){
					$svgToShow.removeClass('activate').addClass('active');
				}

				$svgToShow.one(animationEndEventName, function(evt){
					$svgStage.addClass('active');
					$svgToShow.removeClass('activate').addClass('active');
				});
			}

			if(type === 'modular'){
				$('[data-title="modular"]').removeClass('show');
				$('[data-title="custom"]').addClass('show');
				// H2 tag at top of page
				$('[data-h2-title="modular"]').addClass('show');
				$('[data-h2-title="custom"]').removeClass('show');

				$('.case-study-svg.modular').addClass('show');
				$('.case-study-svg.custom').removeClass('show');
			} else {
				$('[data-title="modular"]').addClass('show');
				$('[data-title="custom"]').removeClass('show');
				// H2 tag at top of page
				$('[data-h2-title="modular"]').removeClass('show');
				$('[data-h2-title="custom"]').addClass('show');

				$('.case-study-svg.custom').addClass('show');
				$('.case-study-svg.modular').removeClass('show');
			}

			this.$currentCaseStudyContainer.removeClass('show');

			$toShow.addClass('show');

			$('.case-study-details').css({
				height: $toShow.outerHeight()
			});

			this.$currentCaseStudyContainer = $toShow;
		}
	};

	$(function(){
		assembly.casestudies.init();
	});
})(jQuery);