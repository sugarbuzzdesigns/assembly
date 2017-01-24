/* repo: assembly/ - Package Version: 1.0.0 - 2017-01-23 09:42 pm - User: Phoydar */
/*!
 * Assembly Menu Navigation
 */
var assembly = assembly || {};

(function($){
	assembly.casestudies = {
		init: function(){
			this.$landingTiles = $('.case-study-landing .tile');
			this.$customLanding = $('.case-study-landing[data-kit-type="custom"]');
			this.$modularLanding = $('.case-study-landing[data-kit-type="modular"]');
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

			_this.$landingTiles.on('click', function tileFilterClickHandler(evt){
				var kitType = $(this).parent().attr('data-kit-type'),
					category = $(this).find('.tile-cat').html().trim().toLowerCase();

				_this.currentFilerStatus.type = kitType;
				_this.currentFilerStatus.category = category;

				_this.$selectFilter.val(category).trigger('change');
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
			// var _this = this,
			// curType = _this.currentFilerStatus.type,
			// $defaultCats = $('.case-study-landing'),
			// $catsToHide = $('.case-study-category').not('[data-category='+ option +']'),
			// $catToShow = $('.case-study-category[data-category='+ option +'][data-kit-type='+ curType +']');

			// if(option === 'all'){
			// 	$('.case-study-landing[data-kit-type="'+ curType +'"]').addClass('show');
			// 	$('.case-study-landing[data-kit-type!="'+ curType +'"]').removeClass('show');
			// }

			// console.log(curType, option);
		}
	};

	$(function(){
		assembly.casestudies.init();
	});
})(jQuery);