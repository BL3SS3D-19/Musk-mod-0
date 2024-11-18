const rl = require("readline-sync");
let enunciado = rl.question("Introduce un enunciado ");

function palabrasRepetidas(enunciado){
    let palabras = enunciado.toLowerCase().split(" "); 
    let palabrasSet = new Set();
    let repetidos = [];
    for(let i = 0; i<palabras.length; i++){
        if(palabrasSet.has(palabras[i])){
            repetidos.push(palabras[i]);
        }else{
            palabrasSet.add(palabras[i]);
        }
    }
    console.log("Las palabras repetidas son: ");
    for(let n = 0; n<repetidos.length;n++){
        console.log(repetidos[n] + ",");
    }
    
}

palabrasRepetidas(enunciado);

