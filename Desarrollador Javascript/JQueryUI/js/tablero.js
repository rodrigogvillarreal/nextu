$(document).ready(function(){
    configFichas();
    posicionarFichas();
});

function configFichas(){
    $(".ficha").draggable({
        cursor: "move",
        cursorAt: {top: 30, left: 30},
        snap: ".casilla",
        snapMode: "inner",
        start: function(){

        },
        drag: function(){
            //$(this).addClass("fichaSeleccionada", 500);
        },
        stop: function(){
            //$(this).removeClass("fichaSeleccionada");
        }
    });
    $(".casilla-negra").droppable({
        tolerance: "fit", //que todo el elemento sea depositado
        classes: {
            "ui-droppable": "highlight",
          },
        drop: function(event, ui){            
            centrarFicha(ui.draggable, $(this)); //centro la ficha en su destino
            $( ui.draggable ).draggable( "option", "revert", false ); //revierto en caso de que la ficha antes haya realizado un movimiento inválido
        }
    });

    //no dejo que las fichas sean movidas a las casillas blancas
    $(".casilla-blanca").droppable({
        tolerance: "fit", //que todo el elemento sea depositado
        drop: function(event, ui){            
            $( ui.draggable ).draggable( "option", "revert", true ); //no puedo depositar una ficha en casilla blanca, vuelve a su posicion
        }
    });
}

/*
    Con esta fucnión inicializo las fichas en el tablero
*/
function posicionarFichas(){
    centrarFicha($("#ficha-blanca-1"), $("#casilla1x1"));
    centrarFicha($("#ficha-blanca-2"), $("#casilla3x1"));
    centrarFicha($("#ficha-blanca-3"), $("#casilla5x1"));
    centrarFicha($("#ficha-blanca-4"), $("#casilla7x1"));
    centrarFicha($("#ficha-blanca-5"), $("#casilla2x2"));
    centrarFicha($("#ficha-blanca-6"), $("#casilla4x2"));
    centrarFicha($("#ficha-blanca-7"), $("#casilla6x2"));
    centrarFicha($("#ficha-blanca-8"), $("#casilla8x2"));
    centrarFicha($("#ficha-blanca-9"), $("#casilla1x3"));
    centrarFicha($("#ficha-blanca-10"), $("#casilla3x3"));
    centrarFicha($("#ficha-blanca-11"), $("#casilla5x3"));
    centrarFicha($("#ficha-blanca-12"), $("#casilla7x3"));
    centrarFicha($("#ficha-negra-1"), $("#casilla2x6"));
    centrarFicha($("#ficha-negra-2"), $("#casilla4x6"));
    centrarFicha($("#ficha-negra-3"), $("#casilla6x6"));
    centrarFicha($("#ficha-negra-4"), $("#casilla8x6"));
    centrarFicha($("#ficha-negra-5"), $("#casilla1x7"));
    centrarFicha($("#ficha-negra-6"), $("#casilla3x7"));
    centrarFicha($("#ficha-negra-7"), $("#casilla5x7"));
    centrarFicha($("#ficha-negra-8"), $("#casilla7x7"));
    centrarFicha($("#ficha-negra-9"), $("#casilla2x8"));
    centrarFicha($("#ficha-negra-10"), $("#casilla4x8"));
    centrarFicha($("#ficha-negra-11"), $("#casilla6x8"));
    centrarFicha($("#ficha-negra-12"), $("#casilla8x8"));
}

/*
    Con esta funcion posiciono una ficha en la casilla
*/
function centrarFicha(ficha, casilla){
    ficha.position({
        my: "center",
        at: "center",
        of: casilla,
    })
}