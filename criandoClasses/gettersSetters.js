//about getter and setter in the class

//Symbol gera um ID aleatorio, toda vez que ele for chamado ele vai
//ser aleatorio. Todo Symbol é diferente de outro. [variavelaqui]
const _velocidade = Symbol(`velocidade`);

class Carro{
    constructor(nome){
        this.nome  = nome;
        this[_velocidade] = 0; 
    }

    set velocidade(valor){
        if(typeof valor !== `number`) return;
        if(valor >= 100 || valor <=0) return;
        this[_velocidade] = valor;
    }

    get velocidade(){
        return this[_velocidade];
    }

    acelerar(){[_velocidade]
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    desacelerar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro(`Tesla`);

// for(let i=0; i<=200;i++){
//     c1.acelerar();
// }

c1.velocidade = 55;
console.log(c1);




class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    set nomeCompleto(valor){
        valor = valor.split(` `);
        this.nome = valor.shift();
        this.sobrenome = valor.join(` `);
    }

    get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    }
}

const p1 = new Pessoa(`Marley`, `Will Win`);
p1.nomeCompleto = `Rei dos piratas`;
// console.log(p1.nomeCompleto);
// console.log(p1.nome);
// console.log(p1.sobrenome);