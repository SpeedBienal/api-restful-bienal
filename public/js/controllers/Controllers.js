const API = 'http://localhost:3000/api/v1/'

//
// models
//

class Obra {
    constructor(_titulo, _tecnica, _autor, _categoria, _clase) {
        this.titulo = _titulo
        this.tecnica = _tecnica
        this.autor = _autor
        this.categoria = _categoria
        this.clase = _clase
    }
}

class Artista {
    constructor(_nombre, _apellido, _pseudonimo, _email, _dni) {
        this.nombre = _nombre
        this.apellido = _apellido
        this.pseudonimo = _pseudonimo
        this.email = _email
        this.dni = _dni
    }
}

//
// services
//

const _artistasService = $http =>
    Object.assign({ createNew: obj => $http.post('${API}artistas', obj) })
const _obrasService = $http =>
    Object.assign({
        createNew: obj => $http.post(`${API}obras`, obj),
        traerAutores: () => $http.get(`${API}artistas`)
    })
const votacionService_ = $http =>
    Object.assign({
        getInitial: () => $http.get(`${API}votacion`),
        getObra: id => $http.get(`${API}obras/${id}`)
    })

const socket_ = $timeout => {
    this.socket = io()

    this.on = (eventName, callback) => {
        if (this.socket) {
            this.socket.on(eventName, data => {
                $timeout(() => {
                    callback(data)
                })
            })
        }
    }

    this.emit = (eventName, data) => {
        if (this.socket) this.socket.emit(eventName, data)
    }

    this.removeListener = eventName => {
        if (this.socket) this.socket.removeListener(eventName)
    }
}

//
// helpers
//

const wiper = lista => x => {
    lista.forEach(prop => (x[prop] = ''))
}
const wipeArtista = wiper(['nombre', 'apellido', 'pseudonimo', 'email', 'dni'])
const wipeObra = wiper(['titulo', 'tecnica', 'auto', 'categoria', 'clase'])

function crearAlert(type, content) {
    var contenedor = document.getElementById('divs-de-alerta')
    contenedor.innerHTML = ''

    var alertElement = `<div role="alert" class="alert alert-${type} alert-dismissible fade in">
            <button type="button" data-dismiss="alert" class="close" aria-label="Close">
               <span aria-hidden="true">×</span>
            </button>
            ${content}
        </div>`
    contenedor.insertAdjacentHTML('afterbegin', alertElement)
}

const Lighten = (col, amt) => {
    var usePound = false
    if (col[0] == '#') {
        col = col.slice(1)
        usePound = true
    }
    var num = parseInt(col, 16)
    var r = (num >> 16) + amt
    if (r > 255) r = 255
    else if (r < 0) r = 0
    var b = ((num >> 8) & 0x00ff) + amt
    if (b > 255) b = 255
    else if (b < 0) b = 0
    var g = (num & 0x0000ff) + amt
    if (g > 255) g = 255
    else if (g < 0) g = 0
    return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

const retribeGraph = color =>
    Objec.assign({
        data: [0, 0, 0, 0],
        labels: ['uno', 'dos', 'tres', 'otros'],
        colors: [
            color,
            Lighten(color, 30),
            Lighten(color, 60),
            Lighten(color, 90)
        ]
    })

//
// controllers
//

function _artistas($scope, artistasService) {
    // init
    wipeArtista($scope)

    // functions
    $scope.sendData = function() {
        var obj = new Artista(
            $scope.nombre,
            $scope.apellido,
            $scope.pseudonimo,
            $scope.email,
            $scope.dni
        )

        artistasService
            .createNew(obj)
            .then(() => {
                wipeArtista($scope)
                crearAlert('success', 'Artista creado correctamente')
            })
            .catch(() => {
                crearAlert('danger', 'Ocurrió un problema al crear el artista')
            })
    }
}

function _obras($scope, obrasService) {
    // init
    $scope.autores = []
    wipeObra($scope)

    obrasService
        .traerAutores()
        .then(res => {
            $scope.autores = res.data
        })
        .catch(res => {
            console.log(res)
        })

    // functions
    $scope.sendData = () => {
        var obj = new Obra(
            $scope.titulo,
            $scope.tecnica,
            $scope.autor,
            $scope.categoria,
            $scope.clase
        )

        obrasService
            .createNew(obj)
            .then(() => {
                wipeObra($scope)
                crearAlert('success', 'Obra creada correctamente')
            })
            .catch(() => {
                crearAlert('danger', 'Ocurrió un problema al crear la obra')
            })
    }
}

function _votacion($scope, socket, votacionService) {
    // init
    $scope.visuales = retribeGraph('#395E80')
    $scope.audiovisuales = retribeGraph('#ed7635')
    $scope.musica = retribeGraph('#f8b451')
    $scope.escenicas = retribeGraph('#ea5a57')
    $scope.letras = retribeGraph('#00a880')

    // socket setup
    socket.on('voto', data => {
        votacionService.getInitial().then(({ data }) => {
            const applyData = total => (collection, data) => {
                for (var i = 0; i < data.length; i++) {
                    $scope[collection].data[i] = data[i].suma
                    $scope[collection].labels[i] = data[i]._id.titulo
                }
                $scope[collection].data[3] =
                    total - (data[0].suma + data[1].suma + data[2].suma)
            }
            const apply = applyData(data.total)

            apply($scope.audiovisuales, data.audiovisuales)
            apply($scope.visuales, data.visuales)
            apply($scope.musica, data.musica)
            apply($scope.escenicas, data.escenicas)
            apply($scope.letras, data.letras)
        })
    })

    $scope.$on('$destroy', () => {
        socket.removeListener('voto')
    })
}

//
// initialization
//

// dashboard
angular
    .module('remoto', [])
    .factory('obrasService', ['$http', _obrasService])
    .factory('artistasService', ['$http', _artistasService])
    .controller('ArtistasController', ['$scope', 'artistasService', _artistas])
    .controller('ObrasController', ['$scope', 'obrasService', _obras])

// Services de la votacion
angular
    .module('votacion')
    .factory('votacionService', ['$http', votacionService_])
    .service('socket', ['$timeout', socket_])

// votacion
angular
    .module('votacion', ['chart.js'])
    .controller('VotacionController', [
        '$scope',
        'socket',
        'votacionService',
        _votacion
    ])
