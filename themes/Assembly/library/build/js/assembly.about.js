/* repo: assembly/ - Package Version: 1.0.0 - 2017-03-23 02:01 pm - User: Phoydar */
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
			$('.employee-list').waypoint({
				handler: function(direction) {
					if(direction === 'down'){
						$('.employee-list').addClass('in-view');
					} else {
						$('.employee-list').removeClass('in-view');
					}
				},
				offset: '100%'
			});

			$('.employee-list').waypoint({
				handler: function(direction) {
					if(direction === 'down'){
						$('.employee-list').removeClass('in-view');
					} else {
						$('.employee-list').addClass('in-view');
					}
				},
				offset: 0 - $('.employee-list').outerHeight()
			});
		}
	};

	$(function(){
		assembly.about.init();
	});
})(jQuery);