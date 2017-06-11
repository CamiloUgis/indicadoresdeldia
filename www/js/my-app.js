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
  $('#sub').bind('click', recibe);
  $('#ayer').html(localStorage.getItem('ayer'));
  $('#hoy').html(localStorage.getItem('hoy'));
  $('#maniana').html(localStorage.getItem('maniana'));
  //$('#euro').html(localStorage.getItem('euro'));
  //$('#dolar').html(localStorage.getItem('dolar'));
  $('uf').html(localStorage.getItem('uf'));
  $('ipc').html(localStorage.getItem('ipc'));
  $('utm').html(localStorage.getItem('utm'));
  $('imacec').html(localStorage.getItem('imacec'));
  $('normal').html(localStorage.getItem('normal'));
  $('normal_maniana').html(localStorage.getItem('normal_maniana'));
  $('catalitico').html(localStorage.getItem('catalitico'));

}, false);

function recibe(){
      myApp.showPreloader('Recibiendo datos...');
      $.ajax({
          dataType: 'json',
          type: 'POST',
          url: 'http://indicadoresdeldia.cl/webservice/indicadores.json',
          success: function (data, status, xhr) {
                  localStorage.setItem('ayer', data.santoral.ayer);
		          localStorage.setItem('hoy', data.santoral.hoy);
		          localStorage.setItem('maniana', data.santoral.maniana);
		          //localStorage.setItem('dolar', data.moneda.dolar);
		          //localStorage.setItem('euro', data.moneda.euro);
		          localStorage.setItem('uf', data.indicador.uf);
                  localStorage.setItem('ipc', data.indicador.ipc);
		          localStorage.setItem('utm', data.indicador.utm);
		          localStorage.setItem('imacec', data.indicador.imacec);
                  localStorage.setItem('normal', data.restriccion.normal);
                  localStorage.setItem('normal_maniana', data.restriccion.normal_maniana);
                  localStorage.setItem('catalitico', data.restriccion.catalitico);
                  myApp.hidePreloader();
                  myApp.alert("Mensaje <3",'Inicio de Aplición');
                  window.location = "main.html";
          },
          error: function (xhr, status) {
              myApp.hidePreloader();
              myApp.alert('Hubo un error con la conexión','Error');
          }
      });
}

