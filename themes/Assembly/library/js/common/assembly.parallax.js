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
				if(Math.sign(scrollDiff) === 1){
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