(function($){
	var ourApproachCarousel = {
		init: function(){
			var _this = this;

			this.nextScreenInterval = '';
			this.$currentApproach = {};
			this.currentApproachNum = 1;
			this.currentTrack = '';
			this.currentSegmentNum = 1;
			this.currentTrackNum = 0;
			this.currentMarkerNum = 1;
			this.$ourAprroachVideo = $('video.our-approach');
			this.ourAprroachVideo = this.$ourAprroachVideo[0];
			this.bindEvents();

			this.waypointsApproach = $('.our-approach.carousel-module').waypoint({
				handler: function(direction) {
					if(direction === 'down'){
						$currentApproach = $('.segment').eq(0);
						$currentApproach.addClass('activate');
						$('[data-marker-num="1"]').addClass('active');

						_this.playVideoSection(0, 4.3);
					}
				},
				offset: '25%'
			});
		},

		bindEvents: function(){
			var _this = this;

			$('.seg-nav .up-arrow').on('click', function(e){
				e.preventDefault();

				console.log(this);
			});

			$('.seg-nav .down-arrow').on('click', function(e){
				e.preventDefault();

				var start = $(this).data('time-start')*1;
				var end = $(this).data('time-end')*1;

				_this.playVideoSection(start, end);
				_this.animateTimeline($(this).closest('.segment').data('seg-num'), 'down');
				_this.showApproachInfo();
			});
		},

		playVideoSection: function(start, timeEnd){
			var _this = this;

			clearInterval(_this.nextScreenInterval);

			_this.ourAprroachVideo.pause();
			_this.ourAprroachVideo.currentTime = start;
			_this.ourAprroachVideo.play();

			_this.nextScreenInterval = setInterval(function () {
				if(_this.ourAprroachVideo.currentTime >= timeEnd){
					_this.ourAprroachVideo.pause();
					clearInterval(_this.nextScreenInterval);
				}
			}, 30);
		},

		animateTimeline: function(sectionNum, dir){
			var _this = this;

			$('[data-seg-num="'+sectionNum+'"]').removeClass('activate').addClass('seen');

			_this.currentMarkerNum+=1;
			_this.currentSegmentNum+=1;
			_this.currentTrackNum+=1;

			$('[data-seg-num="'+_this.currentSegmentNum+'"]').addClass('activate');
			$('[data-track-num="'+_this.currentTrackNum+'"]').addClass('active');
			$('[data-marker-num="'+_this.currentMarkerNum+'"]').addClass('pulse-in');

			setTimeout(function(){
				$('[data-marker-num="'+_this.currentMarkerNum+'"]').addClass('active');
			}, 300);
		},

		showApproachInfo: function(){
			var _this = this,
				cur = _this.currentApproachNum;

				_this.currentApproachNum++;

				console.log(_this.currentApproachNum);

			$('[data-approach-num="'+cur+'"]').removeClass('show-me');
			$('[data-approach-num="'+_this.currentApproachNum+'"]').addClass('show-me');
		}
	}
	$(function(){
		ourApproachCarousel.init();
	});
})(jQuery);