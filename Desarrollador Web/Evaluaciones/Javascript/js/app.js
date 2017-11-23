var Calculadora = (function (valorActual, valorNuevo) {
  var display = document.getElementById("display");
  var teclas = document.querySelectorAll('.tecla');
  var tecla_presionada, valor1, valor2, posicion, resultado, operacion, conPunto;

  function MostrarResultado(nuevoResultado){
    if (nuevoResultado.length > 8){
        nuevoResultado = nuevoResultado.toString().substr(0,8);
      }
      display.innerHTML = parseFloat(nuevoResultado);
    }

  function inicializar(){
    resultado=0;
    valor1='';
    valor2='';
    posicion=1;
    operacion='';
    conPunto=false;
    for ( var i = 0; i < teclas.length; i++ ){
          teclas[i].onmousedown = presionarTecla;
	        teclas[i].onmouseup = soltarTecla;
    }
    MostrarResultado(0);
  }

  inicializar();

  function setValor(valor){
    if(posicion==1){
       if(valor1==''&&valor==0)exit;
       if(valor1.length<8){
	        valor1+=valor;
          MostrarResultado(valor1);
       }
    }
    if(posicion==2){
      if(valor2==''&&valor==0)exit;
      if(valor2.length<8){
	     valor2+=valor;
       MostrarResultado(valor2);
     }
    }
  }

  function setPuntoDecimal(){
    if(conPunto==false){
      if(posicion==1){
        valor1+=".";
      }
      if(posicion==2){
        valor2+=".";
      }
      conPunto=true;
    }
  }

  function aplicarSigno(){
    if(posicion==1&&valor1!=''){
      resultado=valor1=parseFloat(valor1)*(-1);
    }
    if(posicion==2&&valor2!=''){
      resultado=valor2=parseFloat(valor2)*(-1);
    }
    MostrarResultado(resultado);
  }

   function presionarTecla(){
    	this.style.padding = "6px";
    	switch( this.id ){
    	  case "on":
    	    inicializar();
    	    break;
    	  case "0":
    	  case "1":
    	  case "2":
    	  case "3":
    	  case "4":
    	  case "5":
    	  case "6":
    	  case "7":
    	  case "8":
    	  case "9":
    	    setValor(this.id);
    	    break;
        case "punto":
          setPuntoDecimal();
          break;
        case "sign":
          aplicarSigno();
          break;
    	  case "mas":
    	  case "menos":
    	  case "por":
    	  case "dividido":
    	    operacion=this.id;
    	    posicion=2;
          conPunto=false;
    	    MostrarResultado(0);
    	    break;
    	  case "igual":
    	    switch(operacion){
    		      case "mas":
          		  resultado = parseFloat(valor1) + parseFloat(valor2);
    		  break;
    		    case "menos":
          		  resultado = parseFloat(valor1) - parseFloat(valor2);
    		  break;
    		    case "por":
          		  resultado = parseFloat(valor1) * parseFloat(valor2);
    		  break;
    		case "dividido":
    	          if (parseFloat(valor2) > 0){
    		            resultado = parseFloat(valor1) / parseFloat(valor2);
    	          }
    		  break;

    	    }
    	    MostrarResultado(resultado);
    	    posicion=1;
    	    valor1='';
    	    valor2='';
          conPunto=false;
    	    break;
    	}
    }

    function soltarTecla(){
      this.style.padding = "0";
    }

  return {
    sumar: function(){
      var resultado = valor1 + valor2;
      MostrarResultado(resultado);
    },
    restar: function(){
      var resultado = valor1 - valor2;
      MostrarResultado(resultado);
    },
    multiplicar: function(){
      var resultado = valor1 * valor2;
      MostrarResultado(resultado);
    },
    dividir: function(){
      if (valor2 > 0){
          var resultado = valor1 / valor2;
          MostrarResultado(resultado);
      }
    },
    getValor1: function(){
	return valor1;
    },
    getValor2: function(){
	return valor2;
    }
  }
})();
