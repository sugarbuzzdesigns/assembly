<?php get_header(); ?>
<?php include 'includes/header-dark-interior.php'; ?>
	<div class="mesh-bg dark wide"></div>
	<h1>services</h1>
	<section>
		<div class="filter-wrap">
			<select class="select-filter">
				<?php $terms = get_terms( 'service_category' ); var_dump($terms); ?>
				<option value="all">All</option>
				<?php foreach ($terms as $cat): ?>
					<option value="<?php echo $cat->slug; ?>"><?php echo $cat->name; ?></option>
				<?php endforeach; ?>
			</select>
		</div>
	</section>
	<section class="content">
		<?php
			$case_study_args = array('post_type'  => 'service');
			$the_query = new WP_Query( $case_study_args );

			if ($the_query->have_posts()) : while ($the_query->have_posts()) : $the_query->the_post();

			$img_size_tags = wp_get_post_terms(get_the_ID(), 'service_image_size_tag');
			$service_cats = wp_get_post_terms(get_the_ID(), 'service_category');
		?>

		<div class="tile slideInUp <?php foreach ( $img_size_tags as $tag ) { echo $tag->slug; } ?>" data-sesrvice-category="<?php echo $service_cats[0]->slug; ?>">
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
