//Suma
/*
const a = 45;
const b = 23;
const c = 45;
const d = 23;

const resultsuma = a / b;
const resultDiv = a / b;
const resultRe = a % b;
const resultPot = a ** b;

console.log(`Divicion de ${a} / ${b} es igual a: ${resultDiv}`);
console.log(`Divicion de ${a} / ${b} es igual a: ${Math.round(resultDiv)}`);
console.log(`Divicion de ${a} / ${b} es igual a: ${resultDiv.toFixed(2)}`);
console.log(`Divicion por 0 ${a} / ${b} es igual a: ${5/0}`);
console.log(`Divicion por 0 ${a} / ${b} es igual a: ${0/0}`);
console.log(`el residuo por 0 ${a} % ${b} es igual a: ${resultRe }`);
console.log(`la potencia de ${a} / ${b} es igual a: ${resultPot}`);*/

/**
 * % = modulo
 * ** = Potencia
 * let a = 6;
    let b = 2;
    a **= b;
    console.log(a);
 */

/*6,4,4,6,5,5,3
console.log(a--);
console.log(--a);
console.log(a++);
console.log(++a);
console.log(--a);
console.log(a--);
console.log(--a);

console.log(++a);
console.log(a++);
console.log(a);
console.log(a--);
console.log(a);

let name = "Juan";
let lastname = "Pérez";
let nombreCompleto = name + " " + lastname;
console.log(nombreCompleto); // Muestra "Juan Pérez"

//Igualdad (==): Compara si dos valores son iguales.

let a = 5;
let b = 5;
console.log(a == b); // Muestra true

//Desigualdad (!=): Compara si dos valores son diferentes.

console.log(a != b); // Muestra true

//Mayor que (>): Compara si el valor de la izquierda es mayor que el valor de la derecha.

console.log(a > b); // Muestra true

//Menor que (<): Compara si el valor de la izquierda es menor que el valor de la derecha.

console.log(a < b); // Muestra true

//Mayor o igual que (>=): Compara si el valor de la izquierda es mayor o igual que el valor de la derecha.

console.log(a >= b); // Muestra true

//Menor o igual que (<=): Compara si el valor de la izquierda es menor o igual que el valor de la derecha.

console.log(a <= b); // Muestra true

//Operador de igualdad.

console.log(a === y);



//TypeOf
const a = 34;
const b = 23;

console.log(typeof a);


let clienteData = {
    nameCLient: 'Edgar',
    born: 2004,
    adress: null,
    phoneNumber: '9513781290'
};

let clienteDataFinal = {
    nameCLient: clienteData.nameCLient ? ? 'Demetrio',
    born: clienteData.born ? ? 2000,
    adress: clienteData.adress ? ? "Domiciolio conocido",
    phoneNumber: clienteData.phoneNumber ? ? '9516781290',

};
console.log(clienteDataFinal)

let frutas = ["Manzana", "Banana", "Mango", "Pera"];
const number = [12, 45, 34, 78];

const mergeType = [
    'Pedro',
    { nombre: 'Hugo' },
    function() {
        console.log('Hola');
    },
    true,
    { clave: "valor" }
];
console.log(mergeType)*/

//Tipo de arrays

const array1 = new Array()
const array2 = []


//Remplazar la pocicon de un array

let frutas = ["Manzana", "Banana", "Mango", "Pera"];

console.log("Antes de la modificación:", frutas);


// Modificar el valor en la posición 1
frutas[1] = "Cereza";

// Imprimir el array después de la modificación
console.log("Después de la modificación:", frutas);

//Se agrega un elelmento de forma directa
frutas[4] = "Fresa";
console.log("Se agrega un elemento al final:", frutas);
// Agregar una fruta al final del array
frutas.push("Kiwi");

console.log("Un valor agregado en la ultima pocicion con push:", frutas);

console.log("El tamaño del array es de: ", frutas.length);

//Recorrido de arrays
console.log("Recorriendo el array con for:");
for (let i = 0; i < frutas.length; i++) {
    console.log(`La fruta "${frutas[i]}" está en la posición ${i}.`);
}

//For each
console.log("Recorriendo el array con forEach :");
frutas.forEach(function(fruta, indice) {
    console.log(`En la posición ${indice}: ${fruta}`);
});

console.log("Antes de pop y forEach:", frutas);

// Eliminar el último elemento del array con pop()
let ultimoElementoEliminado = frutas.pop();

console.log("Último elemento eliminado:", ultimoElementoEliminado);
console.log("Después de pop:", frutas);

console.log("Antes de shift:", frutas);

// Eliminar el primer elemento con shift()
let primeraFruta = frutas.shift();

console.log("Fruta eliminada con shift:", primeraFruta);
console.log("Después de shift:", frutas);

// Recorrer el array modificado con forEach y arrow function
console.log("Recorriendo el array con forEach después de shift:");

console.log("Antes de la modificación:", frutas);

// Agregar una fruta al principio del array
frutas.unshift("Maracuya");

// Imprimir el array después de la modificación
console.log("Después de la modificación:", frutas);

// Recorrer el array con forEach y arrow function
console.log("Recorriendo el array con forEach y arrow function:");

frutas.forEach((fruta, indice) => {
    console.log(`En la posición ${indice}: ${fruta}`);
});

console.log("Recorriendo el array con indexOf:");

frutas.forEach(fruta => {
    const indice = frutas.indexOf('Mango');
    console.log(`En la posición ${indice}: ${'Mango'}`);
});


console.log("Antes de la modificación:", frutas);

// Agregar una fruta al final del array utilizando splice
frutas.splice(frutas.length, 0, "Uva");

// Modificar el valor en la posición 1 utilizando splice
frutas.splice(1, 1, "Camote");

console.log("Después de la modificación:", frutas);

const nuevalista = frutas.slice(1, 3);
console.log("Solo muestra los valores en la pocicion [1,3]:", nuevalista);

console.log("Antes de ordenar alfabeticamente:", frutas);

// Utilizar el método sort() para ordenar el array alfabéticamente
frutas.sort();

console.log("Después de ordenar alfabéticamente:", frutas);