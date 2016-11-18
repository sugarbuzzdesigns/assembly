<?php get_header(); ?>
<div class="container">
	<section class="landing">
		<?php include 'includes/header-light.php'; ?>
		<h2>here today. remembered tomorrow.</h2>
		<div class="mesh-bg"></div>

 		<?php echo file_get_contents( get_template_directory_uri() . '/library/images/svg/down-arrow-mobile.svg' ) ?>
	</section>
	<section id="company-statement">
		<?php echo file_get_contents( get_template_directory_uri() . '/library/images/svg/bg-shape-1.svg' ) ?>
		<p>insert company statement sit amet, consectetur lala adipiscing, sed do eiusmod tempor incididunt ut idunt ut labore et dolore magna labore et dolore magna</p>
	</section>
</div>

<?php get_footer(); ?>