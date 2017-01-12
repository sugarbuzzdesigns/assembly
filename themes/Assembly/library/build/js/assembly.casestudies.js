/*!
 * Assembly Menu Navigation
 */
var assembly = assembly || {};

(function($){
	assembly.casestudies = {
		init: function(){
			this.$selectFilter = $('.select-filter');
			this.$toggleFilter = $('.toggle-filter');
			this.$toggleFilterBtns = $('.toggle-filter a');
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
		},

		toggleCaseStudyType: function(toggleBtn){
			var _this = this;

			_this.$toggleFilterBtns.toggleClass('active');
		},

		filterProjectsByCategory: function(option){
			var _this = this,
				$defaultCats = $('.case-study-landing'),
				$catsToHide = $('.case-study-category').not('[data-category='+ option +']'),
				$catToShow = $('.case-study-category[data-category='+ option +']');

			if(option != 'all'){
				$defaultCats.removeClass('show');
				$catsToHide.removeClass('show');
				$catToShow.addClass('show');
			}

			console.log($catToShow);


		}
	};

	$(function(){
		assembly.casestudies.init();
	});
})(jQuery);