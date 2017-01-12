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
			var _this = this;
		}
	};

	$(function(){
		assembly.casestudies.init();
	});
})(jQuery);