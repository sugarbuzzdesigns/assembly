			<div class="main-menu">
				<div class="menu-inner">
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
								<li class="instagram"><a href="#"></a></li><!--
								--><li class="twitter"><a href="#"></a></li><!--
								--><li class="linkedin"><a href="#"></a></li>
							</ul>
						</div>
					</footer>
				</div>
			</div>