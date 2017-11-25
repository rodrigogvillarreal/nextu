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
      $.post('buscador.php', {todos: 1}, function(data){

      }, 'json');
    });

    $('#formulario').on('submit', function(event){
      $.post('buscador.php', {todos: '0', ciudad: $('#selectCiudad').val(), tipo: $('#selectTipo').val(), precio: $('#rangoPrecio').val()}, function(data){

      }, 'json');
      event.preventDefault();
    });

});
