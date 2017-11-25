<?php
//Lectura del Archivo de datos json
$file = fopen("data-1.json", "r") or die("No se pudo abrir el archivo");
$json = fread($file, filesize('data-1.json'));
$data = json_decode($json, true);

//Recupero la lista de Ciudades
$ciudades = array();

foreach($data as $d){
  $ciudades[] = $d['Ciudad'];
}

//Para que no se repitan las ciudades
$ciudades = array_unique($ciudades);

//Devuelvo un Json con las ciudades
print json_encode($ciudades);
?>
