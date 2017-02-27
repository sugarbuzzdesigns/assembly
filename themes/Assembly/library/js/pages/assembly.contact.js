/*!
 * Assembly Contact Page
 */
var assembly = assembly || {};

(function($){
	assembly.contact = {
		init: function(){

			this.$landingSection = $('.landing');
			this.landingSectionHeight = this.$landingSection.outerHeight(true);
			this.$addPhotoSection = $('.add-photo');
			this.$pagerCurrent = $('.pager .current');
			// clickable photos that can be added from the carousel
			this.$photosToAdd = $('.add-photo-overlay .image');
			// button that adds an individual photo
			this.$addphotoButton = $('.add-photo-overlay .add-photo-btn');
			// button that opens the add photos section
			this.$addPhotoIcon = $('.open-add-images');
			// container for image carousel with images that can be clicked
			// to be added to the user's contact form
			this.$photoOverlayWrap = $('.photo-overlay-wrap');
			// original height of .photo-overlay-wrap
			this.photoOverlayWrapHeight = 0;
			// list that contact photos get added to
			this.$addedPhotosList = $('.photos-wrap .photos');
			// keep a list of photos that have been added
			this.addedPhotosArray = [];

			this.photosListCarouselCurSlide = '';
			this.addPhotosCarouselCurSlide = '';

			this.initContactForm();
			this.initCarousels();
			this.bindEvents();

			this.setInitialSectionHeights();
			this.setInitialSectionWidths();
		},

		bindEvents: function(){
			var _this = this;

			$('form button').on('click', function formButtonHandler(){
				if(_this.validField($(this).closest('form').find('.active input').val())){
					_this.showNextFormInput($(this).closest('form').find('.active'));
					$('form .error-message').hide();
				} else {
					$('form .error-message').show();
				}
			});

			_this.$photoOverlayWrap.find('.close-btn').on('click', function overlayPhotoCloseHandler(){
				_this.closeAddContactPhotoWrap();
			}),

			_this.$addPhotoIcon.on('click', function addPhotosClickHandler(){
				_this.openAddContactPhotoWrap();
			});

			_this.$addphotoButton.on('click', function addPhotoClickHandler(evt){
				evt.preventDefault();

				_this.addPhotoToPhotosList(_this.addPhotosCarouselCurSlide.find('.image').data('photo-id'));
			});

			_this.$photosToAdd.on('click', function photoClickHandler(evt){
				evt.preventDefault();

				_this.addPhotoToPhotosList($(this).data('photo-id'));
			});

			_this.$addPhotosCarousel.on('changed.owl.carousel', function(event){
				_this.setCurrentCarouselSlide('addPhotosCarouselCurSlide', $(this).data('owl.carousel').items()[event.item.index]);
			});

			$('.remove-photo').on('click', function removePhotoClickHandler(evt){
				evt.preventDefault();

				_this.removePhotoFromPhotosList($(this).parent());
			});

			$('.image .remove').on('click', function removePhotoClickHandler(evt){
				evt.preventDefault();
				evt.stopPropagation();

				_this.removePhotoFromPhotosList($('#' + $(this).closest('.image').data('photo-id')));
			});
		},

		setInitialSectionHeights: function(){
			this.$photoOverlayWrap.data('originalHeight', this.photoOverlayWrapHeight);

			this.$photoOverlayWrap.css({
				height: 0
			});
		},

		setInitialSectionWidths: function(){
			var $track = $('.add-photo .inner'),
				addImagesWidth = $('.open-add-images').outerWidth(true);

			$track.width(addImagesWidth);
		},

		initCarousels: function(){
			var _this = this;

			_this.$addPhotosCarousel = $('.add-photos-carousel');
			_this.$addPhotosCarousel.on('initialized.owl.carousel', function(){

				_this.setCurrentCarouselSlide('addPhotosCarouselCurSlide', $(this).find('.owl-item').eq(0));

				$('.add-photos-carousel-wrap').find('nav .arrow-right').on('click', function(){
					_this.$addPhotosCarousel.data('owl.carousel').next();
				});

				$('.add-photos-carousel-wrap').find('nav .arrow-left').on('click', function(){
					_this.$addPhotosCarousel.data('owl.carousel').prev();
				});

				_this.photoOverlayWrapHeight = _this.$photoOverlayWrap.outerHeight(true);
			});

			_this.$addPhotosCarousel.on('changed.owl.carousel', function(evt){
				var items_per_page = evt.relatedTarget.options.slideBy;
				var item_index = evt.item.index;
				var item_count = evt.item.count;
				var last_vis_item_index = items_per_page + item_index;

				if(evt.page.index === 0){
					$('.add-photos-carousel-wrap').find('nav .arrow-left').addClass('disabled');
				}

				if(evt.page.index === 0){
					$('.add-photos-carousel-wrap').find('nav .arrow-left').addClass('disabled');
				}
			});

			_this.$addPhotosCarousel.owlCarousel({
				responsive : {
				    // breakpoint from 0 up
				    0 : {
				        items: 1,
				        stagePadding: 50
				    },
				    // breakpoint from 600 up
				    600 : {
				        items: 2,
				        stagePadding: 0
				    },
				    // breakpoint from 768 up
				    768 : {
				        items: 3,
				        stagePadding: 0
				    },
				    // breakpoint from 1030 up
				    1030 : {
				        items: 5,
				        stagePadding: 0
				    }
				}
			});
		},

		openAddContactPhotoWrap: function(){
			this.$photoOverlayWrap.css({
				height: this.photoOverlayWrapHeight
			});

			this.$landingSection.css({
				marginTop: -this.landingSectionHeight
			});
		},

		closeAddContactPhotoWrap: function(){
			this.$photoOverlayWrap.css({
				height: 0
			});

			this.$landingSection.css({
				marginTop: 0
			});
		},

		setCurrentCarouselSlide: function(sliderName, slide){
			this[sliderName] = slide;
		},

		initContactForm: function(){
			var _this = this,
				formFields = $('form label'),
				numFormFields = formFields.length,
				$cur = this.$pagerCurrent,
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

			if(curIndex === $('form label').length){
				$('html, body').animate({
					scrollTop: $('.add-photo').offset().top
				});
			} else {
				this.$pagerCurrent.html(curIndex + 1);
				$currentInput.removeClass('active');
				$currentInput.next().addClass('active');
			}
		},

		addPhotoToPhotosList: function(photoId){
			var numSlides = $('.photos-wrap .photo').length,
				photoId = photoId,
				photoWidth = $('#' + photoId).outerWidth(true),
				stageWidth = $('.add-photo .inner').outerWidth(true),
				newWidth;

			newWidth = Math.ceil($('.add-photo .inner').outerWidth()) + Math.ceil($('#' + photoId).outerWidth(true));

			if($.inArray(photoId, this.addedPhotosArray) !== -1){
				return;
			}

			$('[data-photo-id="'+ photoId +'"]').addClass('added');

			$('#' + photoId).addClass('show');

			$('.add-photo .inner').width(newWidth);

			this.addedPhotosArray.push(photoId);
		},

		removePhotoFromPhotosList: function($photo){
			$photo.removeClass('show');
			$('[data-photo-id="'+ $photo.attr('id') +'"]').removeClass('added');

			var newWidth = Math.ceil($('.add-photo .inner').outerWidth()) - Math.ceil($photo.outerWidth(true));
			$('.add-photo .inner').width(newWidth);

			this.addedPhotosArray.splice($.inArray($photo.attr('id'), this.addedPhotosArray), 1);
		}
	};

	$(function(){
		assembly.contact.init();
	});
})(jQuery);

