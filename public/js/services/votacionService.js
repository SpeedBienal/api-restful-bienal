(function () {
  angular
    .module('votacion')
    .factory('votacionService', ['$http', votacionService_])
    .service('socket', ['$timeout', socket_]);

  function votacionService_($http) {
    return {
      getInitial: function () {
        return $http.get('http://localhost:3000/api/v1/votacion');
      },
      getObra: function (id) {
        return $http.get('http://localhost:3000/api/v1/obras/' + id );
      }
    }
  }

  function socket_($timeout) {
    this.socket = io();

    this.on = function(eventName, callback) {
      if (this.socket) {
        this.socket.on(eventName, function(data) {
          $timeout(function() {
            callback(data);
          });
        });
      }
    };

    this.emit = function(eventName, data) {
      if (this.socket) {
        this.socket.emit(eventName, data);
      }
    };

    this.removeListener = function(eventName) {
      if (this.socket) {
        this.socket.removeListener(eventName);
      }
    };
  }
})();
