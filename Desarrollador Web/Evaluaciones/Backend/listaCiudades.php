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

$ciudades = array_unique($ciudades);

$lista_opciones='';

foreach($ciudades as $ciudad){
  $lista_opciones.= "<option value=".$ciudad.">".$ciudad."</option>";
}

return $lista_opciones;
?>
