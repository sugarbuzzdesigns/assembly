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

function get_featured_image_data($post){
	$feat_image = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );
	$thumbnail_id = get_post_thumbnail_id($post->ID);
	$alt = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true);

	return array(
		'src' => $feat_image,
		'alt' => $alt
	);
}

function get_featured_image_html($post){
	$feat_image = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );
	$thumbnail_id = get_post_thumbnail_id($post->ID);
	$alt = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true);

	return '<img src="'. $feat_image .'" alt="'. $alt .'">';
}

function getAddableImages(){
	$media_query = new WP_Query(
	    array(
	        'post_type' => 'attachment',
	        'post_status' => 'inherit',
	        'posts_per_page' => -1,
	        'tax_query' => array(
	            array(
	                'taxonomy' => 'category_media',
	                'field' => 'slug',
	                'terms' => array('addable-image'),
	            )
	        )
	    )
	);
	$list = array();
	foreach ($media_query->posts as $post) {
	    $list[] = wp_get_attachment_url($post->ID);
	}

	return $list;
	// do something with $list here;
}