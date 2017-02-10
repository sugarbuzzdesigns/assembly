<?php get_header(); ?>
<?php include 'includes/page-data/front-page-data.php'; ?>
<div class="container">
	<section class="landing">
		<div class="landing-inner">
			<?php include 'includes/header-light-home.php'; ?>
			<h2>
				<div>
					<span>here</span> <span>today. </span>
				</div>
				<div>
					<span>remembered</span>
				</div>
				<div>
					<span>tomorrow.</span>
				</div>
			</h2>
			<div class="mesh-bg"></div>

	 		<?php include __DIR__ . '/library/images/svg/down-arrow-mobile.svg'; ?>
	 	</div>
	</section>
	<section class="main-content">
		<div class="group group-0">
			<div class="company-statement module">
				<?php include __DIR__ . '/library/images/svg/bg-shape-1.svg'; ?>
				<p>assembly creates temporary spaces that leave lasting impressions and inspire designers to rethink the possibilities of short-term space design.</p>
			</div>
		</div>

		<div class="group group-1">
			<div class="projects projects-1 module carousel-module">
				<div class="mesh-bg dark wide"></div>
				<div class="tile carousel-wrapper">
					<div class="carousel-inner">
						<div class="carousel" data-mobile-position="left" data-mobile-start="front">
							<div class="slide">
								<div class="tile-inner">
									<div class="tile-img 1to1">
										<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/home/projects-1-m-1.jpg" alt="">
									</div>
									<div class="tile-info">
										<span class="tile-title">Modular</span>
										<span class="tile-desc">Lorem ipsume dolor sat</span>
									</div>
								</div>
							</div>
							<div class="slide">
								<div class="tile-inner">
									<div class="tile-img 1to1">
										<img src="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/about-modular-case-studies-1.jpg" alt="">
									</div>
									<div class="tile-info">
										<span class="tile-title">Modular</span>
										<span class="tile-desc">Lorem ipsume dolor sat</span>
									</div>
								</div>
							</div>
						</div>
						<?php include __DIR__ . '/library/images/svg/nav-arrow-right.svg'; ?>
					</div>
				</div>
			</div>

			<div class="projects projects-2 module carousel-module" data-image-ratio="1to1">
				<div class="tile carousel-wrapper">
					<div class="carousel-inner">
						<div class="carousel" data-mobile-position="right" data-mobile-start="end">
							<div class="slide">
								<div class="tile-inner">
									<div class="tile-img 1to1">
										<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/home/projects-2-c-1.jpg" alt="">
									</div>
									<div class="tile-info">
										<span class="tile-title">Custom</span>
										<span class="tile-desc">Lorem ipsume dolor sat</span>
									</div>
								</div>
							</div>
							<div class="slide">
								<div class="tile-inner">
									<div class="tile-img 1to1">
										<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/case-studies/c-experiential-content-5.jpg" alt="">
									</div>
									<div class="tile-info">
										<span class="tile-title">Custom</span>
										<span class="tile-desc">Lorem ipsume dolor sat</span>
									</div>
								</div>
							</div>
						</div>
						<?php include __DIR__ . '/library/images/svg/nav-arrow-right.svg'; ?>
					</div>
				</div>
			</div>
		</div>

		<div class="group group-2">
			<div class="services module carousel-module">
				<div class="tile carousel-wrapper">
					<div class="carousel-inner">
						<div class="carousel" data-mobile-position="left" data-mobile-start="front">
							<div class="slide">
								<div class="tile-inner">
									<div class="tile-img 1to1">
										<img src="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/project_placeholder_5.jpg" alt="">
									</div>
									<div class="tile-info">
										<span class="tile-title">Custom</span>
										<span class="tile-desc">Lorem ipsume</span>
									</div>
								</div>
							</div>
						</div>
						<?php include __DIR__ . '/library/images/svg/nav-arrow-right.svg'; ?>
					</div>
				</div>
			</div>

			<div class="approach module carousel-module" data-image-ratio="1to1">
				<div class="tile carousel-wrapper">
					<div class="carousel-inner">
						<div class="carousel" data-mobile-position="right" data-mobile-start="end">
							<div class="slide">
								<div class="tile-inner">
									<div class="tile-img 1to1">
										<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/home/approach-1-1.jpg" alt="">
									</div>
									<div class="tile-info">
										<span class="tile-title">approach</span>
										<span class="tile-desc">Lorem ipsume</span>
									</div>
								</div>
							</div>
							<div class="slide">
								<div class="tile-inner">
									<div class="tile-img 1to1">
										<img src="/wp-content/uploads/2016/07/project_placeholder_4.jpg" alt="">
									</div>
									<div class="tile-info">
										<span class="tile-title">approach</span>
										<span class="tile-desc">Lorem ipsume</span>
									</div>
								</div>
							</div>
						</div>
						<?php include __DIR__ . '/library/images/svg/nav-arrow-right.svg'; ?>
					</div>
				</div>
			</div>
		</div>

		<div class="group group-3">
			<div class="video video-1 module">
				<video id="video_1" class="video-js vjs-fluid vjs-big-play-centered" controls preload="auto"
				poster="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/video-placeholder.jpg">
					<source src="<?php echo get_template_directory_uri(); ?>/library/ignore/video-SD.mp4" type='video/mp4'>
					<p class="vjs-no-js">
						To view this video please enable JavaScript, and consider upgrading to a web browser that
						<a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
					</p>
				</video>
			</div>

			<div class="employees employees-1 module">
				<div class="stripes-bg no-mobile">
					<img src="<?php echo get_template_directory_uri(); ?>/library/images/backgrounds/diagonal-lines-bg-lrg.png" alt="">
				</div>
				<div class="years-experience">
					<div class="years-experience-numbers">
						<span class="num">2</span>
						<span class="num">6</span>
					</div>
					<div class="years-experience-text">
						<span>Years Experience</span>
					</div>
				</div>
				<div class="tile carousel-wrapper">
					<div class="carousel-inner">
						<div class="carousel employee-carousel" data-mobile-position="left" data-mobile-start="front">
							<div class="slide employee" data-years-experience="26">
								<div class="tile-inner">
									<div class="tile-img">
										<img src="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/employee_placeholder_1.jpg" alt="Mark Whalburg">
									</div>
									<div class="tile-info">
										<span class="tile-title">GORDON MACHIELSEN</span>
										<span class="tile-desc">Lorem ipsume</span>
									</div>
								</div>
							</div>
							<div class="slide employee" data-years-experience="09">
								<div class="tile-inner">
									<div class="tile-img">
										<img src="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/employee_placeholder_1.jpg" alt="Mark Whalburg">
									</div>
									<div class="tile-info">
										<span class="tile-title">GORDON MACHIELSEN</span>
										<span class="tile-desc">Lorem ipsume</span>
									</div>
									<!-- <button type="button">about</button> -->
								</div>
							</div>
						</div>
						<?php include __DIR__ . '/library/images/svg/nav-arrow-right.svg'; ?>
					</div>
				</div>
			</div>
		</div>

		<div class="group group-4">
			<div class="projects projects-4 module carousel-module" data-image-ratio="1to1">
				<div class="mesh-bg dark wide"></div>
				<div class="tile carousel-wrapper">
					<div class="carousel-inner">
						<div class="carousel" data-mobile-position="right" data-mobile-start="end">
							<div class="slide">
								<div class="tile-inner">
									<div class="tile-img 1to1">
										<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/home/projects-3-c-1.jpg" alt="">
									</div>
									<div class="tile-info">
										<span class="tile-title">approach</span>
										<span class="tile-desc">Lorem ipsume</span>
									</div>
								</div>
							</div>
						</div>
						<?php include __DIR__ . '/library/images/svg/nav-arrow-right.svg'; ?>
					</div>
				</div>
			</div>

			<div class="projects projects-5 module carousel-module" data-image-ratio="1to1">
				<div class="tile carousel-wrapper">
					<div class="carousel-inner">
						<div class="carousel" data-mobile-position="left" data-mobile-start="front">
							<div class="slide">
								<div class="tile-inner">
									<div class="tile-img 1to1">
										<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/home/projects-4-m-1.jpg" alt="">
									</div>
									<div class="tile-info">
										<span class="tile-title">approach</span>
										<span class="tile-desc">Lorem ipsume</span>
									</div>
								</div>
							</div>
							<div class="slide">
								<div class="tile-inner">
									<div class="tile-img 1to1">
										<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/home/projects-3-c-1.jpg" alt="">
									</div>
									<div class="tile-info">
										<span class="tile-title">approach</span>
										<span class="tile-desc">Lorem ipsume</span>
									</div>
								</div>
							</div>
						</div>
						<?php include __DIR__ . '/library/images/svg/nav-arrow-right.svg'; ?>
					</div>
				</div>
			</div>
		</div>
		<div>
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
</div>

<?php get_footer(); ?>