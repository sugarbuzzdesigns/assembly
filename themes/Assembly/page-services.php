<?php get_header(); ?>
<?php include 'includes/page-data/service-page-data.php'; ?>
<?php include 'includes/header-dark-interior.php'; ?>
	<div class="mesh-bg dark wide"></div>
	<h1>services</h1>
	<section>
		<div class="filter-wrap">
			<select class="select-filter">
				<option value="all">All</option>
				<option value="visualisation">Visualisation</option>
				<option value="permitting">Permitting</option>
				<option value="team-player">Team Player</option>
				<option value="engineering">Engineering</option>
				<option value="interior-buildouts">Interior Buildouts</option>
				<option value="imagine-experience">Imagine Experience</option>

				<?php //foreach ($service_categories as $cat): ?>
					<!-- <option value="<?php echo $cat->slug; ?>"><?php echo $cat->name; ?></option> -->
				<?php //endforeach; ?>
			</select>
		</div>
	</section>
	<section class="content landing">
		<?php //foreach ($projects as $project) : ?>
<!-- 			<div class="tile <?php echo $project['img_type']; ?>">
				<div class="tile-inner">
					<div class="tile-img">
						<img src="<?php echo $project['featured_image']['src'];?>" alt="<?php echo $project['featured_image']['alt']; ?>">
					</div>
					<div class="tile-info">
						<span class="tile-title"><?php echo $project['title']; ?></span>
						<span class="tile-desc"><?php echo $project['title']; ?></span>
					</div>
				</div>
			</div> -->
		<?php //endforeach; ?>
		<div class="tile slideInUp visualisation">
			<div class="tile-inner">
				<div class="tile-img">
					<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/final/visualisation-mobile.jpg" alt="visualisation">
				</div>
				<div class="tile-info">
					<span class="tile-title">Visualisation</span>
					<span class="tile-desc">description</span>
				</div>
			</div>
		</div>
		<div class="tile slideInUp permitting">
			<div class="tile-inner">
				<div class="tile-img">
					<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/final/permitting-mobile.jpg" alt="permitting">
				</div>
				<div class="tile-info">
					<span class="tile-title">Visualisation</span>
					<span class="tile-desc">description</span>
				</div>
			</div>
		</div>
		<div class="tile slideInUp engineering">
			<div class="tile-inner">
				<div class="tile-img">
					<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/final/engineering-mobile.jpg" alt="engineering">
				</div>
				<div class="tile-info">
					<span class="tile-title">Engineering</span>
					<span class="tile-desc">description</span>
				</div>
			</div>
		</div>
		<div class="tile slideInUp interior-buildouts">
			<div class="mesh-bg dark wide"></div>
			<div class="tile-inner">
				<div class="tile-img">
					<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/final/interior-buildouts-mobile.jpg" alt="interior-buildouts">
				</div>
				<div class="tile-info">
					<span class="tile-title">Interior Buildouts</span>
					<span class="tile-desc">description</span>
				</div>
			</div>
		</div>
		<div class="tile slideInUp team-player">
			<div class="tile-inner">
				<div class="tile-img">
					<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/final/team-player-mobile.jpg" alt="team-player">
				</div>
				<div class="tile-info">
					<span class="tile-title">Team Player</span>
					<span class="tile-desc">description</span>
				</div>
			</div>
		</div>
		<div class="tile slideInUp imagine-experience">
			<div class="mesh-bg dark wide"></div>
			<div class="tile-inner">
				<div class="tile-img">
					<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/final/imagine-experience-mobile.jpg" alt="imagine-experience">
				</div>
				<div class="tile-info">
					<span class="tile-title">Imagine Experience</span>
					<span class="tile-desc">description</span>
				</div>
			</div>
		</div>
	</section>
	<section class="content dynamic">
		<?php include 'includes/content/services/visualisation.php'; ?>
		<?php include 'includes/content/services/permitting.php'; ?>
		<?php include 'includes/content/services/team-player.php'; ?>
		<?php include 'includes/content/services/engineering.php'; ?>
		<?php include 'includes/content/services/interior-buildouts.php'; ?>
		<?php include 'includes/content/services/imagine-experience.php'; ?>
	</section>
 	<a href="/case-studies" title="">
		<?php include 'library/images/svg/view-case-studies-button.svg'; ?>
	</a>
<?php get_footer(); ?>
