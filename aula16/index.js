/**
 * Operadores de composição
 * >    maior que
 * >=   maior que ou igual a
 * <    menor que
 * <=   menor que ou igual a
 * ==   igualdade (valor) ------------------ não é usado iguala string e number 
 * ===  igualdade estrita (valor e tipo)
 * !=   diferente que (valor) -------------- não é usado iguala string e number
 * !==  diferente estrito (valor e tipo)
 * 
 * 
 * Operadores Lógicos                       false (literal).
 * && -> AND -> E                           0, '', "", ``, null, undefined, NaN (Falsy's não literal).
 * || -> OR -> OU
 * ! -> NOT -> NÃO
*/

// console.log(10 >= 5);// 10 maior ou igual a 5?
// console.log(10 <= 5);// 10 menor ou igual a 5?

// const espressaoANd = true && false && true;// todos os valores, tem que ser verdadeiro para passar o true.
// const espressaoOr = true || true || false;// pelo menos um dos 1 tem que ser verdadeiro para passar o true.
// const espressaoNOt = !false;// nega o valor.
// console.log(espressaoNOt);

//console.log( 10==10 && 4==5);


//UM POUCO DE IF E ELSE ⬇

/**
 * if pode ser usado sozinho.
 * sempre que utilizo a palavra else, preciso de um if antes.
 * eu posso ter varios else ifs na checagem.
 * eu só posso ter um else na checagem.
 * Podemos usar condições sem else if, utilizando apenas if e else
 */
// const hora = 1;

// if (hora >= 0 && hora<= 11){
//     console.log(`Bom dia, jovem.`);
// }else if(hora >= 12 && hora <=17 ){
//     console.log(`Boa tarde, jovem.`);
// }else if(hora >= 18 && hora <= 23){
//     console.log(`Boa noite, jovem`);
// }else{
//     console.log(`Essa hora realmente existe?`);
// }

const numbOne = 10;

if(numbOne >= 0 && numbOne <=5 ){
    console.log(`seu numero é maior que 0 e menor que 6`);
}else if(numbOne >= 6 && numbOne <=10){
    console.log(`O número que você escolheu é maior que 5 e menor que 10`);
}else if(numbOne >=11 && numbOne <=20){
    console.log(`O número que você escolheu é maior que 10 e menor que 21`);
}

if(numbOne %2 == 0){
    console.log(`e o número é par`);
}else{
    console.log(`O número é Impar`);
}