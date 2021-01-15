// um tanto de map, o map sempre terá o mesmo valor inicial.
// a diferença do filter pro map, é que o map, pode alterar os valores

// exemplo de map, mutiplicando o valor do array
const array = [ 1, 2, 20, 17,1 ,4,5,7,35,55];
const array2 = array.map(valor => valor *2);
// console.log(array2);




const array3 = [
    {nome: `Mouranivel`, idade: 12},
    {nome: `Bianilda`, idade: 23},
]

// const arrayTest = array3.map(valor => valor.nome);
// console.log(arrayTest);

// const arrayTest = array3.map(obj => {
    // delete obj.nome;
    // return obj;
//});
// console.log(arrayTest);

const arrayTest = array3.map(obj => ({ idade: obj.idade }));
console.log(array3);
 
// const arrayTest = array3.map((obj,id) => {
//     const temp = {...obj};
//     temp.id = (id+1)*1000;
//     return temp;
// });
// console.log(arrayTest);
