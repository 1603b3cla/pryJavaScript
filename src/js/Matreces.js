let matrix = [
        [1, 56, 14, 23, 89],
        [3, 58, 89, 16, 90],
        [1, 73, 23, 61, 23]

    ]
    /*
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            console.log(matrix[1][j]);
        }


    

matrix.forEach((fila) =>
    fila.forEach((column) =>
        console.log(column))
)}*/

for (const fila of matrix) {
    for (const columna of fila) {
        console.log(columna);
    }

}