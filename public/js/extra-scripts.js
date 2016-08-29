(function () {
  $('#carousel-audiovisuales, #carousel-escenicas, #carousel-letras, #carousel-musica, #carousel-visuales').hide();
  var lastOne = null;
  $('#av-carrouseler').bind('click',function ( e ) {
    e.preventDefault();
    $('#carousel-audiovisuales').slideDown(400,function () {
      lastOne = $('#carousel-audiovisuales')
    });
    lastOne.slideUp(200);
  });
  $('#e-carrouseler').bind('click',function ( e ) {
    e.preventDefault();
    $('#carousel-escenicas').slideDown(400,function () {
      lastOne = $('#carousel-escenicas')
    });
    lastOne.slideUp(200);
  });
  $('#l-carrouseler').bind('click',function ( e ) {
    e.preventDefault();
    $('#carousel-letras').slideDown(400,function () {
      lastOne = $('#carousel-letras')
    });
    lastOne.slideUp(200);
  });
  $('#m-carrouseler').bind('click',function ( e ) {
    e.preventDefault();
    $('#carousel-musica').slideDown(400,function () {
      lastOne = $('#carousel-musica')
    });
    lastOne.slideUp(200);
  });
  $('#v-carrouseler').bind('click',function ( e ) {
    e.preventDefault();
    $('#carousel-visuales').slideDown(400,function () {
      lastOne = $('#carousel-visuales')
    });
    lastOne.slideUp(200);
  });

  /*Cambiador de album segun día*/
})();
