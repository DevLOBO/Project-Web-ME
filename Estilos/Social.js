$(document).ready(function() {
	$('#F1').hover(function() {
		$('#F1').removeClass('icon-mail2');
		$('#F1').addClass('Correo');
},
	function() {
		$('#F1').removeClass('Correo');
		$('#F1').addClass('icon-mail2');
});

	$('#F2').hover(function() {
		$('#F2').removeClass('icon-facebook');
		$('#F2').addClass('Facebook');
},
	function() {
		$('#F2').removeClass('Facebook');
		$('#F2').addClass('icon-facebook');
});

	$('#F3').hover(function() {
		$('#F3').removeClass('icon-twitter');
		$('#F3').addClass('Twitter');
},
	function() {
		$('#F3').removeClass('Twitter');
		$('#F3').addClass('icon-twitter');
});

	$('#O1').hover(function() {
		$('#O1').removeClass('icon-mail2');
		$('#O1').addClass('Correo');
},
	function() {
		$('#O1').removeClass('Correo');
		$('#O1').addClass('icon-mail2');
});

	$('#O2').hover(function() {
		$('#O2').removeClass('icon-facebook');
		$('#O2').addClass('Facebook');
},
	function() {
		$('#O2').removeClass('Facebook');
		$('#O2').addClass('icon-facebook');
});

	$('#O3').hover(function() {
		$('#O3').removeClass('icon-twitter');
		$('#O3').addClass('Twitter');
},
	function() {
		$('#O3').removeClass('Twitter');
		$('#O3').addClass('icon-twitter');
});

});