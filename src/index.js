//import cipher from './cipher.js';

//console.log(cipher);

//funcion de boton sin onclick
const btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    const pantalla1 = document.getElementById("pantalla1")
    pantalla1.classList.add("ocultar")
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

function cipher_x(ingresa, dplz) {
	let salida = '';
	let sinCifrado; //donde se guarda el codigo ascii de una letra
	let cifrado; //codigo ascii resultante luego de sumarle paso
	//por cada letra que se ingresa
	for (let i = 0; i < ingresa.length; i++) {
        sinCifrado = ingresa[i].charCodeAt();
        if (ingresa[i].charCodeAt()===32){
            salida = salida.concat(" "); 
        }
        cifrado = (sinCifrado - 65 + dplz)%26 + 65; //desplazamos de lugar la letra al sumarle paso
        salida = salida.concat(String.fromCharCode(cifrado)); //convertimos el nuevo codigo a string y concatenamos(construir la palabra,juntar letra por letra)
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

function cipher_y(ingresa, dplz) {
	let salida = '';
	let cifrado; //donde se guarda el codigo ascii de una letra
	let sinCifrado; //codigo ascii resultante luego de sumarle paso
	//por cada letra que se ingresa
	for (let i = 0; i < ingresa.length; i++) {
        cifrado = ingresa[i].charCodeAt();
        if (ingresa[i].charCodeAt()===32){
            salida = salida.concat(" "); 
        }
        sinCifrado = (cifrado - 65 + (26-dplz))%26 + 65; //desplazamos de lugar la letra al sumarle paso
        salida = salida.concat(String.fromCharCode(sinCifrado)); //convertimos el nuevo codigo a string y concatenamos(construir la palabra,juntar letra por letra)
	}
	return salida;
}