/* repo: assembly/ - Package Version: 1.0.0 - 2017-03-12 09:17 pm - User: Phoydar */
/*!
 * Assembly Menu Navigation
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

			this.setContainerHeights();
			this.addClassTileCount();
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

				_this.setFilterLinksClass($(this).parent());
				_this.filterProjectsByCategory($(this).parent().data('value'));
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
			});

			// main landing screen with two big tiles for Custom/Modular
			_this.$landingSquares.on('click', function landingSquareClickHandler(evt){
				var $square = $(this),
					$type = $(this).is('.modular') ? 'modular' : 'custom';

				$(this).addClass('selected');

				_this.showMainCaseStudies($square);

				$('.toggle-filter a').removeClass('active');
				$('.toggle-filter [title=' + $type + ']').addClass('active');
			});

			assembly.util.env.$win.on('scroll-down', function(){
				if(_this.$filterWrap.hasClass('show') && $('.landing-inner').hasClass('hide')){
					_this.$filterWrap.removeClass('show');
				}
			});

			assembly.util.env.$win.on('scroll-up', function(){
				if((!_this.$filterWrap.hasClass('show')) && $('.landing-inner').hasClass('hide')){
					_this.$filterWrap.addClass('show');
				}
			});

			assembly.util.env.$win.on('windowResize', function(){
				$('.case-study-details').css({
					height: _this.$currentCaseStudyContainer.outerHeight()
				});
			});

			$('.view-case-study').on('click', function(evt){
				evt.preventDefault();
				_this.showMainCaseStudies($('.case-study-category.'+ $(this).data('title')));
			});

			$('.hover-spot').hover(function(){
				$(this).parent().addClass('hover');
			}, function(){
				$(this).parent().removeClass('hover');
			});

			_this.$landing.mousemove(function(){
				_this.parallaxBg();
			});
		},

		parallaxBg: function(){

		},

		showMainCaseStudies: function($landingTileClicked){
			var _this = this, $toshow, cat, type;

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
			$('html').addClass('landing-closed');
		},

		setContainerHeights: function(){
			// this.$mainContent.data('initialheight', this.mainContentHeight);
			// this.$mainContent.css({
			// 	height: 0
			// });
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
				$toShow = $('[data-kit-type="'+ type +'"][data-category="'+ cat +'"]');

			if(type === 'modular'){
				$('[data-title="modular"]').removeClass('show');
				$('[data-title="custom"]').addClass('show');
				// H2 tag at top of page
				$('[data-h2-title="modular"]').addClass('show');
				$('[data-h2-title="custom"]').removeClass('show');

				$('.case-study-svg.modular').addClass('show');
				$('.case-study-svg.custom').removeClass('show');

				$('.case-study-svg.modular').find('.case-study-svg-cat').removeClass('selected');
				$('.case-study-svg.modular').find('.'+cat+'-hover').addClass('selected');
			} else {
				$('[data-title="modular"]').addClass('show');
				$('[data-title="custom"]').removeClass('show');
				// H2 tag at top of page
				$('[data-h2-title="modular"]').removeClass('show');
				$('[data-h2-title="custom"]').addClass('show');

				$('.case-study-svg.custom').addClass('show');
				$('.case-study-svg.modular').removeClass('show');

				$('.case-study-svg.custom').find('.case-study-svg-cat').removeClass('selected');
				$('.case-study-svg.custom').find('.'+cat+'-hover').addClass('selected');
			}

			this.$currentCaseStudyContainer.removeClass('show');

			$toShow.addClass('show');

			$('.case-study-details').css({
				height: $toShow.outerHeight()
			});

			console.log(type, cat);

			this.$currentCaseStudyContainer = $toShow;
		}
	};

	$(function(){
		assembly.casestudies.init();
	});
})(jQuery);