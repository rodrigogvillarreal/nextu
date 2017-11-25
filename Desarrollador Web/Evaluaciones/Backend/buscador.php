<?php

$ciudad = htmlspecialchars($_POST['ciudad']);
$tipo = htmlspecialchars($_POST['tipo']);
$precio = htmlspecialchars($_POST['precio']);
$todos = htmlspecialchars($_POST['todos']);

//Lectura del Archivo de datos json
$file = fopen("data-1.json", "r") or die("No se pudo abrir el archivo");
$json = fread($file, filesize('data-1.json'));
$data = json_decode($json, true);

$ciudades = array();

foreach($data as $d){
  $ciudades[] = $d;
}

function porCiudad($obj){
  if(strcmp($obj["Ciudad"], $_POST['ciudad'])==0){
      return $obj["Ciudad"];
  }
}

function porTipo($obj){
  if(strcmp($obj["Tipo"], $_POST['tipo'])==0){
      return $obj["Tipo"];
  }
}

function porPrecio($obj){

  $pos = strpos($_POST['precio'], ';');
  $min = substr($_POST['precio'], 0, $pos);
  $max = substr($_POST['precio'], $pos+1);
  $precio = str_replace('$', '', str_replace(',', '', $obj["Precio"]));
  //echo 'Precio: '.$precio.' > Minimo: '.$min.' - Maximo:'.$max;
  if(($precio >= $min && $precio <= $max)){
      return $obj["Precio"];
  }
}

if(isset($todos)){
  if($todos==0){
    //Filtro por Ciudad
    if(isset($ciudad) && $ciudad!=''){
      $ciudades = array_filter($ciudades, "porCiudad");
    }
    //Filtro por Tipo
    if(isset($tipo) && $tipo!=''){
      $ciudades = array_filter($ciudades, "porTipo");
    }
    //Filtro por precio
    if(isset($precio)){
      $ciudades = array_filter($ciudades, "porPrecio");
    }
  }
}

//print json_encode($ciudades);
$template_ciudad = "";
$template_ciudades = array();

foreach ( $ciudades as $ciudad ) {

  $template_ciudad = "<div class='itemMostrado card'><img src='img/home.jpg' alt='Demo'><div class='card-stacked'><strong>Dirección: </strong>".$ciudad["Direccion"]."</br><strong>Ciudad: </strong>".$ciudad["Ciudad"]."</br><strong>Teléfono: </strong>".$ciudad["Telefono"]."</br><strong>Código Postal: </strong>".$ciudad["Codigo_Postal"]."</br><strong>Tipo: </strong>".$ciudad["Tipo"]."</br><strong>Precio: </strong><span class='precioTexto'>".$ciudad["Precio"]."</span></br><div class='card-action'>VER MAS</div></div></div>";
  $template_ciudades[] = $template_ciudad;

}

print json_encode($template_ciudades);

?>
