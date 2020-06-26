$(document).ready(
  function(){
    // AJAX
    $.ajax(
      {
        // endpoint API e method
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        method: 'GET',

        // in caso di successo
        success: function(canzoneRandom) {
          // Inserisco canzone random nella variabile canzone
          var canzone = canzoneRandom.response;

          // Struttura dinamica con handlebars
          var source = $('#entry-template').html();
          var template = Handlebars.compile(source);

          //ciclo per appendere tutte le canzoni nell'html
          for (var i = 0; i < canzone.length; i++) {
            var context = canzone[i];

            var html = template(context);
            $('.cds-container').append(html);
          }

          // al change della select
          $('.select').on('change',
            function(){
              // creo bariabile del genere selezionato
              var genereMusicale = $(this).val().toLowerCase();

              // se seleziono tutti sono tutti visibili
              if (genereMusicale == 'tutti') {
                $('.cd').removeClass('hidden');
              }else {
                // altrimenti faccio un each per vedere tutti i .cd
                $('.cd').each(
                  function(){
                    if ($(this).find('.genre').text().toLowerCase() == genereMusicale) { // levo classe hidden al .genre == a genereMusicale 
                    $(this).removeClass('hidden');
                  } else { // aggiungo .hidden a tutti gli altri
                    $(this).addClass('hidden');
                  }
                  }
                );
              }
            }
          );

        },
        error:
        function() {
          alert('Errore');
        }
      }

    );
  }
);
