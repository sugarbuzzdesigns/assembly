<?php get_header(); ?>
<?php include 'includes/page-data/front-page-data.php'; ?>
<div class="container">
	<section class="landing">
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
	</section>
	<section class="main-content">
		<div class="company-statement module">
			<?php include __DIR__ . '/library/images/svg/bg-shape-1.svg'; ?>
			<p>insert company statement sit amet, consectetur lala adipiscing, sed do eiusmod tempor incididunt ut idunt ut labore et dolore magna labore et dolore magna</p>
		</div>

		<div class="projects projects-1 module carousel-module">
			<div class="mesh-bg dark wide"></div>
			<div class="tile carousel-wrapper">
				<div class="carousel-inner">
					<div class="carousel" data-mobile-position="left" data-mobile-start="front">
					<?php
						$projectLimit = 3;
						$projectNum = 0;

						foreach ($projects as $project) {
							if (!in_array( $project['id'], $usedProjectIds ) && $project['img_type'] == 'tall-1') { $projectNum++; ?>
							<div class="slide">
								<div class="tile-inner">
									<div class="tile-img <?php echo $project['img_type']; ?>">
										<img src="<?php echo $project['featured_image']['src'];?>" alt="<?php echo $project['featured_image']['alt']; ?>">
									</div>
									<div class="tile-info">
										<span class="tile-title"><?php echo $project['title']; ?></span>
										<span class="tile-desc"><?php echo $project['title']; ?></span>
									</div>
								</div>
							</div>
							<?php
								$usedProjectIds[] = $project['id'];
								if($projectNum == $projectLimit){break;}
							}
						}
					?>
					</div>
				</div>
			</div>
		</div>

		<div class="projects projects-2 module carousel-module" data-image-ratio="1to1">
			<div class="tile carousel-wrapper">
				<div class="carousel-inner">
					<div class="carousel" data-mobile-position="right" data-mobile-start="end">
					<?php
						$projectLimit = 2;
						$projectNum = 0;

						foreach ($projects as $project) {
							if (!in_array( $project['id'], $usedProjectIds ) && $project['img_type'] == '1to1') { $projectNum++; ?>
							<div class="slide">
								<div class="tile-inner">
									<div class="tile-img <?php echo $project['img_type']; ?>">
										<img src="<?php echo $project['featured_image']['src'];?>" alt="<?php echo $project['featured_image']['alt']; ?>">
									</div>
									<div class="tile-info">
										<span class="tile-title"><?php echo $project['title']; ?></span>
										<span class="tile-desc"><?php echo $project['title']; ?></span>
									</div>
								</div>
							</div>
							<?php
								$usedProjectIds[] = $project['id'];
								if($projectNum == $projectLimit){break;}
							}
						}
					?>
					</div>
				</div>
			</div>
		</div>

		<div class="services module carousel-module">
			<div class="mesh-bg dark wide"></div>
			<div class="tile carousel-wrapper">
				<div class="carousel-inner">
					<div class="carousel" data-mobile-position="left" data-mobile-start="front">
					<?php
						$projectNum = 0;

						foreach ($projects as $project) {
							if (!in_array( $project['id'], $usedProjectIds ) && $project['img_type'] == 'tall-1' && $project['service_type'] != '') { $projectNum++; ?>
							<div class="slide">
								<div class="tile-inner">
									<div class="tile-img <?php echo $project['img_type']; ?>">
										<img src="<?php echo $project['featured_image']['src'];?>" alt="<?php echo $project['featured_image']['alt']; ?>">
									</div>
									<div class="tile-info">
										<span class="tile-title"><?php echo $project['service_type']; ?></span>
										<span class="tile-desc"><?php echo $project['title']; ?></span>
									</div>
								</div>
							</div>
							<?php
								$usedProjectIds[] = $project['id'];
								if($projectNum == $projectLimit){break;}
							}
						}
					?>
					</div>
				</div>
			</div>
		</div>

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
			<div class="years-experience-numbers">
				<span class="num">2</span>
				<span class="num">6</span>
			</div>
			<div class="years-experience-text">
				<span>Years Experience</span>
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
									<span class="tile-desc"></span>
								</div>
								<button type="button">about</button>
							</div>
						</div>
						<div class="slide employee" data-years-experience="09">
							<div class="tile-inner">
								<div class="tile-img">
									<img src="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/employee_placeholder_1.jpg" alt="Mark Whalburg">
								</div>
								<div class="tile-info">
									<span class="tile-title">GORDON MACHIELSEN</span>
									<span class="tile-desc"></span>
								</div>
								<button type="button">about</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="projects projects-4 module carousel-module" data-image-ratio="1to1">
			<div class="mesh-bg dark wide"></div>
			<div class="tile carousel-wrapper">
				<div class="carousel-inner">
					<div class="carousel" data-mobile-position="right" data-mobile-start="end">
					<?php
						$projectLimit = 2;
						$projectNum = 0;

						foreach ($projects as $project) {
							if (!in_array( $project['id'], $usedProjectIds ) && $project['img_type'] == '1to1') { $projectNum++; ?>
							<div class="slide">
								<div class="tile-inner">
									<div class="tile-img <?php echo $project['img_type']; ?>">
										<img src="<?php echo $project['featured_image']['src'];?>" alt="<?php echo $project['featured_image']['alt']; ?>">
									</div>
									<div class="tile-info">
										<span class="tile-title"><?php echo $project['title']; ?></span>
										<span class="tile-desc"><?php echo $project['title']; ?></span>
									</div>
								</div>
							</div>
							<?php
								$usedProjectIds[] = $project['id'];
								if($projectNum == $projectLimit){break;}
							}
						}
					?>
					</div>
				</div>
			</div>
		</div>

		<div class="projects projects-5 module carousel-module" data-image-ratio="1to1">
			<div class="tile carousel-wrapper">
				<div class="carousel-inner">
					<div class="carousel" data-mobile-position="left" data-mobile-start="front">
					<?php
						$projectNum = 0;

						foreach ($projects as $project) {
							if (!in_array( $project['id'], $usedProjectIds ) && $project['img_type'] == '1to1') { $projectNum++; ?>
							<div class="slide">
								<div class="tile-inner">
									<div class="tile-img <?php echo $project['img_type']; ?>">
										<img src="<?php echo $project['featured_image']['src'];?>" alt="<?php echo $project['featured_image']['alt']; ?>">
									</div>
									<div class="tile-info">
										<span class="tile-title"><?php echo $project['title']; ?></span>
										<span class="tile-desc"><?php echo $project['title']; ?></span>
									</div>
								</div>
							</div>
							<?php
								$usedProjectIds[] = $project['id'];
								if($projectNum == $projectLimit){break;}
							}
						}
					?>
					</div>
				</div>
			</div>
		</div>

	</section>
</div>

<?php get_footer(); ?>