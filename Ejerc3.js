const rl = require("readline-sync");
let enunciado = rl.question("Introduce un enunciado ");
let frecuencias = new Map();

function calcularFrecuencia(enunciado){
    

    for(let caracter of enunciado){
        if(frecuencias.has(caracter)){
            frecuencias.set(caracter, frecuencias.get(caracter)+1);
        }else{
            frecuencias.set(caracter, 1);
        }
    }
}

calcularFrecuencia(enunciado);
console.log("El mapa de frecuencias es: \n", frecuencias);
