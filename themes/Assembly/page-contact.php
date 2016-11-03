<?php get_header(); ?>

<div id="map"></div>
<style>
	#map {
		height: 500px;
	}
</style>

<script>
	var map;
	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: -34.397, lng: 150.644},
			zoom: 8,
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
			    scaledSize: new google.maps.Size(46, 54)
			}
		});
	}
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB1_tEvdK6p0WPh2YLwiGW2ExOf0GOhTjE&callback=initMap" async defer></script>

<?php get_footer(); ?>
