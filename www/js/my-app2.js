// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

document.addEventListener('deviceready', function(){
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
}, false);
