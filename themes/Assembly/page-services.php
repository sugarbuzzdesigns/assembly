<?php get_header(); ?>
<?php include 'includes/page-data/service-page-data.php'; ?>
<?php if($deviceType === 'tablet' || $deviceType === 'mobile'){
	$devicePrefix = 'mobile';
	$imageDir = 'small';
} else {
	$devicePrefix = 'desktop';
	$imageDir = 'large';
} ?>
<div class="wrap">
	<header class="fixed dark">
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
					<div class="tile-img lazy-load" data-image-ratio="3:4">
						<div class="image-clip-bg"><div class="inner"></div></div>
						<div class="img-container">
							<img data-src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/<?php echo $imageDir; ?>/01-Landing-Visualization.jpg" alt="visualisation">
						</div>
					</div>
					<div class="tile-info">
						<span class="tile-title">Visualisation</span>
						<span class="tile-desc">See it to believe it.</span>
					</div>
				</div>
			</div>
			<div data-ratio="-.04" class="tile slideInUp permitting" data-service-id="permitting">
				<div class="tile-inner">
					<div class="tile-img lazy-load" data-image-ratio="600:433">
						<div class="image-clip-bg"><div class="inner"></div></div>
						<div class="img-container">
							<img data-src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/<?php echo $imageDir; ?>/01-Landing-Permitting.jpg" alt="permitting">
						</div>
					</div>
					<div class="tile-info">
						<span class="tile-title">Permitting</span>
						<span class="tile-desc">A remedy to red tape.</span>
					</div>
				</div>
			</div>
			<div class="tile slideInUp engineering" data-service-id="engineering">
				<div class="tile-inner">
					<div class="tile-img lazy-load" data-image-ratio="600:433">
						<div class="image-clip-bg"><div class="inner"></div></div>
						<div class="img-container">
							<img data-src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/<?php echo $imageDir; ?>/01-Landing-Engineering.jpg" alt="engineering">
						</div>
					</div>
					<div class="tile-info">
						<span class="tile-title">Engineering</span>
						<span class="tile-desc">Beauty in safety.</span>
					</div>
				</div>
			</div>
			<div data-ratio=".03" class="tile slideInUp interior-buildouts" data-service-id="interior-buildouts">
				<div class="mesh-bg dark wide"></div>
				<div class="tile-inner">
					<div class="tile-img lazy-load" data-image-ratio="3:4">
						<div class="image-clip-bg"><div class="inner"></div></div>
						<div class="img-container">
							<img data-src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/<?php echo $imageDir; ?>/01-Landing-Interior-Buildouts.jpg" alt="interior-buildouts">
						</div>
					</div>
					<div class="tile-info">
						<span class="tile-title">Interior Buildouts</span>
						<span class="tile-desc">Big and small and anything between.</span>
					</div>
				</div>
			</div>
			<div data-ratio=".04" class="tile slideInUp team-player" data-service-id="team-player">
				<div class="tile-inner">
					<div class="tile-img lazy-load" data-image-ratio="600:433">
						<div class="image-clip-bg"><div class="inner"></div></div>
						<div class="img-container">
							<img data-src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/<?php echo $imageDir; ?>/01-Landing-Team-Player.jpg" alt="team-player">
						</div>
					</div>
					<div class="tile-info">
						<span class="tile-title">Team Player</span>
						<span class="tile-desc">Putting things together — <em>together.</em></span>
					</div>
				</div>
			</div>
			<div data-ratio=".02" class="tile slideInUp imagine-experience" data-service-id="imagine-experience">
				<div class="mesh-bg dark wide"></div>
				<div class="tile-inner">
					<div class="tile-img lazy-load" data-image-ratio="3:4">
						<div class="image-clip-bg"><div class="inner"></div></div>
						<div class="img-container">
							<img data-src="<?php echo get_template_directory_uri(); ?>/library/images/pages/services/<?php echo $imageDir; ?>/01-Landing-Imagine-Experience.jpg" alt="imagine-experience">
						</div>
					</div>
					<div class="tile-info">
						<span class="tile-title">Imagine Experience</span>
						<span class="tile-desc">A walk down possibility lane.</span>
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
 	<a class="case-study-link" href="/case-studies" title="">
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
<?php get_footer(); ?>
