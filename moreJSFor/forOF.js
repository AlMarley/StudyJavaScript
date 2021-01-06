// agora um pouco sobre o for of que é expecifico para objetos interaveis.

const nome = `Marley win`;

//com for classico
// for(let i = 0; i<nome.length; i++){
//     console.log(nome[i]);
// };

//com for in
// for(let letra in nome){
//     console.log(nome[letra]);
// };

//agora com o for of (não é usado para object)
// for(let valor of nome){
//     console.log(valor);
// };

//e tem outro tbm que é o forEach(Por algum motivo esta dando erro).
// nome.forEach(function(el){
//     console.log(el);
// });

const pessoa = {
    nome: `Marley`,
    idade: 23,
};

//usando o for of da erro, pois o objecto não é interavel.
for(let chave of pessoa){
    console.log(chave, pessoa[chave]);
};

// resumo
//For classico -  geralmente com interáveis (arrey ou string)
//For in -  Retorna o índice ou chave  (arrey, string o u objecto)
//For of -  Retorna o valor em si (interáveis, arrays ou strings)

