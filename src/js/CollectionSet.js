const objSet = new Set();
objSet.add('elemento1');
objSet.add('elemento2');
objSet.add('elemento3');
objSet.add('elemento3');

objSet.forEach(element => {
    console.log(element);
});

console.log('Recorrido con forEach');
miMapa.forEach((element, objSet) => {
    console.log(`${objSet}:${element}`);
});