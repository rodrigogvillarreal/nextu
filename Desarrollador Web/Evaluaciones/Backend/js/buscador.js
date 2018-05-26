$(document).ready(function() {
    console.log('Cargar Listas');
    //Cargo las ciudades
    $.post('listaCiudades.php', function(data){
      $.each(data, function( key, valor ) {
        $('#selectCiudad').append($('<option>', {
            value: valor,
            text : valor
        }));
        $('#selectCiudad').material_select();
      });
    }, 'json');
    //Cargo los tipos
    $.post('listaTipos.php', function(data){
      $.each(data, function( key, valor ) {
        $('#selectTipo').append($('<option>', {
            value: valor,
            text : valor
        }));
        $('#selectTipo').material_select();
      });
    }, 'json');

    $('#mostrarTodos').click(function(){

      $('#resultados').html('');
      $.post('buscador.php', {todos: 1, ciudad: '', tipo: 0, precio: 0}, function(data){
        $.each(data, function( key, valor){
          $('#resultados').append(valor);
        });
      }, 'json');

    });

    $('#formulario').on('submit', function(event){

      $('#resultados').html('');
      $.post('buscador.php', $("#formulario").serialize(), function(data){
        $.each(data, function( key, valor){
          $('#resultados').append(valor);
        })
      }, 'json');

      event.preventDefault();
    });

});
