<?php get_header(); ?>
<?php if($deviceType === 'tablet' || $deviceType === 'mobile'){
	$devicePrefix = 'mobile';
} else {
	$devicePrefix = 'desktop';
} ?>
	<?php include 'includes/page-data/front-page-data.php'; ?>
	<?php if(is_user_logged_in() || $domain = "byassembly.loc" || $domain = "staging.byassembly.com") : ?>
	<div class="container">
		<div class="header-mask landing-logo">
			<header class="light">
				<h1 class="logo">
				    <a class="init" href="/">
				    	<img id="landing-logo" src="<?php echo get_template_directory_uri(); ?>/library/images/sprites/Assembly_Logo_TempSpaces-<?php echo $devicePrefix; ?>-hover-white.png" alt="">
				    </a>
				</h1>
				<?php include __DIR__ . '/includes/menu-btn.php'; ?>
			</header>
		</div>
		<section class="landing">
			<div class="layer" data-depth="0.00"></div>
			<div class="background layer" data-depth="0.10">
				<div class="landing-bg"></div>
			</div>
			<div class="mesh layer" data-depth="0.25">
				<div class="mesh-bg"></div>
			</div>
			<div class="heading layer" data-depth="0.35">
				<div class="h2-scale-wrap">
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
				</div>
			</div>

			<div class="landing-arrow">
				<div class="arrow">
					<span></span>
					<svg width="14px" height="14px" viewBox="200 688 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					    <path d="M201.705008,688.545637 L200.552024,689.261061 L200.563203,695.679123 L200.563203,700.832416 L201.714589,701.546243 L213.428071,695.760566 L213.428071,694.329717 L201.705008,688.545637 Z M202.142567,695.679123 L202.148954,690.54659 L211.269021,695.045142 L202.155342,699.546887 L202.142567,695.679123 Z" id="Page-1" stroke="none" fill="#FFFFFF" fill-rule="evenodd" transform="translate(206.986854, 695.045940) rotate(-270.000000) translate(-206.986854, -695.045940) "></path>
					</svg>
				</div>
			</div>
		</section>
		<section class="main-content" data-to-top-anchor>
			<header class="scroll-overlay dark">
				<div class="inner-bg"></div>
				<h1 class="logo">
				    <a class="init" href="/">
				    	<img id="interior-logo" src="<?php echo get_template_directory_uri(); ?>/library/images/sprites/Assembly_Logo_TempSpaces-<?php echo $devicePrefix; ?>-hover.png" alt="">
				    </a>
				</h1>
				<?php include __DIR__ . '/includes/menu-btn.php'; ?>
			</header>
			<div class="group group-0">
				<div class="company-statement module">
					<?php include __DIR__ . '/library/images/svg/bg-shape-1.svg'; ?>
					<p>assembly creates temporary spaces that leave lasting impressions and inspire designers to rethink the possibilities of short-term space design.</p>
				</div>
			</div>

			<div class="group group-1">
				<div class="projects projects-1 module carousel-module" data-ratio=".05">
					<div class="mesh-bg dark wide"></div>
					<div class="tile carousel-wrapper">
						<div class="carousel-inner">
						<style>
						.tile .image-clip-bg {
						    height: 100%;
						    width: 100%;
						    position: absolute;
						    top: 0;
						    left: 0;
						    padding: 20px;
						    transition: padding .3s;
						}

						.tile .image-clip-bg .inner {
							height: 100%;
							width: 100%;
							background: #fff;
						}

						.tile .tile-image {
							position: relative;
						}

						.tile .tile-image img {
							transition: opacity .3s, clip-path .3s;
							clip-path: inset(0);
							width: 100%;
						}

						.tile .tile-img:hover img {
						    clip-path: inset(20px);
						    opacity: .4;
						}
						</style>
							<div class="carousel" data-mobile-position="left" data-mobile-start="front">
								<?php foreach ($projects1 as $project) : ?>
								<div class="slide">
									<div class="tile-inner">
										<div class="tile-img 1to1">
											<div class="image-clip-bg">
												<div class="inner"></div>
											</div>
											<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/home/<?php echo $project['image']; ?>" alt="">
										</div>
										<div class="tile-info">
											<span class="tile-title">Modular</span>
											<span class="tile-desc">Lorem ipsume dolor sat</span>
										</div>
									</div>
								</div>
								<?php endforeach; ?>
							</div>
							<?php include __DIR__ . '/library/images/svg/nav-arrow-right.svg'; ?>
						</div>
					</div>
				</div>

				<div class="projects projects-2 module carousel-module" data-image-ratio="1to1" data-ratio=".12">
					<div class="tile carousel-wrapper">
						<div class="carousel-inner">
							<div class="carousel" data-mobile-position="right" data-mobile-start="end">
								<?php foreach ($projects2 as $project) : ?>
								<div class="slide">
									<div class="tile-inner">
										<div class="tile-img 1to1">
											<div class="image-clip-bg">
												<div class="inner"></div>
											</div>
											<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/home/<?php echo $project['image']; ?>" alt="">
										</div>
										<div class="tile-info">
											<span class="tile-title">Custom</span>
											<span class="tile-desc">Lorem ipsume dolor sat</span>
										</div>
									</div>
								</div>
								<?php endforeach; ?>
							</div>
							<?php include __DIR__ . '/library/images/svg/nav-arrow-right.svg'; ?>
						</div>
					</div>
				</div>
			</div>

			<div class="group group-2">
				<div class="services module carousel-module" data-ratio="-.08">
					<div class="tile carousel-wrapper">
						<div class="carousel-inner">
							<div class="carousel" data-mobile-position="left" data-mobile-start="front">
								<?php foreach ($services1 as $service) : ?>
								<div class="slide">
									<div class="tile-inner">
										<div class="tile-img 1to1">
											<div class="image-clip-bg">
												<div class="inner"></div>
											</div>
											<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/home/<?php echo $service['image']; ?>" alt="">
										</div>
										<div class="tile-info">
											<span class="tile-title">Services</span>
											<span class="tile-desc">Lorem ipsume</span>
										</div>
									</div>
								</div>
								<?php endforeach; ?>
							</div>
							<?php include __DIR__ . '/library/images/svg/nav-arrow-right.svg'; ?>
						</div>
					</div>
				</div>

				<div class="approach module carousel-module" data-image-ratio="1to1" data-ratio=".05">
					<div class="tile carousel-wrapper">
						<div class="carousel-inner">
							<div class="carousel" data-mobile-position="right" data-mobile-start="end">
								<?php foreach ($approach1 as $approach) : ?>
								<div class="slide">
									<div class="tile-inner">
										<div class="tile-img 1to1">
											<div class="image-clip-bg">
												<div class="inner"></div>
											</div>
											<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/home/<?php echo $approach['image']; ?>" alt="">
										</div>
										<div class="tile-info">
											<span class="tile-title">Approach</span>
											<span class="tile-desc">Lorem ipsume dolor sat</span>
										</div>
									</div>
								</div>
								<?php endforeach; ?>
							</div>
							<?php include __DIR__ . '/library/images/svg/nav-arrow-right.svg'; ?>
						</div>
					</div>
				</div>
			</div>

			<div class="group group-3">
				<div class="video video-1 module" data-video-id="home-video-reel" data-ratio=".15">
					<?php include __DIR__ . '/library/images/svg/play-btn-square.svg'; ?>
					<div class="image-clip-bg">
						<div class="inner"></div>
					</div>
					<img class="video-placeholder" src="<?php echo get_template_directory_uri(); ?>/library/images/pages/home/05-VideoThumbnail.jpg" alt="">
				</div>

				<div class="employees employees-1 module">
					<div class="stripes-bg no-mobile">
						<img src="<?php echo get_template_directory_uri(); ?>/library/images/backgrounds/diagonal-lines-bg-lrg.png" alt="">
					</div>
					<script>

					</script>
					<div class="employee-carousel-wrapper">
						<div class="years-experience">
							<div class="years-experience-numbers">
								<span class="tens">2</span>
								<span class="ones">6</span>
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
												<div class="image-clip-bg">
													<div class="inner"></div>
												</div>
												<img src="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/employee_placeholder_1.jpg" alt="Mark Whalburg">
											</div>
											<div class="tile-info">
												<span class="tile-title">GORDON MACHIELSEN</span>
											</div>
										</div>
									</div>
									<div class="slide employee" data-years-experience="09">
										<div class="tile-inner">
											<div class="tile-img">
												<div class="image-clip-bg">
													<div class="inner"></div>
												</div>
												<img src="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/employee_placeholder_1.jpg" alt="Mark Whalburg">
											</div>
											<div class="tile-info">
												<span class="tile-title">GORDON MACHIELSEN</span>
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
			</div>

