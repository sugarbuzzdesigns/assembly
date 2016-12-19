/* repo: assembly/ - Package Version: 1.0.0 - 2016-12-19 10:53 am - User: Phoydar */
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
				numFormFields = formFields.length;

			$('.pager .current').html('1');
			$('.pager .total').html(numFormFields);
		},

		showNextFormInput: function($currentInput){
			$currentInput.removeClass('active');
			$currentInput.next().addClass('active');
		}
	};

	$(function(){
		assembly.contact.init();
	});
})(jQuery);

