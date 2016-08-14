var Voto = require('mongoose').model('Voto');

exports.list = function (req, res, next) {
  Voto.find({}, function (err, votos) {
    if (err) {
      return next(err);
    } else {
      res.json(votos);
    }
  });
};

exports.list_short = function (req, res, next) {
  Voto.top3ByCategoria('audiovisuales', function (err, av_votos) {
    if (err) {
      return next(err);
    } else {
      Voto.top3ByCategoria('visuales', function (err, v_votos) {
        if (err) {
          return next(err);
        } else {
          Voto.top3ByCategoria('musica', function (err, m_votos) {
            if (err) {
              return next(err);
            } else {
              Voto.top3ByCategoria('escenicas', function (err, e_votos) {
                if (err) {
                  return next(err);
                } else {
                  Voto.top3ByCategoria('letras', function (err, l_votos) {
                    if (err) {
                      return next(err);
                    } else {
                      var votos = {

                        audiovisuales: av_votos,
                        visuales: v_votos,
                        musica: m_votos,
                        escenicas: e_votos,
                        letras: l_votos};
                      res.json(votos);
                    }});
                }});
            }});
        }});
    }});
};

exports.single_top = function (req, res, next, categoria) {
  Voto.top3ByCategoria( categoria, function (err, top) {
    if (err) {
      return next(err);
    } else {
      Voto.totalCategoria( categoria, function (err, total) {
        if (err) {
          return next(err);
        } else {
          res.json({obras: top, 'total': total });
        }
      })
    }
  });
};

exports.top = function () {
  Voto.top3ByCategoria('audiovisuales', function (err, av_votos) {
    if (err) {
      return next(err);
    } else {
      Voto.top3ByCategoria('visuales', function (err, v_votos) {
        if (err) {
          return next(err);
        } else {
          Voto.top3ByCategoria('musica', function (err, m_votos) {
            if (err) {
              return next(err);
            } else {
              Voto.top3ByCategoria('escenicas', function (err, e_votos) {
                if (err) {
                  return next(err);
                } else {
                  Voto.top3ByCategoria('letras', function (err, l_votos) {
                    if (err) {
                      return next(err);
                    } else {
                      var votos = {

                        audiovisuales: av_votos,
                        visuales: v_votos,
                        musica: m_votos,
                        escenicas: e_votos,
                        letras: l_votos};
                      return JSON.stringify(votos);
                    }});
                }});
            }});
        }});
    }});
};

exports.create = function (req, res, next) {
  var voto = new Voto( req.voto );
  voto.save(function (err) {
    if (err) {
      return next(err);
    } else {
      res.json(voto);
    }
  });
};

exports.read = function (req, res) {
  res.json( req.voto );
};
