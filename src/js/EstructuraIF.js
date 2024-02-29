/*let num = 2;
if (num === 2) {
    console.log('Son iguales');
}

console.log('Haz llegado al final de la sentencia');



let currentDay = new Date().getDay();

const days = {
    domingo: 0,
    lunes: 1,
    martes: 2,
    miercoles: 3,
    jueves: 4,
    viernes: 5,
    sabado: 6
}
if (days.martes === currentDay) {
    console.log('Echale ganas pezcuesuda, que aun noo termina la semana');
} else {
    console.log('Felicidades, pero aque costo')
}

//Desarrollar un script que imprima en orden desendente de 3 numeros dados

// Declarar las variables A, B y C solamente
let A = 1;
let B = 7;
let C = 2;

// Función para imprimir en orden descendente usando if-else
function imprimirOrdenDescendenteConIfElse() {
    if (A >= B && A >= C) {
        if (B >= C) {
            console.log('Números en orden descendente:', A, B, C);
        } else {
            console.log('Números en orden descendente:', A, C, B);
        }
    } else if (B >= A && B >= C) {
        if (A >= C) {
            console.log('Números en orden descendente:', B, A, C);
        } else {
            console.log('Números en orden descendente:', B, C, A);
        }
    } else {
        if (A >= B) {
            console.log('Números en orden descendente:', C, A, B);
        } else {
            console.log('Números en orden descendente:', C, B, A);
        }
    }
}

// Llamada a la función
imprimirOrdenDescendenteConIfElse();*/


let A = 34;
let B = 23;
let C = 5;

const arrayNumeros = [A, B, C];
const arrayOrdenado = arrayNumeros.sort((A, B) => B - A);
console.log(arrayOrdenado.join(','));