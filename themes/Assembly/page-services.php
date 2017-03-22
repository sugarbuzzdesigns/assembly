<?php get_header(); ?>
<?php include 'includes/page-data/service-page-data.php'; ?>
<?php if($deviceType === 'tablet' || $deviceType === 'mobile'){
	$devicePrefix = 'mobile';
	$imageDir = 'small';
} else {
	$devicePrefix = 'desktop';
	$imageDir = 'large';
} ?>
	<header class="scroll-overlay dark">
		<div class="inner-bg"></div>
		<h1 class="logo">
		    <a class="init" href="/">
		    	<img id="interior-logo" src="<?php echo get_template_directory_uri(); ?>/library/images/sprites/Assembly_Logo_TempSpaces-<?php echo $devicePrefix; ?>-hover.png" alt="">
		    </a>
		</h1>
		<?php include __DIR__ . '/includes/menu-btn.php'; ?>
	</header>
	<nav class="filter-menu no-mobile show">
		<div class="active" data-value="all"><a href="#">All</a></div>
		<div data-value="visualisation"><a href="#">Visualisation</a></div>
		<div data-value="permitting"><a href="#">Permitting</a></div>
		<div data-value="team-player"><a href="#">Team Player</a></div>
		<div data-value="engineering"><a href="#">Engineering</a></div>
		<div data-value="interior-buildouts"><a href="#">Interior Buildouts</a></div>
		<div data-value="imagine-experience"><a href="#">Imagine Experience</a></div>
	</nav>
	<div class="mesh-bg dark wide"></div>
	<h1 class="section-header">services</h1>
	<section class="mobile-filter">
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
	<section class="content show">
		<div class="all-services show" data-service="all">
			<div data-ratio=".05" class="tile slideInUp visualisation" data-service-id="visualisation">
				<div class="tile-inner">
					<div class="tile-img">
						<!-- <img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/final/visualisation-mobile.jpg" alt="visualisation"> -->
						<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/<?php echo $imageDir; ?>/01-Landing-Visualization-<?php echo $devicePrefix; ?>.jpg" alt="visualisation">
					</div>
					<div class="tile-info">
						<span class="tile-title">Visualisation</span>
						<span class="tile-desc">See it to believe it.</span>
					</div>
				</div>
			</div>
			<div data-ratio="-.04" class="tile slideInUp permitting" data-service-id="permitting">
				<div class="tile-inner">
					<div class="tile-img">
						<!-- <img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/final/permitting-mobile.jpg" alt="permitting"> -->
						<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/<?php echo $imageDir; ?>/01-Landing-Permitting-<?php echo $devicePrefix; ?>.jpg" alt="permitting">
					</div>
					<div class="tile-info">
						<span class="tile-title">Permitting</span>
						<span class="tile-desc">A remedy to red tape.</span>
					</div>
				</div>
			</div>
			<div class="tile slideInUp engineering" data-service-id="engineering">
				<div class="tile-inner">
					<div class="tile-img">
						<!-- <img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/final/engineering-mobile.jpg" alt="engineering"> -->
						<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/<?php echo $imageDir; ?>/01-Landing-Engineering-<?php echo $devicePrefix; ?>.jpg" alt="engineering">
					</div>
					<div class="tile-info">
						<span class="tile-title">Engineering</span>
						<span class="tile-desc">description</span>
					</div>
				</div>
			</div>
			<div data-ratio=".03" class="tile slideInUp interior-buildouts" data-service-id="interior-buildouts">
				<div class="mesh-bg dark wide"></div>
				<div class="tile-inner">
					<div class="tile-img">
						<!-- <img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/final/interior-buildouts-mobile.jpg" alt="interior-buildouts"> -->
						<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/<?php echo $imageDir; ?>/01-Landing-Interior-Buildouts-<?php echo $devicePrefix; ?>.jpg" alt="interior-buildouts">
					</div>
					<div class="tile-info">
						<span class="tile-title">Interior Buildouts</span>
						<span class="tile-desc">description</span>
					</div>
				</div>
			</div>
			<div data-ratio=".04" class="tile slideInUp team-player" data-service-id="team-player">
				<div class="tile-inner">
					<div class="tile-img">
						<!-- <img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/final/team-player-mobile.jpg" alt="team-player"> -->
						<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/<?php echo $imageDir; ?>/01-Landing-Team-Player-<?php echo $devicePrefix; ?>.jpg" alt="team-player">
					</div>
					<div class="tile-info">
						<span class="tile-title">Team Player</span>
						<span class="tile-desc">description</span>
					</div>
				</div>
			</div>
			<div data-ratio=".02" class="tile slideInUp imagine-experience" data-service-id="imagine-experience">
				<div class="mesh-bg dark wide"></div>
				<div class="tile-inner">
					<div class="tile-img">
						<!-- <img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/final/imagine-experience-mobile.jpg" alt="imagine-experience"> -->
						<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/<?php echo $imageDir; ?>/01-Landing-Imagine-Experience-<?php echo $devicePrefix; ?>.jpg" alt="imagine-experience">
					</div>
					<div class="tile-info">
						<span class="tile-title">Imagine Experience</span>
						<span class="tile-desc">description</span>
					</div>
				</div>
			</div>
		</div>
		<?php include 'includes/content/services/visualisation.php'; ?>
		<?php include 'includes/content/services/permitting.php'; ?>
		<?php include 'includes/content/services/team-player.php'; ?>
		<?php include 'includes/content/services/engineering.php'; ?>
		<?php include 'includes/content/services/interior-buildouts.php'; ?>
		<?php include 'includes/content/services/imagine-experience.php'; ?>
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
					<text font-family="gridnikregular" font-size="12.9199" fill="#000" transform="translate(0 8)">
						<tspan x=".8313" y=".9988">TOP</tspan>
					</text>
					<path d="M.75 16.199H26" stroke="#000" stroke-width=".5" stroke-dasharray="3,4"/>
				</g>
			</svg>
		</div>
	</div>
<style>
	[data-ratio] {
		transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
	}
</style>
<?php get_footer(); ?>
