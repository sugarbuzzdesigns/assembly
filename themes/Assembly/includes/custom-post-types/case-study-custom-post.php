<?php
// let's create the function for the custom type
function custom_post_case_study() {
	// creating (registering) the custom type
	register_post_type( 'case_study', /* (http://codex.wordpress.org/Function_Reference/register_post_type) */
		// let's now add all the options for this post type
		array( 'labels' => array(
			'name' => __( 'Case Studies', 'bonestheme' ), /* This is the Title of the Group */
			'singular_name' => __( 'Case Study', 'bonestheme' ), /* This is the individual type */
			'all_items' => __( 'All Case Studies', 'bonestheme' ), /* the all items menu item */
			'add_new' => __( 'Add New Case Study', 'bonestheme' ), /* The add new menu item */
			'add_new_item' => __( 'Add New Case Study', 'bonestheme' ), /* Add New Display Title */
			'edit' => __( 'Edit', 'bonestheme' ), /* Edit Dialog */
			'edit_item' => __( 'Edit Case Studies', 'bonestheme' ), /* Edit Display Title */
			'new_item' => __( 'New Case Study', 'bonestheme' ), /* New Display Title */
			'view_item' => __( 'View Case Study', 'bonestheme' ), /* View Display Title */
			'search_items' => __( 'Search Case Study', 'bonestheme' ), /* Search Custom Type Title */
			'not_found' =>  __( 'Nothing found in the Database.', 'bonestheme' ), /* This displays if there are no entries yet */
			'not_found_in_trash' => __( 'Nothing found in Trash', 'bonestheme' ), /* This displays if there is nothing in the trash */
			'parent_item_colon' => ''
			), /* end of arrays */
			'description' => __( 'Case Studies', 'bonestheme' ), /* Custom Type Description */
			'public' => true,
			'publicly_queryable' => true,
			'exclude_from_search' => false,
			'show_ui' => true,
			'query_var' => true,
			'menu_position' => 5, /* this is what order you want it to appear in on the left hand side menu */
			'menu_icon' => get_stylesheet_directory_uri() . '/library/images/custom-post-icon.png', /* the icon for the custom post type menu */
			'rewrite'	=> array( 'slug' => 'case_study', 'with_front' => false ), /* you can specify its url slug */
			'has_archive' => 'case_study', /* you can rename the slug here */
			'capability_type' => 'post',
			'hierarchical' => false,
			/* the next one is important, it tells what's enabled in the post editor */
			'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'trackbacks', 'custom-fields', 'comments', 'revisions', 'sticky')
		) /* end of options */
	); /* end of register post type */

	/* this adds your post categories to your custom post type */
	/* this adds your post tags to your custom post type */

}

// adding the function to the Wordpress init
add_action( 'init', 'custom_post_case_study');

// now let's add custom categories (these act like categories)
register_taxonomy( 'case_study_cat',
	array('case_study'), /* if you change the name of register_post_type( 'custom_type', then you have to change this */
	array('hierarchical' => true,     /* if this is true, it acts like categories */
		'labels' => array(
			'name' => __( 'Case Study Types', 'bonestheme' ), /* name of the custom taxonomy */
			'singular_name' => __( 'Case Study Type', 'bonestheme' ), /* single taxonomy name */
			'search_items' =>  __( 'Search Case Study Types', 'bonestheme' ), /* search title for taxomony */
			'all_items' => __( 'All Case Study Types', 'bonestheme' ), /* all title for taxonomies */
			'parent_item' => __( 'Parent Case Study Type', 'bonestheme' ), /* parent title for taxonomy */
			'parent_item_colon' => __( 'Parent Case Study Type:', 'bonestheme' ), /* parent taxonomy title */
			'edit_item' => __( 'Edit Case Study Type', 'bonestheme' ), /* edit custom taxonomy title */
			'update_item' => __( 'Update Case Study Type', 'bonestheme' ), /* update title for taxonomy */
			'add_new_item' => __( 'Add New Case Study Type', 'bonestheme' ), /* add new title for taxonomy */
			'new_item_name' => __( 'New Case Study Type Name', 'bonestheme' ) /* name title for taxonomy */
		),
		'show_admin_column' => true,
		'show_ui' => true,
		'query_var' => true,
		'rewrite' => array( 'slug' => 'case-study-cat' ),
	)
);

register_taxonomy( 'case_study_tag',
	array('case_study'), /* if you change the name of register_post_type( 'custom_type', then you have to change this */
	array('hierarchical' => false,     /* if this is true, it acts like categories */
		'labels' => array(
			'name' => __( 'Case Study Tags', 'bonestheme' ), /* name of the custom taxonomy */
			'singular_name' => __( 'Case Study Tag', 'bonestheme' ), /* single taxonomy name */
			'search_items' =>  __( 'Search Case Study Tags', 'bonestheme' ), /* search title for taxomony */
			'all_items' => __( 'All Case Study Tags', 'bonestheme' ), /* all title for taxonomies */
			'parent_item' => __( 'Parent Case Study Tag', 'bonestheme' ), /* parent title for taxonomy */
			'parent_item_colon' => __( 'Parent Case Study Tag:', 'bonestheme' ), /* parent taxonomy title */
			'edit_item' => __( 'Edit Case Study Tag', 'bonestheme' ), /* edit custom taxonomy title */
			'update_item' => __( 'Update Case Study Tag', 'bonestheme' ), /* update title for taxonomy */
			'add_new_item' => __( 'Add New Case Study Tag', 'bonestheme' ), /* add new title for taxonomy */
			'new_item_name' => __( 'New Case Study Tag Name', 'bonestheme' ) /* name title for taxonomy */
		),
		'show_admin_column' => true,
		'show_ui' => true,
		'query_var' => true,
		'rewrite' => array( 'slug' => 'case-study-tag' ),
	)
);