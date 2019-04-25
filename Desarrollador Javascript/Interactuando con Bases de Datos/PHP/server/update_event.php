<?php
     session_start();
     require('./conector.php');
 
     $conn = new ConectorBD();
 
     $id = $_POST['id'];
     $fechaInicio = $_POST['start_date'];
     $horaInicio = $_POST['start_hour'];
     $fechaFinalizacion = $_POST['end_date'];
     $horaFinalizacion = $_POST['end_hour'];
 
    //me fijo el tipo de evento
    $sql = "select diaCompleto from eventos where id = ".$id;

    $consulta = $conn->ejecutarSql($sql);

    $respuesta[] = '';

    if( $consulta == true ){
        $ev = $consulta->fetch_assoc();

        if( $ev['diaCompleto'] == 0 ){

            $sql = "update eventos set "
            . "fechaInicio = '" . $fechaInicio 
            . "', horaInicio = '" . $horaInicio 
            . "', fechaFinalizacion = '" . $fechaFinalizacion
            . "', horaFinalizacion = '" . $horaFinalizacion
            . "' where id = ".$id;

        }else {

            $sql = "update eventos set "
            . "fechaInicio = '" . $fechaInicio 
            . "' where id = ".$id;

        }

        $resultado = $conn->ejecutarSql($sql);

        if( $resultado == true )
        {
            $respuesta['msg'] = 'OK';
        }else{
            $respuesta['msg'] = 'Ocurrio un error al actualizar el evento!';
        }

    }    

     $conn->cerrarConexion();

     echo json_encode($respuesta);

 ?>
