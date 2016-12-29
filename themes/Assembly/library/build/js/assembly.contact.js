/* repo: assembly/ - Package Version: 1.0.0 - 2016-12-29 03:46 pm - User: Phoydar */
/*!
 * Assembly Contact Page
 */
var assembly = assembly || {};

(function($){
	assembly.contact = {
		init: function(){

			this.$addPhotoSlider = $('.add-photo .bxslider');
			this.$contactForm = $('.pager .current');

			this.$addPhotoIcon = $('.add-photo-icon');

			this.initContactForm();
			this.bindEvents();
		},

		bindEvents: function(){
			var _this = this;

			$('form button').on('click', function formButtonHandler(){
				_this.showNextFormInput($(this.closest('form .active')));
			});

			this.$addPhotoIcon.on('click', function addPhotoClickHandler(){
				_this.addContactFormPhoto();
			});

			this.$addPhotoSlider.bxSlider();
		},

		initContactForm: function(){
			var _this = this,
				formFields = $('form label'),
				numFormFields = formFields.length,
				$cur = $('.pager .current'),
				$total = $('.pager .total');

			$cur.html('1');
			$total.html(numFormFields);
		},

		showNextFormInput: function($currentInput){
			var curIndex = $currentInput.index() + 1;

			if(curIndex === $('form label').length){
				console.log('at the end');
			} else {
				$('.pager .current').html(curIndex + 1);
				$currentInput.removeClass('active');
				$currentInput.next().addClass('active');
			}
		}
	};

	$(function(){
		assembly.contact.init();
	});
})(jQuery);

