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
// const a = (x, y) => x > y ? x : y;//auternario

// console.log(a(1,2));

//pratica02
// function ePisagem(largura, altura){
//     if (largura > altura) return true;
//     return false;
// }

// console.log(ePisagem(10,5));

// const ePisagem = (largura, altura) => largura >= altura;

// console.log(ePisagem(1080,1920));


//pratica03
function eDivisor(num){
    if(typeof num !== `number`) return num;
    if(num %3 === 0 && num%5 === 0) return `FizzBuzz`;
    if(num %3 === 0) return `Fizz`;
    if(num %5 === 0) return `Buzz`;
    return num;
    
}

console.log(eDivisor(`a`));
for(let i = 0; i <= 100; i++){
    console.log(eDivisor(i));
}
