const rl = require("readline-sync");
let palabra = rl.question("Introduce un enunciado ");

function invertirPalabra(palabra){
    let pila = [];
    for(let i=0;i<palabra.length;i++){
        pila.push(palabra[i]);
    }
    let palabraInvertida = [];
    while(pila.length>0){
        palabraInvertida.push(pila.pop());
    }
    console.log(palabraInvertida.join(""));

}

invertirPalabra(palabra);
