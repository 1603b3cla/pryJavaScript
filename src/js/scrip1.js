/*alert("Hello");
console.log('soy un mensaje independiente');


let nombre = prompt("introduce tu nombre");
console.log('tu nombre es', nombre);

let x = 56;
let y = 78;
let g = 78;


const location1 = "New York," + "NY";
const location2 = "New York," + "NY";
const location3 = "New York," + "NY";


console.log(location1);
console.log(location2);
console.log(location3);

let valor1 = 45;
let valor2 = "David";

if(true){
    let x = 89;

}


let nombre, edad, esposa;
nombre = 'Edgar David';
edad = 22;
esposa = 'Belen';
console.log("Mi nombre es " + nombre + " y tengo " + edad + " años, y mi princesa es " + esposa);
*/

/*Scope de var tiene ambito
function varTest() {

    var x = 31;
    if (true) {
        var x = 56;
        console.log(x);
    }
    console.log(x);
}
varTest();


function letTest() {

    let x = 31;
    if (true) {
        let x = 56;
        console.log(x);
    }
    console.log(x);
}
letTest();


console.log(x);
var x = 34;
*/
/*
console.log(x);
let x = 34;*/
/*
function ejemploAmbitoVar() {
    if (true) {
        const x = 23;
    }
    console.log(x);
}

ejemploAmbitoVar();*/

/*

let y = 23;
y = 'Hola mundo';
console.log(y);*/

/*
const v = 6;

function constEjemplo() {
    const v = 5;
    if (true) {
        const v = 70;
        console.log(v);

    }
    console.log(v);
}
console.log(v);

constEjemplo(); */


/*


//Tipo de datos de JavaScript

let age = 22;
let base = 4.5;
let distanciaTierra_sol = 4323423423;
let name = "Edgar David Calvo Garcia";
let gender = 'M';
let aprobado = afalse;
let weight = undefined;
let height = null;
let resultFuction = function enviar() {};
let symbol = 'a';
let objPersona = {
    nombre: 'Edgar David',
    apellido: 'calvo'

}
let arrayNameFruits = ['pera', 'manzana', 'mandarina'];



console.log('symbol:${typeof symbol}');


let pesoCelular = 1.4;
pesoCelular = 'Uno punto cuatro';*/



//Cadena de caracteres

/*

let nameUser = 'Ejemplo = "edgar" ';
let nameAdmin = "Ejemplo = 'edgar' ";

console.log(`francesa:${nameUser} mas texto ${nameAdmin}`);
console.log('francesa:', nameAdmin)
console.log('francesa:' + ameAdmin)


let name = "Ilya";
alert(`helo $ {1}`);


let nombreAnimal = 'Mono'; */
/*
function factorial(n) {
    // Caso base: el factorial de 0 o 1 es 1
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // Caso recursivo: n! = n * (n-1)!
        return n * factorial(n - 1);
    }
}

// Ejemplo de uso
console.log(factorial(5)); // Imprimirá 120


function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        // Caso recursivo: Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Ejemplo de uso
console.log(fibonacci(6)); // Imprimirá 8 */
/*

const date = new Date();

let nameUser = prompt("Ingresa tu nombre: ");
let numControl = prompt("Ingresa tu numero de control: ");
let birthday = prompt("Ingresa tu año de nacimiento: ");

const edad = date.getFullYear() - birthday;
console.log(`Los datos del alumno son: \n nombre: ${nameUser}
numero de control${numControl}\n edad: ${edad}`)
*/

/*const weight = parseFloat(prompt("Ingresa el ancho del rectangulo: "));
const height = parseFloat(prompt('Ingresar la altura del rectangulo: '));

const birthday = parseInt(prompt('Ingresa el año de nacimiento: '));


console.log('el perimetro es: ', 2 * (weight + height) + " U2");
console.log('el año de nacimiento es: ', birthday)*/


/*
const gender = prompt('Ingresa tu sexo: ');
console.log(gender.charAt(0));*/


let jsonString = '{"Marca":"LG","Modelo":"ZPlus","RAM":12,"Procesador":"SnapDragon 820"}';
let cadenaNoparceada = jsonString;

console.log(`Cadena no parceada: ${jsonString}`)
console.log(`Cdena Parceada: ${JSON.parse(jsonStrin)}`);