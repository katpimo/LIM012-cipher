//import cipher from './cipher.js';

//console.log(cipher);

//funcion de boton sin onclick
const btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    const pantalla1 = document.getElementById("pantalla1")
    pantalla1.classList.add("ocultar")
    document.getElementById("dplz").value='0'; // valor por defecto al desplazamiento
    const pantalla2 = document.getElementById("pantalla2")
    pantalla2.classList.remove("ocultar")
});
//Funcionalidad para el boton de Codificar
const cdf = document.getElementById('cdf');
    cdf.addEventListener('click', function (){
        const ingresa = document.getElementById("ingresa").value;
        const dplz = parseInt(document.getElementById("dplz").value);
        const codificado = cipher_x(ingresa,dplz);
        document.getElementById('salida').innerHTML=codificado;
    }
);

function cipher_x(entrada, paso) {
    var salida = '';
    var sinCifrado; //donde se guarda el codigo ascii de una letra
    var cifrado; //codigo ascii resultante luego de sumarle paso
    //por cada letra de la entrada

    for (var c = 0; c < entrada.length; c++) {
        sinCifrado = entrada[c].charCodeAt(); //obtenemos el número ASCII
        if (sinCifrado==32) {
            salida=salida.concat(" ");
        } else if (sinCifrado >= 65 && sinCifrado <= 90) {
            cifrado = (sinCifrado - 65 + paso)%26 + 65; //desplazamos de lugar la letra al sumarle paso
            salida = salida.concat(String.fromCharCode(cifrado)); //convertimos el nuevo codigo a string y concatenamos
        } else if (sinCifrado >= 97 && sinCifrado <= 122) {
            cifrado = (sinCifrado - 97 + paso)%26 + 97; //desplazamos de lugar la letra al sumarle paso
            salida = salida.concat(String.fromCharCode(cifrado)); //convertimos el nuevo codigo a string y concatenamos
        }
    }
    return salida;
}

//para decodificar aplicar string.fromCharcode();
//seria ingresa[i].fromCharcode();

//Funcionalidad para el boton de Decodificar

const dcf = document.getElementById('dcf');
    dcf.addEventListener('click', function (){
        const ingresa = document.getElementById("ingresa").value;
        const dplz = parseInt(document.getElementById("dplz").value);
        const decodificar = cipher_y(ingresa,dplz);
        document.getElementById('salida').innerHTML=decodificar;
    }
);

function cipher_y(entrada, paso) {
    var salida = '';
    var sinCifrado; //donde se guarda el codigo ascii de una letra
    var cifrado; //codigo ascii resultante luego de sumarle paso
    //por cada letra de la entrada

    for (var c = 0; c < entrada.length; c++) {
        sinCifrado = entrada[c].charCodeAt(); //obtenemos el número ASCII
        if (sinCifrado==32) {
            salida=salida.concat(" ");
        } else if (sinCifrado >= 65 && sinCifrado <= 90) {
            cifrado = (sinCifrado - 65 + (26-paso%26))%26 + 65; //desplazamos de lugar la letra al sumarle paso
            salida = salida.concat(String.fromCharCode(cifrado)); //convertimos el nuevo codigo a string y concatenamos
        } else if (sinCifrado >= 97 && sinCifrado <= 122) {
            cifrado = (sinCifrado - 97 + (26-paso%26))%26 + 97; //desplazamos de lugar la letra al sumarle paso
            salida = salida.concat(String.fromCharCode(cifrado)); //convertimos el nuevo codigo a string y concatenamos
        }
    }
    return salida;
}



//*funcionalidad a mi boton de limpiar
const limpiar = document.getElementById('lmp');
    limpiar.addEventListener('click', function (){
    LimpiarBox();
    }
);

function LimpiarBox (){
    document.getElementById("dplz").value='0';
    document.getElementById("ingresa").value='';
    document.getElementById("salida").innerHTML='';
}