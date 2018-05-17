$(document).ready(function() {
    var Home = $('#Home');
    var Buscar = $('.Buscar');
    var Menu = $('.Menu');
    var Icono = $('.icon-search');
    var Barra = $('#Bar');

    Buscar.focusin(function() {
        Buscar.css('width', '20%');
        Menu.css('width', '80%');
        Icono.css('color', '#000');
        Barra.css('color', '#000');
	Home.removeClass('icon-home');
	Home.addClass('icon-appleinc');
    });
        Buscar.focusout(function() {
	    Home.removeClass('icon-appleinc');
	    Home.addClass('icon-home');
            Buscar.css('width', '15%');
            Menu.css('width', '85%');
            Icono.css('color', '#FFF');
            Bar.css('color', '#FFF');
        });
});