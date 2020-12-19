/**
 * Study um pouco mais sobre String's
 * Saba-se que não poder fazer isso -> let va = "escrever entre aspas duplas e usalas "novamente" ";
 * por que o interpretador entende como uma quebra, mas existe uma forma de escapar o caractere
 * usando barras assim -> let va = "escrever entre aspas duplas e usalas \"novamente\" ";
 * funcionará normalmente.
 * 
 * para usar uma barra investida '\' dentro da string, você terá que escrever duas '\\'.
 */

let va = "escrever entre aspas duplas e usalas \"novamente\" ";
console.log(va);

//          0123456789 [...]
let varA = `Cada variavel, tem uma posição, basicamente como um vetor`;
console.log(varA[9]);
//ou
console.log(varA.charAt(8));


// Exibindo valores, formas diferentes
let varB = `Exemplo:`;
console.log(varB.concat(' tipo', " isso."));
console.log(varB+' tipo'+ ' isso.');
console.log(`${varB} tipo isso. <- modelo aconselhado`);

// identificando o indice, usando o exemplo de varA.
console.log(varA.indexOf(`variavel`));

//expreção regular
console.log(varA.match(/[a-z]/g));
console.log(varA.search(/[a-z]/g));

// substitui a palavra
console.log(varA.replace(`basicamente`,`basicando`));
//console.log(varA.replace(/a/g,`@`));

// tamanho 
console.log(varA.length);

// fatiando o testo
console.log(varA.split(` `, 3));

//tudo maiusculo ou minusculo
console.log(varA.toLocaleUpperCase());
console.log(varA.toLocaleLowerCase());
// documentação w3schools.com