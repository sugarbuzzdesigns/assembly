<?php get_header(); ?>
	<style>
		html {
			height: 100%;
			overflow: hidden;
		}

		body {
			background: url(<?php echo get_template_directory_uri(); ?>/library/images/backgrounds/contact-bg-large-repeat.jpg);
			transform-style: preserve-3d;
			margin:0;
			padding:0;
			perspective: 1px;
			height: 100%;
			overflow-y: scroll;
			overflow-x: hidden;
			font-family: Nunito;
		}

		.content {
			background: url(<?php echo get_template_directory_uri(); ?>/library/images/backgrounds/contact-bg-large-repeat.jpg);
			overflow: hidden;
		}

		p {
			display: none;
		}

		img {
			width: 40%;
			margin-bottom: 50px;
			float: none;
		}

		img.one {
			margin-bottom: 320px;
		}

		img:nth-child(even) {
			/*transform: translate3d(0,0,0.1px) scale(calc(1 + (0.1*-1) / 1));*/
		}

		.tile img {
			width: 100%;
		}

		.tile:nth-child(even) {
			/*float: right;*/
  			/*transform: translateZ(.12px) scale(0.88);*/
		}

		.absolute {
			position: absolute;
			top: 400px;
			left: 0;
		}

		.firstabs {
			transform: translate3d(0,0,0.1px) scale(calc(1 + (0.1*-1) / 1));
		}

	</style>
		<div class="interior-buildouts-wrapper individual-service" data-service="interior-buildouts"">
			<div class="tile intro-tile">
				<div class="tile-inner">
					<div class="tile-img">
						<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/03-Interior.jpg" alt="interior-buildouts">
					</div>
					<div class="tile-info">
						<span class="tile-title">Interior Buildouts</span>
						<span class="tile-desc">description</span>
					</div>
				</div>
			</div>
			<div class="clear"></div>
			<p class="service-desc">We’re equipped to provide interior design solutions, from basic interior work (fabric liners and floor-coverings) to full turn-key design. We work with trusted partners to ensure that the inside is as impressive as the outside.</p>
			<div class="tile wide-1 content-tile left">
				<div class="mesh-bg dark"></div>
				<div class="tile-inner">
					<div class="tile-img">
						<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/02-Interior.jpg" alt="interior-buildouts">
					</div>
				</div>
			</div>
			<div class="tile tall-1 content-tile right">
				<div class="tile-inner">
					<div class="tile-img">
						<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/01-Interior.jpg" alt="interior-buildouts">
					</div>
				</div>
			</div>
			<div class="tile tall-1 content-tile right">
				<div class="mesh-bg dark"></div>
				<div class="tile-inner">
					<div class="tile-img">
						<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/04-Interior.jpg" alt="interior-buildouts">
					</div>
				</div>
			</div>
			<div class="clear"></div>
			<div class="tile tall-1 content-tile right">
				<div class="mesh-bg dark"></div>
				<div class="tile-inner">
					<div class="tile-img">
						<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/05-Interior.jpg" alt="interior-buildouts">
					</div>
				</div>
			</div>
		</div>

	<script>

	</script>
<?php get_footer(); ?>
