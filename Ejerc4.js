const rl = require("readline-sync");
let palabra1 = rl.question("Introduce un enunciado ");
let palabra2 = rl.question("Introduce un enunciado ");


function contarCaracteres(palabra){
    let frecuencia = new Map();
    for( caracter of palabra){
        frecuencia.set(caracter, (frecuencia.get(caracter) || 0) +1)
    }
    return frecuencia;
}


function esAnagrama(palabra1, palabra2){
    if(palabra1.length !== palabra2.length){
        return false;
    }
    
        const frecuencia1 = contarCaracteres(palabra1);
        const frecuencia2 = contarCaracteres(palabra2);
    
    for(let [caracter, conteo] of frecuencia1){
        if(frecuencia2.get(caracter) !== conteo){
            return false;
        }
    }
    return true;
}   
    
    
    

if (esAnagrama(palabra1, palabra2)){
    console.log("Las palabras son anagramas")
}else{
    console.log("Las palabras no son anagramas");
}
    
