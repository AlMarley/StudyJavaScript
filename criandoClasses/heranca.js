/**
 * a bit about herença
 */


class DispositivoEletrico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já esta ligado!`)
            return;
        }

        this.ligado = true
    }
    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já esta desligado!`)
            return;
        }

        this.ligado = false;
    }
}

class NoteBook extends DispositivoEletrico {
    constructor(nome, ram, processador) {
        super(nome);//mesmo esquema do call nos constructor.
        this.ram = ram;
        this.processador = processador;
    }
}


const n1 = new NoteBook(`Dell`, 16, `core-i9`);
console.log(n1)
