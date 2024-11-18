const rl = require("readline-sync");
let enunciado = rl.question("Introduce un enunciado ");


function esSecuenciaValida(s) {
    const stack = [];
    const pares = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of s) {
        if (pares[char]) {
            stack.push(char);
        } else {
            const ultimo = stack.pop();
            if (pares[ultimo] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

if(esSecuenciaValida(enunciado)){
    console.log("La secuencia es valida");
}else{
    console.log("La secuencia no es valida");
}


