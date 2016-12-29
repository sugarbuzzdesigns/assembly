<?php
// Flush rewrite rules for custom post types
add_action( 'after_switch_theme', 'bones_flush_rewrite_rules' );

// Flush your rewrite rules
function bones_flush_rewrite_rules() {
	flush_rewrite_rules();
}

require('../includes/custom-post-types/service-custom-post.php');
require('../includes/custom-post-types/project-custom-post.php');
require('../includes/custom-post-types/case-study-custom-post.php');
