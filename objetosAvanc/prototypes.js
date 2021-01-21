// new Object -> Object.prototype
// const objA = {
//     chaveA: `A`
//     // __proto__: object.prototype
// };
// const objB = {
//     chaveB: `B`
//     // __proto__: ObjA
// };
// const objC = new Object();
// objC.chaveC = `C`;
// // __proto__: ObjB
// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);
// console.log(objC.chaveB);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco*(percentual/100));   
}

p1 = new Produto(`Tesla`, 999333666);
p1.desconto(30);
console.log(p1);

p2 = {
    nome: `Tesla - Esport`,
    preco: 9996663331
};

Object.setPrototypeOf(p2, Produto.prototype);
p2.desconto(100);
console.log(p2);

const p3 = Object.create(Produto.prototype,{
    nome:{
        writable: true,
        configurable: true,
        enumerable: true,
        value: `Tesla`
    },
    preco:{
        writable: true,
        configurable: true,
        enumerable: true,
        value: 333666999
    },
    modelo:{
        writable: true,
        configurable: true,
        enumerable: true,
        value: `Espotivo`
    }
});

p3.desconto(100);
console.log(p3);