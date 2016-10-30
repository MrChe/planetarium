import $ from 'jquery';

$(document).ready(function () {
	$('.mobile-menu__toggle-button').on('click', function () {
		$(this).toggleClass('mobile-menu__toggle-button_state_open');
		$('body').toggleClass('fixed');
	});
});
