// mais sobre números

//let numer1 = 3;
//let numer2 = 6.369369369;

//console.log(numer1.toString() + numer2);//o toString() converte o valor temporariamente para String
//console.log(typeof numer1);//como podemos ver, logo depois ele volta para number
//numer1 = String (numer1);// converte permanentemente para string.
//console.log(numer1.toString(2));//dessa forma terá como resultado, a representação binaria. 
//console.log(numer2.toFixed(2));//arredonda e define a quantidade de casa depois da virgula.
//console.log(Number.is(numer2));// retorna um boolean para confirmar se é um integer ou n.

//let temporaria = numer2 * `asahua`;
//console.log(Number.isNaN(temporaria));//mesma coisa do anterior, porem para NaN


//agora falando um pouco sobre a imprecisão que tem em realação aos números no JavaScript. IEE 754 2008


let numer1 = 0.7;
let numer2 = 0.1;

numer1 +=numer2;
numer1 +=numer2;
numer1 +=numer2;



//numer1 = Number(numer1.toFixed(2));// faz essa conversão para solucionar o problema de imprecisão.
console.log(numer1)
console.log(Number.isInteger(numer1));// para indentificar se o resultato é realmente inteiro.

// ou pode ser resolvido de forma matemática.

//numer1 = ((numer1*100) + (numer2*100))/100;
//numer1 = ((numer1*100) + (numer2*100))/100;
//numer1 = ((numer1*100) + (numer2*100))/100;

//console.log(numer1);
//console.log(Number.isInteger(numer1));// para indentificar se o resultato é realmente inteiro.

