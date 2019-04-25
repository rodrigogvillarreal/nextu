<?php

    require('./conector.php');

    $conn = new ConectorBD();

    $id = $_POST['id'];

    $sql = "delete from eventos where id = ".$id;

    $resultado = $conn->ejecutarSql($sql);

    if( $resultado == true )
    {
        $respuesta['msg'] = 'OK';
    }else{
        $respuesta['msg'] = 'Ocurrio un error al eliminar el evento!';
    }

    $conn->cerrarConexion();

    echo json_encode($respuesta);    

 ?>
