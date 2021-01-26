// a bit about class.

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    dataNascimeto() {
        const data = new Date();
        return data.getFullYear() - this.idade;
    }

    falar() {
        console.log(`Ola ${this.nome}, vc nasceu em ${this.dataNascimeto()}`);
    }
}

//comparando com constructor function
function Pessoa2(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

// provando que não tem problema de ligar os propotype entre os modelos.
Pessoa2.prototype = Object.create(Pessoa.prototype);
Pessoa2.prototype.constructor = Pessoa2;

Pessoa2.prototype.falar = function() {
    console.log(`Ola, me chamo ${this.nome} ${this.sobrenome}`+
    ` nasci em ${this.dataNascimeto()}`);
}

const p1 = new Pessoa(`Marley`, 24);
p1.falar();

const p2 = new Pessoa2(`Will`, `Win`, 15);
p2.falar();
console.log(p2.dataNascimeto());