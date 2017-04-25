<?php global $detect, $deviceType; ?>
<?php if($deviceType === 'tablet' || $deviceType === 'mobile'){
	$devicePrefix = 'mobile';
} else {
	$devicePrefix = 'desktop';
} ?>
			<div class="main-menu">
				<div class="menu-inner">
					<header class="menu-header">
						<h1 class="main-logo">
					  		<a href="/" class="logo">
					  			<div class="img"></div>
								<div class="text">
									<div class="assembly">
										<span class="letter" data-letter="a">a</span>
										<span class="letter" data-letter="s">s</span>
										<span class="letter" data-letter="s">s</span>
										<span class="letter" data-letter="e">e</span>
										<span class="letter" data-letter="m">m</span>
										<span class="letter" data-letter="b">b</span>
										<span class="letter" data-letter="l">l</span>
										<span class="letter" data-letter="y">y</span>
									</div>
									<div class="temp-spaces">
										<span class="letter" data-letter="t">t</span>
										<span class="letter" data-letter="e">e</span>
										<span class="letter" data-letter="m">m</span>
										<span class="letter" data-letter="p">p</span>
										<span class="letter" data-letter="o">o</span>
										<span class="letter" data-letter="r">r</span>
										<span class="letter" data-letter="a">a</span>
										<span class="letter" data-letter="r">r</span>
										<span class="letter" data-letter="y">y</span>
										<span class="letter">&nbsp;</span>
										<span class="letter" data-letter="s">s</span>
										<span class="letter" data-letter="p">p</span>
										<span class="letter" data-letter="a">a</span>
										<span class="letter" data-letter="c">c</span>
										<span class="letter" data-letter="e">e</span>
										<span class="letter" data-letter="s">s</span>
									</div>
								</div>
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
								--><li class="linkedin"><a href="https://www.linkedin.com/company-beta/15154404" target="_blank"></a></li>

								<!-- REMOVED, WAS 2nd in line <li class="twitter"><a href="https://twitter.com/assemblyspaces" target="_blank"></a></li> -->
							</ul>
						</div>
					</footer>
				</div>
			</div>