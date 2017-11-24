<?php

$ciudad = htmlspecialchars($_GET['ciudad']);
$tipo = htmlspecialchars($_GET['tipo']);
$precio = htmlspecialchars($_GET['precio']);

$pos = strpos($precio, ';');
$min = substr($precio, 0, $pos);
$max = substr($precio, $pos+1);

//Lectura del Archivo de datos json
$file = fopen("data-1.json", "r") or die("No se pudo abrir el archivo");
$json = fread($file, filesize('data-1.json'));
$data = json_decode($json, true);



?>
