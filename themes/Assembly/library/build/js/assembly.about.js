/* repo: assembly/ - Package Version: 1.0.0 - 2017-02-27 11:21 pm - User: Phoydar */
/*!
 * Assembly Menu Navigation
 */
var assembly = assembly || {};

(function($){
	assembly.about = {
		init: function(){
			this.bindEvents();
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
		}
	};

	$(function(){
		assembly.about.init();
	});
})(jQuery);