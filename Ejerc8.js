const rl = require("readline-sync");
let numero = parseInt(rl.question("Introduce un numero "));

function esPrimo(numero){
    
    if(numero < 2 || (numero > 2 && numero%2==0)){
        return false
    }
    if(numero===2){
        return true
    }
    for(let i = 3; i<=Math.sqrt(numero); i+=2){
        if(numero%i===0){
            return false;
        }
    }
    return true;
}

if(esPrimo(numero)){
    console.log("El numero es primo");
}else{
    console.log("El numero no es primo");
}