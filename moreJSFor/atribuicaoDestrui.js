/**
 * Atribuição via desestruturação.
 */

//exemplo 1
//  let a = `A`;//B
//  let b = `B`;//C
//  let c = `C`;//A
//  const letras = [`B`, `C`, `A`]; 
//  [a, b , c] = letras;
//  console.log(a, b, c);

//exemplo 2
// const numeros = [3, 6, 9, 2, 4, 8];
// const [one, two, tree, ...rest] = numeros; //...rest para pegar o resto do array, e o ...spread espalha.
//console.log(one, two, tree);//posso pegar o array por parte.
// const [tree, , nine, , four] = numeros;//posso pegar o array pulando valores
// console.log(tree, nine, four);

//exemplo 3
//                  0          1 
//               0  1  2    0  1  2
// const numero = [[3, 6, 9], [2, 4 ,8]];
//const   [,[,,escolha]] = numero;// escolhendo dentro dos array.
// const   [listaOne,listaTwo] = numero;// forma mais facil para pegar um numero dentro do arrray.
// console.log(listaOne[2]);


/**
 * Atribuição via desestruturação. (OBJETOS)
 */

 const pessoa = {
     nome: `Luiz`,
     sobrenome: `Luz`,
     idade: 23,
     endereco: {
         rua: `21 de Abril`,
         numero: 0101,
      }
 };

 //atribuindo de forma normal
 //const nome = pessoa.nome;

 //Atribuição via desestruturação
 const {nome, sobrenome: segundoNome, ...rest} = pessoa;
 const {endereco: {rua, numero}} = pessoa;// para exibir os valores de dentro do endereco

 console.log(nome, segundoNome);
 console.log(rua);
 console.log(rest);