<!-- 			<div class="group group-4">
				<div class="projects projects-4 module carousel-module" data-image-ratio="1to1" data-ratio=".08">
					<div class="mesh-bg dark wide"></div>
					<div class="tile carousel-wrapper">
						<div class="carousel-inner">
							<div class="carousel" data-mobile-position="right" data-mobile-start="end">
								<?php foreach ($projects3 as $project) : ?>
								<div class="slide">
									<div class="tile-inner">
										<div class="tile-img 1to1">
											<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/home/<?php echo $project['image']; ?>" alt="">
										</div>
										<div class="tile-info">
											<span class="tile-title">Modular</span>
											<span class="tile-desc">Lorem ipsume dolor sat</span>
										</div>
									</div>
								</div>
								<?php endforeach; ?>
							</div>
							<?php include __DIR__ . '/library/images/svg/nav-arrow-right.svg'; ?>
						</div>
					</div>
				</div>

				<div class="projects projects-5 module carousel-module" data-image-ratio="1to1" data-ratio="-.07">
					<div class="tile carousel-wrapper">
						<div class="carousel-inner">
							<div class="carousel" data-mobile-position="left" data-mobile-start="front">
								<?php foreach ($projects4 as $project) : ?>
								<div class="slide">
									<div class="tile-inner">
										<div class="tile-img 1to1">
											<img src="<?php echo get_template_directory_uri(); ?>/library/images/pages/home/<?php echo $project['image']; ?>" alt="">
										</div>
										<div class="tile-info">
											<span class="tile-title">Custom</span>
											<span class="tile-desc">Lorem ipsume dolor sat</span>
										</div>
									</div>
								</div>
								<?php endforeach; ?>
							</div>
							<?php include __DIR__ . '/library/images/svg/nav-arrow-right.svg'; ?>
						</div>
					</div>
				</div>
			</div> -->
			<div>
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
		</section>
	</div>
	<?php else : ?>
		<style>
			.footer {
				display: none;
			}

			body {
				background: url(<?php echo get_template_directory_uri(); ?>/library/images/backgrounds/pre-release-bg.jpg) no-repeat;
				background-size: cover;
				background-position: 50% 50%;
				height: 100vh;
				width: 100vw;
			}

			.pre-release {
    			padding: 40px 60px 60px 60px;
			}

			img {
				max-height: 88px;
				position: absolute;
				top: 50%;
				transform: translate(0, -50%);
			}

			.contact {
				position: absolute;
				bottom: 35px;
			}

			.contact a {
				color: #fff;
			}

			.contact li {
				display: inline-block;
			}

			a {
				font-size: 13px;
				text-decoration: none;
				letter-spacing: 1px;
				-webkit-transition: opacity 100ms ease-in-out;
				-moz-transition: opacity 100ms ease-in-out;
				-ms-transition: opacity 100ms ease-in-out;
				-o-transition: opacity 100ms ease-in-out;
				transition: opacity 100ms ease-in-out;
			}

			a:hover {
				opacity: 0.6;
				text-decoration: none;
			}

			a[href="mailto:hello@byassembly.com"]{
				font-family: 'roboto_monoregular';
				margin-right: 30px;
			}

			a[href="tel:+16782877493"]{
				font-family: 'gridnikregular';
			}
		</style>
	<div class="pre-release">
		<img src="<?php echo get_template_directory_uri(); ?>/library/images/pre-release-logo.png" alt="">
		<ul class="contact">
			<li>
				<a href="mailto:hello@byassembly.com" target="_blank">hello@byassembly.com</a>
			</li>
			<li>
				<a href="tel:+16782877493" target="_blank"> 678.287.7493 </a>
			</li>
		</ul>
	</div>
	<?php endif;  ?>
	<div id="home-video-overlay" class="video-overlay">
		<video id="home-video-reel" class="video-js vjs-fluid vjs-big-play-centered" controls preload="auto">
			<source src="<?php echo get_template_directory_uri(); ?>/library/video/Assembly_Edit-FIn.mp4" type='video/mp4'>
			<p class="vjs-no-js">
				To view this video please enable JavaScript, and consider upgrading to a web browser that
				<a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
			</p>
		</video>
	</div>
<?php get_footer(); ?>