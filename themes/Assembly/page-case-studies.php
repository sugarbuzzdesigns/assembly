<?php get_header(); ?>
<?php include 'includes/header-dark-interior.php'; ?>

<section class="landing">
	<div class="modular">
		<h3>
			<span>m</span>
			<span>o</span>
			<span>d</span>
			<span>u</span>
			<span>l</span>
			<span>a</span>
			<span>r</span>
		</h3>
		<div class="white-square"></div>
	</div>
	<div class="custom">
		<h3>
			<span>c</span>
			<span>u</span>
			<span>s</span>
			<span>t</span>
			<span>o</span>
			<span>m</span>
		</h3>
		<div class="white-square"></div>
	</div>
</section>

<section class="content">
	<div class="filter-wrap">
		<select class="select-filter">
			<option value="all">All</option>
			<option value="modular">Modular</option>
			<option value="custom">Custom</option>
		</select>
		<div class="toggle-filter">
			<a class="active" href="#" title="custom">C</a>
			<a href="#" title="modular">M</a>
		</div>
	</div>
	<?php
		$case_study_args = array('post_type'  => 'case_study');
		$the_query = new WP_Query( $case_study_args );

		if ($the_query->have_posts()) : while ($the_query->have_posts()) : $the_query->the_post();
			$cats = wp_get_post_terms(get_the_ID(), 'case_study_cat');
			$tags = wp_get_post_terms(get_the_ID(), 'case_study_tag');

			$taxonomy_names = get_post_taxonomies();
	?>

	<div class="tile group2">
		<div class="tile-img">
			<?php echo get_featured_image_html($post); ?>
		</div>
		<div class="tile-info">
			<span class="tile-cat">
				<?php foreach ( $tags as $tag ) { echo $tag->name; } ?>
			</span>
		</div>
	</div>

	<?php endwhile; endif; wp_reset_postdata(); ?>
</section>

<?php get_footer(); ?>
