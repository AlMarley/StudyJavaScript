/* um pouco de valores primitivos e valores por referencia.
 *Primitivos (imutáveis) : string, number, boolean, undefined, null (bigint, symbol) > valor
 *
 * Referência (mutável) -> array, object, function
 * 
*/

// let valor = `Luiz`;//tipo primitivo
// valor[0] = `J`;// não vai alterar o valor dentro da variavel, já que ela é primitiva.
// console.log(valor[0], valor);


// let x = [1, 2, 3];//por referência logo as variaveis apontam para os valores na memoria.
// let y = x;// ambos os valores terão o mesmo resultado.

// console.log(x, y);

// x.push(4);// por serem apontados na memoria, se eu mudar o valor de x, tbm muda o valor de y.
// console.log(x, y);

// y.pop();// logo a alteração em y tbm aferatar o valor de x.
// console.log(x,y);

// para que os valores da variavel x seja realmente copiados para y tera que fazer y = [...x]

//O MESMO ACONTECE PARA OBJECT

const a = {
    nome: `Luiz`,
    sobrenome: `Otávio`,
};

const b = {...a};

a.nome = `João`;
console.log(a, b);