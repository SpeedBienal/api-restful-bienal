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
      var obj = new Artista($scope.nombre, $scope.apellido, $scope.pseudonimo, $scope.email, $scope.dni);
      artistasService.createNew( obj ).then(function (res) {
        //el todo bien Promise
        $scope.nombre = "";
        $scope.apellido = "";
        $scope.pseudonimo = "";
        $scope.email = "";
        $scope.dni = "";
        //$('div.alert.alert-info').after('<div class="alert alert-success alert-dismissible fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button><p>Artista creado correctamente</p></div>');
      }, function (res) {
        //el todo mal Promise
        //$('div.alert.alert-info').after('<div class="alert alert-danger alert-dismissible fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> <h4>Oh snap!</h4> <p>Algo pasó! No se pudo agregar el artista</p></div>')
        console.log(res);
      });
    }
  }

  function _artistasService($http) {
    return {
      createNew: function (obj) {
        return $http.post('http://localhost:3000/api/v1/artistas', obj);
      }
    };
  }
})();
