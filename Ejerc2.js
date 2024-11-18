const array1 = Array.from({length: 10}, ()=> Math.floor(Math.random()*10)+1);
const array2 = Array.from({length: 5}, ()=> Math.floor(Math.random()*10)+1);

function elementosUnicos(array1, array2){
    return array1.filter(elemento => !array2.includes(elemento));
}

console.log(array1 +"\n"+ array2 );
console.log("La diferencia de ambos conjuntos es: "+ elementosUnicos(array1, array2));