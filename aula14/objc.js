// basic to basic

// const pessoa1 = {

//     nome: `Marley`,
//     profissao: `Empreendedor`,
//     invetidorType: `Arrojado`,

// };

// console.log(pessoa1);

// function dadosPessoas(nome, profissao, invetidorType){

//     return {

//         nome: nome,//quando se existe a repetição como exempl nome: nome, pode apagar o nome:
//         profissao,
//         invetidorType,
    
//     };

// };

// console.log(dadosPessoas(`Marley`, `Empreendedor`, `Arrochado`));


//dentro do objeito pode ter function

const pessoa = {

    nome: `Marley`,
    sobreNome: `Win`,
    idade: 22,

    falar(){
        console.log(`A minha idade ÉH ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;

    }

};


pessoa.falar();
pessoa.incrementaIdade();
pessoa.falar();