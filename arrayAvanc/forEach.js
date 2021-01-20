// a bit the forEach
// identifique os números pares( filter ).
// dobre os numeros pares ( map ).
// sobre os valores pares ( reduce ).
const vet = [0,1,2,3,4,5,6,7,8,9]
const result = vet
.filter(valor => valor %2 === 0)
.map( valor => 2*valor)
.reduce((ind, valor) => valor + ind);

//usando o forEach para exibir, função interação com o array
vet.forEach( valor =>{
    console.log(valor);
});
console.log(`\nTotal da soma dos numeros pares: ${result}`);