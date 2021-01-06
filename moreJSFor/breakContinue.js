// as palavrinhas break e continue, é usado nos laços de repetição.

const numeros = [1, 2, 3, 4, 5, 6];


//exemplo
// for(let num of numeros){
//     if(num %2 !== 0){
//         console.log(`Pulando os números ímpar`);
//         continue;// o continue vai pular e não exibe, mas não para o laço
//     }

//     if(num === 4){
//         console.log(`Encontrei o número 4`)
//         break;// o break vai parar o laço, quando encontrar o que se pedi.
//     }
//     console.log(num);
// }

let num1;
let num2;

//primeira ideia
// function maior(num1, num2){
//     if(num1> num2){
//         return console.log(num1);
//     }else{
//         return console.log(num2);
//     }
// }
// maior(1,5);

// melhorias
// function max(x, y){
//     if ( x > y ) return x;
//     return y;
// }
// console.log(max(7,15));

// mais melhorias
// function max(x, y){
//     return x > y ? x : y;//auternario
// }
// console.log(max(11,9));

//melhoria da base da function
const a = (x, y) => x > y ? x : y;//auternario

console.log(a(1,2));