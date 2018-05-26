
var alumnos = [
        {
        "codigo":"001",
        "nombre":"Gonzalo Villarreal",
        "nota":10,
        },
        {
        "codigo":"002",
        "nombre":"Marcelo Chanquia",
        "nota":8,
        },
        {
        "codigo":"003",
        "nombre":"Facundo Pallero",
        "nota":6,
        },
        {
        "codigo":"004",
        "nombre":"Gonzalo Romero",
        "nota":4,
        },
        {
        "codigo":"005",
        "nombre":"Federico Savedra",
        "nota":6,
        },
        {
        "codigo":"006",
        "nombre":"Lucas Astrada",
        "nota":7,
        },
        {
        "codigo":"007",
        "nombre":"Luis Saleme",
        "nota":7,
        },
        {
        "codigo":"008",
        "nombre":"Pablo Visioli",
        "nota":9,
        },
        {
        "codigo":"009",
        "nombre":"Rafael Arias",
        "nota":9,
        },
        {
        "codigo":"010",
        "nombre":"Luis Olivetto",
        "nota":5,
        }
    ]
			
	var notas = [];
	
	// Funcion recorre en un nuevo array solo las notas para calcular posteriormente
	for( num = 0; num < alumnos.length; num ++) {
		notas.push(alumnos[num].nota);
	}
	// Funcion lista de Alumnos despliega en la pantalla		    
    function lista_alumnos(){
      	var texto = "<table style='border: 1px solid navy; background-color: ligth-gray;'><tr><th>Codigo</th> <th>Nombre</th><th>Nota</th> </tr>";
      	for( num = 0; num < alumnos.length; num ++) {
  			texto += "<tr> <td>" + alumnos[num].codigo + "</td> <td>" + alumnos[num].nombre + "</td> <td>" + alumnos[num].nota.toFixed(2) + "</td> </tr>";  		
  		}
  		texto += "</table>";
  		document.getElementById("listado").innerHTML = texto;
  	}
	// Funcion calcula el promedio de la nota de los Alumnos  y despliega en la pantalla		    
	function nota_promedio(){
		var sum = 0;
		var pro = 0;
		for(num = 0; num < alumnos.length; num ++){
			sum += (alumnos[num].nota);
		}
		pro = sum / 10;
		document.getElementById("promedio").innerHTML = "El Promedio es: <b>" + pro.toFixed(2) + "</b>";
	}
	// Funcion extrae al Alumnos con la nota mayor y despliega en la pantalla		    
	function nota_mayor(){
		var mayor = notas.indexOf(Math.max.apply(null, notas ));
		document.getElementById("mayor").innerHTML = "La nota mayor del estudiante: <b>" + nombre_alumno(mayor) + "</b>";
	}
	// Funcion extrae al Alumnos con la nota menor y despliega en la pantalla		    
	function nota_menor(){
		var menor = notas.indexOf(Math.min.apply(null, notas ));
		document.getElementById("menor").innerHTML = "La nota menor del estudiante: <b>" + nombre_alumno(menor) + "</b>";
	}
	// Funcion para sacar el nombre del Alumno segun su pocision
	function nombre_alumno(num){
		return alumnos[num].nombre;
	}
