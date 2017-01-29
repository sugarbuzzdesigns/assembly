/* repo: assembly/ - Package Version: 1.0.0 - 2017-01-29 09:41 am - User: Phoydar */
/*!
 * Assembly Contact Page
 */
var assembly = assembly || {};

(function($){
	assembly.contact = {
		init: function(){

			this.$addPhotoSlider = $('.add-photo .bxslider');
			this.$contactForm = $('.pager .current');
			// button that adds an individual photo
			this.$addphotoButton = $('.add-photo-overlay .add-photo-btn');
			// button that opens the add photos section
			this.$addPhotoIcon = $('.add-photos-icon');
			// list that contact photos get added to
			this.$addedPhotosList = $('.photos-wrap .photos');
			this.addedPhotosArray = [];

			this.photosListCarouselCurSlide = '';
			this.addPhotosCarouselCurSlide = '';

			this.initContactForm();
			this.initCarousels();
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

			this.$addPhotoIcon.on('click', function addPhotosClickHandler(){
				_this.openAddContactFormPhoto();
			});

			this.$addphotoButton.on('click', function addPhotoClickHandler(evt){
				evt.preventDefault();

				_this.addPhotoToPhotosList();
			});

			this.$addPhotosCarousel.on('changed.owl.carousel', function(event){
				_this.setCurrentCarouselSlide('addPhotosCarouselCurSlide', $(this).data('owl.carousel').items()[event.item.index]);
			});
		},

		initCarousels: function(){
			var _this = this;

			_this.$addPhotosCarousel = $('.add-photos-carousel');
			_this.$addPhotosCarousel.on('initialized.owl.carousel', function(){
				_this.setCurrentCarouselSlide('addPhotosCarouselCurSlide', $(this).find('.owl-item').eq(0));
			});

			_this.$addPhotosCarousel.owlCarousel({
				items: 1
			});

			_this.$photoListCarousel = $('.photo-list-carousel');
			_this.$photoListCarousel.on('initialized.owl.carousel', function(){
				_this.setCurrentCarouselSlide('photosListCarouselCurSlide', $(this).find('.owl-item').eq(0));
			});

			_this.$photoListCarousel.owlCarousel({
				items: 1
			});

		},

		setCurrentCarouselSlide: function(sliderName, slide){
			this[sliderName] = slide;
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
		},

		addPhotoToPhotosList: function(){
			var photoId = this.$addPhotosCarousel.find('image').data('photo-id'),
				photoSrc = this.$addPhotosCarousel.find('img').attr('src'),
				$photo = $('<div id="'+ photoId +'" class="photo"><img src="'+ photoSrc +'"/></div>');

			this.addedPhotosArray.push(photoId);
			this.$photoListCarousel.data('owl.carousel').add($photo);
			this.$photoListCarousel.data('owl.carousel').refresh();
		}
	};

	$(function(){
		assembly.contact.init();
	});
})(jQuery);

