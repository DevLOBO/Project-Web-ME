$(document).ready(function() {
	$('.Envoltura').hover(function() {
		$(this).children('img').stop().animate({
			left : '-360px'
		}, 'normal');
	}, 

	function() {
		$(this).children('img').stop().animate({
			left : '0'
		}, 'normal');
	});
});