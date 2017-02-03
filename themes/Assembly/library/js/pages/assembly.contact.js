/*!
 * Assembly Contact Page
 */
var assembly = assembly || {};

(function($){
	assembly.contact = {
		init: function(){

			this.$addPhotoSection = $('.add-photo');
			this.$contactForm = $('.pager .current');
			// button that adds an individual photo
			this.$addphotoButton = $('.add-photo-overlay .add-photo-btn');
			// button that opens the add photos section
			this.$addPhotoIcon = $('.open-add-images');
			// list that contact photos get added to
			this.$addedPhotosList = $('.photos-wrap .photos');
			this.addedPhotosArray = [];

			this.photosListCarouselCurSlide = '';
			this.addPhotosCarouselCurSlide = '';

			this.initContactForm();
			this.initCarousels();
			this.bindEvents();

			this.setInitialSectionHeights();
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

			_this.$addPhotoSection.find('.close-btn').on('click', function(){
				_this.closeAddContactPhotoWrap();
			}),

			_this.$addPhotoIcon.on('click', function addPhotosClickHandler(){
				_this.openAddContactPhotoWrap();
			});

			_this.$addphotoButton.on('click', function addPhotoClickHandler(evt){
				evt.preventDefault();

				_this.addPhotoToPhotosList();
			});

			_this.$addPhotosCarousel.on('changed.owl.carousel', function(event){
				_this.setCurrentCarouselSlide('addPhotosCarouselCurSlide', $(this).data('owl.carousel').items()[event.item.index]);
			});
		},

		setInitialSectionHeights: function(){
			this.$photoOverlayWrap = $('.photo-overlay-wrap');
			this.photoOverlayWrapHeight = this.$photoOverlayWrap.height();

			this.$photoOverlayWrap.data('originalHeight', this.photoOverlayWrapHeight);

			this.$photoOverlayWrap.css({
				height: 0
			});
		},

		initCarousels: function(){
			var _this = this;

			_this.$addPhotosCarousel = $('.add-photos-carousel');
			_this.$addPhotosCarousel.on('initialized.owl.carousel', function(){
				_this.setCurrentCarouselSlide('addPhotosCarouselCurSlide', $(this).find('.owl-item').eq(0));
			});

			_this.$addPhotosCarousel.owlCarousel({
				items: 1,
				stagePadding: 50
			});

			_this.$photoListCarousel = $('.photo-list-carousel');
			_this.$photoListCarousel.on('initialized.owl.carousel', function(){
				_this.setCurrentCarouselSlide('photosListCarouselCurSlide', $(this).find('.owl-item').eq(0));
			});

			_this.photoListCarouselSettings = {
				items: 1,
				rtl: true,
				margin: 20,
				stagePadding: 50
			};

			_this.$photoListCarousel.owlCarousel(_this.photoListCarouselSettings);
			_this.photoListOwl = _this.$photoListCarousel.data('owl.carousel');

		},

		openAddContactPhotoWrap: function(){
			this.$photoOverlayWrap.animate({
				height: this.$photoOverlayWrap.data().originalHeight
			}, 500);

			$('body, html').animate({
				scrollTop: $('.add-photo').offset().top
			});
		},

		closeAddContactPhotoWrap: function(){
			this.$photoOverlayWrap.animate({
				height: 0
			}, 500);
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
			var numSlides = this.$photoListCarousel.data('owl.carousel').items().length,
				$photoDiv = this.addPhotosCarouselCurSlide.find('.image'),
				photoId = $photoDiv.data('photo-id'),
				$photoToAdd =  $photoDiv.find('img'),
				photoSrc = $photoToAdd.attr('src'),
				$photo = $('<div id="'+ photoId +'" class="photo" style="background-image: url('+ photoSrc +');"></div>');

			if($.inArray(photoId, this.addedPhotosArray) !== -1){
				return;
			}

			this.addedPhotosArray.push(photoId);

			if(numSlides <= 1){
				this.$photoListCarousel.data('owl.carousel').destroy();
				$('.open-add-images').after($photo);
			} else {
				this.$photoListCarousel.data('owl.carousel').add($photo, 1);
				this.$photoListCarousel.data('owl.carousel').destroy();
			}

			this.$photoListCarousel.owlCarousel({
				items: 2,
				rtl: true,
				margin: 20,
				stagePadding: 50
			});



			//
			// // this.$photoListCarousel.data('owl.carousel').add($photo, 2);
			// this.$photoListCarousel.data('owl.carousel').add('<p>ADDED</p>', 2);
			// this.$photoListCarousel.on('add.owl.carousel', function() {
			// 	console.log('item added');
			// });
			// this.$photoListCarousel.trigger('add.owl.carousel', [$('<div id="abcd" class="photo"><img src="http://byassembly.loc/wp-content/themes/Assembly/library/images/placeholders/project_placeholder_1.jpg"/></div>'), 2]);
			// this.$photoListCarousel.data('owl.carousel').refresh();

		}
	};

	$(function(){
		assembly.contact.init();
	});
})(jQuery);

