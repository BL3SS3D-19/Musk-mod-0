const rl = require("readline-sync");
let enunciado = rl.question("Introduce un enunciado ");

function parentesisBalanc(enunciado){
    const caracteres = enunciado.split("");
    let frecuencia = new Map()
    for(caracter of caracteres){
        if(frecuencia.has(caracter)){
            frecuencia.set(caracter, frecuencia.get(caracter)+1);
        }else{
            frecuencia.set(caracter, 1);
        }
    }

    if (frecuencia.get("(") === frecuencia.get(")")){
        console.log("Los parentesis estan balanceados");
    }else{
        console.log("Los parentesis no estan balanceados");
    }
}

parentesisBalanc(enunciado);