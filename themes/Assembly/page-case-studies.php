<?php get_header(); ?>

<section class="landing">
	<div class="landing-inner">
		<div class="modular case-study-category hover">
			<div class="hover-content">
				<header class="light section-header">
				    <h2 class="logo">
				        <a href="/">
				            <!-- logo SVG file -->
				            <?php include __DIR__ . '/library/images/svg/full-logo.svg'; ?>
				        </a>
				    </h2>
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
				<div class="white border square"></div>
			</div>
			<div class="default-content">
				<div class="inner">
					<header class="dark section-header interior">
					    <h2 class="logo">
					        <a href="/">
					            <!-- logo SVG file -->
					            <?php include __DIR__ . '/library/images/svg/full-logo.svg'; ?>
					        </a>
					    </h2>
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
					<div class="white solid square"></div>
				</div>
			</div>
		</div>
		<div class="custom case-study-category hover">
			<div class="hover-content">
				<header class="light section-header">
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
				<div class="white border square"></div>
			</div>
			<div class="default-content">
				<div class="inner">
					<header class="dark section-header interior">
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
					<div class="white solid square"></div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="content">
	<header class="dark section-header interior">
	    <h1 class="logo">
	        <a href="/">
	            <!-- logo SVG file -->
	            <?php include __DIR__ . '/library/images/svg/full-logo.svg'; ?>
	        </a>
	    </h1>
		<?php include __DIR__ . '/includes/menu-btn.php'; ?>
	</header>
	<div class="content-header">
		<h2>
			<span>custom</span>
			<span>kits</span>
			<span>spaces you want to be in</span>
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
	</header>
	<div class="svg-container no-mobile desktop">
		<?php include __DIR__ . '/library/images/svg/case-studies-svg.svg'; ?>
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
	<a href="#" title="">
		<?php include 'library/images/svg/view-modular-case-study.svg'; ?>
	</a>
<!-- 	<a href="#" title="">
		<?php include 'library/images/svg/view-custom-case-study.svg'; ?>
	</a> -->
	<div class="no-mobile to-top-wrap">
		<div class="to-top">
			<svg width="26" height="17" viewBox="0 0 26 17" xmlns="http://www.w3.org/2000/svg">
				<g fill="none" fill-rule="evenodd">
					<text font-family="Gridnik" font-size="12.9199" fill="#000" transform="translate(0 8)">
						<tspan x=".8313" y=".9988">TOP</tspan>
					</text>
					<path d="M.75 16.199H26" stroke="#000" stroke-width=".5" stroke-dasharray="3,4"/>
				</g>
			</svg>
		</div>
	</div>
</section>

<?php get_footer(); ?>
