$(document).ready(function() {
    console.log('Cargar Listas');
    //Cargo las ciudades
    $.post('../listaCiudades.php', function(data){
      //$('#selectCiudad').html($('#selectCiudad').html()+data);
      console.log(data);
    });
});
