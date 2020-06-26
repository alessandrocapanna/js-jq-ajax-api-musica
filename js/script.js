// Attraverso una chiamata ajax all’Api di boolean avremo a
// disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
$(document).ready(
  function(){
    $.ajax(
      {
        // endpoint API  method
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        method: 'GET',

        // in caso di successo
        success: function(canzoneRandom) {
          // Inserisco canzone random nella variabile
          var canzone = canzoneRandom.response;

          // Struttura dinamica con handlebars
          var source = $('#entry-template').html();
          var template = Handlebars.compile(source);

          for (var i = 0; i < canzone.length; i++) {
            var context = canzone[i];
            console.log(context);
            var html = template(context);
            $('.cds-container').append(html);
          }

          // $(document).on('change','.select',
          //   function(){
          //
          //     var
          //     if ($('select').val() == $(this)) {
          //       console.log('lol');
          //     }
          //   }
          // );




        },
        error:
        function() {
          alert('Errore');
        }
      }

    );
  }
);
