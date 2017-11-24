<?php
//Lectura del Archivo de datos json
$file = fopen("data-1.json", "r") or die("No se pudo abrir el archivo");
$json = fread($file, filesize('data-1.json'));
$data = json_decode($json, true);

//Recupero la lista de Tipos
$tipos = array();

foreach($data as $d){
  $tipos[] = $d['Tipo'];
}

$tipos = array_unique($tipos);

foreach($tipos as $tipo){
  echo "<option value=".$tipo.">".$tipo."</option>";
}
?>
