<?php get_header(); ?>
  <style type="text/css">
    html, body {
      margin: 0;
      padding: 0;
    }

	 .content {
  		width: 500px;
  		background: #fff;
  	}

    * {
      box-sizing: border-box;
    }

    .slider {
    	display: none;
        width: 80%;
        margin: 100px auto;
    }

    .slick-initialized.slider {
    	display: block;
    }

    .slick-slide {
      margin: 0px 10px;
    }

    .slick-slide img {
      width: 100%;
    }

    .slick-prev:before,
    .slick-next:before {
        color: black;
    }
  </style>
  	<div class="content">
	  <section class="center slider">
	    <div>
	      <img src="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/service_placeholder_1.jpg" alt="">
	    </div>
	    <div>
	      <img src="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/service_placeholder_1.jpg" alt="">
	    </div>
	    <div>
	      <img src="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/service_placeholder_1.jpg" alt="">
	    </div>
	    <div>
	      <img src="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/service_placeholder_1.jpg" alt="">
	    </div>
	    <div>
	      <img src="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/service_placeholder_1.jpg" alt="">
	    </div>
	    <div>
	      <img src="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/service_placeholder_1.jpg" alt="">
	    </div>
	    <div>
	      <img src="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/service_placeholder_1.jpg" alt="">
	    </div>
	    <div>
	      <img src="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/service_placeholder_1.jpg" alt="">
	    </div>
	    <div>
	      <img src="<?php echo get_template_directory_uri(); ?>/library/images/placeholders/service_placeholder_1.jpg" alt="">
	    </div>
	  </section>
	  </div>
<script>
var $ = jQuery;
	jQuery(document).ready(function(){
		$('.center').slick({
			centerPadding: '20px',
			slidesToShow: 1.5,
			infinite: false,
			responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
					centerMode: true,
					centerPadding: '0',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1.5
				}
			}
			]
		});
	});
</script>

<?php get_footer(); ?>