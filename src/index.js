import cipher from './cipher.js';



    //funcion de boton Limpiar
    const btn1 = document.getElementById('btn');
        btn1.addEventListener('click', function() {
            const pantalla1 = document.getElementById("pantalla1")
                pantalla1.classList.add("ocultar")
                document.getElementById("dplz").value='0'; // valor por defecto al desplazamiento
            const pantalla2 = document.getElementById("pantalla2")
                pantalla2.classList.remove("ocultar")
        });

    //Funcionalidad para el boton de Codificar
    const cdf1 = document.getElementById('cdf');
        cdf1.addEventListener('click', function (){
            let entrada = document.getElementById("ingresa").value;
            let paso = parseInt(document.getElementById("dplz").value);
            document.getElementById('salida1').value= cipher.encode(paso,entrada);
           
        });


    //Funcionalidad para el boton de Decodificar
    const dcf2 = document.getElementById('dcf');
        dcf2.addEventListener('click', function (){
            let entrada = document.getElementById("ingresa").value;
            let paso = parseInt(document.getElementById("dplz").value);
            
            document.getElementById('salida1').value=cipher.decode(paso,entrada);
        });

    //*funcionalidad a mi boton de limpiar
    const limpiar = document.getElementById('lmp');
        limpiar.addEventListener('click', function (){
            LimpiarBox();
         });


    //funcionalidad boton limpiar
    function LimpiarBox () {
        document.getElementById("dplz").value='0';
        document.getElementById("ingresa").value='';
        document.getElementById("salida1").innerHTML='';
    }