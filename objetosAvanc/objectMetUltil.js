// alguns metodos ulteis para os object

const venda = {nome: `Tesla`, preco: 666333999};
//const nota = Object.assign({}, venda, )// Object.assing usado pra copiar obj
const nota = {...venda};// copiando o obj 'venda' para 'nota'

nota.modelo = `esportivo`;
nota.quantidade = 1;

// console.log(venda);
// console.log(nota);

// mostra como estão as configurações da chave do obj
// console.log(Object.getOwnPropertyDescriptor(venda, `nome`));

// mostra só as chaves
console.log(Object.keys(venda));

// mostra os valores da chave.
console.log(Object.values(venda));

//mostra tanto chave como valor ao mesmo tempo
console.log(Object.entries(venda));



