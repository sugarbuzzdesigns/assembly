/*!
 * Assembly Menu Navigation
 */
var assembly = assembly || {};

(function($){
	assembly.about = {
		init: function(){
			this.$addPhotoSlider = $('.add-photo .bxslider');

			this.bindEvents();
		},

		bindEvents: function(){
			this.$addPhotoSlider.bxSlider();
		}
	};

	$(function(){
		assembly.about.init();
	});
})(jQuery);