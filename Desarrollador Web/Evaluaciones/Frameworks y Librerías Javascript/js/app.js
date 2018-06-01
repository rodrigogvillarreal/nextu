

function CambiarColor(){
	var color = $(".main-titulo").css('color');
	
	console.log('Cambiando color');	
	
	if(color == "rgb(255, 255, 255)"){ //blanco
		$(".main-titulo").css('color', 'rgb(220, 255, 14)');
		console.log('Cambiando a color Amarillo');	
	}
	
	if(color == "rgb(220, 255, 14)"){ //amarillo
		$(".main-titulo").css('color', 'rgb(255, 255, 255)');
		console.log('Cambiando a color Blanco');	
	}	
}

$(document).ready(function(){
	console.log('Ok');	
	setInterval(CambiarColor(), 1500);
});
