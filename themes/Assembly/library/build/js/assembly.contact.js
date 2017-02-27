/* repo: assembly/ - Package Version: 1.0.0 - 2017-02-26 10:24 pm - User: Phoydar */
/*!
 * Assembly Contact Page
 */
var assembly = assembly || {};

(function($){
	assembly.contact = {
		init: function(){

			this.$addPhotoSection = $('.add-photo');
			this.$pagerCurrent = $('.pager .current');
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

			_this.$addPhotoSection.find('.close-btn').on('click', function(){
				_this.closeAddContactPhotoWrap();
			}),

			_this.$addPhotoIcon.on('click', function addPhotosClickHandler(){
				// _this.openAddContactPhotoWrap();
			});

			_this.$addphotoButton.on('click', function addPhotoClickHandler(evt){
				evt.preventDefault();

				_this.addPhotoToPhotosList();
			});

			_this.$addPhotosCarousel.on('changed.owl.carousel', function(event){
				_this.setCurrentCarouselSlide('addPhotosCarouselCurSlide', $(this).data('owl.carousel').items()[event.item.index]);
			});

			$('.remove-photo').on('click', function removePhotoClickHandler(evt){
				evt.preventDefault();

				_this.removePhotoFromPhotosList($(this).parent());
			});
		},

		setInitialSectionHeights: function(){
			this.$photoOverlayWrap = $('.photo-overlay-wrap');
			this.photoOverlayWrapHeight = this.$photoOverlayWrap.height();

			this.$photoOverlayWrap.data('originalHeight', this.photoOverlayWrapHeight);

			// this.$photoOverlayWrap.css({
			// 	height: 0
			// });
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
			});

			_this.$addPhotosCarousel.on('changed.owl.carousel', function(evt){
				var items_per_page = evt.relatedTarget.options.slideBy;
				var item_index = evt.item.index;
				var item_count = evt.item.count;
				var last_vis_item_index = items_per_page + item_index;

				console.log(last_vis_item_index);

				if(evt.page.index === 0){
					$('.add-photos-carousel-wrap').find('nav .arrow-left').addClass('disabled');
				}

				if(evt.page.index === 0){
					$('.add-photos-carousel-wrap').find('nav .arrow-left').addClass('disabled');
				}
			});

			_this.$addPhotosCarousel.owlCarousel({
				items: assembly.util.useragent.deviceType === 'desktop' ? 5 : 1,
				stagePadding: assembly.util.useragent.deviceType === 'desktop' ? 0 : 50
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

			// _this.$photoListCarousel.owlCarousel(_this.photoListCarouselSettings);
			// _this.photoListOwl = _this.$photoListCarousel.data('owl.carousel');

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

		addPhotoToPhotosList: function(){
			var numSlides = $('.photos-wrap .photo').length,
				photoId = this.addPhotosCarouselCurSlide.find('.image').data('photo-id'),
				photoWidth = $('#' + photoId).outerWidth(true),
				stageWidth = $('.add-photo .inner').outerWidth(true),
				newWidth;

			newWidth = Math.ceil($('.add-photo .inner').outerWidth()) + Math.ceil($('#' + photoId).outerWidth(true));

			if($.inArray(photoId, this.addedPhotosArray) !== -1){
				return;
			}

			$('#' + photoId).addClass('show');

			$('.add-photo .inner').width(newWidth);

			this.addedPhotosArray.push(photoId);
		},

		removePhotoFromPhotosList: function($photo){
			$photo.removeClass('show');

			var newWidth = Math.ceil($('.add-photo .inner').outerWidth()) - Math.ceil($photo.outerWidth(true));
			$('.add-photo .inner').width(newWidth);

			this.addedPhotosArray.splice($.inArray($photo.attr('id'), this.addedPhotosArray), 1);
		}
	};

	$(function(){
		assembly.contact.init();
	});
})(jQuery);

