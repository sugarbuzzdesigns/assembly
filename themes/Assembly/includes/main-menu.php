<?php global $detect, $deviceType; ?>
<?php if($deviceType === 'tablet' || $deviceType === 'mobile'){
	$devicePrefix = 'mobile';
} else {
	$devicePrefix = 'desktop';
} ?>
			<div class="main-menu">
				<div class="menu-inner">
					<header class="menu-header">
						<h1 class="logo">
						    <a class="init" href="/">
						    	<img id="menu-logo" src="<?php echo get_template_directory_uri(); ?>/library/images/sprites/Assembly_Logo_TempSpaces-<?php echo $devicePrefix; ?>-hover-white.png" alt="">
						    </a>
						</h1>

						<div class="main-menu-btn">
							<div class="hamburger">
								<span></span>
								<span></span>
								<span></span>
								<span></span>
							</div>
							<div class="square-btn">
								<hr class="top">
								<hr class="bottom">
							</div>
						</div>
					</header>

					<nav role="navigation" itemscope itemtype="http://schema.org/SiteNavigationElement">
					<?php wp_nav_menu(array(
						'container' => false,                           // remove nav container
						'container_class' => 'menu cf',                 // class of container (should you choose to use it)
						'menu' => __( 'The Main Menu', 'bonestheme' ),  // nav name
						'menu_class' => 'nav top-nav cf',               // adding custom nav class
						'theme_location' => 'main-nav',                 // where it's located in the theme
						'before' => '',                                 // before the menu
						'after' => '',                                  // after the menu
						'link_before' => '',                            // before each link
						'link_after' => '',                             // after each link
						'depth' => 0,                                   // limit the depth of the nav
						'fallback_cb' => ''                             // fallback function (if there is one)
					)); ?>
					</nav>
					<footer class="footer" role="contentinfo" itemscope itemtype="http://schema.org/WPFooter">
						<div>
							<p class="source-org copyright">
								<a href="mailto:hello@byassembly.com">hello@byassembly.com</a>
								<a href="tel:+01-678-287-7493" title="Phone Number">678.287.7493</a>
							</p>
						</div>

						<div>
							<ul class="social">
								<li class="instagram"><a href="https://www.instagram.com/byassembly" target="_blank"></a></li><!--
								--><li class="twitter"><a href="https://twitter.com/assemblyspaces" target="_blank"></a></li><!--
								--><li class="linkedin"><a href="https://www.linkedin.com/company-beta/15154404" target="_blank"></a></li>
							</ul>
						</div>
					</footer>
				</div>
			</div>