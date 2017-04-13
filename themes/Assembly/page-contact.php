<?php get_header(); ?>
<?php include 'includes/page-data/contact-page-data.php'; ?>
<?php if($deviceType === 'tablet' || $deviceType === 'mobile'){
	$devicePrefix = 'mobile';
} else {
	$devicePrefix = 'desktop';
} ?>
<section class="contact-landing">
	<div class="inner">
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
		<form action="" method="post" accept-charset="utf-8">
			<div class="form-viewport">
				<div class="inputs">
					<label class="active">
						<p>What type of structure are you looking for?</p>
						<p class="pager"><span class="current">1</span>/<span class="total">6</span></p>
						<input type="text" name="" value="" placeholder="start typing">
					</label>
					<label>
						<p>Do you have a vision you’d like us to build on? </p>
						<p class="pager"><span class="current">1</span>/<span class="total">6</span></p>
						<input type="text" name="" value="" placeholder="start typing">
					</label>
					<label>
						<p>What impression should your space leave? </p>
						<p class="pager"><span class="current">1</span>/<span class="total">6</span></p>
						<input type="text" name="" value="" placeholder="start typing">
					</label>
					<label>
						<p>Please provide your email address and we’ll be in touch. </p>
						<p class="pager"><span class="current">1</span>/<span class="total">6</span></p>
						<input type="text" name="" value="" placeholder="start typing">
					</label>
				</div>
				<div class="error-message">Please Fill out the field.</div>
				<button class="dark" type="button">
					<div class="resting">next</div>
					<div class="hover">
						<span class="inner">next</span>
					</div>
				</button>
			</div>
		</form>
	</div>
</section>
<section class="photo-overlay-wrap">
	<div class="add-photo-overlay">
		<div class="mesh-bg dark"></div>
		<header class="dark">
			<div class="inner-bg"></div>
			<h1 class="logo">
			    <a class="init" href="/">
			    	<img id="interior-logo" src="<?php echo get_template_directory_uri(); ?>/library/images/sprites/Assembly_Logo_TempSpaces-<?php echo $devicePrefix; ?>-hover.png" alt="">
			    </a>
			</h1>
			<div class="close-btn">
				<svg class="close" viewBox="1345 136 31 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(1345.000000, 137.000000)">
				        <rect fill="#000000" transform="translate(15.379572, 15.379572) rotate(-495.000000) translate(-15.379572, -15.379572) " x="-5.62042751" y="14.6295725" width="42" height="1.5"></rect>
				        <rect fill="#000000" transform="translate(15.379572, 15.379572) rotate(-225.000000) translate(-15.379572, -15.379572) " x="-5.62042751" y="14.6295725" width="42" height="1.5"></rect>
				    </g>
				</svg>
			</div>
		</header>
		<p>What are you interested in?</p>
			<div class="add-photos-carousel-wrap">
				<div class="owl-carousel add-photos-carousel">
					<?php $count = 0; foreach ($contactPhotos as $photo) : $count++; ?>
					<div class="image" data-photo-id="contact-photo-<?php echo $count; ?>">
						<img src="<?php echo $img_dir . $photo['src']; ?>" alt="">
						<div class="hover-overlay">
							<div class="plus-box" viewBox="71 106 46 46" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<div class="close-x">
									<span></span>
									<span></span>
								</div>
							</div>
						</div>
					</div>
					<?php endforeach; ?>
				</div>
				<nav>
					<svg class="nav-arrow arrow-left" width="43px" height="14px" viewBox="44 461 43 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					    <path d="M75.2506443,461 L74.0976609,461.715425 L74.0976609,466.536556 L45,466.536556 L45,468.133486 L74.0912731,468.133486 L74.1088394,473.286779 L75.2602259,474.000607 L86.9737072,468.21493 L86.9737072,466.78408 L75.2506443,461 Z M75.6882031,468.133486 L75.6945908,463.000953 L84.8146579,467.499505 L75.7009785,472.001251 L75.6882031,468.133486 Z" id="ARROW-LEFT" stroke="none" fill="#090909" fill-rule="evenodd" transform="translate(65.986854, 467.500303) scale(-1, 1) translate(-65.986854, -467.500303) "></path>
					</svg>
					<svg class="nav-arrow arrow-right" width="42px" height="14px" viewBox="1352 461 42 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					    <path d="M1382.25064,461 L1381.09766,461.715425 L1381.09766,466.536556 L1352,466.536556 L1352,468.133486 L1381.09127,468.133486 L1381.10884,473.286779 L1382.26023,474.000607 L1393.97371,468.21493 L1393.97371,466.78408 L1382.25064,461 Z M1382.6882,468.133486 L1382.69459,463.000953 L1391.81466,467.499505 L1382.70098,472.001251 L1382.6882,468.133486 Z" id="ARROW_RIGHT" stroke="none" fill="#090909" fill-rule="evenodd"></path>
					</svg>
				</nav>
			</div>

		<a href="#" class="add-photo-btn">
			<span></span>
			<span></span>
		</a>
	</div>
</section>
<section class="add-photo">
	<h3>add photo</h3>
	<div class="photos-wrap">
		<div class="inner">
			<div class="slide photo open-add-images" style="background-image: url(<?php echo get_template_directory_uri(); ?>/library/images/add_photo_icon.png);"></div>
			<?php $count = 0; foreach ($contactPhotos as $photo) : $count++; ?>
			<div id="contact-photo-<?php echo $count; ?>" class="photo slide addable-image" style="background-image: url(<?php echo $img_dir . $photo['src']; ?>);">
				<a href="#" class="remove-photo">
					<span></span>
					<span></span>
				</a>
			</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<div id="contact-map"></div>

<div class="contact-us no-mobile">
	<a class="col" href="mailto:hello@byassembly.com">hello@byassembly.com</a>
	<a class="col" href="tel:+01-678-287-7493" title="Phone Number">678.287.7493</a>
	<span class="col">33.7724 - -84.3653</span>
</div>

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

<script>
	var map;
	function initMap() {
		map = new google.maps.Map(document.getElementById('contact-map'), {
			center: {lat: 33.772465, lng: -84.3653764},
			zoom: 8,
			zoomControl: true,
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			rotateControl: false,
			fullscreenControl: false,
			scrollwheel:  false
		});

		var marker = new google.maps.Marker({
			position: {lat: 33.772465, lng: -84.3653764},
			map: map,
			icon: {
				url: '<?php echo get_template_directory_uri(); ?>/library/images/icons/map-marker.png',
			    // This marker is 20 pixels wide by 32 pixels high.
			    size: new google.maps.Size(92, 108),
			    // The origin for this image is (0, 0).
			    origin: new google.maps.Point(0, 0),
			    // The anchor for this image is the base of the flagpole at (0, 32).
			    anchor: new google.maps.Point(0, 32),
			    scaledSize: new google.maps.Size(46, 54),
			}
		});
	}
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBOsrcXj4TqrhgGyWE58MMARuDqze0S9Ek&callback=initMap" async defer></script>

<?php get_footer('contact'); ?>
