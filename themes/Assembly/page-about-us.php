<?php get_header(); ?>
	<?php include 'includes/header-dark.php'; ?>
	<section class="landing">
		<h1>about us</h1>
		<div class="mesh-bg dark wide"></div>
	</section>
	<section class="videos">
		<div class="video-wrapper">
			<div class="video">
				<img class="video-placeholder" src="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/video-placeholder.jpg" alt="">
				<?php include __DIR__ . '/library/images/svg/play-btn-square.svg'; ?>
			</div>
		</div>
	</section>

<?php get_footer(); ?>