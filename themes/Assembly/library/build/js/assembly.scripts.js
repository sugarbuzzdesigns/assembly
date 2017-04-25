/* repo: assembly/ - Package Version: 1.0.0 - 2017-04-25 01:22 pm - User: Phoydar */
/*! Source: library/js/common/assembly.util.js*/
/*!
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return n.indexOf(e)==-1&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return n!=-1&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});

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

var rafFunctions = [];

$.easing.jswing = $.easing.swing;

$.extend($.easing,
{
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        //alert($.easing.default);
        return $.easing[$.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
        return c*(t/=d)*t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c*(t/=d)*t*t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - $.easing.easeOutBounce (x, d-t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d/2) return $.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
        return $.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
    }
});

var transEndEventNames = {
	'WebkitTransition' : 'webkitTransitionEnd',
	'MozTransition'    : 'transitionend',
	'OTransition'      : 'oTransitionEnd',
	'msTransition'     : 'MSTransitionEnd',
	'transition'       : 'transitionend'
},
transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

var animationEndEventNames = {
    'WebkitAnimation' : 'webkitAnimationEnd',
    'MozAnimation'	  : 'animationend',
    'OAnimation'	  : 'oAnimationEnd oanimationend',
    'msAnimation'	  : 'MSAnimationEnd',
    'animation'		  : 'animationend'
},
animationEndEventName = animationEndEventNames[ Modernizr.prefixed('animation') ];

(function($){
	assembly.scrollAnimating = false;

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
			// this.setUpLoader();
			if(assembly.util.useragent.deviceType === 'desktop'){
				this.videoLoader();
			} else {
				this.staticLoader();
			}

			if(window.location.search.indexOf('loader=false') !== -1){
				$('.loader-wrap').addClass('remove');
			}

			$('.loader-wrap .initial span').addClass('start');

			this.intervals = {};
		},

		bindEvents: function(){
			var _this = this,
				st = 0;

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

				if(assembly.util.useragent === 'desktop'){

				}

				if($('#about-video-overlay').outerHeight() - $('.video-js').outerHeight() < 0){
					$('.vjs-control-bar').css({
						bottom: Math.abs(($('#about-video-overlay').outerHeight() - $('.video-js').outerHeight())/2)
					});
				}
			}, 250));

			$('html').on('loaded', function(){
				$(this).addClass('loaded');

				// $('.logo').each(function(i, logo){
				// 	console.log(logo);
				// });

				// var M1 = TweenMax.to('.logo .img',1.5,{
				// 	backgroundPosition: "100%",
				// 	ease: SteppedEase.config(35)
				// });

				// tl.duration(1.5).play();
			});

			$('.landing-logo .logo').hover(
				function(evt){

				},
				function(evt){

				}
			);

			$('.main-logo .logo').hover(
				function(evt){
					$(this).parent().data('tl2').duration(1).play();
				},
				function(evt){
					$(this).parent().data('tl2').duration(1).reverse();
				}
			);

			$('.main-menu-btn').hover(
				function(evt){
					$('.main-menu-btn').addClass('mouseover');
					$('.main-menu-btn').removeClass('mouseout');
				},
				function(evt){
					$('.main-menu-btn').addClass('mouseout');
					$('.main-menu-btn').removeClass('mouseover');
				}
			);
		},

		// animateSpriteBG: function(startX, startY, $img, totalFrames, framesX, framesY, cb){
		// 	var _this = this;
		// 	var id = $img.attr('id');
		// 	var framesX = framesX;
		// 	var framesY = framesY;
		// 	var currentFrame = startX;
		// 	var totalFrames = totalFrames || 50;
		// 	var imgSrc = $img.attr('src');
		// 	var frameWidth = $img.width()/framesX;
		// 	var frameHeight = $img.height()/framesY;
		// 	var startX = startX;
		// 	var startY = startY;
		// 	var shiftX = startX * frameWidth;
		// 	var shiftY = startY * frameHeight;
		// 	var animateInterval;

		// 	if($img.data('running') === 'true'){
		// 		clearInterval($img.data('currentInterval'));
		// 	}

		// 	$img.on('load', function(){
		// 		loadImage(_this, $img);
		// 	});

		// 	if (typeof $img[0] != 'undefined' && $img[0].complete) {
		// 		loadImage(_this, $img);
		// 	}

		// 	var counter = 0;

		// 	function loadImage(_this, $img) {
		// 		$img.data('running', 'true');

		// 		var currentInterval = setInterval(function(){
		// 			animate($img);
		// 			counter++;
		// 		}, 1000/24);

		// 		$img.data('currentInterval', currentInterval);
		// 	}


		// 	function animate($img) {
		// 		currentFrame++;

		// 		$img.css({
		// 			'transform': 'translate3d('+ -shiftX +'px,'+ -shiftY +'px,0)'
		// 		});

		// 	    shiftX += frameWidth;

		// 	    if(currentFrame%framesX === 0 && currentFrame !== 0){
		// 	    	shiftX = 0;
		// 	    	shiftY += frameHeight;
		// 	    }

		// 	    if (currentFrame == totalFrames) {
		// 	    	$img.data('running', 'false');
		// 			clearInterval($img.data('currentInterval'));
		// 	    }

		// 	    /*
		//         Start at the beginning once you've reached the
		//         end of your sprite!
		//         */
		//         if (currentFrame == totalFrames) {
		//         	shiftX = 0;
		//         	shiftY = 0;
		//         	currentFrame = 0;

		// 	        if(typeof cb === 'function'){
		// 	        	cb();
		// 	        }
		//         }
		//     }
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
			var loopCount = 2;

			$('.loader-img').imagesLoaded( function() {
				$('.loader-img-placeholder').remove();
				$('.loader-inner').removeClass('is-loading');

				loadImage();
			});

			$('.loader-img').attr('src', $('.loader-img').data('src'));

			function loadImage(e) {
				$('.loader-wrap').addClass('ready');

				var loaderInterval = setInterval(function(){
						animate();
						if(currentFrame === totalFrames && $('html').is('.dom-ready')){
							$('.loader-wrap').addClass('done');
							$('html').trigger('loaded');
							setTimeout(function(){
								$('html').trigger('loader-removed');
								$('.loader-wrap').hide();
							}, 500);
							clearInterval(loaderInterval);
						}
					}, 1000/24);
			}

			function animate() {
				$('.loader-img').css({
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

		videoLoader: function(){
			$('.loader video').on('canplay', function(){
				$(this).addClass('canplay');
				$('.loader-img-placeholder').hide();
			});

			setTimeout(function(){
				$('.loader video').attr('src', $('.loader video').data('src'));
			}, 1000);

			$('.loader video').data('play-count', 0);
			$('.loader video').get(0).play();

			setTimeout(function(){
				$('.loader-wrap').addClass('ready');
				// $('html').trigger('loaded');
			}, 300);

			$('.loader video').on('ended', function(){
				var count = $('.loader video').data('play-count');
				count++;

				if(count < 1){
					$('.loader video').get(0).play();
				} else {
					$('.loader-wrap').addClass('done');
					$('html').trigger('loaded');
					setTimeout(function(){
						$('html').trigger('loader-removed');
						$('.loader-wrap').hide();
					}, 500);
				}

				$('.loader video').data('play-count', count);
			});
		},

		staticLoader: function(){
			$('.loader-img-placeholder').addClass('animate pulse');

			setTimeout(function(){
				$('.loader-wrap').addClass('ready');
			}, 300);

			setTimeout(function(){
				$('.loader-wrap').addClass('done');
				$('html').trigger('loaded');
				console.log('loaded from static');
				setTimeout(function(){
					$('html').trigger('loader-removed');
					$('.loader-wrap').hide();
				}, 500);
			}, 3000);
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

	assembly.contactDrawer = {
		init: function(){
			this.bindEvents();
		},

		bindEvents: function(){
			$('.open-contact-drawer').on('click', function(evt){
				evt.preventDefault();

				$('html').addClass('open-contact');

				$('#contact-drawer').on(transEndEventName, function(evt){
					if($(evt.target).is('#contact-drawer') && evt.originalEvent.propertyName === 'transform'){
						$('html,body').scrollTop(0,0);
						$('html').addClass('contact-opened');
						var dtop = $('#contact-drawer').offset().top;
						$(window).scrollTop(dtop);
					}
				});

			});
		}
	}

	$(function(){
		$('html').addClass('dom-ready');
		assembly.util.init();
		assembly.contactDrawer.init();

		window.greensockLogoAnimation = function($container){
			// 1. Create a variable
			var a = $('.assembly [data-letter="a"]', $container);
			var s = $('.assembly [data-letter="s"]', $container).eq(0);
			var s2 = $('.assembly [data-letter="s"]', $container).eq(1);
			var e = $('.assembly [data-letter="e"]', $container);
			var m = $('.assembly [data-letter="m"]', $container);
			var b = $('.assembly [data-letter="b"]', $container);
			var l = $('.assembly [data-letter="l"]', $container);
			var y = $('.assembly [data-letter="y"]', $container);

			var t_ = $('.temp-spaces [data-letter="t"]', $container);
			var e_ = $('.temp-spaces [data-letter="e"]', $container).eq(0);
			var m_ = $('.temp-spaces [data-letter="m"]', $container);
			var p_ = $('.temp-spaces [data-letter="p"]', $container).eq(0);
			var o_ = $('.temp-spaces [data-letter="o"]', $container);
			var r_ = $('.temp-spaces [data-letter="r"]', $container).eq(0);
			var a_ = $('.temp-spaces [data-letter="a"]', $container);
			var r2_ = $('.temp-spaces [data-letter="r"]', $container).eq(1);
			var y_ = $('.temp-spaces [data-letter="y"]', $container);

			var s__ = $('.temp-spaces [data-letter="s"]', $container).eq(0);
			var p__ = $('.temp-spaces [data-letter="p"]', $container).eq(1);
			var a__ = $('.temp-spaces [data-letter="a"]', $container).eq(1);
			var c__ = $('.temp-spaces [data-letter="c"]', $container);
			var e__ = $('.temp-spaces [data-letter="e"]', $container).eq(1);
			var s2__ = $('.temp-spaces [data-letter="s"]', $container).eq(1);

			tl = new TimelineLite({ paused:true });
			tl2 = new TimelineLite({ paused:true });

			$container.data('tl', tl);
			$container.data('tl2', tl2);
			// 2. Create tweens for our boxes
			// TweenLite.from($span, 1, {y: '-=40', autoAlpha: 0, ease:Power4.easeInOut});
			var space = "+=0.25";
			// var space = "0";

			tl.to(a, 0, {
				x:"250%",
				y:"0",
				rotation: -90,
				opacity: 1
			}, space);

			tl.to(a, 0, {
				x:"0%",
				y:"0%",
				rotation: -180,
				opacity: 1,
				delay: 0.5
			}, space).to(e, 0, {
				x:"110%",
				y:"40%",
				rotation: -90,
				opacity: 1
			});

			tl.to(y, 0, {
				x:"20%",
				y:"-10%",
				opacity: 1
			}, space);

			tl.to(l, 0, {
				x:"-620%",
				y:"-20%",
				rotation: 90,
				opacity: 1
			}, space).to(a, 0, {
				x:"0%",
				y:"-10%",
				rotation: 0,
				opacity: 1
			});

			tl.to(e, 0, {
				x:"20%",
				y:"40%",
				rotation: -180,
				opacity: 1
			}, space);

			tl.to(s, 0, {
				x:"0%",
				y:"40%",
				opacity: 1
			}, space)

			tl.to(y, 0, {
				x:"0%",
				y:"0%",
				opacity: 1
			}, "+=0.2");

			tl.to(a, 0, {
				x:"0%",
				y:"0%",
				rotation: 0,
				opacity: 1
			}, space);

			tl.to(l, 0, {
				x:"-120%",
				y:"10%",
				opacity: 1
			}, space);

			tl.to(e, 0, {
				x:"0%",
				y:"0%",
				rotation: 0,
				opacity: 1
			}, space);

			tl.to(m, 0, {
				x:"10%",
				y:"-50%",
				rotationY: 180,
				opacity: 1
			}, space);

			tl.to(s, 0, {
				x:"0%",
				y:"0%",
				opacity: 1
			}, space);

			tl.to(m, 0, {
				x:"0%",
				rotationY: 0
			}, space);

			tl.to(b, 0, {
				x:"0%",
				y:"20%",
				opacity: 1
			}, space).to(l, 0, {
				x:"0%",
				y:"-20%",
				rotation: 0,
				opacity: 1
			}, space);

			tl.to(s2, 0, {
				x:"0%",
				y:"20%",
				opacity: 1
			}, space);

			tl.to(s2, 0, {
				y:"10%",
				opacity: 1
			}, space);

			tl.to(b, 0, {
				y:"10%"
			}, space);

			tl.to(m, 0, {
				y:"0%"
			}, space);


			tl.to(s2, 0, {
				y:"0%"
			}, space);

			tl.to(b, 0, {
				y:"0%"
			}, space)

			tl.to(l, 0, {
				x:"0%",
				y:"0%"
			}, space);

			//
			//
			//

			tl2.to(t_, 0, {
				y: "75%",
				opacity: 1
			}, space).to(a, 0, {
				opacity: 0
			}).to(a__, 0, {
				opacity: 1
			});

			tl2.to(s, 0, {
				x: "0%",
				y: "-50%",
				opacity: 1
			}, space);

			tl2.to(s2, 0, {
				x: "0%",
				y: "50%",
				opacity: 1
			}, space);

			tl2.to(e__, 0, {
				x: "-340%",
				opacity: 1
			}, space);

			// translate(300%, 15%)
			tl2.to(p__, 0, {
				x: "300%",
				y: "16%",
				rotation: 180,
				opacity: 1
			}, space).to(e, 0, {
				opacity: 0
			}).to(e_, 0, {
				y: "50%",
				opacity: 1
			}).to(t_, 0, {
				y: "0%"
			});

			tl2.to(s2__, 0, {
				x: "80%",
				opacity: 1
			}, space).to(s2, 0, {
				x: "10%",
				y: "74%",
				rotation: 90
			}).to(b, 0, {
				x: "8%",
				y: "16%",
				rotation: 180
			}).to(y, 0, {
				x: "100%"
			}).to(l, 0, {
				x: "182%",
				y: "12%",
				rotation: 90
			});

			tl2.to(e__, 0, {
				x: "-370%",
				y: "50%",
				rotation: 90
			}, space)

			tl2.to(m, 0, {
				x:"-50%"
			}, space);

			tl2.to(c__, 0, {
				opacity: 1
			}).to(s__, 0, {
				y: "-50%",
				opacity: 1
			}).to(l, 0, {
				x: "882%",
				y: "4%",
				rotation: 90
			}).to(y, 0, {
				opacity: 0
			}).to(y_, 0, {
				opacity: 1
			}).to(b, 0, {
				opacity: 0
			}).to(p_, 0, {
				x: "100%",
				opacity: 1,
				rotationY: 180
			});

			tl2.to(s2, 0, {
				opacity: 0
			}, space).to(s, 0, {
				opacity: 0
			});

			tl2.to(e_, 0, {
				x: "0%",
				y: "0%"
			}, space).to(m, 0, {
				opacity: 0
			}).to(m_, 0, {
				x: "0%",
				y: "0%",
				opacity: 1
			});

			tl2.to(p_, 0, {
				x: "0%",
				opacity: 1,
				rotationY: 0
			}, space).to(o_, 0, {
				opacity: 1
			}).to(r_, 0, {
				x: "-150%",
				y: "50%",
				opacity: 1
			});

			tl2.to(a_, 0, {
				opacity: 1
			}, space);

			tl2.to(l, 0, {
				opacity: 0
			}, space).to(s__, 0, {
				y: "0%"
			});

			tl2.to(r2_, 0, {
				opacity: 1
			}, space);

			tl2.to(p__, 0, {
				x: "0%",
				y: "-20%",
				rotation: 0
			}, space).to(e__, 0, {
				x: "0%",
				y: "0%",
				rotation: 0
			});

			tl2.to(s2__, 0, {
				x: "0%",
				y: "0%"
			}, space);

			tl2.to(r_, 0, {
				x: "0%",
				y: "0%"
			}, space);

			tl2.to(p__, 0, {
				x: "0%",
				y: "0%",
				rotation: 0
			}, space);

			tl.duration(1.5).play();

			var M1 = TweenMax.to($container.find('.logo .img'), 1.5, {
				backgroundPosition: "100%",
				ease: SteppedEase.config(35)
			});
		};
	});
})(jQuery);
/*! Source: library/js/common/assembly.navigation.js*/
/*!
 * Assembly Menu Navigation
 */
var assembly = assembly || {};

(function($){
	assembly.navigation = {
		init: function(){
			this.$mainMenuBtn = $('.main-menu-btn');

			this.bindEvents();
		},

		bindEvents: function(){
			var _this = this;

			_this.$mainMenuBtn.on('click', function(evt){
				evt.preventDefault();
				evt.stopPropagation();

				_this.toggleMainMenu(this);
			});

			$('.menu-bg').on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(evt){
				if(evt.originalEvent.animationName === 'hideMenuBg'){
					$('html').removeClass('close-menu');
				}
			});

			$('.to-top').on('click', function(){
				var anchor = $('[data-to-top-anchor]').not('[data-to-top-anchor="contact-drawer"]').length ? $('[data-to-top-anchor]').offset().top : 0;

				if($(this).is('.contact-drawer-to-top')){
					anchor = $('[data-to-top-anchor="contact-drawer"]').offset().top;
				}

				$('html, body').animate({
					scrollTop: anchor
				})
			});
		},

		toggleMainMenu: function(){
			var _this = this;

			if($('html').hasClass('menu-open')){
				hideMenu();
			} else {
				showMenu();
			}

			function showMenu(){
				$('html').addClass('menu-open');
				$('html').removeClass('menu-close');

				$('.main-menu').css({
					opacity: 1,
					height: '100vh',
					width: '100vw'
				});

				$('.main-menu-btn .letter').addClass('fadeOut');
				$('.main-menu-btn .border').addClass('fadeOut');

				$('.header-mask.landing-logo').data('curHeight', $('.header-mask.landing-logo').height());
				// $('.header-mask.landing-logo').height('auto');

				var queue = $({}); //use the default animation queue
			    $('nav li').each(function(i, elm) {
			        queue.queue(createWorkQueueFunction($(this), i));
			        queue.delay(200);
			    });

				function createWorkQueueFunction($element, i) {
				    return function(next) {
				        $element.addClass('show-nav-item');
						next();
				    };
				}
			};

			function hideMenu(){
				$('html').addClass('menu-close');
				$('.header-mask.landing-logo').height($('.header-mask.landing-logo').data('curHeight'));
				$('nav li').removeClass('show-nav-item');

				$('.main-menu').css({
					opacity: 0,
					height: '30px',
					width: '30px'
				});

				$('.main-menu-btn .letter').removeClass('fadeOut');
				$('.main-menu-btn .border').removeClass('fadeOut');

				$('html').removeClass('menu-open');
			};
		}
	};

	$(function(){
		assembly.navigation.init();
		$('.main-menu-btn').addClass('animate'); //temporary
	});
})(jQuery);
/*! Source: library/js/common/assembly.carousel.js*/
/*!
 * Assembly Carousel Modules
 */
var assembly = assembly || {};

(function($){
	assembly.carousel = {
		init: function(){
			this.initializeCarousels();
			this.currentEmployeeSlide = 0;
		},

		initializeCarousels: function(){
			var _this = this, $slides, start, position, $carousel, numSlides, slickCarousel, $employeeCarousel, hasVariableWidth = false, dots = false, slidesToShow = 1.2;

			$('.carousel-module').not('.employee-carousel, .our-approach, .add-contact-photo').each(function(i, module){
				if($(this).is('.our-approach')){
					hasVariableWidth = true;
					dots = true;
				}

				$carousel = $(module).find('.carousel');
				$slides = $carousel.find('.slide');
				numSlides = $slides.length;

				start = $carousel.data('mobile-start') === 'front' ? 0 : numSlides - 1;
				position = $carousel.data('mobile-position');

				if(assembly.util.useragent.deviceType != 'mobile'){
					slidesToShow = 1;
					start = 0;
				}

				$carousel.on('init', function(slick){

					$curCarousel = $(this);

					$curCarousel.closest('.carousel-inner').find('.nav-arrow-right').on('click', function(){
						$(this).siblings('.carousel').slick('slickNext');
					});
				});

				$carousel.on('beforeChange', function(event, slick, currentSlide, nextSlide){
					var $thisCarousel = $(this);
					var slideCount = $thisCarousel.find('.slide').length;

					if(slideCount === nextSlide + 1){
						$thisCarousel.closest('.carousel-module').addClass('atEnd');
					} else {
						$thisCarousel.closest('.carousel-module').removeClass('atEnd');
					}
				});

				slickCarousel = $carousel.slick({
					slidesToShow: slidesToShow,
					initialSlide: start,
					infinite: true,
					touchMove: false,
					arrows: false,
					easing: 'ease-in',
					speed: 500,
					variableWidth: hasVariableWidth
				});
			});

			var $ourApproachCarousel = $('.carousel.our-approach');

			$ourApproachCarousel.on('init', function(slick){
				$('.our-approach.carousel-module .slick-dots li').each(function(i, dot){
					var $nav = $('<nav class="up-down-nav"></nav>');
					var $navArrowUp = $('.nav-arrow-up').clone().removeClass('nav-arrow-up').addClass('up');
					var $navArrowDown = $('.nav-arrow-up').clone().removeClass('nav-arrow-up').addClass('down');
					var $count = $('<span class="num">0'+ (i+1) +'</span>');

					$nav.append($navArrowUp, $count, $navArrowDown);

					$(dot).append($nav);
				});

				$('.our-approach.carousel-module .slick-slide').each(function(i, slide){
					var $slideNumber = $('<div class="slide-number">0'+ (i+1) +'</div>');

					$(slide).find('.tile-copy').prepend($slideNumber);
				});

				$('.our-approach.carousel-module .slick-dots').append('<li class="track"></li>');

				$('.our-approach.carousel-module .carousel-next').appendTo($ourApproachCarousel);

				$('.our-approach .carousel-next').on('click', function(evt){
					evt.preventDefault();

					$ourApproachCarousel.slick('slickNext');
				});

				$('.our-approach .carousel').data('slideCount', $('.our-approach .slick-slide').length);

				$('.our-approach .slick-dots button').on('click', function(evt){
					evt.preventDefault();
					var slideNum = $(this).attr('tabindex');

					$('.our-approach .slick-dots li.slick-active').removeClass('slick-active');
					$(this).parent().addClass('slick-active');
					$ourApproachCarousel.slick('slickGoTo', slideNum);
				});
			});

			$ourApproachCarousel.slick({
				slidesToShow: 1,
				initialSlide: 0,
				infinite: true,
				touchMove: false,
				arrows: false,
				easing: 'ease-in',
				fade: true,
				speed: 500,
				variableWidth: hasVariableWidth
			});

			$ourApproachCarousel.on('beforeChange', function(event, slick, currentSlide, nextSlide){
				var slideCount = $('.our-approach .carousel').data('slideCount');

				updateCountText(nextSlide, $('.our-approach .slide-number'));
				updateCustomDots(nextSlide);

				if(nextSlide + 1 === $('.our-approach .slick-slide').length){
					$('.our-approach .carousel').addClass('atEnd');
				} else {
					if($('.our-approach .carousel').hasClass('atEnd')){
						$('.our-approach .carousel').removeClass('atEnd');
					}
				}
			});

			$employeeCarousel = $('.employee-carousel');

			$employeeCarousel.on('init', function(slick){

				$curCarousel = $(this);

				$curCarousel.closest('.carousel-inner').find('.nav-arrow-right').on('click', function(){
					$(this).siblings('.carousel').slick('slickNext');
				});
			});

			$employeeCarousel.slick({
				slidesToShow: 1,
				initialSlide: 0,
				infinite: true,
				touchMove: false,
				arrows: false,
				easing: 'ease-in',
				speed: 500,
				variableWidth: hasVariableWidth
			});

			$employeeCarousel.on('beforeChange', function(event, slick, currentSlide, nextSlide){
				var $thisCarousel = $(this);
				var slideCount = $thisCarousel.find('.slide').length;

				if(slideCount === nextSlide + 1){
					$thisCarousel.closest('.carousel-module').addClass('atEnd');
				} else {
					$thisCarousel.closest('.carousel-module').removeClass('atEnd');
				}
			});

			$employeeCarousel.on('afterChange', function(event, slick, currentSlide, nextSlide){
				if(_this.currentEmployeeSlide === currentSlide){
					return;
				} else {
					_this.currentEmployeeSlide = currentSlide;
				}

				var num = $(this).find('.slide.slick-current').data('years-experience')*1;

				console.log(num);

				count(num, $('.years-experience.interactive .tens'), $('.years-experience.interactive .ones'));
			});

			function count(num, $tens, $ones){
				var $num1 = $tens;
				var $num2 = $ones;

				var num1Start = $num1.html();
				var num2Start = $num2.html();
				var fullNum = (num1Start+num2Start)*1;
				var newNum = num;

				var tens = Math.floor(newNum/10);
				var ones = newNum - Math.floor(newNum/10) * 10;
				var total = fullNum;

				var countUp = setInterval(function(){

					if(fullNum > newNum){
						total-=1;
					} else {
						total+=1;
					}

					if((""+total).length === 1){
						$num2.html(total);
					} else {
						$num1.html((""+total).split("")[0]);
						$num2.html((""+total).split("")[1]);
					}

					if(total === newNum){																				clearInterval(countUp);
					}
				}, 50);
			}

			function updateCountText(nextSlide, $num){
				var num = nextSlide += 1,
					newNum = 'error';

				if(num.toString().length === 1){
					newNum = '0' + num;
				} else {
					newNum = num;
				}

				$num.html(newNum);
			}

			function updateCustomDots(nextSlide){
				$('.our-approach .slick-dots li.slick-active').removeClass('slick-active');
				$('.our-approach .slick-dots li').eq(nextSlide).addClass('slick-active');
			}
		}
	}

	$(function(){
		assembly.carousel.init();
	});
})(jQuery);
/*! Source: library/js/common/assembly.video.js*/
/*!
 * Assembly Carousel Modules
 */
var assembly = assembly || {};

(function($){
	assembly.video = {
		init: function(){
			// this.bindEvents();
			// this.initializeVideos();
		},

		bindEvents: function(){
			var _this = this;

			$('.video-overlay').on('click', function(evt){
				evt.stopPropagation();

				$(this).removeClass('show');
				_this.homeVideoReel.pause();
			});

			$('.video.module').on('click', function(){
				var videoId = $(this).data('video-id');

				$('#' + videoId).parent().addClass('show').removeClass('hidden');

				_this.homeVideoReel.play();
			});
		},

		initializeVideos: function(){
			var _this = this;

			videojs('home-video-reel', {
				'autoplay': false,
				'controls': true
			}, function(){
				_this.homeVideoReel = this;

				$('#home-video-reel').data('videojs', this);

				this.on('ended', function(){
					$('#home-video-reel').removeClass('show');
				});
			});
		},

		attachPlayerEvents: function(player){
			player.on('pause', function(){
				console.log('paused');
			});
		}
	}

	$(function(){
		assembly.video.init();
	});
})(jQuery);
/*! Source: library/js/common/assembly.parallax.js*/
var assembly = assembly || {};

(function($){
	assembly.parallax = {
		init: function(){
			this.$win = $(window);
			this.winHeight = this.$win.height();
			this.$body = $('body');
			this.$html = $('html');
			this.$scrollElement = this.$win;
			this.$elm = $('[data-ratio]');
			this.currentScroll = this.$scrollElement.scrollTop();
			this.scrollChange = 0;
			this.scrolledWhileInView = 0;
			this.scrollDirection = 'down';
			this.employeeDiff = 0;

			if (raf && assembly.util.useragent.deviceType === 'desktop') {
				this.setUpParallax();
			    this.loop();
			    // this.$scrollElement.scrollTop(1,0);

			    $('[data-employee-name]').each(function(i, emp){
			    	$(emp).css({
			    		transform: 'translate3d(0,'+ $(emp).data('start') +'px,0)'
			    	});

			    	$(emp).data('ypos', $(emp).data('start'));
			    });
			}

			rafFunctions.push(this.scrollHandler.bind(this));
		},

		setUpParallax: function(){
			var _this = this, $lax, laxStart, pixelRato, laxRatio;

			_this.$elm.each(function(i, lax){
				$lax = $(lax);
				laxRatio = $lax.data('ratio');
				startY = ($(window).height() * laxRatio)/2 - ($lax.innerHeight() * laxRatio);

				if($lax.find('.mesh-bg').length){
					$lax.find('.mesh-bg').css({
						transform: 'translate3d(0,0,0)'
					}).data('curY', 0);
				}

				$lax.css({
					transform: 'translate3d(0,'+ -startY +'px,0)'
				}).data('curY', startY);
			});
		},

		loop: function(){
			var _this = this,
				newScroll = _this.$scrollElement.scrollTop(),
				scrollDiff = _this.currentScroll - newScroll;

			if(_this.currentScroll === newScroll){
				raf(_this.loop.bind(this));
				return;
			} else {
				if(scrollDiff > 0){
					this.scrollDirection = 'up';
				} else {
					this.scrollDirection = 'down';
				}

				_this.scrollChange = Math.abs(scrollDiff);
				_this.currentScroll = newScroll;

				rafFunctions.forEach(function(func){
					func();
				});

				raf(_this.loop.bind(this));
			}
		},

		scrollHandler: function(){
			var _this = this,
				$lax, laxRatio, curY, meshCurY, $mesh;

			if($('.employee-list').is('.in-view')){
				$('[data-employee-name]').each(function(i, emp){
					var $emp = $(emp);
			    	var percentage = (($emp.offset().top - $(window).scrollTop() + $emp.height()) / ($(window).height() + $emp.height()));

			   	scrollPerc = ($('.employee-list').offset().top - $(window).scrollTop())/$(window).height();
		   		scrollPerc = 1 - scrollPerc;
			    		// 60
			    	($emp.data('start') - (scrollPerc*$emp.data('start')*2))

			    	$emp.css({
			    		transform: 'translate3d(0,'+ ($emp.data('start') - ((scrollPerc)*($emp.data('start')*1))) +'px,0)'
			    	});
				});
			}

			_this.$elm.each(function(i, lax){
				$lax = $(lax);
				laxRatio = $lax.data('ratio')*1;
				curY = $lax.data('curY');
				$mesh = $lax.find('.mesh-bg');

				if($mesh.length){
					meshCurY = $mesh.data('curY')*1;
				}

				if(_this.$scrollElement.scrollTop() >= $lax.offset().top - _this.winHeight){
					if(_this.scrollDirection === 'up'){
						if(typeof meshCurY !== 'undefined'){
							meshCurY -= (_this.scrollChange * (laxRatio + .02));
						}
						curY -= (_this.scrollChange * laxRatio);
					} else {
						if(typeof meshCurY !== 'undefined'){
							meshCurY += (_this.scrollChange * (laxRatio + .02));
						}
						curY += (_this.scrollChange * laxRatio);
					}

					if($lax.find('.mesh-bg').length){
						$lax.find('.mesh-bg').css({
							transform: 'translate3d(0,'+ -meshCurY +'px,0)'
						}).data('curY', meshCurY);
					}

					$lax.css({
						transform: 'translate3d(0,'+ -curY +'px,0)'
					});

					$lax.data('curY', curY);
				}
			});
		}
	};

	$(function(){
		assembly.parallax.init();
	});

	// window.onbeforeunload = function () {
	//   window.scrollTo(0, 0);
	// }
})(jQuery);
/*! Source: library/js/pages/assembly.contact.js*/
/*!
 * Assembly Contact Page
 */
var assembly = assembly || {};

(function($){
	assembly.contact = {
		init: function(){

			this.$landingSection = $('.contact-landing');
			this.landingSectionHeight = this.$landingSection.outerHeight(true);
			this.$addPhotoSection = $('.add-photo');
			this.$pagerCurrent = $('.pager .current');
			// clickable photos that can be added from the carousel
			this.$photosToAdd = $('.add-photo-overlay .image');
			// button that adds an individual photo
			this.$addphotoButton = $('.add-photo-overlay .add-photo-btn');

			this.$photoOverlayInner = $('.add-photo-overlay');
			// button that opens the add photos section
			this.$addPhotoIcon = $('.open-add-images');
			// container for image carousel with images that can be clicked
			// to be added to the user's contact form
			this.$photoOverlayWrap = $('.photo-overlay-wrap');
			// original height of .photo-overlay-wrap
			this.photoOverlayWrapHeight = 0;
			// list that contact photos get added to
			this.$addedPhotosList = $('.photos-wrap .photos');
			// keep a list of photos that have been added
			this.addedPhotosArray = [];

			this.photosListCarouselCurSlide = '';
			this.addPhotosCarouselCurSlide = '';

			this.initContactForm();
			this.initCarousels();
			this.bindEvents();

			this.setInitialSectionHeights();
			this.setInitialSectionWidths();
		},

		bindEvents: function(){
			var _this = this;

			$('form button').on('click', function formButtonHandler(){
				if(_this.validField($(this).closest('form').find('.active input').val())){
					_this.showNextFormInput($(this).closest('form').find('.active'));
					$('form .error-message').hide();
				} else {
					$('form .error-message').show();
				}
			});

			$('form').on('submit', function formSubmitHandler(evt){
				evt.preventDefault();

				_this.showSubmittedFormMessage();
			});

			_this.$photoOverlayWrap.find('.close-btn').on('click', function overlayPhotoCloseHandler(){
				_this.closeAddContactPhotoWrap();
			}),

			_this.$addPhotoIcon.on('click', function addPhotosClickHandler(){
				_this.openAddContactPhotoWrap();
			});

			_this.$addphotoButton.on('click', function addPhotoClickHandler(evt){
				evt.preventDefault();

				_this.addPhotoToPhotosList(_this.addPhotosCarouselCurSlide.find('.image').data('photo-id'));
			});

			_this.$photosToAdd.on('click', function photoClickHandler(evt){
				evt.preventDefault();
				evt.stopPropagation();

				if($(this).is('.added')){
					_this.removePhotoFromPhotosList($('#' + $(this).data('photo-id')));
				} else {
					_this.addPhotoToPhotosList($(this).data('photo-id'));
				}
			});

			_this.$addPhotosCarousel.on('changed.owl.carousel', function(event){
				_this.setCurrentCarouselSlide('addPhotosCarouselCurSlide', $(this).data('owl.carousel').items()[event.item.index]);
			});

			$('.remove-photo').on('click', function removePhotoClickHandler(evt){
				evt.preventDefault();

				_this.removePhotoFromPhotosList($(this).parent());
			});

			$('.image .remove').on('click', function removePhotoClickHandler(evt){
				evt.preventDefault();
				evt.stopPropagation();

				_this.removePhotoFromPhotosList($('#' + $(this).closest('.image').data('photo-id')));
			});

			$('html').on('loaded', function(){
				$('.main-logo').each(function(i, mainLogo){
					window.greensockLogoAnimation($(mainLogo));
				});
			});
		},

		showSubmittedFormMessage: function(){
			$('.submit-message').show();
			$('form').hide();
			$('.add-photo').hide();
		},

		setInitialSectionHeights: function(){
			this.$photoOverlayWrap.data('originalHeight', this.photoOverlayWrapHeight);

			this.$photoOverlayWrap.css({
				height: 0
			});
		},

		setInitialSectionWidths: function(){
			var $track = $('.add-photo .inner'),
				addImagesWidth = $('.open-add-images').outerWidth(true);

			$track.width(addImagesWidth);
		},

		initCarousels: function(){
			var _this = this;

			_this.$addPhotosCarousel = $('.add-photos-carousel');
			_this.$addPhotosCarousel.on('initialized.owl.carousel', function(){

				_this.setCurrentCarouselSlide('addPhotosCarouselCurSlide', $(this).find('.owl-item').eq(0));

				$('.add-photos-carousel-wrap').find('nav .arrow-right').on('click', function(){
					_this.$addPhotosCarousel.data('owl.carousel').next();
				});

				$('.add-photos-carousel-wrap').find('nav .arrow-left').on('click', function(){
					_this.$addPhotosCarousel.data('owl.carousel').prev();
				});

				_this.photoOverlayWrapHeight = _this.$photoOverlayInner.outerHeight(true);
			});

			_this.$addPhotosCarousel.on('changed.owl.carousel', function(evt){
				var items_per_page = evt.relatedTarget.options.slideBy;
				var item_index = evt.item.index;
				var item_count = evt.item.count;
				var last_vis_item_index = items_per_page + item_index;

				if(evt.page.index === 0){
					$('.add-photos-carousel-wrap').find('nav .arrow-left').addClass('disabled');
				}

				if(evt.page.index === 0){
					$('.add-photos-carousel-wrap').find('nav .arrow-left').addClass('disabled');
				}
			});

			_this.$addPhotosCarousel.owlCarousel({
				mouseDrag: true,
				pullDrag: false,
				lazyLoad:true,
				responsive : {
				    // breakpoint from 0 up
				    0 : {
				        items: 1,
				        stagePadding: 50
				    },
				    // breakpoint from 600 up
				    600 : {
				        items: 2,
				        stagePadding: 0
				    },
				    // breakpoint from 768 up
				    768 : {
				        items: 3,
				        slideBy: 3,
				        stagePadding: 0
				    },
				    // breakpoint from 1030 up
				    1030 : {
				        items: 5,
				        slideBy: 5,
				        stagePadding: 0
				    }
				}
			});
		},

		openAddContactPhotoWrap: function(){
			this.$photoOverlayWrap.css({
				height: this.$photoOverlayInner.outerHeight()
			});

			this.$landingSection.css({
				marginTop: - $('.contact-landing').outerHeight()
			});

			$('html, body').animate({ scrollTop: 0 }, 1000, 'easeOutCubic', function(){
				console.log('to contact top');
			});
		},

		closeAddContactPhotoWrap: function(){
			this.$photoOverlayWrap.css({
				height: 0
			});

			this.$landingSection.css({
				marginTop: 0
			});
		},

		setCurrentCarouselSlide: function(sliderName, slide){
			this[sliderName] = slide;

			if(!slide.find('.image').is('.added')){
				$('.add-photo-btn').removeClass('disabled');
			} else {
				$('.add-photo-btn').addClass('disabled');
			}
		},

		initContactForm: function(){
			var _this = this,
				formFields = $('form label'),
				numFormFields = formFields.length,
				$cur = this.$pagerCurrent,
				$total = $('.pager .total');

			$cur.html('1');
			$total.html(numFormFields);
		},

		validField: function(fieldValue){
			return true;

			if (fieldValue) {
				return true;
			} else {
				return false;
			}
		},

		showNextFormInput: function($currentInput){
			var curIndex = $currentInput.index(),
				curInputNum = curIndex + 1,
				nextIndex = curIndex + 1;

			if($('form button').is('.submit')){
				$('form').submit();
				return;
			}

			$currentInput.removeClass('active');
			$currentInput.next().addClass('active');

			if(curInputNum === $('form label').length - 1){
				$('form button .resting').text('submit');
				$('form button .hover .inner').text('submit');
				$('form button').addClass('submit');
			}

			// if(curIndex === $('form label').length){
			// 	$('form button .resting').text('submit');
			// 	$('form button .hover .inner').text('submit');
			// 	$('form button').addClass('submit');
			// } else {

			// }

			this.$pagerCurrent.html(curInputNum + 1);
		},

		addPhotoToPhotosList: function(photoId){
			var numSlides = $('.photos-wrap .photo').length,
				photoId = photoId,
				photoWidth = $('#' + photoId).outerWidth(true),
				stageWidth = $('.add-photo .inner').width(),
				newWidth;

			newWidth = Math.ceil($('.add-photo .inner').width()) + Math.ceil($('#' + photoId).outerWidth(true));

			if($.inArray(photoId, this.addedPhotosArray) !== -1){
				alert('You\'ve already added this photo');
				return;
			}

			$('[data-photo-id="'+ photoId +'"]').addClass('added');

			$('#' + photoId).addClass('show');

			$('.add-photo .inner').width(newWidth);

			this.addedPhotosArray.push(photoId);
			$('.add-photo-btn').addClass('disabled');
		},

		removePhotoFromPhotosList: function($photo){
			$photo.removeClass('show');
			$('[data-photo-id="'+ $photo.attr('id') +'"]').removeClass('added');

			var newWidth = Math.ceil($('.add-photo .inner').outerWidth()) - Math.ceil($photo.outerWidth(true));
			$('.add-photo .inner').width(newWidth);
			$('.add-photo-btn').removeClass('disabled');

			this.addedPhotosArray.splice($.inArray($photo.attr('id'), this.addedPhotosArray), 1);
		}
	};

	$(function(){
		assembly.contact.init();
	});
})(jQuery);

