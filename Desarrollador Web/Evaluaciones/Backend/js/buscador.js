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

    //Aca almaceno el contenido base sin propiedades cargadas
    var contenido_base = $('.colContenido').html();
    //Aca guardo la funcionalidad del boton mostrar todos para que no se pierda al recargar el bloque html con propiedades
    //Es una copia de la funcion de abajo mostrarTodos.click(...)
    var funcion_mostrar_todos = "<script type='text/javascript'>$('#mostrarTodos').click(function(event){$.post('buscador.php', {todos: 1}, function(data){$('.colContenido').html(contenido_base+funcion_mostrar_todos);$.each(data, function( key, valor){$('.colContenido').append(valor);});}, 'json');event.preventDefault();});</script>";

    $('#mostrarTodos').click(function(event){
      $.post('buscador.php', {todos: 1}, function(data){
        $('.colContenido').html(contenido_base+funcion_mostrar_todos);
        $.each(data, function( key, valor){
          $('.colContenido').append(valor);
        });
      }, 'json');
    });

    $('#formulario').on('submit', function(event){

      $.post('buscador.php', $("#formulario").serialize(), function(data){
        $('.colContenido').html(contenido_base+funcion_mostrar_todos);
        $.each(data, function( key, valor){
          $('.colContenido').append(valor);
        })
      }, 'json');

      event.preventDefault();
    });

});
