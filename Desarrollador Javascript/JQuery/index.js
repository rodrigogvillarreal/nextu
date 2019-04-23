/*
    funcion que genera las celdas de la tabla
*/
function agregarCelda(elementoPadre, tipo, contenido){
    var nuevoElemento = document.createElement(tipo);
    nuevoElemento.innerHTML = contenido;
    nuevoElemento.style.border = "1px solid black";
    elementoPadre.appendChild(nuevoElemento);
}

/*
    Agrego la funcion para editar un alumno
*/
function editarAlumno(codigo){
    var alumno;
    for(var i=0; i<localStorage.length; i++){
       var codigoAlmacenado = localStorage.key(i);
       if(codigoAlmacenado==codigo) {
           alumno = $.parseJSON(localStorage.getItem(codigo));
           $("#txtCodigo").val(alumno.codigo);
           $("#txtNombre").val(alumno.nombre);
           $("#txtNota").val(alumno.nota);
       }
    }
}

/*
    Agrego la funcion para eliminar un alumno
*/
function eliminarAlumno(codigo){
    localStorage.removeItem(codigo);
    listarAlumnos();
} 

/*
    funcion que carga la lista de alumnos
*/
function listarAlumnos(){
    
    //var tabla = document.getElementById("listaAlumnos");
    var tabla = $("#listaAlumnos");

    limpiarTabla();

    for(var i=0; i<localStorage.length; i++){

        var clave = localStorage.key(i);
        var alumno = $.parseJSON(localStorage.getItem(clave));

        var registroAlumno = document.createElement("tr");
        agregarCelda(registroAlumno, "td", alumno.codigo);
        agregarCelda(registroAlumno, "td", alumno.nombre);
        agregarCelda(registroAlumno, "td", alumno.nota);
        agregarCelda(registroAlumno, "td", '<button class="btn btn-success" onclick="editarAlumno(\'' + alumno.codigo + '\');">Editar</button>');
        agregarCelda(registroAlumno, "td", '<button class="btn btn-danger" onclick="eliminarAlumno(\'' + alumno.codigo + '\');">Eliminar</button>');

        tabla.append(registroAlumno);
    }  
}   

/*
    funcion que muestra el resultado en la forma indicada
    en este caso usamos alert como indica la consigna
*/
function showResultado(resultado){
    alert(resultado);
}

/*
    funcion que limpia los registros de alumnos visualizados
*/
function limpiarTabla(){
    //var tabla = document.getElementById("listaAlumnos");
    var tabla = $("#listaAlumnos");

    if(tabla.children().length>1){
        while(tabla.children()[1].childNodes.length>0)
        {
            tabla.children()[1].childNodes[0].remove();
        }
    }
}  

/*
    funcion que recupera un objeto alumno segun su codigo
*/
function recuperarAlumno(codigo){
    return $.parseJSON(localStorage.getItem(localStorage.key(codigo)));
}

