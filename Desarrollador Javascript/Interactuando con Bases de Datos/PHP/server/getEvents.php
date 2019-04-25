<?php
    session_start();
    require('./conector.php');

    $conn = new ConectorBD();

    $user = $_SESSION['username'];

    // $respuesta['eventos'][] = array('id' => 1, 'title' => 'Mi evento', 'start' => '2019-04-25');
    // $respuesta['eventos'][] = array('id' => 2, 'title' => 'Mi otro evento', 'start' => '2019-04-26', 'end' => '2019-04-29');
    // $respuesta['eventos'][] = array('id' => 3, 'title' => 'Día del Trabajador', 'start' => '2019-05-01');

    //insert into eventos(titulo, fechaInicio, diaCompleto, nombreUsuario) values('Día del Trabajador', '20190501', 1);
    //select 'Dia del Trabajador', '20190501', 1, nombreUsuario from usuarios

    $sql = "select id, titulo, fechaInicio, horaInicio, fechaFinalizacion, horaFinalizacion, diaCompleto from eventos where nombreUsuario = '".$user."'";

    $resultado = $conn->ejecutarSql($sql);

    $respuesta['msg'] = 'OK';

    while( $fila = $resultado->fetch_array() ){
        
        if( $fila['diaCompleto'] == 0 )
        {
            $respuesta['eventos'][] = array(
                                            'id' => $fila['id'],
                                            'title' => $fila['titulo'],
                                            'start' => $fila['fechaInicio']." ".$fila['horaInicio'],
                                            'end' => $fila['fechaFinalizacion']." ".$fila['horaFinalizacion']
                                        );
        } else {
            $respuesta['eventos'][] = array(
                'id' => $fila['id'],
                'title' => $fila['titulo'],
                'start' => $fila['fechaInicio']
            );            
        } 

    }

    echo json_encode($respuesta);

 ?>