// um pouco sobre funções

// function hello(nome) { //sem retorno
//     console.log(`Bom dia ${nome}, Seu lindo!`);
// }

// const temp = hello(`Marley`);//não da para jogar o valor em variavel se a função n tem retorno.
// console.log(temp);//vai ter como resultado um undefined, pois n se tem retorno na function.
// hello(`Aldenor`);//passando o valor por paramentro que a função exige.

// function hello2(nome) {//com retorno
//     return `Boa tarde Sr. ${nome} Desejamos otimas festas a você!`;
// }

// const exib = hello2(`Marley`);//quando a função tem retorno, ela pode ser jogada dentro de uma variavel.
// console.log(exib);//resultado da variavel provinda do result of fuction.


// + function
// function soma(nOne = 0, nTwo = 0 ) {// os = 0, serve caso não tenha passado os parametros.
//     return `O resultado da soma Eh: ${nOne + nTwo}`;
// }

//const reult = soma(3,6);
//console.log(soma(3,9));

//outras formas de fazer function's

// const quadrado = function (n){
//     return `O resultado EH ${n**2}`;
// };

// console.log(quadrado(3));
// console.log(quadrado(6));
// console.log(quadrado(9));

// ou a forma mais atual

// const quadrado = (n) => {// assim caso tenha mais de uma linha na function ou mais parametros.
//     return `O resultado EH ${n**2}`;
// };

// console.log(quadrado(3));
// console.log(quadrado(6));

// QUANDO SE TEM SÓ UMA LINHA NA FUNCTION E SÓ UM PARAMETRO

const quadrado = n =>  `O resultado EH ${n**2}`;

console.log(quadrado(3));
console.log(quadrado(9));