$(document).ready(function(){

    console.log("Archivo Javascript y JQuery cargado!");

    //var tabla = document.getElementById("listaAlumnos");
    var tabla = $("#listaAlumnos");

    //Preparo el registro cabecera de la lista de alumnos
    var registroCabecera = document.createElement("thead");
    agregarCelda(registroCabecera, "th", "Código");
    agregarCelda(registroCabecera, "th", "Nombre");
    agregarCelda(registroCabecera, "th", "Nota"); 
    agregarCelda(registroCabecera, "th", ""); 
    agregarCelda(registroCabecera, "th", ""); 

    //Agrego el registro cabecera a la tabla
    //tabla.appendChild(registroCabecera);
    tabla.append(registroCabecera);

    //Cargo estilos a la tabla
    //tabla.style.border = "1px solid black";
    tabla.css("border", "1px solid black");    

    //Agrego validacion al formulario y validacion numerica al campo codigo
    $("#frmCargaAlumnos").validate({
        rules: {
            txtCodigo: {
                required: true,
                number: true
            }
        }
    });

    //Cargo la lista con los datos locales (si existen)
    listarAlumnos();

    /*
        funcion que registra alumnos
    */
    $("#btnRegistrar").on("click", function(){
        
        // var codigo = document.getElementById("txtCodigo").value;
        // var nombre = document.getElementById("txtNombre").value;
        // var nota = document.getElementById("txtNota").value;

        var codigo = $("#txtCodigo").val();
        var nombre = $("#txtNombre").val();
        var nota = $("#txtNota").val();

        var alumno = {
            codigo: codigo,
            nombre: nombre,
            nota: nota
        };

        localStorage.setItem(codigo, JSON.stringify(alumno));

        listarAlumnos();

        $("#txtCodigo").val("");
        $("#txtNombre").val("");
        $("#txtNota").val("");

    });     
    
    $("#btnPromedio").on("click", function(){
        var suma = 0; cuenta = 0;
        for(var i=0; i<localStorage.length; i++){
            suma+=parseInt(recuperarAlumno(i).nota);
            cuenta++;
        }
        var promedio = suma/cuenta;
        showResultado('El promedio de notas es: '+ promedio.toFixed(2));
    });

    $("#btnNotaMayor").on("click", function(){     
        var alumno; 
        var nota;
        for(var i=0; i<localStorage.length; i++){
            alumno = recuperarAlumno(i);
            if(i==0){nota=alumno.nota} //guardo la primer nota como base
            if(parseInt(alumno.nota)>parseInt(nota)){
                nota=alumno.nota;
            }
        }
        showResultado('La nota mayor es: '+nota.toString());
    });
    
    $("#btnNotaMenor").on("click", function(){
        var alumno; nota = 0;
        for(var i=0; i<localStorage.length; i++){
            alumno = recuperarAlumno(i);
            if(i==0){nota=alumno.nota} //guardo la primer nota como base
            if(parseInt(alumno.nota)<parseInt(nota)){
                nota=alumno.nota;
            }
        }
        showResultado('La nota menor es: '+nota.toString());
    });

});

/* DEJO COMENTADO RESTOS DE LA EVALUACION ANTERIOR */

// var Alumnos = new Array();

// function Alumno(codigo, nombre, nota){
//     this.codigo = codigo;
//     this.nombre = nombre;
//     this.nota = nota;
// }

// var btnRegistrar = document.getElementById("btnRegistrar");
// var btnPromedio = document.getElementById("btnPromedio");
// var btnNotaMayor = document.getElementById("btnNotaMayor");
// var btnNotaMenor = document.getElementById("btnNotaMenor");

// var btnRegistrar = $("#btnRegistrar");
// var btnPromedio = $("#btnPromedio");
// var btnNotaMayor = $("#btnNotaMayor");
// var btnNotaMenor = $("#btnNotaMenor");

//Agrego los eventos
// btnRegistrar.addEventListener("click", registrarAlumno);
// btnRegistrar.addEventListener("click", listarAlumnos);
// btnPromedio.addEventListener("click", calcularPromedio);
// btnNotaMayor.addEventListener("click", buscarNotaMayor);
// btnNotaMenor.addEventListener("click", buscarNotaMenor);

/*
    funcion que calcula el promedio de notas en la lista de alumnos
*/
// function calcularPromedio(){
//     var suma = 0;
//     var cuenta = 0;
//     for(var i=0; i<=Alumnos.length-1; i++){
//         suma+=parseInt(Alumnos[i].nota);
//         cuenta++;
//     }
//     var promedio = suma/cuenta;
//     showResultado('El promedio de notas es: '+ promedio.toFixed(2));
// }

/*
    funcion que busca la nota mayor en la lista de alumnos
*/
// function buscarNotaMayor(){
//     var nota = Alumnos[0].nota;
//     for(var i=0; i<=Alumnos.length-1; i++){
//         if(parseInt(Alumnos[i].nota)>parseInt(nota)){
//             nota=Alumnos[i].nota;
//         }
//     }
//     showResultado('La nota mayor es: '+nota.toString());
// }

/*
    funcion que busca la nota menor en la lista de alumnos
*/
// function buscarNotaMenor(){
//     var nota = Alumnos[0].nota;
//     for(var i=0; i<=Alumnos.length-1; i++){
//         if(parseInt(Alumnos[i].nota)<parseInt(nota)){
//             nota=Alumnos[i].nota;
//         }
//     }
//     showResultado('La nota menor es: '+nota.toString());
// }