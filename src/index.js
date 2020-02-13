import cipher from './cipher.js';

//console.log(cipher);

//funcion de boton sin onclick
const btn = document.getElementById('btn');
btn.addEventListener('click', () =>{
    const pantalla1 = document.getElementById("pantalla1")
    pantalla1.classList.add("ocultar")
    const pantalla2 = document.getElementById("pantalla2")
    pantalla2.classList.remove("ocultar")
});