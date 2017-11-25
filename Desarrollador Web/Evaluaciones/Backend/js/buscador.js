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

      var parametros = {
        "todos": 0,
        "ciudad": $('#selectCiudad').val(),
        "tipo": $('#selectTipo').val(),
        "precio": $('#rangoPrecio').val()
      };

      $.post('buscador.php', $("#formulario").serialize(), function(data){
        $.each(data, function( key, valor){
          console.log(valor.Ciudad+' - '+valor.Tipo+' - '+valor.Precio);
        })
      }, 'json');

      event.preventDefault();
    });

});
