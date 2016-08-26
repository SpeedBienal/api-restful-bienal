(function () {
  angular
    .module('obras',[])
    .factory('obrasService', ['$http', _obrasService])
    .controller('ObrasController', ['$scope', 'obrasService', _obras]);

  class Obra {
    constructor(_titulo, _tecnica, _autor, _categoria, _clase) {
      this.titulo = _titulo;
      this.tecnica = _tecnica;
      this.autor = _autor;
      this.categoria = _categoria;
      this.clase = _clase;
    }
  }

  function _obras( $scope, obrasService ) {
    $scope.autores = [];
    $scope.titulo = "";
    $scope.tecnica = "";
    $scope.autor = "";
    $scope.categoria = "";
    $scope.clase = "";

    obrasService.traerAutores().then(function (res) {
      $scope.autores = res.data;
      //push good
    }, function (res) {
      //push error
      console.log(res);
    });

    $scope.sendData = function () {
      var obj = new Obra($scope.titulo, $scope.tecnica, $scope.autor, $scope.categoria, $scope.clase);

      obrasService.createNew( obj ).then(function (res) {
        //el todo bien Promise
        $scope.titulo = "";
        $scope.tecnica = "";
        $scope.autor = "";
        $scope.categoria = "";
        $scope.clase = "";

        crearAlert("success", "Obra creada correctamente");
      }, function (res) {
        //el todo mal Promise
        crearAlert("danger", "Ocurrió un problema innesperado al crear la obra")
        console.log(res);
      });
    };
  }

  function _obrasService( $http ) {
    return {
      createNew: function ( obj ) {
        return $http.post( 'http://localhost:3000/api/v1/obras', obj );
      },
      traerAutores: function () {
        return $http.get( 'http://localhost:3000/api/v1/artistas' );
      }
    };
  }

  function crearAlert( type, content ) {
    //no se asuste mijo, javascript vanilla mas adelante
    var contenedor = document.querySelector('#divs-de-alerta');

    var push_alert = document.createElement("div");
    push_alert.setAttribute("role","alert");
    push_alert.className += "alert alert-"+type+" alert-dismissible fade in";

    var push_button = document.createElement("button");
    push_button.setAttribute("type","button");
    push_button.setAttribute("data-dismiss","alert");
    push_button.setAttribute("class","close");
    push_button.setAttribute("aria-label","Close");

    var push_span = document.createElement("span");
    push_span.appendChild( document.createTextNode( "×" ) );
    push_span.setAttribute("aria-hidden","true");

    push_alert.appendChild(push_button);
    push_button.appendChild(push_span);
    push_alert.appendChild(document.createTextNode( content ));
    contenedor.appendChild(push_alert);
    console.log(push_alert);
  }
})();
