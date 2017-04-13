<?php global $detect, $deviceType; ?>
<!doctype html>

<!--[if lt IE 7]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?> class="no-js"><!--<![endif]-->

<head>
	<meta charset="utf-8">

	<?php // force Internet Explorer to use the latest rendering engine available ?>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<title><?php wp_title(''); ?></title>

	<?php // mobile meta (hooray!) ?>
	<meta name="HandheldFriendly" content="True">
	<meta name="MobileOptimized" content="320">
	<meta name="viewport" content="width=device-width, initial-scale=1"/>

	<?php // icons & favicons (for more: http://www.jonathantneal.com/blog/understand-the-favicon/) ?>
	<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/library/images/apple-touch-icon.png?v=2">
	<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.png?v=2">
		<!--[if IE]>
			<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
			<![endif]-->
			<?php // or, set /favicon.ico for IE10 win ?>

			<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

			<?php // wordpress head functions ?>
			<?php wp_head(); ?>
			<?php // end of wordpress head ?>

			<?php // drop Google Analytics Here ?>
			<?php // end analytics ?>

		</head>

		<body <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">
		<?php get_template_part( 'includes/loader' ); ?>

		<?php get_template_part( 'includes/main-menu' ); ?>
<script>
	// (function($){
	// 	$(function(){
	// 		var initialLogoAnimation = function(size){
	// 			var shift = 0;
	// 			var $logo = $('.logo');
	// 			var frameWidth = $logo.width();
	// 			var frameHeight = $logo.height();
	// 			var totalFrames = 50;
	// 			var ypos = 0;
	// 			var currentFrame = 1;
	// 			var myImage = new Image();
	// 			myImage.src = php_vars.home + '/library/images/sprites/Assembly_Logo_TempSpaces-desktop-init-white.png';
	// 			myImage.addEventListener("load", loadImage, false);
	// 			var loaderIntervalInitial;
	// 			var imgWidth; var imgHeight;

	// 			function loadImage(e) {
	// 				$logo.append(myImage);
	// 				$logo.addClass('ready');

	// 				imgWidth = $(myImage).width();
	// 				imgHeight = $(myImage).height();

	// 				frameHeight = imgHeight/5;

	// 				loaderIntervalInitial = setInterval(function(){
	// 						window.animate();
	// 					}, 1000/24);
	// 			}

	// 			window.animate = function() {
	// 				$('.logo').css({
	// 					backgroundPosition: -shift +'px '+ -ypos +'px'
	// 				});

	// 			    shift += frameWidth;

	// 			    if(currentFrame%9 === 0 && currentFrame !== 0){
	// 			    	shift = 0;
	// 			    	ypos += frameHeight;
	// 			    }

	// 			    if (currentFrame === 43) {
	// 					clearInterval(loaderIntervalInitial);
	// 			    }

	// 			    /*
	// 			        Start at the beginning once you've reached the
	// 			        end of your sprite!
	// 			        */
	// 			        if (currentFrame == totalFrames) {
	// 			        	shift = 0;
	// 			        	ypos = 0;
	// 			        	currentFrame = 0;
	// 			        }

	// 			        currentFrame++;
	// 			    }
	// 		};

	// 		$('html').on('loaded', function(){
	// 			if(assembly.util.useragent.deviceType === 'desktop'){
	// 				initialLogoAnimation('desktop');
	// 			} else {
	// 				initialLogoAnimation('mobile');
	// 			}
	// 		});
	// 	});
	// })(jQuery);
</script>