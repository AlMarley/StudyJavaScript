//Marley Torres Win tem 25 yaers, pesa 84kg 
//tem 1.72 de altura e seu IMC é de x

const nome = `Marley`;
const sobrenome = `Torres Win`;
let idade = 25;
let peso = 75; //Em Kg.
const altura = 1.72; //Em Metros.
let imc;
let anoAtual = 2020;
let anoNascimento;

imc = peso/(altura*altura);
anoNascimento = -1*(idade - anoAtual);

//console.log(nome,sobrenome,`tem`,idade,`anos pesando`,peso+`kg, com uma altura de`,altura+`.`);
//console.log(`Seu IMC tem como resultado:`,imc);
//console.log(`E seu ano de nasciemnto é:`,anoNascimento);

//template strings⬇
console.log(`${nome} ${sobrenome} tem ${idade}anos, e pesa ${peso}kg.`);
console.log(`Tem ${altura} de altura e seu IMC é de: ${imc}.`);
console.log(`Nasceu no ano de: ${anoNascimento}.`);