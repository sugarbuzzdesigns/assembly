<?php
	$projectsArgs = array(
		'post_type'  => 'project',
		'posts_per_page'=> -1
	);
	// The Query
	$the_query = new WP_Query( $projectsArgs );

	$projects = array();

	// The Loop
	if ( $the_query->have_posts() ) : while ( $the_query->have_posts() ) : $the_query->the_post();
		$img_type = wp_get_post_terms(get_the_ID(), 'project_img_type');
		$service_type = wp_get_post_terms(get_the_ID(), 'project_service_cat');

		if(isset($service_type[0])){
			$service_type = $service_type[0]->slug;
		} else {
			$service_type = '';
		}

		$project = array(
			'id' => $post->ID,
			'featured_image' => get_featured_image_data($post),
			'title' => get_the_title(),
			'img_type' => $img_type[0]->slug,
			'service_type' => $service_type
		);

		$projects[] = $project;

	endwhile; wp_reset_postdata(); endif;