// defineProperty - defineProperties

// function Produto(nome, preco, estoque) {
//     // this.nome = nome;
//     // this.preco = preco;
//     // this.estoque = estoque;


//     Object.defineProperty(this, `estoque`, {
//         enumerable: true,// mostra a chave
//         value: estoque,// valor dachave
//         writable: false,// pode alterar o valor
//         configurable: true,// configurável

//     });

//     Object.defineProperties(this, {
//         nome: {
//             enumerable: true,// mostra a chave
//             value: nome,// valor dachave
//             writable: false,// pode alterar o valor
//             configurable: true,// configurável
//         },

//         preco: {
//             enumerable: true,// mostra a chave
//             value: preco,// valor dachave
//             writable: false,// pode alterar o valor
//             configurable: true,// configurável
//         },
//     });
// }

// const p1 = new Produto(`TeslaCar`, `100000`, 666);
// console.log(p1);
// console.log(Object.keys(p1));//mostra as chaves do obj



// Object.defineProperty - getters setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    // this.estoque = estoque;
    let estoqueViwe = estoque;


    Object.defineProperty(this, `estoque`, {
        enumerable: true,// mostra a chave
        configurable: true,// configurável
        get: function () {
            return estoqueViwe;
        },
        set: function (valor) {
            if (typeof valor !== `number`) {
                throw new TypeError(`É esperado um número! `);
            }
            estoqueViwe = valor;
        }
    });
}

// const p1 = new Produto(`TeslaCar`, `100000`, 666);
// p1.estoque = 10;
// console.log(p1.estoque)


function criaProduto(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace(`a`, 4);
            nome = valor;
        },
    }
}

const p2 = criaProduto(`Tesla`);
p2.nome = (`TeslaCar`);
console.log(p2.nome);