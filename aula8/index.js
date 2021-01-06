/**
 * Tipos primitivos
 * 
 * stirng / number / undefined / null / boolean / symbol
 * 
 * const: tornar a variável imutavel.
 * let: váriavel que pode ser alterada no decorrer do código.
 */

const nome = 'Marley'; //string
const nomeMeio = "Torres"; //string
const nomeFinal = `Win`; //string
const num = 3; //number
const pontoFlutuate = 36.9; //number
let nomeAluno; //Declarada, mas não inicializada. Automaticamente a variavel receber undefined.
const sobrenomeAluno = null; //Nao aponta para lugar nenhum da memoria, undefined mesmo esquema.
const aprovado = true; //boolean só existem dois valores possiveis, true ou false.

console.log(typeof aprovado, aprovado); //typeof é usado para saber o tipo primitivo da variavel.