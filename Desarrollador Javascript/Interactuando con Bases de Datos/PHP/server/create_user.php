<?php

require('./conector.php');

class User{

    private $table_name = 'usuarios';

    private $email;
    private $nombreUsuario;
    private $password;
    private $nombreCompleto;
    private $fechaNacimiento;

    function __construct($email, $nombreUsuario, $password, $nombreCompleto, $fechaNacimiento){
        $this->email = $email;
        $this->nombreUsuario = $nombreUsuario;
        $this->password = password_hash($password, PASSWORD_DEFAULT);
        $this->nombreCompleto = $nombreCompleto;
        $this->fechaNacimiento = $fechaNacimiento;
    }

    function crearUsuario(){

        $sql = "insert into " . $this->table_name . "(email, nombreUsuario, password, nombreCompleto, fechaNacimiento) values(" 
                . "'" . $this->email . "', "
                . "'" . $this->nombreUsuario . "', "
                . "'" . $this->password . "', "
                . "'" . $this->nombreCompleto . "', "
                . "'" . $this->fechaNacimiento . "')";

        $conn = new ConectorBD();

        $exec = $conn->ejecutarSql($sql);

    }

}

$user = new User('rodrigogvillarreal@gmail.com', 'rodrigo', 'admin', 'Rodrigo Villarreal', '19850128');
$user->crearUsuario();

$user = new User('usuario1@gmail.com', 'usuario1', 'usuario1', 'Usuario 1', '19910101');
$user->crearUsuario();

$user = new User('usuario2@gmail.com', 'usuario2', 'usuario2', 'Usuario 2', '19920202');
$user->crearUsuario();

$user = new User('usuario3@gmail.com', 'usuario3', 'usuario3', 'Usuario 3', '19930303');
$user->crearUsuario();

 ?>
