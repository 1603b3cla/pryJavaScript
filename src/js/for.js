//For tradicional
// Array con los nombres de las mascotas
const nombresMascotas = ['Pelusa', 'Max', 'Luna', 'Rocky'];

// Bucle for para recorrer el array y mostrar los nombres de las mascotas
for (let i = 0; i < nombresMascotas.length; i++) {
    console.log(`Mascota ${i + 1}: ${nombresMascotas[i]}`);
}


//rompiendo un ciclo for
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}


// Número para la tabla de multiplicar
const numero = 7;
console.log('Tabla de multiplicar')
    // Bucle for para la tabla de multiplicar del 7
for (let i = 1; i <= 10; i++) {

    let resultado = numero * i;

    console.log(`${numero} x ${i} = ${resultado}`);
}

//Continue
console.log('Sentecia continue')
for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}


const num = 7;
console.log('Tabla de multiplicar numeros pares')
    // Bucle for para la tabla de multiplicar del 7
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    let resultado = num * i;

    console.log(`${num} x ${i} = ${resultado}`);
}


const animalsName = {
    nombre: 'perro',
    color: 'negro',
    raza: 'Rotwailer'
};

// Bucle for-in para recorrer los atributos del objeto
for (let atributo in animalsName) {
    // Verificamos si el atributo es propio del objeto (y no heredado)
    if (animalsName.hasOwnProperty(atributo)) {
        console.log(`${atributo}: ${animalsName[atributo]}`);
    }
}



const animalsNam = {
    nombre: 'perro',
    color: 'negro',
    raza: 'Rotwailer'
};
console.log('Con ForOF')
    // Utilizamos Object.entries para obtener pares clave-valor como arrays
for (let [clave, valor] of Object.entries(animalsNam)) {
    console.log(`${clave}: ${valor}`);
}


// Título del código
console.log("Información de Flores:");

// Objeto con información de la flor
const objFlowers = {
    "Nombre": "Girasol",
    "NumPetalo": 400,
    "Color": "Amarillo"
};

// Bucle for-in para recorrer los atributos del objeto
for (let clave in objFlowers) {
    // Verificamos si el atributo es propio del objeto (y no heredado)
    if (objFlowers.hasOwnProperty(clave)) {
        // Imprimimos cada atributo y su valor
        console.log(clave + " => " + objFlowers[clave]);
    }
}


//Recorrido con ForOf
console.log("Recorrido con ForOf")
const candies = ["loli pop", "motita", "bola", "bubalo", "hols"]
for (let index of candies) {
    console.log(index);
}

//En mapas For Of
console.log("Recorrido con ForOf en mapa")
let contries = new Map();
contries.set('Mx', 'Mexico');
contries.set('Usa', 'Estados Unidos');
contries.set('Es', 'España');
for (let [clave, valor] of contries) {
    console.log(clave, ':', valor)
}