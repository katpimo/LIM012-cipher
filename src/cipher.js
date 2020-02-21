const cipher = {

    encode: (paso, entrada) => {
    let salida='';
    let sinCifrado; //donde se guarda el codigo ascii de una letra
    let cifrado; //codigo ascii resultante luego de sumarle paso
    //por cada letra de la entrada
    try {
        if((paso===null && entrada===[]) || (paso===0) || (paso===0 && entrada===0) || (paso==="" && entrada==="") ) throw new TypeError;
    } 
    catch (error) {
        return error();
    }
    for (let c = 0; c < entrada.length; c++) {
        sinCifrado = entrada[c].charCodeAt(); //obtenemos el número ASCII
        //if (sinCifrado==32) {
        //    salida=salida.concat(" ");
         if (sinCifrado >= 65 && sinCifrado <= 90) {
            cifrado = (sinCifrado - 65 + paso)%26 + 65; //desplazamos de lugar la letra al sumarle paso
            salida = salida.concat(String.fromCharCode(cifrado)); //convertimos el nuevo codigo a string y concatenamos
        } else if (sinCifrado >= 97 && sinCifrado <= 122) {
            cifrado = (sinCifrado - 97 + paso)%26 + 97; //desplazamos de lugar la letra al sumarle paso
            salida = salida.concat(String.fromCharCode(cifrado)); //convertimos el nuevo codigo a string y concatenamos
        } else {
          salida=salida.concat(entrada[c]);
        }
    }
    return salida;
    },

    decode: (paso, entrada) => {
    let salida1 = '';
    let sinCifrado; //donde se guarda el codigo ascii de una letra
    let cifrado; //codigo ascii resultante luego de sumarle paso
    //por cada letra de la entrada  
    try {
        if((paso===null && entrada===[]) || (paso===0) || (paso===0 && entrada===0) || (paso==="" && entrada==="") ) throw new TypeError;
    } 
    catch (error) {
        return error();
    }
     for (let c = 0; c < entrada.length; c++) {
          sinCifrado = entrada[c].charCodeAt(); //obtenemos el número ASCII
          //if (sinCifrado==32) {
        //salida=salida.concat(" ");
          if (sinCifrado >= 65 && sinCifrado <= 90) {
             cifrado = (sinCifrado - 65 + (26-paso%26))%26 + 65; //desplazamos de lugar la letra al sumarle paso
             salida1 = salida1.concat(String.fromCharCode(cifrado)); //convertimos el nuevo codigo a string y concatenamos
         } else if (sinCifrado >= 97 && sinCifrado <= 122) {
            cifrado = (sinCifrado - 97 + (26-paso%26))%26 + 97; //desplazamos de lugar la letra al sumarle paso
            salida1 = salida1.concat(String.fromCharCode(cifrado)); //convertimos el nuevo codigo a string y concatenamos
         } else {
          salida1=salida1.concat(entrada[c]);
         }
    }
   return salida1;
  }
}

export default cipher;
