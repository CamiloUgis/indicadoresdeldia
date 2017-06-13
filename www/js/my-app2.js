// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

$$('.open-about').on('click', function () {
    myApp.popup('.popup-about');
});

$$('.open-services').on('click', function () {
    myApp.popup('.popup-services');
});

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

document.addEventListener('deviceready', function () {
    $('#cerrar').bind('click', cerrar);
    //$('#nombre').html(localStorage.getItem('nombre'));
    $('#ayer').html(localStorage.getItem('ayer'));
    $('#hoy').html(localStorage.getItem('hoy'));
    $('#maniana').html(localStorage.getItem('maniana'));
    $('#uf').html(localStorage.getItem('uf'));
    $('#ipc').html(localStorage.getItem('ipc'));
    $('#utm').html(localStorage.getItem('utm'));
    $('#imacec').html(localStorage.getItem('imacec'));
    $('#normal').html(localStorage.getItem('normal'));
    $('#normal_maniana').html(localStorage.getItem('normal_maniana'));
    $('#catalitico').html(localStorage.getItem('catalitico'));
    $('#euro').html(localStorage.getItem('euro'));
    $('#dolar').html(localStorage.getItem('dolar'));
    var nombre = localStorage.getItem('nombre');
    nombre = nombre.toLowerCase();
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    var ayer = localStorage.getItem('ayer');
    var hoy = localStorage.getItem('hoy');
    var maniana = localStorage.getItem('maniana');
    ayer = ayer.split(',');
    hoy = hoy.split(',');
    maniana = maniana.split(',');
    verificar();

    function verificar() {
        ayer.forEach(function (ayerNombre) {
            if (nombre == ayerNombre.trim())
                myApp.popup('.popup-ayer');
        });
        hoy.forEach(function (hoyNombre) {
            if (nombre == hoyNombre.trim())
                myApp.popup('.popup-hoy');
        });
        maniana.forEach(function (manianaNombre) {
            if (nombre == manianaNombre.trim())
                myApp.popup('.popup-maniana');
        });

    }
}, false);

function cerrar() {
    window.location = "index.html"
}