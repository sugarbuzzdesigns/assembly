<?php
// let's create the function for the custom type
function custom_post_service() {
	// creating (registering) the custom type
	register_post_type( 'service', /* (http://codex.wordpress.org/Function_Reference/register_post_type) */
		// let's now add all the options for this post type
		array( 'labels' => array(
			'name' => __( 'Services', 'bonestheme' ), /* This is the Title of the Group */
			'singular_name' => __( 'Service', 'bonestheme' ), /* This is the individual type */
			'all_items' => __( 'All Services', 'bonestheme' ), /* the all items menu item */
			'add_new' => __( 'Add New Service', 'bonestheme' ), /* The add new menu item */
			'add_new_item' => __( 'Add New Service', 'bonestheme' ), /* Add New Display Title */
			'edit' => __( 'Edit', 'bonestheme' ), /* Edit Dialog */
			'edit_item' => __( 'Edit Services', 'bonestheme' ), /* Edit Display Title */
			'new_item' => __( 'New Service', 'bonestheme' ), /* New Display Title */
			'view_item' => __( 'View Service', 'bonestheme' ), /* View Display Title */
			'search_items' => __( 'Search Service', 'bonestheme' ), /* Search Custom Type Title */
			'not_found' =>  __( 'Nothing found in the Database.', 'bonestheme' ), /* This displays if there are no entries yet */
			'not_found_in_trash' => __( 'Nothing found in Trash', 'bonestheme' ), /* This displays if there is nothing in the trash */
			'parent_item_colon' => ''
			), /* end of arrays */
			'description' => __( 'Services', 'bonestheme' ), /* Custom Type Description */
			'public' => true,
			'publicly_queryable' => true,
			'exclude_from_search' => false,
			'show_ui' => true,
			'query_var' => true,
			'menu_position' => 5, /* this is what order you want it to appear in on the left hand side menu */
			'menu_icon' => get_stylesheet_directory_uri() . '/library/images/custom-post-icon.png', /* the icon for the custom post type menu */
			'rewrite'	=> array( 'slug' => 'service', 'with_front' => false ), /* you can specify its url slug */
			'has_archive' => 'service', /* you can rename the slug here */
			'capability_type' => 'post',
			'hierarchical' => false,
			/* the next one is important, it tells what's enabled in the post editor */
			'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'trackbacks', 'custom-fields', 'comments', 'revisions', 'sticky')
		) /* end of options */
	); /* end of register post type */

	/* this adds your post categories to your custom post type */
	/* this adds your post tags to your custom post type */

}

// now let's add custom categories (these act like categories)
register_taxonomy( 'service_category',
	array('service'), /* if you change the name of register_post_type( 'custom_type', then you have to change this */
	array('hierarchical' => true,     /* if this is true, it acts like categories */
		'labels' => array(
			'name' => __( 'Service Category', 'bonestheme' ), /* name of the custom taxonomy */
			'singular_name' => __( 'Service Category', 'bonestheme' ), /* single taxonomy name */
			'search_items' =>  __( 'Search Service Categories', 'bonestheme' ), /* search title for taxomony */
			'all_items' => __( 'All Service Categories', 'bonestheme' ), /* all title for taxonomies */
			'parent_item' => __( 'Parent Service Category', 'bonestheme' ), /* parent title for taxonomy */
			'parent_item_colon' => __( 'Parent Service Category:', 'bonestheme' ), /* parent taxonomy title */
			'edit_item' => __( 'Edit Service Category', 'bonestheme' ), /* edit custom taxonomy title */
			'update_item' => __( 'Update Service Category', 'bonestheme' ), /* update title for taxonomy */
			'add_new_item' => __( 'Add New Service Category', 'bonestheme' ), /* add new title for taxonomy */
			'new_item_name' => __( 'New Service Category Name', 'bonestheme' ) /* name title for taxonomy */
		),
		'show_admin_column' => true,
		'show_ui' => true,
		'query_var' => true,
		'rewrite' => array( 'slug' => 'service-cat' ),
	)
);

// adding the function to the Wordpress init
add_action( 'init', 'custom_post_service');

register_taxonomy( 'service_image_size_tag',
	array('service'), /* if you change the name of register_post_type( 'custom_type', then you have to change this */
	array('hierarchical' => true,     /* if this is true, it acts like categories */
		'labels' => array(
			'name' => __( 'Service Image Size', 'bonestheme' ), /* name of the custom taxonomy */
			'singular_name' => __( 'Service Image Size Tag', 'bonestheme' ), /* single taxonomy name */
			'search_items' =>  __( 'Search Service Image Size', 'bonestheme' ), /* search title for taxomony */
			'all_items' => __( 'All Service Image Size', 'bonestheme' ), /* all title for taxonomies */
			'parent_item' => __( 'Parent Service Image Size Tag', 'bonestheme' ), /* parent title for taxonomy */
			'parent_item_colon' => __( 'Parent Service Image Size Tag:', 'bonestheme' ), /* parent taxonomy title */
			'edit_item' => __( 'Edit Service Image Size Tag', 'bonestheme' ), /* edit custom taxonomy title */
			'update_item' => __( 'Update Service Image Size Tag', 'bonestheme' ), /* update title for taxonomy */
			'add_new_item' => __( 'Add New Service Image Size Tag', 'bonestheme' ), /* add new title for taxonomy */
			'new_item_name' => __( 'New Service Image Size Tag Name', 'bonestheme' ) /* name title for taxonomy */
		),
		'show_admin_column' => true,
		'show_ui' => true,
		'query_var' => true,
		'rewrite' => array( 'slug' => 'service-image-size-tag' ),
	)
);