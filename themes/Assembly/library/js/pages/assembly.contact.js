/*!
 * Assembly Contact Page
 */
var assembly = assembly || {};

(function($){
	assembly.contact = {
		init: function(){

			this.$contactForm = $('#contact-form');
			this.$landingSection = $('.contact-landing');
			this.landingSectionHeight = this.$landingSection.outerHeight(true);
			this.$addPhotoSection = $('.add-photo');
			this.$pagerCurrent = $('.pager .current');
			// clickable photos that can be added from the carousel
			this.$photosToAdd = $('.add-photo-overlay .image');
			// button that adds an individual photo
			this.$addphotoButton = $('.add-photo-overlay .add-photo-btn');

			this.$photoOverlayInner = $('.add-photo-overlay');
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

			_this.$contactForm.find('button').on('click', function formButtonHandler(){
				var $curInput = _this.$contactForm.find('.active input');
				var fieldName = _this.$contactForm.find('.active').data('field-name');
				var value = $curInput.val();

				if(!value){
					value = 'N/A';
				}

				$('.wpcf7-form .' + fieldName).find('input').val(value);

				if(_this.validField(value)){
					_this.showNextFormInput($(this).closest('form').find('.active'));
					$('form .error-message').hide();
				} else {
					$('form .error-message').show();
				}
			});

			$('#contact-form input').keypress(function(){
				var value = $(this).val();
				var fieldName = _this.$contactForm.find('.active').data('field-name');

				console.log($('.wpcf7-form .' + fieldName).find('input').val(value));
			});

			document.addEventListener( 'wpcf7mailsent', function( event ) {
			  alert( "Fire!" );
			}, false );

			_this.$contactForm.on('submit', function formSubmitHandler(evt){
				evt.preventDefault();

				_this.showSubmittedFormMessage();
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
				evt.stopPropagation();

				if($(this).is('.added')){
					_this.removePhotoFromPhotosList($('#' + $(this).data('photo-id')));
				} else {
					_this.addPhotoToPhotosList($(this).data('photo-id'));
				}
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

			$('html').on('loaded', function(){
				$('.main-logo').each(function(i, mainLogo){
					window.greensockLogoAnimation($(mainLogo));
				});
			});
		},

		showSubmittedFormMessage: function(){
			this.$contactForm.hide();
			$('.submit-message').show();
			$('.add-photo').hide();
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

				_this.photoOverlayWrapHeight = _this.$photoOverlayInner.outerHeight(true);
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
				mouseDrag: true,
				pullDrag: false,
				lazyLoad:true,
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
				        slideBy: 3,
				        stagePadding: 0
				    },
				    // breakpoint from 1030 up
				    1030 : {
				        items: 5,
				        slideBy: 5,
				        stagePadding: 0
				    }
				}
			});
		},

		openAddContactPhotoWrap: function(){
			this.$photoOverlayWrap.css({
				height: this.$photoOverlayInner.outerHeight()
			});

			this.$landingSection.css({
				marginTop: - $('.contact-landing').outerHeight()
			});

			$('html, body').animate({ scrollTop: 0 }, 1000, 'easeOutCubic', function(){
				console.log('to contact top');
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

			if(!slide.find('.image').is('.added')){
				$('.add-photo-btn').removeClass('disabled');
			} else {
				$('.add-photo-btn').addClass('disabled');
			}
		},

		initContactForm: function(){
			var _this = this,
				formFields = _this.$contactForm.find('label'),
				numFormFields = formFields.length,
				$cur = this.$pagerCurrent,
				$total = $('.pager .total');

			$cur.html('1');
			$total.html(numFormFields);
		},

		validField: function(fieldValue){
			return true;

			if (fieldValue) {
				return true;
			} else {
				return false;
			}
		},

		showNextFormInput: function($currentInput){
			var _this = this,
				curIndex = $currentInput.index(),
				curInputNum = curIndex + 1,
				nextIndex = curIndex + 1;

			if(_this.$contactForm.find('button').is('.submit')){
				_this.$contactForm.submit();
				return;
			}

			$currentInput.removeClass('active');
			$currentInput.next().addClass('active');

			if(curInputNum === _this.$contactForm.find('label').length - 1){
				_this.$contactForm.find('button .resting').text('submit');
				_this.$contactForm.find('button .hover .inner').text('submit');
				_this.$contactForm.find('button').addClass('submit');
			}

			// if(curIndex === $('form label').length){
			// 	$('form button .resting').text('submit');
			// 	$('form button .hover .inner').text('submit');
			// 	$('form button').addClass('submit');
			// } else {

			// }

			this.$pagerCurrent.html(curInputNum + 1);
		},

		addPhotoToPhotosList: function(photoId){
			var numSlides = $('.photos-wrap .photo').length,
				photoId = photoId,
				photoWidth = $('#' + photoId).outerWidth(true),
				stageWidth = $('.add-photo .inner').width(),
				newWidth;

			newWidth = Math.ceil($('.add-photo .inner').width()) + Math.ceil($('#' + photoId).outerWidth(true));

			if($.inArray(photoId, this.addedPhotosArray) !== -1){
				alert('You\'ve already added this photo');
				return;
			}

			$('[data-photo-id="'+ photoId +'"]').addClass('added');

			$('#' + photoId).addClass('show');

			$('.add-photo .inner').width(newWidth);

			this.addedPhotosArray.push(photoId);
			$('.add-photo-btn').addClass('disabled');
		},

		removePhotoFromPhotosList: function($photo){
			$photo.removeClass('show');
			$('[data-photo-id="'+ $photo.attr('id') +'"]').removeClass('added');

			var newWidth = Math.ceil($('.add-photo .inner').outerWidth()) - Math.ceil($photo.outerWidth(true));
			$('.add-photo .inner').width(newWidth);
			$('.add-photo-btn').removeClass('disabled');

			this.addedPhotosArray.splice($.inArray($photo.attr('id'), this.addedPhotosArray), 1);
		}
	};

	$(function(){
		assembly.contact.init();
	});
})(jQuery);

