<?php

function get_projects_html($num_projects){
	$html = '';

	$args = array(
		'post_type'  => 'project',
		'posts_per_page'=> $num_projects
	);
	// The Query
	$the_query = new WP_Query( $args );

	// The Loop
	if ( $the_query->have_posts() ) {
		while ( $the_query->have_posts() ) {
			$the_query->the_post();

			$html .= '<div class="project group1"></div>';

		}

		wp_reset_postdata();
	}
	return $html;
}