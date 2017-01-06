/*!
 * Assembly Carousel Modules
 */
var assembly = assembly || {};

(function($){
	assembly.video = {
		init: function(){
			this.initializeVideos();
		},

		initializeVideos: function(){
			var _this = this;
			$('.video-js').each(function(i, video){
				var player = videojs($('video').attr('id'), {});

				_this.attachPlayerEvents(player);
			});
		},

		attachPlayerEvents: function(player){
			player.on('pause', function(){
				console.log('paused');
			});
		}
	}

	$(function(){
		assembly.video.init();
	});
})(jQuery);