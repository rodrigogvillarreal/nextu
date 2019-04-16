
function inicio(){

    console.log("Archivo Javascript cargado!");

    var tabla = document.getElementById("listaAlumnos");

    //Preparo el registro cabecera de la lista de alumnos
    var registroCabecera = document.createElement("thead");
    agregarCelda(registroCabecera, "th", "Código");
    agregarCelda(registroCabecera, "th", "Nombre");
    agregarCelda(registroCabecera, "th", "Nota"); 

    //Agrego el registro cabecera a la tabla
    tabla.appendChild(registroCabecera);

    //Cargo estilos a la tabla
    tabla.style.border = "1px solid black";
}

/*
    funcion que genera las celdas de la tabla
*/
function agregarCelda(elementoPadre, tipo, contenido){
    var nuevoElemento = document.createElement(tipo);
    nuevoElemento.innerHTML = contenido;
    nuevoElemento.style.border = "1px solid black";
    elementoPadre.appendChild(nuevoElemento);
}

var Alumnos = new Array();

function Alumno(codigo, nombre, nota){
    this.codigo = codigo;
    this.nombre = nombre;
    this.nota = nota;
}

var btnRegistrar = document.getElementById("btnRegistrar");
var btnPromedio = document.getElementById("btnPromedio");
var btnNotaMayor = document.getElementById("btnNotaMayor");
var btnNotaMenor = document.getElementById("btnNotaMenor");

//Agrego los eventos
btnRegistrar.addEventListener("click", registrarAlumno);
btnRegistrar.addEventListener("click", listarAlumnos);
btnPromedio.addEventListener("click", calcularPromedio);
btnNotaMayor.addEventListener("click", buscarNotaMayor);
btnNotaMenor.addEventListener("click", buscarNotaMenor);

/*
    funcion que registra alumnos
*/
function registrarAlumno(){

    var codigo = document.getElementById("txtCodigo").value;
    var nombre = document.getElementById("txtNombre").value;
    var nota = document.getElementById("txtNota").value;

    if(validarDatos(codigo)==false) throw 'Debe ingresar el codigo';
    if(validarDatos(nombre)==false) throw 'Debe ingresar el nombre';
    if(validarDatos(nota)==false) throw 'Debe ingresar la nota';

    var al = new Alumno(codigo, nombre, nota);

    Alumnos.push(al);

    //showResultado("Se registro el alumno correctamente, cantidad de alumnos registrados: " + Alumnos.length);
}

/*
    funcion que valida el contenido de un campo y devuelve falso si está vacio
*/
function validarDatos(campo){
    if(campo==""){
        return false;
    }
    return true;    
}

/*
    funcion que calcula el promedio de notas en la lista de alumnos
*/
function calcularPromedio(){
    var suma = 0;
    var cuenta = 0;
    for(var i=0; i<=Alumnos.length-1; i++){
        suma+=parseInt(Alumnos[i].nota);
        cuenta++;
    }
    var promedio = suma/cuenta;
    showResultado('El promedio de notas es: '+ promedio.toFixed(2));
}

/*
    funcion que busca la nota mayor en la lista de alumnos
*/
function buscarNotaMayor(){
    var nota = Alumnos[0].nota;
    for(var i=0; i<=Alumnos.length-1; i++){
        if(parseInt(Alumnos[i].nota)>parseInt(nota)){
            nota=Alumnos[i].nota;
        }
    }
    showResultado('La nota mayor es: '+nota.toString());
}

/*
    funcion que busca la nota menor en la lista de alumnos
*/
function buscarNotaMenor(){
    var nota = Alumnos[0].nota;
    for(var i=0; i<=Alumnos.length-1; i++){
        if(parseInt(Alumnos[i].nota)<parseInt(nota)){
            nota=Alumnos[i].nota;
        }
    }
    showResultado('La nota menor es: '+nota.toString());
}

/*
    funcion que muestra el resultado en la forma indicada
    en este caso usamos alert como indica la consigna
*/
function showResultado(resultado){
    alert(resultado);
}

/*
    funcion que carga la lista de alumnos
*/
function listarAlumnos(){
    
    var tabla = document.getElementById("listaAlumnos");

    //quito los elementos la tabla 
    limpiarTabla();

    for(var i=0; i<=Alumnos.length-1; i++){

        var registroAlumno = document.createElement("tr");
        agregarCelda(registroAlumno, "td", Alumnos[i].codigo);
        agregarCelda(registroAlumno, "td", Alumnos[i].nombre);
        agregarCelda(registroAlumno, "td", Alumnos[i].nota);

        tabla.appendChild(registroAlumno);
    }    
}

/*
    funcion que limpia los registros de alumnos visualizados
*/
function limpiarTabla(){
    var tabla = document.getElementById("listaAlumnos");
    while(tabla.childNodes.length>1){
        tabla.removeChild(tabla.childNodes[tabla.childNodes.length-1]);
    }
}