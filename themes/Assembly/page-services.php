<?php get_header(); ?>
<?php include 'includes/page-data/service-page-data.php'; ?>
<?php include 'includes/header-dark-interior.php'; ?>
	<nav class="filter-menu no-mobile">
		<div class="active" data-value="all"><a href="#">All</a></div>
		<div data-value="visualisation"><a href="#">Visualisation</a></div>
		<div data-value="permitting"><a href="#">Permitting</a></div>
		<div data-value="team-player"><a href="#">Team Player</a></div>
		<div data-value="engineering"><a href="#">Engineering</a></div>
		<div data-value="interior-buildouts"><a href="#">Interior Buildouts</a></div>
		<div data-value="imagine-experience"><a href="#">Imagine Experience</a></div>
	</nav>
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
		<div class="tile slideInUp visualisation">
			<div class="tile-inner">
				<div class="tile-img">
					<!-- <img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/final/visualisation-mobile.jpg" alt="visualisation"> -->
					<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/01-Landing-Visualization.jpg" alt="visualisation">
				</div>
				<div class="tile-info">
					<span class="tile-title">Visualisation</span>
					<span class="tile-desc">See it to believe it.</span>
				</div>
			</div>
		</div>
		<div class="tile slideInUp permitting">
			<div class="tile-inner">
				<div class="tile-img">
					<!-- <img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/final/permitting-mobile.jpg" alt="permitting"> -->
					<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/01-Landing-Permitting.jpg" alt="permitting">
				</div>
				<div class="tile-info">
					<span class="tile-title">Permitting</span>
					<span class="tile-desc">A remedy to red tape.</span>
				</div>
			</div>
		</div>
		<div class="tile slideInUp engineering">
			<div class="tile-inner">
				<div class="tile-img">
					<!-- <img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/final/engineering-mobile.jpg" alt="engineering"> -->
					<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/01-Landing-Engineering.jpg" alt="engineering">
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
					<!-- <img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/final/interior-buildouts-mobile.jpg" alt="interior-buildouts"> -->
					<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/01-Landing-Interior-Buildouts.jpg" alt="interior-buildouts">
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
					<!-- <img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/final/team-player-mobile.jpg" alt="team-player"> -->
					<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/01-Landing-Team-Player.jpg" alt="team-player">
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
					<!-- <img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/final/imagine-experience-mobile.jpg" alt="imagine-experience"> -->
					<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/01-Landing-Imagine-Experience.jpg" alt="imagine-experience">
				</div>
				<div class="tile-info">
					<span class="tile-title">Imagine Experience</span>
					<span class="tile-desc">description</span>
				</div>
			</div>
		</div>
	</section>
	<script>
		function getParameterByName(name, url) {
		    if (!url) {
		      url = window.location.href;
		    }
		    name = name.replace(/[\[\]]/g, "\\$&");
		    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		        results = regex.exec(url);
		    if (!results) return null;
		    if (!results[2]) return '';
		    return decodeURIComponent(results[2].replace(/\+/g, " "));
		}
		(function($){
			var service = getParameterByName('service');

			$(function(){
				if(service){
					$('.content.landing').hide();
					$('[data-service="'+ service +'"]').show().siblings().hide();

					$('.filter-menu .active').removeClass('active');
					$('.filter-menu [data-value="'+ service +'"]').addClass('active');
				}
			});
		})(jQuery)
	</script>
	<section class="content dynamic">
		<?php include 'includes/content/services/visualisation.php'; ?>
		<?php include 'includes/content/services/permitting.php'; ?>
		<?php include 'includes/content/services/team-player.php'; ?>
		<?php include 'includes/content/services/engineering.php'; ?>
		<?php include 'includes/content/services/interior-buildouts.php'; ?>
		<?php include 'includes/content/services/imagine-experience.php'; ?>
	</section>
 	<a href="/case-studies" title="">
 		<?php if(is_desktop()) { ?>
 			<?php include 'library/images/svg/view-case-studies-button-desktop.svg'; ?>
 		<?php } else { ?>
			<?php include 'library/images/svg/view-case-studies-button.svg'; ?>
		<?php } ?>
	</a>
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
<?php get_footer(); ?>
