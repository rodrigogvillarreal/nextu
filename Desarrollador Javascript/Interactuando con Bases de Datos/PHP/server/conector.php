<?php

    class ConectorBD
    {
        protected $host = 'localhost';
        protected $user = 'root';
        protected $pass = '';
        protected $base = 'bd_php';
        protected $conn;

        public function __construct(){

            //abro la conexion al instanciar el objecto
            $this->conn = new mysqli($this->host, $this->user, $this->pass, $this->base);

            if( $this->conn->connect_errno ){
                echo "Error al conectar a la base de datos: ".$this->conn->connect_errno;
                return;
            }

        }

        function ejecutarSql($sql){

            if( $resultado = $this->conn->query($sql) ){
                return $resultado;
            }else{
                return 'Se produjo un error al ejecutar la consulta: '.$this->conn->error;
            }

        }

        function consultaSql($sql){

            $resultado = $this->conn->query($sql);

        }

        function cerrarConexion(){
            $this->conn->close();
        }
    }

?>