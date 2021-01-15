//function Construtic -> retorna objetos

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    const idade = 23;


    this.metodo = () =>{
        console.log(`Ola Sr. ${this.nome} ${this.sobrenome} costamos aqui`
        +` em nosso banco de dados que você tem ${idade}`);
    };
};


const persona01 = new Pessoa(`Marley`, `Win`);
persona01.metodo();