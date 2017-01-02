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
				if(_this.validField($(this.closest('form .active')).find('input').val())){
					_this.showNextFormInput($(this.closest('form .active')));
					$('form .error-message').hide();
				} else {
					$('form .error-message').show();
				}
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

		validField: function(fieldValue){
			if (fieldValue) {
				return true;
			} else {
				return false;
			}
		},

		showNextFormInput: function($currentInput){
			var curIndex = $currentInput.index() + 1,
				nextIndex = curIndex + 1;

			if(nextIndex === $('form label').length){
				$('form button').addClass('disabled');
			}

			if(curIndex === $('form label').length){
				return;
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

