//polimorfismo é quando o mesmo metodo se comporta de forma diferente.
//superclass

function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor){
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }

    this.saldo -= valor;
    this.extrato();
};
Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.extrato();
};
Conta.prototype.extrato = function(){
    console.log(`Ag/c.: ${this.agencia}/ `+
` ${this.conta} Saldo: R$:${this.saldo.toFixed(2)}`);
};

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if((this.saldo + this.limite) < valor){
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }

    this.saldo -= valor;
    this.extrato();
};

const corrente = new ContaCorrente(1, 22, 0, 100);
corrente.depositar(10);
corrente.sacar(110);
corrente.sacar(1);

console.log();

const poupa = new ContaPoupanca(2, 33, 0);
poupa.depositar(10);
poupa.sacar(10);
poupa.sacar(1);