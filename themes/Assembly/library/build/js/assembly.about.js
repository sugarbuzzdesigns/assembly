/* repo: assembly/ - Package Version: 1.0.0 - 2017-03-19 06:01 pm - User: Phoydar */
/*!
 * Assembly Menu Navigation
 */
var assembly = assembly || {};

(function($){
	assembly.about = {
		init: function(){
			this.bindEvents();
			this.waypoints();
		},

		bindEvents: function(){
			$('.employee-list .employee').on('click', function employeeClickHandler(evt){
				evt.stopPropagation();

				var $employee = $(this);
				var employeeName = $(this).data('employee-name');

				$employee.addClass('clicked');

				$(this).siblings().addClass('invisible');

				$('.employee-info[data-employee="'+ employeeName +'"]').addClass('show');

				$('.employees').addClass('info-open').css({minHeight: $('.employee-info[data-employee="'+ employeeName +'"]').height() + 100});
			});

			$('.employees').on('click', function openInfoPanelClickHandler(evt){
				if($(this).is('.info-open')){
					$(this).removeClass('info-open');
					$('.employee-info.show').removeClass('show');
					$('.employee').removeClass('invisible clicked');
					$('.employees').css({
						minHeight: 0
					});
				}
			});

			assembly.util.env.$win.on('scroll-down', function(){
				$('.scroll-overlay').addClass('going-down');
				$('.scroll-overlay').removeClass('going-up');
			});

			assembly.util.env.$win.on('scroll-up', function(){
				$('.scroll-overlay').addClass('going-up');
				$('.scroll-overlay').removeClass('going-down');
			});
		},
		waypoints: function(){
			this.waypointsInView = $('[data-waypoint]').waypoint({
				handler: function(direction) {
					$(this.element).addClass('in-view');
				},
				offset: '50%'
			});

			this.waypointsOutOfView = $('[data-waypoint]').waypoint({
				handler: function(direction) {
					if(direction === 'up'){
						$(this.element).removeClass('in-view')
					} else {

					}
				},
				offset: '100%'
			});

			var inview = new Waypoint.Inview({
				element: $('[data-waypoint]')[0],
				enter: function(direction) {
					// console.log('Enter triggered with direction ' + direction)
				},
				entered: function(direction) {
					// console.log('Entered triggered with direction ' + direction)
				},
				exit: function(direction) {
					// console.log('Exit triggered with direction ' + direction)
				},
				exited: function(direction) {
					// console.log('Exited triggered with direction ' + direction)
				}
			});
		}
	};

	$(function(){
		assembly.about.init();
	});
})(jQuery);