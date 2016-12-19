<?php get_header(); ?>
<div class="container">
	<section class="landing">
		<?php include 'includes/header-light.php'; ?>
		<h2>here today. remembered tomorrow.</h2>
		<div class="mesh-bg"></div>

 		<?php include __DIR__ . '/library/images/svg/down-arrow-mobile.svg'; ?>
	</section>
	<section class="company-statement">
		<?php include __DIR__ . '/library/images/svg/bg-shape-1.svg'; ?>
		<p>insert company statement sit amet, consectetur lala adipiscing, sed do eiusmod tempor incididunt ut idunt ut labore et dolore magna labore et dolore magna</p>
	</section>
	<section class="projects">
		<div class="mesh-bg dark wide"></div>
		<div class="projects-wrapper">
		<?php
		// echo get_projects_html(2, 1);

		$projectsArgs1 = array(
			'post_type'  => 'project',
			'posts_per_page'=> 2
		);
		// The Query
		$the_query = new WP_Query( $projectsArgs1 );

		// The Loop
		if ( $the_query->have_posts() ) {
			while ( $the_query->have_posts() ) {
				$the_query->the_post();
		?>
			<div class="tile group1">
				<div class="tile-img">
					<?php echo get_featured_image_html($post); ?>
				</div>
				<div class="tile-info">
					<span class="tile-title"><?php echo get_the_title(); ?></span>
					<span class="tile-desc"><?php echo get_the_title(); ?></span>
				</div>
			</div>
		<?php
			}
			/* Restore original Post Data */
			wp_reset_postdata();
		}
		?>
		</div>
	</section>
	<section class="services">
		<div class="tile">
			<div class="tile-img">
				<img class="placeholder" src="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/services_placeholder.jpg" alt="">
			</div>
			<div class="tile-info">
				<span class="tile-title">services</span>
				<span class="tile-desc"></span>
			</div>
		</div>
	</section>
	<section class="products two">
		<div class="tile">
			<div class="tile-img">
				<img class="placeholder" src="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/services_placeholder.jpg" alt="">
			</div>
			<div class="tile-info">
				<span class="tile-title">products</span>
				<span class="tile-desc"></span>
			</div>
		</div>
	</section>
	<section class="videos">
		<div class="video-wrapper">
			<div class="video">
				<img class="video-placeholder" src="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/video-placeholder.jpg" alt="">
				<?php include __DIR__ . '/library/images/svg/play-btn-square.svg'; ?>
			</div>
		</div>
	</section>
	<section class="employees">
		<div class="diagonals"></div>
		<div class="employee">
			<div class="col">
				<div class="employee-img">
					<img class="employee-placeholder" src="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/employee_placeholder_1.jpg" alt="">
				</div>
				<div class="employee-info">
					<span class="employee-name">GORDON MACHIELSEN</span>
					<span class="employee-title">Title Lorem Ipsum</span>
				</div>
			</div>
			<div class="col">
				<div class="years-experience">
					<span class="num">2</span>
					<span class="num">6</span>
					<span class="text">years of experience</span>
				</div>
				<button type="button">about</button>
			</div>
		</div>
	</section>
	<section class="projects">
		<div class="mesh-bg dark wide"></div>
		<div class="projects-wrapper">
		<?php
		$projectsArgs2 = array(
			'post_type'  => 'project',
			'posts_per_page'=> 2,
			'offset'=> 2,
		);

		// The Query
		$the_query = new WP_Query( $projectsArgs2 );

		// The Loop
		if ( $the_query->have_posts() ) {
			while ( $the_query->have_posts() ) {
				$the_query->the_post();
		?>
			<div class="tile group2">
				<div class="tile-img">
					<?php echo get_featured_image_html($post); ?>
				</div>
				<div class="tile-info">
					<span class="tile-title"><?php echo get_the_title(); ?></span>
					<span class="tile-desc"><?php echo get_the_title(); ?></span>
				</div>
			</div>
		<?php
			}
			/* Restore original Post Data */
			wp_reset_postdata();
		}
		?>
		</div>
	</section>
</div>

<?php get_footer(); ?>