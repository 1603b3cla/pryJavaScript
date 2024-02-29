let miMapa = new Map();

// agregar elementos al mapa
miMapa.set('Clave1', 'Rojo');
miMapa.set('Clave2', 'Negro');
miMapa.set('Clave3', 'La soledad #07');

// Recorrido con forEach
console.log('Recorrido con forEach');
miMapa.forEach((element, clave) => {
    console.log(`${clave}:${element}`);
});

// Recorrido con for...of
console.log('Recorrido con forOf');
for (let [clave, valor] of miMapa) {
    console.log(`${clave}:${valor}`);
}

// Recorrido con for y values
console.log('Recorrido for y values');
for (let valor of miMapa.values()) {
    console.log(`${valor}`);
}