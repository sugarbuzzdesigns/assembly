<?php get_header(); ?>
<?php include 'includes/header-dark-interior.php'; ?>

<section class="landing">
	<div class="modular case-study-category">
		<div class="hover-content">
			<div class="white border square"></div>
		</div>
		<h3>
			<span data-letter="m">m</span>
			<span data-letter="o">o</span>
			<span data-letter="d">d</span>
			<span data-letter="u">u</span>
			<span data-letter="l">l</span>
			<span data-letter="a">a</span>
			<span data-letter="r">r</span>
		</h3>
		<div class="white solid square"></div>
	</div>
	<div class="custom case-study-category">
		<div class="hover-content">
			<div class="white border square"></div>
		</div>
		<h3>
			<span data-letter="c">c</span>
			<span data-letter="u">u</span>
			<span data-letter="s">s</span>
			<span data-letter="t">t</span>
			<span data-letter="o">o</span>
			<span data-letter="m">m</span>
		</h3>
		<div class="white solid square"></div>
	</div>
</section>

<section class="content">
	<h2><span>custom</span><span>kits</span></h2>
	<div class="filter-wrap">
		<select class="select-filter">
			<option value="all">All</option>
			<option value="experiential">Experiential</option>
			<option value="hospitality">Hospitality</option>
			<option value="super">Super</option>
			<option value="sporting">Sporting</option>
		</select>
		<div class="toggle-filter">
			<a class="active" href="#" title="custom">C</a>
			<a href="#" title="modular">M</a>
		</div>
	</div>
	<div class="case-study-desc">
		<h4>Custom Kits</h4>
		<p>Lorem ipsum dolor sit amet, consf ectetur adipiscing elit. In tincidunt elementum orci in pretium. Mauris malesuada fermentum nisi vel lobortis heks.</p>
		<p>tincidunt elementum orci in pretium. Mauris malesuada fermentum nisi vel lobortis.</p>
	</div>
	<div class="tile left-margin-med">
		<div class="tile-img">
			<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/case-studies/c-case-studies-content-1.jpg" alt="">
		</div>
		<div class="tile-info">
			<span class="tile-cat">
				Super
			</span>
		</div>
	</div>
	<div class="tile left-margin-lrg">
		<div class="tile-img">
			<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/case-studies/c-case-studies-content-2.jpg" alt="">
		</div>
		<div class="tile-info">
			<span class="tile-cat">
				Super
			</span>
		</div>
	</div>
	<div class="tile left-margin-sm">
		<div class="tile-img">
			<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/case-studies/c-case-studies-content-3.jpg" alt="">
		</div>
		<div class="tile-info">
			<span class="tile-cat">
				Hospitality
			</span>
		</div>
	</div>
	<blockquote>
		<strong>Lorem Ipsum</strong>
		<p>Lorem ipsum dolor sit amet, consf ectetur adipiscing elit. In tincidunt elementum orci in pretium. Mauris malesuada ferme ntum nisi vel lobortis heks.</p>
	</blockquote>
	<div class="tile left-margin-med">
		<div class="tile-img">
			<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/case-studies/c-case-studies-content-4.jpg" alt="">
		</div>
		<div class="tile-info">
			<span class="tile-cat">
				Sporting
			</span>
		</div>
	</div>
	<div class="tile left-margin-sm">
		<div class="tile-img">
			<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/case-studies/c-case-studies-content-5.jpg" alt="">
		</div>
		<div class="tile-info">
			<span class="tile-cat">
				Hospitality
			</span>
		</div>
	</div>
	<div class="tile left-margin-lrg">
		<div class="tile-img">
			<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/case-studies/c-case-studies-content-6.jpg" alt="">
		</div>
		<div class="tile-info">
			<span class="tile-cat">
				Experiential
			</span>
		</div>
	</div>
	<div class="tile left-margin-med">
		<div class="tile-img">
			<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/case-studies/c-case-studies-content-7.jpg" alt="">
		</div>
		<div class="tile-info">
			<span class="tile-cat">
				Experiential
			</span>
		</div>
	</div>
	<?php
		// $case_study_args = array('post_type'  => 'case_study');
		// $the_query = new WP_Query( $case_study_args );

		// if ($the_query->have_posts()) : while ($the_query->have_posts()) : $the_query->the_post();
		// 	$cats = wp_get_post_terms(get_the_ID(), 'case_study_cat');
		// 	$tags = wp_get_post_terms(get_the_ID(), 'case_study_tag');

		// 	$taxonomy_names = get_post_taxonomies();
	?>

<!-- 	<div class="tile group2">
		<div class="tile-img">
			<?php echo get_featured_image_html($post); ?>
		</div>
		<div class="tile-info">
			<span class="tile-cat">
				<?php foreach ( $tags as $tag ) { echo $tag->name; } ?>
			</span>
		</div>
	</div> -->

	<?php //endwhile; endif; wp_reset_postdata(); ?>
</section>

<?php get_footer(); ?>
