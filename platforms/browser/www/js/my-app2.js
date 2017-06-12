// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

document.addEventListener('deviceready', function () {
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
    //$('#euro').html(localStorage.getItem('euro'));
    //$('#dolar').html(localStorage.getItem('dolar'));
    var nombre = localStorage.getItem('nombre');
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
                myApp.alert('Feliz santo atrasado ' + ayerNombre.trim() + ' <3 ', 'Felicidades !!!')
        });
        hoy.forEach(function (hoyNombre) {
            if (nombre == hoyNombre.trim())
                myApp.alert('Muy feliz santo ' + hoyNombre.trim() + ' <3 ', 'Felicidades !!!')
        });
        maniana.forEach(function (manianaNombre) {
            if (nombre == manianaNombre.trim())
                myApp.alert('Atento al día de tu santo mañana ' + manianaNombre.trim() + ' <3 ', 'Felicidades !!!')
        });

    }
}, false);
