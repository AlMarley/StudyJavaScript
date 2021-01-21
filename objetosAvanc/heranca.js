// a bit about herança

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function (valor) {
    this.preco += valor;
}
Produto.prototype.desconto = function (valor) {
    this.preco -= valor;
}
function Car(nome, preco, modelo) {
    Produto.call(this, nome, preco);
    this.modelo = modelo;
}
Car.prototype = Object.create(Produto.prototype);
Car.prototype.constructor = Car;
Car.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}
Car.prototype.diminue = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}

const car1 = new Car(`Tesla`, 369, `Esportivo`);
car1.aumento(742);
console.log(car1);

function Caneca(nome, preco, modelo, estoque) {
    Produto.call(this, nome, preco);
    this.modelo = modelo;
    
    Object.defineProperty(this, `estoque`, {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== `number`) return;
            estoque = valor;

        }
        
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

caneca1 = new Caneca(`Caneca`, 333, `Tesla`, 12);
caneca1.aumento(666);
console.log(caneca1);
