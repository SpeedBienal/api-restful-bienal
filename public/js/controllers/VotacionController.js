(function () {
  angular
    .module('votacion', ['chart.js'])
    .controller('VotacionController',['$scope', 'socket', 'votacionService', _votacion]);

  function _votacion ($scope, socket, votacionService) {
    $scope.visuales ={
      'data': [0,0,0,0],
      'labels': ['uno', 'dos', 'tres', 'otros'],
      'colors': ['#395E80',Lighten('#395E80',30),Lighten('#395E80',60),Lighten('#395E80',90)]
    };
    $scope.audiovisuales = {
      'data': [0,0,0,0],
      'labels': ['uno', 'dos', 'tres', 'otros'],
      'colors': ['#ed7635',Lighten('#ed7635',30),Lighten('#ed7635',60),Lighten('#ed7635',90)]
    };
    $scope.musica = {
      'data': [0,0,0,0],
      'labels': ['uno', 'dos', 'tres', 'otros'],
      'colors': ['#f8b451',Lighten('#f8b451',30),Lighten('#f8b451',60), Lighten('#f8b451',90)]
    };
    $scope.escenicas = {
      'data': [0,0,0,0],
      'labels': ['uno', 'dos', 'tres', 'otros'],
      'colors': ['#ea5a57',Lighten('#ea5a57',30),Lighten('#ea5a57',60), Lighten('#ea5a57',90)]
    };
    $scope.letras = {
      'data': [0,0,0,0],
      'labels': ['uno', 'dos', 'tres', 'otros'],
      'colors': ['#00a880',Lighten('#00a880',30),Lighten('#00a880',60), Lighten('#00a880',90)]
    };

    socket.on('voto', function (data) {
      votacionService.getInitial().then(function (res) {

        var total = res.data.total;
        var av = res.data.audiovisuales;
        var v = res.data.visuales;
        var m = res.data.musica;
        var e = res.data.escenicas;
        var l = res.data.letras;

        for (var i = 0; i < av.length; i++) {
          $scope.audiovisuales.data[i] = av[i].suma;
          $scope.audiovisuales.labels[i] = av[i]._id.titulo;
        }
        $scope.audiovisuales.data[3] = total - (av[0].suma + av[1].suma + av[2].suma);

        for (var i = 0; i < v.length; i++) {
          $scope.visuales.data[i] = v[i].suma;
          $scope.visuales.labels[i] = v[i]._id.titulo;
        }
        $scope.visuales.data[3] = total - (v[0].suma + v[1].suma + v[2].suma);

        for (var i = 0; i < m.length; i++) {
          $scope.musica.data[i] = m[i].suma;
          $scope.musica.labels[i] = m[i]._id.titulo;
        }
        $scope.musica.data[3] = total - (m[0].suma + m[1].suma + m[2].suma);

        for (var i = 0; i < e.length; i++) {
          $scope.escenicas.data[i] = e[i].suma;
          $scope.escenicas.labels[i] = e[i]._id.titulo;
        }
        $scope.escenicas.data[3] = total - (e[0].suma + e[1].suma + e[2].suma);

        for (var i = 0; i < l.length; i++) {
          $scope.letras.data[i] = l[i].suma;
          $scope.letras.labels[i] = l[i]._id.titulo;
        }
        $scope.letras.data[3] = total - (l[0].suma + l[1].suma + l[2].suma);
        console.log(res.data);
      });

    });

    $scope.$on('$destroy', function() {
        socket.removeListener('voto');
    });


  }

  function Lighten(col, amt) {
      var usePound = false;
      if (col[0] == "#") {
          col = col.slice(1);
          usePound = true;
      }
      var num = parseInt(col,16);
      var r = (num >> 16) + amt;
      if (r > 255) r = 255;
      else if  (r < 0) r = 0;
      var b = ((num >> 8) & 0x00FF) + amt;
      if (b > 255) b = 255;
      else if  (b < 0) b = 0;
      var g = (num & 0x0000FF) + amt;
      if (g > 255) g = 255;
      else if (g < 0) g = 0;
      return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  }
})();
