<?php get_header(); ?>
<?php include 'includes/header-dark-interior.php'; ?>
	<div class="mesh-bg dark wide"></div>
	<h1>services</h1>
	<section>
		<div class="filter-wrap">
			<select class="select-filter">
			  <option value="all">All</option>
			  <option value="modular">Modular</option>
			  <option value="custom">Custom</option>
			</select>
<!-- 			<div class="toggle-filter">
				<a class="active" href="#" title="custom">C</a>
				<a href="#" title="modular">M</a>
			</div> -->
		</div>
	</section>
	<section class="content">
		<?php
			$case_study_args = array('post_type'  => 'service');
			$the_query = new WP_Query( $case_study_args );

			if ($the_query->have_posts()) : while ($the_query->have_posts()) : $the_query->the_post();

			$img_size_tags = wp_get_post_terms(get_the_ID(), 'service_image_size_tag');
		?>

		<div class="tile <?php foreach ( $img_size_tags as $tag ) { echo $tag->slug; } ?>">
			<div class="tile-img">
				<?php echo get_featured_image_html($post); ?>
			</div>
			<div class="tile-info">
				<span class="tile-title">
					<?php the_title(); ?>
				</span>
			</div>
		</div>

		<?php endwhile; endif; wp_reset_postdata(); ?>
	</section>
<?php get_footer(); ?>
