// um pouco de filter, ele sempre retorna um array, com a mesma
// quantidade de elementos ou menos.

const array = [ 1, 2, 20, 17,1 ,4,5,7,35,55];
//usando filter - função de callback
const array2 = array.filter(valor => valor > 10);
// console.log(array2);

//exemplo aantigo para fazer um "filtro" dentro do array
// for( let a of array){
//     if(a > 10){
//         array2.push(a);
//     }
// }
// console.log(array2);


const array3 = [
    {nome: `Marley`, idade: 23},
    {nome: `Aldenor`, idade: 15},
    {nome: `Usuário DOM`, idade: 33},
]

arrayPratica = array3.filter(obj => obj.nome.length === 6 );
console.log(arrayPratica);
arrayPratica = array3.filter(obj => obj.idade === 15 );
console.log(arrayPratica);
//o endsWith procura a terminal com a leta definida em seu campo.
arrayPratica = array3.filter(obj => {
    return obj.nome.toLowerCase().endsWith(`m`)});

console.log(arrayPratica);