
alert(`Inspiração`);
confirm(`Você deseja realmente continuar nessa jornada?`);
prompt(`Digite o motivo de ir adiante`);


const nome = prompt(`Digite seu nome`);
console.log(nome);
let num1 = prompt(`Digite sua data de nascimento`);
let num2 = prompt(`Digite em que ano você e está`);
let idade;
idade = num2 - num1;
console.log(`${nome} Sua data de nascumento é: ${idade} anos :)`);
alert(`Sua idade é ${idade}`);
 

const seuNome = prompt(`Se identifique, pf!`);
let numA = Number(prompt(`Digite um número a ser somado:`));
let numB = Number(prompt(`Agora manda outro, na lata:`));
let soma;

soma = numA+numB;
alert(`${seuNome}, a soma dos número que você colocou é: ${soma}, o que achou?`);

//praticar 2x

let one = `A`;//B
let two = `B`;//C
let three = `C`;//A

console.log(`Valor de one ${one} | Valor de Two ${two} | e Valor de three ${three}`);



//let aux = one;
//one = two;
//two = three;
//three = aux;

//ou
[one, two, three] = [two, three, one]

console.log(`Resolution > Valor de one ${one} | Valor de Two ${two} | e Valor de three ${three}`);