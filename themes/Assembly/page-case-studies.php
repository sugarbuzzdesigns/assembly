<?php get_header(); ?>
<?php if($deviceType === 'tablet' || $deviceType === 'mobile'){
	$devicePrefix = 'mobile';
} else {
	$devicePrefix = 'desktop';
} ?>
<div class="wrap">
	<div class="container">
		<section class="landing">
			<div class="landing-inner">
				<div class="modular case-study-category" data-hash-selector="#modular" data-landing-cat="modular">
					<div class="square hover-spot"></div>
					<div class="hover-content">
						<header>
							<h1 class="logo">
							    <a class="init" href="/">
							    	<img id="landing-logo-hover-content" src="<?php echo get_template_directory_uri(); ?>/library/images/sprites/Assembly_Logo_TempSpaces-<?php echo $devicePrefix; ?>-hover-white.png" alt="">
							    </a>
							</h1>
							<span class="mobile-only"><?php include __DIR__ . '/includes/menu-btn.php'; ?></span>
						</header>
						<h3>
							<span data-letter="m">m</span>
							<span data-letter="o">o</span>
							<span data-letter="d">d</span>
							<span data-letter="u">u</span>
							<span data-letter="l">l</span>
							<span data-letter="a">a</span>
							<span data-letter="r">r</span>
						</h3>
						<div class="white border square">
							<p>A LOOK AT<br>OUR MODULAR<br>WORK</p>
						</div>
					</div>
					<div class="default-content">
						<div class="bg layer" data-depth="0.10"></div>
						<div class="inner">
							<header class="dark">
								<h1 class="logo">
								    <a class="init" href="/">
								    	<img id="landing-logo" src="<?php echo get_template_directory_uri(); ?>/library/images/sprites/Assembly_Logo_TempSpaces-<?php echo $devicePrefix; ?>-hover.png" alt="">
								    </a>
								</h1>
								<span class="mobile-only"><?php include __DIR__ . '/includes/menu-btn.php'; ?></span>
							</header>
							<h3>
								<span data-letter="m">m</span>
								<span data-letter="o">o</span>
								<span data-letter="d">d</span>
								<span data-letter="u">u</span>
								<span data-letter="l">l</span>
								<span data-letter="a">a</span>
								<span data-letter="r">r</span>
							</h3>
							<div class="white solid square"><p>MODULAR<br>CASE STUDY</p></div>
						</div>
					</div>
				</div>
				<div class="custom case-study-category" data-hash-selector="#custom" data-landing-cat="custom">
					<div class="square hover-spot"></div>
					<div class="hover-content">
						<header class="light section-header no-mobile desktop">
						    <?php include __DIR__ . '/includes/menu-btn.php'; ?>
						</header>
						<h3>
							<span data-letter="c">c</span>
							<span data-letter="u">u</span>
							<span data-letter="s">s</span>
							<span data-letter="t">t</span>
							<span data-letter="o">o</span>
							<span data-letter="m">m</span>
						</h3>
						<div class="white border square">
							<p>A LOOK AT<br>OUR CUSTOM<br>WORK</p>
						</div>
					</div>
					<div class="default-content">
						<div class="bg layer" data-depth="0.10"></div>
						<div class="inner">
							<header class="dark section-header interior no-mobile desktop">
								<?php include __DIR__ . '/includes/menu-btn.php'; ?>
							</header>
							<h3>
								<span data-letter="c">c</span>
								<span data-letter="u">u</span>
								<span data-letter="s">s</span>
								<span data-letter="t">t</span>
								<span data-letter="o">o</span>
								<span data-letter="m">m</span>
							</h3>
							<div class="white solid square"><p>CUSTOM<br>CASE STUDY</p></div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="content" data-to-top-anchor>
			<div class="content-inner">
				<header class="scroll-overlay dark">
					<div class="inner-bg"></div>
					<h1 class="logo">
					    <a class="init" href="/">
					    	<img id="interior-logo" src="<?php echo get_template_directory_uri(); ?>/library/images/sprites/Assembly_Logo_TempSpaces-<?php echo $devicePrefix; ?>-hover.png" alt="">
					    </a>
					</h1>
					<?php include __DIR__ . '/includes/menu-btn.php'; ?>
				</header>
				<div class="content-header">
					<div class="mesh-bg dark wide"></div>
					<h2 data-h2-title="custom">
						<span>custom</span>
						<span>kits</span>
						<span>THE SPACE OF YOUR DREAMS</span>
					</h2>
					<h2 data-h2-title="modular">
						<span>modular</span>
						<span>kits</span>
						<span>SPACES THAT CLICK</span>
					</h2>
					<div class="filter-wrap">
						<select class="select-filter" style="width: 100%">
							<option value="all">All</option>
							<option value="experiential">Experiential</option>
							<option value="hospitality">Hospitality</option>
							<option value="super">Super</option>
							<option value="sporting">Sporting</option>
						</select>
						<nav class="filter-menu no-mobile">
							<div class="active" data-value="all"><a href="#">All</a></div>
							<div data-value="experiential"><a href="#">Experiential</a></div>
							<div data-value="hospitality"><a href="#">Hospitality</a></div>
							<div data-value="super"><a href="#">Super</a></div>
							<div data-value="sporting"><a href="#">Sporting</a></div>
						</nav>
						<div class="toggle-filter">
							<a class="active" href="#" title="custom">C</a>
							<a href="#" title="modular">M</a>
						</div>
					</div>
				</div>
				<div class="svg-container no-mobile desktop">
					<div class="case-study-svg custom">
						<svg class="box back-box" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.06 52.83">
							<defs>
								<style>
									.box-cls-1{fill:#fff;stroke-width:2px;}.box-cls-1,.box-cls-2{stroke:#90d4d9;stroke-linecap:round;stroke-linejoin:round;}.box-cls-2{fill:none;}
								</style>
							</defs>
							<title>
								Asset 3
							</title>
							<path class="box-cls-1" d="M22.53 51.83L1 39.39V13.43L22.53 1l21.53 12.43v25.96L22.53 51.83z"/>
							<path class="box-cls-2" d="M1 13.43l21.53 12.43v25.97M22.53 25.86l21.53-12.43"/>
						</svg>
						<?php include __DIR__ . '/library/images/svg/case-studies-svg-custom.svg'; ?>
					</div>
					<div class="case-study-svg modular">
						<svg class="box back-box" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.06 52.83">
							<defs>
								<style>
									.box-cls-1{fill:#fff;stroke-width:2px;}.box-cls-1,.box-cls-2{stroke:#90d4d9;stroke-linecap:round;stroke-linejoin:round;}.box-cls-2{fill:none;}
								</style>
							</defs>
							<title>
								Asset 3
							</title>
							<path class="box-cls-1" d="M22.53 51.83L1 39.39V13.43L22.53 1l21.53 12.43v25.96L22.53 51.83z"/>
							<path class="box-cls-2" d="M1 13.43l21.53 12.43v25.97M22.53 25.86l21.53-12.43"/>
						</svg>
						<?php include __DIR__ . '/library/images/svg/case-studies-svg-modular.svg'; ?>
					</div>
				</div>
				<div class="case-study-details">
					<?php include 'includes/content/case-studies/custom/default.php' ?>
					<?php include 'includes/content/case-studies/modular/default.php' ?>
					<!-- CUSTOM STUDIES -->
					<?php include 'includes/content/case-studies/custom/super.php' ?>
					<?php include 'includes/content/case-studies/custom/hospitality.php' ?>
					<?php include 'includes/content/case-studies/custom/experiential.php' ?>
					<?php include 'includes/content/case-studies/custom/sporting.php' ?>
					<!-- MODULAR STUDIES -->
					<?php include 'includes/content/case-studies/modular/super.php' ?>
					<?php include 'includes/content/case-studies/modular/hospitality.php' ?>
					<?php include 'includes/content/case-studies/modular/experiential.php' ?>
					<?php include 'includes/content/case-studies/modular/sporting.php' ?>
				</div>
				<a class="view-case-study" href="#" data-title="modular">
					<?php include 'library/images/svg/view-modular-case-study.svg'; ?>
				</a>
				<a class="view-case-study" href="#" data-title="custom">
					<?php include 'library/images/svg/view-custom-case-study.svg'; ?>
				</a>
				<div class="no-mobile to-top-wrap">
					<div class="to-top">
						<svg width="26" height="17" viewBox="0 0 26 17" xmlns="http://www.w3.org/2000/svg">
							<g fill="none" fill-rule="evenodd">
								<text font-family="gridnikregular" font-size="12.9199" fill="#000" transform="translate(0 8)">
									<tspan x=".8313" y=".9988">TOP</tspan>
								</text>
								<path d="M.75 16.199H26" stroke="#000" stroke-width=".5" stroke-dasharray="3,4"/>
							</g>
						</svg>
					</div>
				</div>
			</div>
		</section>
	</div>
	<?php get_footer(); ?>
