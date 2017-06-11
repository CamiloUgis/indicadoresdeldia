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
    console.log('ready');
    $('#sub').bind('click', enviar);
}, false);

function enviar(){
    var login = $('#user').val();
      myApp.showPreloader('Obteniendo información...');
      $.ajax({
          dataType: 'json',
          type: 'GET',
          data: {
              login: login
          },
          url: 'http://indicadoresdeldia.cl/webservice/indicadores.json',
          success: function (data, status, xhr) {
                  localStorage.setItem('santoralA', data.data.ayer);
                  localStorage.setItem('santoralH', data.data.hoy);
                  localStorage.setItem('santoralM', data.data.maniana);
                  //localStorage.setItem('dolar', data.data.dolar);
                 // localStorage.setItem('euro', data.data.euro);
                  localStorage.setItem('uf', data.data.uf);
                  localStorage.setItem('ipc', data.data.ipc );
                  localStorage.setItem('utm', data.data.utm);
                  localStorage.setItem('imacec', data.data.imacec);
                  if(('#santoralH').equals(('#login'))){
                      myApp.showPreloader('¡Felicidades por su santoral!');
                  }else{
                      if(('#santoralA').equals(('#login'))){
                            myApp.showPreloader('Ayer fue su santoral, ¡felicidades atrasadas!');
                      }
                      else{
                           myApp.showPreloader('Mañana es su santoral, ¡Atento!');
                      }
                  }
                  myApp.hidePreloader();
                  myApp.alert(data.info,'Inicio de Sesión');
                  window.location = "main.html";
          },
      });
}
