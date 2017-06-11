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
  $('#hoy').html(localStorage.getItem('hoy'));
  $('#maniana').html(localStorage.getItem('maniana'));
  $('#ayer').html(localStorage.getItem('ayer'));
  $('#uf').html(localStorage.getItem('uf'));
  $('#ipc').html(localStorage.getItem('ipc'));
  $('#utm').html(localStorage.getItem('utm'));
  $('#imacec').html(localStorage.getItem('imacec'));
  $('dolar').html(localStorage.getItem('dolar')); 
  $('euro').html(localStorage.getItem('euro'));
}, false);
