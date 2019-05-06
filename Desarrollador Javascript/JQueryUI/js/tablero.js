$(document).ready(function(){
    configFichas();
    posicionarFichas();
});

function configFichas(){
    $(".ficha").draggable();
}

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

function centrarFicha(ficha, casilla){
    ficha.position({
        my: "center",
        at: "center",
        of: casilla,
    })
}