<?php get_header(); ?>
<?php include 'includes/header-light.php'; ?>
<?php include 'includes/page-data/contact-page-data.php'; ?>

<form action="" method="get" accept-charset="utf-8">
	<div class="form-viewport">
		<label class="active">
			<p>what kind of structure are you looking for? </p>
			<p class="pager"><span class="current">1</span>/<span class="total">6</span></p>
			<input type="text" name="" value="" placeholder="type here">
		</label>
		<label>
			<p>How about another question? </p>
			<p class="pager"><span class="current">1</span>/<span class="total">6</span></p>
			<input type="text" name="" value="" placeholder="type here">
		</label>
		<div class="error-message">Please Fill our the field.</div>
		<button class="dark" type="button">next</button>
	</div>
</form>

<section class="add-photo">
	<div class="photo-overlay-wrap">
		<div class="add-photo-overlay">
			<div class="mesh-bg dark"></div>
			<?php include 'includes/header-dark-contact-add-photo.php'; ?>
			<p>What are you interested in?</p>
				<div class="owl-carousel add-photos-carousel">
					<?php $count = 0; foreach ($contactPhotos as $photo) : $count++; ?>
					<div class="image" data-photo-id="contact-photo-<?php echo $count; ?>">
						<img src="<?php echo $img_dir . $photo['src']; ?>" alt="">
					</div>
					<?php endforeach; ?>
				</div>

			<a href="#" class="add-photo-btn">
				<span></span>
				<span></span>
			</a>
		</div>
	</div>
	<div class="addable-images">
		<?php foreach ($contactPhotos as $photo) : ?>
		<div class="photo">
			<img data-src="<?php echo $img_dir . $photo['src']; ?>">
		</div>
		<?php endforeach; ?>
	</div>
	<h3>add photo</h3>
	<div class="photos-wrap">
		<div class="owl-carousel photo-list-carousel">
			<div class="slide photo open-add-images" style="background-image: url(<?php echo get_template_directory_uri(); ?>/library/images/add_photo_icon.png);"></div>
<!-- 			<div class="slide photo" style="background-image: url(<?php echo get_template_directory_uri(); ?>/library/images/placeholders/project_placeholder_2.jpg);"></div>
			<div class="slide photo" style="background-image: url(<?php echo get_template_directory_uri(); ?>/library/images/placeholders/project_placeholder_1.jpg);"></div>
			<div class="slide photo" style="background-image: url(<?php echo get_template_directory_uri(); ?>/library/images/placeholders/project_placeholder_3.jpg);"></div> -->
		</div>
	</div>
</section>

<div id="contact-map"></div>

<script>
	var map;
	function initMap() {
		map = new google.maps.Map(document.getElementById('contact-map'), {
			center: {lat: -34.397, lng: 150.644},
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
			position: {lat: -34.397, lng: 150.644},
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
