<?php wp_head(); ?>
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
<style>
	body {
		background: #e3e3e3;
	}

	.numbers {
		width: 265px;
		height: 320px;
		overflow-y: hidden;
		position: relative;
		margin-top: 20px;
		background: #fff;
	}

	.inner {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, 0);
		height: 100%;
		width: 100%;
	}

	.num {
	    font-family: pangrambold;
	    font-size: 250px;
	    line-height: 0.77;
	    position: absolute;
	    top: 0;
	    left: 50%;
	    transform: translate(-50%,-20%);
	    color: #000;
	}

	.num1 {
		top: 0;
	}

	.num2 {
		bottom: 0;
		top: auto;
		transform: translate(-50%,12%);
	}

	button {
		margin-top: 30px;
		font-size: 30px;
	}
</style>

<script>
	(function($){
		$(function(){
			$('.reset').on('click', function(){
				$('.num1').html(0);
				$('.num2').html(0);
			});

			$('button.newNum').on('click', function(e){
				var num = $(this).html()*1;

				count(num);
			});

			function count(num){
				var $num1 = $('.num1');
				var $num2 = $('.num2');

				var num1Start = $('.num1').html();
				var num2Start = $('.num2').html();
				var fullNum = (num1Start+num2Start)*1;
				var newNum = num;

				var tens = Math.floor(newNum/10);
				var ones = newNum - Math.floor(newNum/10) * 10;
				var total = fullNum;

				clearInterval(window.countUp);

				window.countUp = setInterval(function(){

					if(fullNum > newNum){
						total-=1;
					} else {
						total+=1;
					}

					if((""+total).length === 1){
						$num2.html(total);
					} else {
						$num1.html((""+total).split("")[0]);
						$num2.html((""+total).split("")[1]);
					}

					if(total === newNum){
						clearInterval(window.countUp);
					}
				}, 50);
			}
		});
	})(jQuery);

</script>
<body <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">

	<div class="numbers">
		<div class="inner">
			<div class="num num1">0</div>
			<div class="num num2">0</div>
		</div>
	</div>

	<button class="newNum">12</button>
	<button class="newNum">10</button>
	<button class="newNum">47</button>
	<button class="reset">reset</button>

		<?php // all js scripts are loaded in library/bones.php ?>
		<?php wp_footer(); ?>
</body>
</html> <!-- end of site. what a ride! -->