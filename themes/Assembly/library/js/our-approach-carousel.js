var ourApproachCarousel = {};

(function($){
	ourApproachCarousel = {
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
			this.direction = 'down';
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
			// console.log('bind events');
			var _this = this, trackInterval;

			$('.marker').on('click', function(e){
				var num = $(this).data('marker-num');
				var start = $(this).data('time-start')*1;
				var end = $(this).data('time-end')*1;

			switch(num){
				case 1:
					var queue = $({});

					$('.our-approach-nav .marker:gt(0)').removeClass('active');
					$('.our-approach-nav .segment:gt(0)').removeClass('activate');

					$('.our-approach-nav .track').removeClass('active');

					$('.segment.activate').removeClass('activate');
					$('.segment').eq(0).addClass('activate');

					_this.currentMarkerNum = 1;
					_this.currentSegmentNum = 1;
					_this.currentTrackNum = 0;
					break;
				case 2:
					var queue = $({});

					$('.our-approach-nav .marker:gt(1)').removeClass('active');
					$('.our-approach-nav .segment:gt(1)').removeClass('activate');

					$('.our-approach-nav .track:gt(0)').each(function(i, track){
						$(track).removeClass('active');
					});

					$('.our-approach-nav .track').eq(0).not('.active').each(function(i, track){
				        queue.queue(createWorkQueueFunction($(this), i, 1));
				        queue.delay(300);
					});

					$('.segment.activate').removeClass('activate');
					$('.segment').eq(1).addClass('activate');

					_this.currentMarkerNum = 2;
					_this.currentSegmentNum = 2;
					_this.currentTrackNum = 1;
					break;
				case 3:
					var queue = $({});

					$('.our-approach-nav .marker:gt(2)').removeClass('active');
					$('.our-approach-nav .segment:gt(2)').removeClass('activate');

					$('.our-approach-nav .track:gt(1)').each(function(i, track){
						$(track).removeClass('active');
					});

					$('.our-approach-nav .track:lt(2)').not('.active').each(function(i, track){
				        queue.queue(createWorkQueueFunction($(this), i, 2));
				        queue.delay(300);
					});

					$('.segment.activate').removeClass('activate');
					$('.segment').eq(2).addClass('activate');

					_this.currentMarkerNum = 3;
					_this.currentSegmentNum = 3;
					_this.currentTrackNum = 2;
					break;
				case 4:
					var queue = $({});

					$('.our-approach-nav .marker:gt(3)').removeClass('active');
					$('.our-approach-nav .segment:gt(3)').removeClass('activate');

					$('.our-approach-nav .track:gt(2)').each(function(i, track){
						$(track).removeClass('active');
					});

					var length = $('.our-approach-nav .track:lt(3)');

					$('.our-approach-nav .track:lt(3)').not('.active').each(function(i, track){
				        queue.queue(createWorkQueueFunction($(this), i, 3));
				        queue.delay(300);
					});

					$('.segment.activate').removeClass('activate');
					$('.segment').eq(3).addClass('activate');

					_this.currentMarkerNum = 4;
					_this.currentSegmentNum = 4;
					_this.currentTrackNum = 3;
					break;
				case 5:
					var queue = $({});

					$('.our-approach-nav .track:lt(4)').not('.active').each(function(i, track){
				        queue.queue(createWorkQueueFunction($(this), i, 4));
				        queue.delay(300);
					});

					$('.segment.activate').removeClass('activate');
					$('.segment').eq(4).addClass('activate');

					_this.currentMarkerNum = 5;
					_this.currentSegmentNum = 5;
					_this.currentTrackNum = 4;
					break;
			}

				function createWorkQueueFunction(elm, i, length){
				    return function(next) {
				    	$('.marker').not('.active').eq(0).addClass('active');
				        $(elm).addClass('active');

				        if(i+1 === length){
				        	// console.log('about to be done');
				        }

						next();
				    };
				}

				_this.playVideoSection(start, end);
			});

			$('video.our-approach').on('click', function(e){
				e.stopPropagation();
				e.preventDefault();

				var start = $('[data-seg-num="'+_this.currentSegmentNum+'"] .down-arrow').triggerHandler('click');
				// var end = $('[data-seg-num="'+_this.currentSegmentNum+'"] .down-arrow').data('time-end')*1;

				// _this.playVideoSection(start, end);
				// _this.animateTimeline($('[data-seg-num="'+_this.currentSegmentNum+'"]').data('seg-num'), 'down');
				// _this.showApproachInfo();
			});

			$('.seg-nav .up-arrow').on('click', function(e){
				e.stopPropagation();
				e.preventDefault();

				if($(this).is('.disabled')){
					return;
				}

				var start = $(this).data('time-start')*1;
				var end = $(this).data('time-end')*1;

				_this.playVideoSection(start, end);
				_this.animateTimeline($(this).closest('.segment').data('seg-num'), 'up');
				_this.showApproachInfo();
			});

			$('.seg-nav .down-arrow').on('click', function(e){
				e.stopPropagation();
				e.preventDefault();

				if($(this).is('.disabled')){
					return;
				}

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

			if(dir === 'down'){
				this.direction = 'down';
				$('[data-seg-num="'+sectionNum+'"]').removeClass('activate').addClass('seen');

				_this.currentMarkerNum+=1;
				_this.currentSegmentNum+=1;
				_this.currentTrackNum+=1;

				$('[data-track-num="'+_this.currentTrackNum+'"]').addClass('active');
				$('[data-marker-num="'+_this.currentMarkerNum+'"]').addClass('pulse-in');

				setTimeout(function(){
					$('[data-marker-num="'+_this.currentMarkerNum+'"]').addClass('active');
					$('[data-seg-num="'+_this.currentSegmentNum+'"]').addClass('activate');
				}, 300);
			} else {
				this.direction = 'up';
				$('[data-seg-num="'+sectionNum+'"]').removeClass('seen');
				$('[data-seg-num="'+sectionNum+'"]').removeClass('activate');

				_this.currentSegmentNum-=1;

				$('[data-track-num="'+_this.currentTrackNum+'"]').removeClass('active');
				$('[data-marker-num="'+_this.currentMarkerNum+'"]').removeClass('pulse-in active');

				setTimeout(function(){
					$('[data-seg-num="'+_this.currentSegmentNum+'"]').addClass('activate');
				}, 300);

				_this.currentMarkerNum-=1;
				_this.currentTrackNum-=1;
			}
		},

		showApproachInfo: function(){
			var _this = this,
				cur = _this.currentApproachNum;

				if(this.direction === 'down') {
					_this.currentApproachNum++;
				} else {
					_this.currentApproachNum--;
				}

			$('[data-approach-num="'+cur+'"]').removeClass('show-me');
			$('[data-approach-num="'+_this.currentApproachNum+'"]').addClass('show-me');
		}
	}
	$(function(){
		ourApproachCarousel.init();
	});
})(jQuery);