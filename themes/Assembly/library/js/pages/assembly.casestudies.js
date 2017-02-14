/*!
 * Assembly Menu Navigation
 */
var assembly = assembly || {};

(function($){
	assembly.casestudies = {
		init: function(){
			this.$landingSquares = $('.landing .case-study-category');
			this.$customLanding = $('.case-study-landing[data-kit-type="custom"]');
			this.$modularLanding = $('.case-study-landing[data-kit-type="modular"]');
			this.$mainContent = $('.content');
			this.mainContentHeight = $('.content').height();
			this.$caseStudyLandingTiles = $('.case-study-landing .tile');
			this.$selectFilter = $('.select-filter');
			this.$toggleFilter = $('.toggle-filter');
			this.$toggleFilterBtns = $('.toggle-filter a');
			this.$currentCaseStudyContainer = $('.case-study-container.show');
			this.currentFilerStatus = {
				type: 'custom',
				category: 'all'
			};
			this.initSelect2();
			this.bindEvents();

			this.setContainerHeights();
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

			_this.$toggleFilterBtns.on('click', function toggleFilterClickHandler(evt){
				evt.preventDefault();

				_this.toggleCaseStudyType(this);
			});

			_this.$caseStudyLandingTiles.on('click', function tileFilterClickHandler(evt){
				var kitType = $(this).parent().attr('data-kit-type'),
					category = $(this).find('.tile-cat').html().trim().toLowerCase();

				_this.currentFilerStatus.type = kitType;
				_this.currentFilerStatus.category = category;

				_this.$selectFilter.val(category).trigger('change');
			});

			_this.$landingSquares.on('click', function landingSquareClickHandler(evt){
				var $square = $(this);

				setTimeout(function fakeTransitionEndEvent(argument) {
					_this.showMainCaseStudies($square.closest('.case-study-category'));
				}, 1000);
			});
		},

		showMainCaseStudies: function($landingTileClicked){
			var newContentHeight;

			if($landingTileClicked.is('.modular')){
				console.log($('.case-study-landing[data-kit-type="modular"]').outerHeight());
				newContentHeight = this.$modularLanding.height();
				this.$modularLanding.addClass('show');
				this.$customLanding.removeClass('show');
			} else {
				newContentHeight = this.$customLanding.height();
				this.$customLanding.addClass('show');
				this.$modularLanding.removeClass('show');
			}

			this.$mainContent.css({
				height: newContentHeight + $('.content header').outerHeight()
			});

			$('.landing-inner').css({
				height: 0
			});
		},

		setContainerHeights: function(){
			this.$mainContent.data('initialheight', this.mainContentHeight);
			this.$mainContent.css({
				height: 0
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

		showCaseStudyContent: function(){
			var cat = this.currentFilerStatus.category,
				type = this.currentFilerStatus.type,
				$toShow = $('[data-kit-type="'+ type +'"][data-category="'+ cat +'"]');

			this.$currentCaseStudyContainer.removeClass('show');

			$toShow.addClass('show');

			this.$currentCaseStudyContainer = $toShow;
		}
	};

	$(function(){
		assembly.casestudies.init();
	});
})(jQuery);