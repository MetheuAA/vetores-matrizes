let meuArray = [];

//Adicionando elementos ao final do array
meuArray.push(10);
meuArray.push(10);
meuArray.push(10);

console.log(meuArray);//Saída: [10, 20, 30]

//adicionando vário elementos de uma vez
meuArray.push(40, 50, 60);

console.log(meuArray);//Saída: [10, 20, 30, 40, 50, 60]

//Alterando o valor de um elemento do array
meuArray[2] = 35;
console.log(meuArray);

//Removendo último elementos do array
let elementoRemovido = meuArray.pop();

console.log(elementoRemovido);//Saída: 60

console.log(meuArray);//Saída: [10, 20, 30, 40, 50]

let tamanhoArray = meuArray.length;

console.log(tamanhoArray);