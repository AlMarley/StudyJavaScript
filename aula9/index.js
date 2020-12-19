/** 
 * Operadores Aritméticos           precedencia         incremente ++
 *  +  adição / concatenação        ()                  decremento --
 *  -  subtracão                    **
 *  *  multiplicacao                *
 *  /  divisao                      /
 *  ** potenciacao                  %
 *  %  resto da divisao             +
 *                                  - 
 *   
 */

 const numA = 3;
 const numB = 6;

 console.log(numA+numB); //vai somar os dois números. number

 const numC = '3';
 const numD = 6;
 
 console.log(numC+numD); //por ser dois tipos primitivos diferentes, irá ocorrer uma concatenação. string

 const passo = 3;
 let contator = 0;
 contator += passo; // *= é a mesma coisa de contator = contator+passo
 contator += passo
 contator += passo

 console.log(contator)

 //situação de NaN - Not a number
 const a = 10;
 const b = 'Luiz';
 console.log(a*b);

 //convertendo valor - parseInt / parseFloat / Number
 const num1 = 3;
 const num2 = parseInt`6`;//convertendo a string pra valor do tipo int.
 console.log(num1+num2);