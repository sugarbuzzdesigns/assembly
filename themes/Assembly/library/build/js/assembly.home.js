/* repo: assembly/ - Package Version: 1.0.0 - 2017-02-28 09:45 pm - User: Phoydar */
/*!
 * Assembly Carousel Modules
 */
var assembly = assembly || {};

(function($){
	assembly.home = {
		init: function(){
			this.bindEvents();
			this.initializeVideos();
		},

		bindEvents: function(){
			var _this = this;

			$('.video-overlay').on('click', function(evt){
				evt.stopPropagation();

				$(this).removeClass('show');
				_this.homeVideoReel.pause();
			});

			$('.video.module').on('click', function(){
				var videoId = $(this).data('video-id');

				$('#' + videoId).parent().addClass('show').removeClass('hidden');

				_this.homeVideoReel.play();
			});
		},

		initializeVideos: function(){
			var _this = this;

			videojs('home-video-reel', {
				'autoplay': false,
				'controls': true
			}, function(){
				_this.homeVideoReel = this;

				$('#home-video-reel').data('videojs', this);

				this.on('ended', function(){
					$('#home-video-reel').removeClass('show');
				});
			});
		},

		attachPlayerEvents: function(player){
			player.on('pause', function(){
				console.log('paused');
			});
		}
	}

	$(function(){
		assembly.home.init();
	});
})(jQuery);