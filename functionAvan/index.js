// declarando funções
// Fist-class objects - as funcções são objetos de primeira classe


// function spikingHi(){ // nesse padrão, acontence o Hoisting
//                         //  ela funciona chamando antes ou depois da criação
//     console.log(`Ola mundo`);
// }

//Arrow function
// spikingHi = () =>{
//    console.log(`Ola mundo`);
// }

//Arrow Function resumida, quando se tem só uma minha de função
// spikingHi = () => console.log(`Ola mundo`);



// sobre argumentos
// as funções normais, tem uma variavel especial, chamda arguments
// que sustentão todos os valores passado por parametros.
// function variavel(){
//     let total = 0;
//     for(let args of arguments){
//         total += args;
//     }
//     console.log(total);
// }
// variavel(1, 2, 3, 4, 5);

// function sow(a, b=2, c=4){
//     console.log(a+b+c);
// }

// sow(1, undefined, 4);

//callback
// function rand(min = 1000, max = 3000){
//     const num = Math.random()*(max - min) + min;
//     return Math.floor(num);
// }

// function f1(callback){
//     setTimeout(() =>{
//         console.log(`F1`);
//         if (callback) callback();
//     }, rand());
// }

// function f2(callback){
//     setTimeout(() =>{
//         console.log(`F2`);
//         if (callback) callback();
//     }, rand());
// }

// function f3(callback){
//     setTimeout(() =>{
//         console.log(`F3`);
//         if (callback) callback();
//     }, rand());
// }

// f1(f1Callback);

// function f1Callback(){
//     f2(f2Callback);
// }

// function f2Callback(){
//     f3(f3Callback);
// }

// function f3Callback(){
//     console.log(`Ola mundo`);
// }


//IIFF->Immediately invoed function expression
// ou funções alto invocadas
//elas são protegida quanto a area global.

// (function(){

//     function criaMutiplicador(mutiplicador){
//         const mut = mutiplicador;
//         return function(num){
//             return num * mut;
//         }
//     }


//     const  duplica = criaMutiplicador(2);
//     const  triplica = criaMutiplicador(3);
//     const  quatriplica = criaMutiplicador(4);

//     const resulDuplica = duplica(3);
//     const resulTriplica = triplica(3);
//     const resulQuatriplica = quatriplica(3);

//     console.log(resulDuplica, resulTriplica, resulQuatriplica);


// })();


// Funções FÁBRICA (FactoryFunctions)

function createPerson(nome, sobreNome, idade) {
    return {
        nome,
        sobreNome,
        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobreNome}`;
        },
        //Setter
        set nomeCompleto(valor) {
            //O split esta dividndo entre os espaços e retornando um array.
            valor = valor.split(` `);
            this.nome = valor.shift();//remove e retorna o 1º valor
            this.sobreNome = valor.join(` `);// junta o resto do array
            console.log(valor);
        },
        idade,
        // (Getter) se colocar get na frente da function seIndetifica
        //ela passa agir como um atributo normal, que nem o nome por ex.
        seIdentifica(...args) {
            return `Meu nome é ${this.nome} ${this.sobreNome}`
                + ` e eu tenho ${this.idade}, ${args}`
        }
    };

};

const peploOne = createPerson(`Marley`, `Will Win`, 23);
// console.log(peploOne.seIdentifica(`e sou um empreendedor de sucesso`
//     +` que atingiu a liberdade financeira investindo tbm.`));

peploOne.nomeCompleto = `João Carlos Freita`;
console.log(peploOne.nomeCompleto);