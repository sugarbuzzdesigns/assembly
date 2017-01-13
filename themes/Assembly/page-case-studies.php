<?php get_header(); ?>
<?php include 'includes/header-dark-interior.php'; ?>

<section class="landing">
	<div class="modular case-study-category">
		<div class="hover-content">
			<div class="white border square"></div>
		</div>
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
	<div class="custom case-study-category">
		<div class="hover-content">
			<div class="white border square"></div>
		</div>
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
</section>

<section class="content">
	<h2><span>custom</span><span>kits</span></h2>
	<div class="filter-wrap">
		<select class="select-filter" style="width: 100%">
			<option value="all">All</option>
			<option value="experiential">Experiential</option>
			<option value="hospitality">Hospitality</option>
			<option value="super">Super</option>
			<option value="sporting">Sporting</option>
		</select>
		<div class="toggle-filter">
			<a class="active" href="#" title="custom">C</a>
			<a href="#" title="modular">M</a>
		</div>
	</div>
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
</section>

<?php get_footer(); ?>
