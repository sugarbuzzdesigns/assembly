<?php get_header(); ?>
<?php include 'includes/header-light.php'; ?>
	<div class="assembly-slider">
		<ul class="slider">
		  <li>
		  	<img src="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/project_placeholder_1.jpg" alt="">
		  </li>
		  <li>
		  	<img src="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/project_placeholder_2.jpg" alt="">
		  </li>
		  <li>
		  	<img src="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/project_placeholder_3.jpg" alt="">
		  </li>
		  <li>
		  	<img src="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/project_placeholder_4.jpg" alt="">
		  </li>
		</ul>
	</div>

	<style>
		.assembly-slider {
			background: #fff;
			width: 100%;
			margin: 0 auto;
		}

		.slider {
			background-color: #fff;
			height: 100%;
		}

		.slider li {
			padding: 0 10px;
			position: relative;
			height: 100%;
			overflow: hidden;
		}

		.slider li img {
			transition: transform 0.5s, opacity 0.5s;
		}

		.slider li:nth-child(odd) img {
			transform: translate3d(0, -5%, 0);
		}

		.slider li:nth-child(even) img {
			transform: translate3d(0, 15%, 4%);
		}

		.slider li.active-slide img {
			transform: translate3d(0, 0, 0);
		}

		.slider li:before {
		    content: ' ';
		    display: inline-block;
		    vertical-align: middle;  /* vertical alignment of the inline element */
		    height: 100%;
		}

		.slider img {
			display: inline-block;
			vertical-align: middle;
			margin: 0 auto;
			width: 95%;
			opacity: .5;
		}

		.bx-viewport {
			/*width: 120% !important;*/
			padding: 0 20px;
		}

		.active-slide img {
			opacity: 1;
		}
	</style>

	<script>
		(function($){
			$(function(){
				var slideWidth = $(window).width() * .9;
				var slider = $('.slider').bxSlider({
					slideWidth: slideWidth,
					infiniteLoop: false,
					pager: false,
				    onSliderLoad: function(currentIndex) {
				      $('.bx-viewport').find('ul').children().eq(currentIndex).addClass('active-slide');
				    },
				    onSlideBefore: function($slideElement){
				      $('.bx-viewport').find('ul').children().removeClass('active-slide');
				      $slideElement.addClass('active-slide');
				    }
				});

				$('.bx-wrapper').first().css('max-width', '90%');
				$('.bx-viewport').css({overflow: 'visible'})
			});
		})(jQuery);
	</script>

<?php get_footer('contact'); ?>
