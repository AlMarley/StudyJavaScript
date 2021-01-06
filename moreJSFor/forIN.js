// um pouco do for in, ele ler os indices ou chaves do objecto

// const frutas = [`Abacate`, `Mamão`, `Banana`, `MaracuJÁ`];
// usando o for classico para exibir o array/vetor
// for(let i = 0; i < frutas.length; i++){
//     console.log(frutas[i]);
// }

//agora fazendo o mesmo com o for in
// for(let i in frutas){
//     console.log(i);
// }


const pessoas = {
    nome: `Marley`,
    sobrenome: `Torres`,
    idadea: 23,
};

for (let key in pessoas){
    console.log(key, pessoas[key]);
};

