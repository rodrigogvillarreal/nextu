<?php
    session_start();
    require('./conector.php');

    $conn = new ConectorBD();

    $user = $_POST['username'];
    $pass = $_POST['password'];

    $sql = "select password from usuarios where nombreUsuario = '".$user."'";

    $resultado = $conn->ejecutarSql($sql);

    $fila = $resultado->fetch_assoc();
    
    $respuesta['msg'] = '';

    if(is_null($fila)){
        $respuesta['msg'] = 'No se encontró el usuario ingresado';
    }else{

        if( password_verify($pass, $fila['password']) == TRUE ){
            $respuesta['msg'] = 'OK';
        }else{
            $respuesta['msg'] = 'La contraseña es incorrecta';
        }

        //guardo el usuario como dato de sesión        
        $_SESSION['username'] = $user;

    }

    echo json_encode($respuesta);

 ?>
