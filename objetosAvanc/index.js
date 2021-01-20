// revisando OBJETOS
//usado para travar objeto.
//Object.freeze();

/**
const obj = new Object();

obj.nome = `Carlos`;
obj.sobrenome = `Òliveira`;
obj.idade = 24;
obj.nomeCompleto = function () {
  return `Ola, ${this.nome} ${this.sobrenome}, tenha um bom dia`;  
};

obj.dataNascido = function() {
    const data = new Date();
    return data.getFullYear() - this.idade;
}

console.log(obj);
console.log(obj.nomeCompleto());
console.log(obj.dataNascido());

for(let chave in obj){
    console.log(chave, obj[chave]);
}

 */



// factory functions
/**
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,

        get nomeCompleto(){
            return `Nome Completo ${this.nome} ${this.sobrenome}`
        }
    }
}

pessoa1 = criaPessoa(`Marley`, `Win`, 24);


console.log(pessoa1);
console.log(pessoa1.nomeCompleto);
 */

// constructor functions

function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;

}

const exib = new Pessoa(`Marley`, `Win`, 24);

console.log(exib);

