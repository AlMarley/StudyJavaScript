const falar = {
    fala(){
        console.log(`${this.nome} esta falando`);
    },
};
const comer = {
    comer(){
        console.log(`${this.nome} esta comendo`);
    },
};
const beber = {
    beber(){
        console.log(`${this.nome} esta bebendo`);
    },
};

const pessoaPrototype = {...falar, ...comer, ...beber};

function criaPessoa(nome, sobrenome) {

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome},
    });
};

const p1 = criaPessoa(`Marley`, `Win`);
const p2 = criaPessoa(`Mry`, `Will`);

p1.comer();
p2.fala();
p1.beber();