(function () {
  angular
    .module('artista',[])
    .controller('ArtistasController',['$scope', 'artistasService', _artistas])
    .factory('artistasService', ['$http', _artistasService]);

  class Artista {
    constructor(_nombre, _apellido, _pseudonimo, _email, _dni){
      this.nombre = _nombre;
      this.apellido = _apellido;
      this.pseudonimo = _pseudonimo;
      this.email = _email;
      this.dni = _dni;
    }
  }

  function _artistas( $scope, artistasService ) {
    $scope.nombre = "";
    $scope.apellido = "";
    $scope.pseudonimo = "";
    $scope.email = "";
    $scope.dni = "";

    $scope.sendData = function () {
      //no se asuste mijo, javascript vanilla mas adelante
      var obj = new Artista($scope.nombre, $scope.apellido, $scope.pseudonimo, $scope.email, $scope.dni);
      //contenedor de mis alerts
      var contenedor = document.querySelector('#divs-de-alerta');
      //creo variables para cada node que voy a pushear
      var push_alert = document.createElement("div");
      var push_button = document.createElement("button");
      var push_span = document.createElement("span");
      var push_p = document.createElement("p");

      //les defino sus atributos
      push_alert.setAttribute("role","alert");
      push_alert.className += "alert alert-dismissible fade in";
      push_button.setAttribute("type","button");
      push_button.setAttribute("data-dismiss","alert");
      push_button.setAttribute("class","close");
      push_button.setAttribute("aria-label","Close");
      push_span.setAttribute("aria-hidden","true");
      push_span.innerHtml = "×";
      //pero a <p> todavia no le asigno nada adentro
      artistasService.createNew( obj ).then(function (res) {
        //el todo bien Promise
        $scope.nombre = "";
        $scope.apellido = "";
        $scope.pseudonimo = "";
        $scope.email = "";
        $scope.dni = "";

        //aca agrego el tipo de alert success/danger
        push_alert.className += " alert-success";
        //empiezo a agregar los nodos
        contenedor.appendChild(push_alert);
        push_button.appendChild(push_span);
        push_alert.appendChild(push_button);
        push_p.innerHtml = "Artista agregado correctamente";
        push_alert.appendChild(push_p);


      }, function (res) {
        //el todo mal Promise

        push_alert.className += " alert-danger";
        var push_h4 = document.createElement("h4").innerHtml = "Oh snap!"
        push_button.appendChild(push_span);
        push_alert.appendChild(push_button);
        push_alert.appendChild(push_h4);
        push_p.innerHtml = " Algo pasó! No se pudo agregar el artista";
        push_alert.appendChild(push_p);
        contenedor.appendChild(push_alert);
        console.log(res);
      });
    };
  }

  function _artistasService($http) {
    return {
      createNew: function (obj) {
        return $http.post('http://localhost:3000/api/v1/artistas', obj);
      }
    };
  }
})();
