// um pouco de While

let control = 0;

//exemplo one
// while( control <=10){
//     console.log(control);
//     control++;
// }



//exemplo two
function random(min, max){
    const r = Math.random() * (max - min) + min;//cria numeros aleatorios
    return Math.floor(r);// transforma o número em inteiro
};

const min = 1;
const max = 50;
let rand = random(min,max);

//exemplo com while/ checa primeiro, depois executa.
while (rand !== 10){
    rand =  random(min, max);
    console.log(rand);
}

//exemplo com do while, ele executa primeiro, depois chega
do{
    rand =  random(min, max);
    console.log(rand);

}while(rand !== 10);