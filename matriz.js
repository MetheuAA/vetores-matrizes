let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]

];

//Acessando elementos da matriz
console.log(matriz[0][0]);//Saída: 1
console.log(matriz[1][2]);//Saída: 6

// Alterando elementos da matriz
matriz[0][0] = 10;

console.log(matriz);
// Itenando sobre os elementos da matriz
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}