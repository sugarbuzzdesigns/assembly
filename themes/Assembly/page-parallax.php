<?php get_header(); ?>

	<section class="one">
		<div class="parallax" data-y-offset="100px"></div>
	</section>
	<section class="two">

	</section>

<style>
	section {
		height: 100vh;
		background: #2e2e2e;
		padding-top: 200px;
	}

	section + section {
		background: #e2e2e2;
	}

	.parallax {
		position: relative;
		background: blue;
		height: 100px;
		width: 200px;
		float: left;
		margin: 20px;
	}
</style>

<script>
	(function IIFE($){
		$(function docready(){
			$('.parallax').each(function(){
				var y = $(this).data('y-offset');

				$(this).data('cur-y', y);

				$(this).css({
					'background': 'red',
					'-webkit-transform': 'translate3d(0, ' + y + ', 0)'
				});
			});

			var scrollPosition;

			$(window).scroll(function(){
				var scrolled = $(window).scrollTop();
				var dir = 'down';

				if(scrollPosition > scrolled){
					console.log('back up');
					dir = 'up';
				} else {
					console.log('going down');
					dir = 'down';
				}
				scrollPosition = scrolled;

				$('.parallax').each(function(){
					var y = parseInt($(this).data('cur-y'), 10);

					if(dir === 'down'){
						y = y - scrolled + 'px';
					} else {
						y = y + scrolled + 'px';
					}

					if(parseInt(y, 10) >= 0){
						$(this).data('cur-y', y);

						$(this).css({
							'-webkit-transform': 'translate3d(0,' + y + ', 0)'
						});
					}
				});
			});
		});
	})(jQuery);
</script>

<?php get_footer(); ?>