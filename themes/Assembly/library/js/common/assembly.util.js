jQuery.migrateMute = true;

var raf = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	window.oRequestAnimationFrame ||
	// IE Fallback, you can even fallback to onscroll
	function(callback){ window.setTimeout(callback, 1000/60) };
/*!
 * Assembly Utility Object
 */
var assembly = assembly || {};
var $ = jQuery;

(function($){
	assembly.util = {
		baseUrl: php_vars.home,

		useragent: {
			deviceType: php_vars.deviceType,
			isiOS: php_vars.isiOS === "false" ? false : true,
			isTouch: Modernizr.touch,
			isMobileSafari: Modernizr.mobilesafari ? true : false
		},

		env: {
			$win: $(window),
			$doc: $(document),
			winHeight: undefined,
			winWidth: undefined
		},

		init: function(){
			this.env.winHeight = this.env.$win.height()
			this.scrollYPos = this.env.$win.scrollTop(),

			this.bindEvents();
			this.setUpLoader();
			if(assembly.util.useragent.deviceType === 'desktop'){
				// this.initialLogoAnimation();
			}
		},

		bindEvents: function(){
			var _this = this,
				st;

			_this.env.$win.scroll(function(event){
			   st = $(window).scrollTop();
			   if (st > _this.scrollYPos){
			       _this.env.$win.trigger('scroll-down');
			   } else {
			      _this.env.$win.trigger('scroll-up');
			   }
			   _this.scrollYPos = st;
			});

			_this.env.$win.on('resize', _this.debounce(function() {
				_this.env.$win.trigger('windowResize');

				_this.updateViewportDimensions();
			}, 250));

			_this.env.$win.on('scrollstart', function(){
			});

			_this.env.$win.on('scrollstop', function(){
			});
		},

		// initialLogoAnimation: function(){
		// 	var shift = 0;
		// 	var $logo = $('.logo');
		// 	var frameWidth = $logo.width();
		// 	var frameHeight = $logo.height();
		// 	var totalFrames = 50;
		// 	var ypos = 0;
		// 	var currentFrame = 1;
		// 	var myImage = new Image();
		// 	myImage.src = php_vars.home + '/library/images/sprites/Assembly_Logo_TempSpaces-resized-init-white.png';
		// 	myImage.addEventListener("load", loadImage, false);
		// 	var loaderIntervalInitial;
		// 	var imgWidth; var imgHeight;

		// 	function loadImage(e) {
		// 		$logo.append(myImage);
		// 		$logo.addClass('ready');

		// 		imgWidth = $(myImage).width();
		// 		imgHeight = $(myImage).height();

		// 		frameHeight = imgHeight/5;

		// 		loaderIntervalInitial = setInterval(function(){
		// 				// animate();
		// 			}, 1000/24);
		// 	}

		// 	window.animate = function() {
		// 		$('.logo').css({
		// 			backgroundPosition: -shift +'px '+ -ypos +'px'
		// 		});

		// 	    shift += frameWidth;

		// 	    if(currentFrame%9 === 0 && currentFrame !== 0){
		// 	    	shift = 0;
		// 	    	ypos += frameHeight;
		// 	    }

		// 	    if (currentFrame == 50) {
		// 			clearInterval(loaderIntervalInitial);
		// 	    }

		// 	    /*
		// 	        Start at the beginning once you've reached the
		// 	        end of your sprite!
		// 	        */
		// 	        if (currentFrame == totalFrames) {
		// 	        	shift = 0;
		// 	        	ypos = 0;
		// 	        	currentFrame = 0;
		// 	        }

		// 	        currentFrame++;
		// 	    }
		// },

		setUpLoader: function(){
			var shift = 0;
			var frameWidth = $('.loader').height();
			var frameHeight = $('.loader').height();
			var totalFrames = 8*8+4;
			var ypos = 0;
			var currentFrame = 1;
			var myImage = new Image();
			var $loader = $('.loader');
			myImage.src = php_vars.home + '/library/images/sprites/LogoLoading-white.png';
			myImage.addEventListener("load", loadImage, false);

			if(window.location.search.indexOf('loader=false') !== -1){
				$('.loader-wrap').addClass('done');
			}

			function loadImage(e) {
				$('.loader').append(myImage);
				$('.loader-wrap').addClass('ready');

				var loaderInterval = setInterval(function(){
						animate();
						if(currentFrame === 48 && $('html').is('.dom-ready')){
							$('.loader-wrap').addClass('done');
						}
					}, 1000/24);
			}

			function animate() {
				$('.loader img').css({
					transform: 'translate3d('+ -shift +'px,'+ -ypos +'px,0)'
				});

			    shift += frameWidth;

			    if(currentFrame%8 === 0 && currentFrame !== 0){
			    	shift = 0;
			    	ypos += frameHeight;
			    }

			    /*
			        Start at the beginning once you've reached the
			        end of your sprite!
			        */
			        if (currentFrame == totalFrames) {
			        	shift = 0;
			        	ypos = 0;
			        	currentFrame = 0;
			        }

			        currentFrame++;
			    }
		},
		// how long to wait before deciding the resize has stopped, in ms. Around 50-100 should work ok.
		timeToWaitForLast: 100,
		/*
		 * Get Viewport Dimensions
		 * returns object with viewport dimensions to match css in width and height properties
		 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
		 */
		updateViewportDimensions: function(){
			var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;

			this.env.winWidth = x;
			this.env.winHeight = y;
		},

		/*
		 * Throttle Resize-triggered Events
		 * Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.
		 * ( source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed )
		 */
		debounce: function(func, wait, immediate) {
			var timeout;
			return function() {
				var context = this, args = arguments;
				var later = function() {
					timeout = null;
					if (!immediate) func.apply(context, args);
				};
				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow) func.apply(context, args);
			};
		}
	}

	$(function(){
		assembly.util.init();
		$('html').addClass('dom-ready');
	});
})(jQuery);