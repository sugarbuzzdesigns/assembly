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
	<section class="slider">
		<div class="mesh-bg dark wide"></div>
		<h3>For The moment.</h3>
		<div class="slide">
			<div class="slide-inner">
				<img src="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/services_placeholder.jpg" alt="">
			<div class="slide-inner">
		</div>
	</section>
	<section class="callout">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat.</p>
		<a href="#" class="button">Sustain Ability</a>
	</section>
	<section class="slider">
		<div class="mesh-bg dark wide"></div>
		<div class="slide">
			<div class="slide-inner">
				<img src="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/services_placeholder.jpg" alt="">
				<p class="slide-title">Project Title</p>
				<p class="slide-description">Mauris malesuada fermentum nisi vel lobortis.</p>
			</div>
		</div>
	</section>
	<?php include 'includes/modules/employees.php'; ?>
	<section class="our-approach">
		<h3><span>Our</span><span>Approach</span></h3>
		<div class="svg-slider">
			<div class="num">01</div>
			<div class="viewport">
				<div class="svg-slide">
					<?php include 'library/images/svg/our-approach-1.svg'; ?>
					<div class="description">
						<h4>LOREM IPSUME</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt elementum orci in pretium. Mauris malesuada fermentum nisi vel lobortis.</p>
						<h4>LOREM IPSUME</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
					</div>
				</div>
				<nav class="slider-nav">
					<ul>
						<li class="active"></li>
						<li></li>
						<li></li>
					</ul>
				</nav>
			</div>
		</div>
	</section>
	<a href="/case-studies" title="">
		<?php include 'library/images/svg/view-case-studies-button.svg'; ?>
	</a>
<?php get_footer(); ?>