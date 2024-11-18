
function generarArrayAleatorio(tamaño) {
    let arrayRandom = [];
    for (let i = 0; i < tamaño; i++) {
        arrayRandom.push(Math.floor(Math.random() * 1000)); 
    }
    return arrayRandom;
}


function quickSort(array, izquierda = 0, derecha = array.length - 1) {
    if (izquierda < derecha) {
        const indicePivote = particion(array, izquierda, derecha);
        quickSort(array, izquierda, indicePivote - 1); 
        quickSort(array, indicePivote + 1, derecha); 
    }
    return array;
}


function particion(array, izquierda, derecha) {
    const pivote = array[derecha]; 
    let i = izquierda - 1;

    for (let j = izquierda; j < derecha; j++) {
        if (array[j] < pivote) {
            i++;
            [array[i], array[j]] = [array[j], array[i]]; 
        }
    }
  
    [array[i + 1], array[derecha]] = [array[derecha], array[i + 1]];
    return i + 1; 
}


const arrayAleatorio = generarArrayAleatorio(100000);

console.time("Quicksort");
const arrayOrdenado = quickSort(arrayAleatorio);
console.timeEnd("Quicksort");

console.log(arrayOrdenado.slice(0, 10)); 