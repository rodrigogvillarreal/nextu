<?php
  
    session_start();
    require('./conector.php');

    $conn = new ConectorBD();

    $user = $_SESSION['username'];

    $titulo = $_POST['titulo'];
    $fechaInicio = $_POST['start_date'];
    ( $_POST['allDay'] == 'true' ) ? $diaCompleto = 1 : $diaCompleto = 0;
    $horaInicio = ( $diaCompleto == 0 ) ? $_POST['start_hour'] : NULL;
    $fechaFinalizacion = ( $diaCompleto == 0 ) ? $_POST['end_date'] : NULL;
    $horaFinalizacion = ( $diaCompleto == 0 ) ? $_POST['end_hour'] : NULL;

    if( $diaCompleto == 0 ){

        $sql = "insert into eventos(titulo, fechaInicio, horaInicio, fechaFinalizacion, horaFinalizacion, diaCompleto, nombreUsuario) values("
                . "'" . $titulo . "'," 
                . "'" . $fechaInicio . "'," 
                . "'" . $horaInicio . "'," 
                . "'" . $fechaFinalizacion . "'," 
                . "'" . $horaFinalizacion . "'," 
                . " " . $diaCompleto . "," 
                . "'" . $user . "')";

    } else {

        $sql = "insert into eventos(titulo, fechaInicio, diaCompleto, nombreUsuario) values("
                . "'" . $titulo . "'," 
                . "'" . $fechaInicio . "'," 
                . " " . $diaCompleto . "," 
                . "'" . $user . "')";

    }

    $resultado = $conn->ejecutarSql($sql);

    if( $resultado == true )
    {
        $respuesta['msg'] = 'OK';
    }else{
        $respuesta['msg'] = 'Ocurrio un error al guardar el evento!';
    }

    $conn->cerrarConexion();

    echo json_encode($respuesta);
 ?>
