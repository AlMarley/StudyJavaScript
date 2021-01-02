// const data = new Date();//pega a sua data e hora de acordo com seu fuso.
// console.log(data.toString());

// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60* 60 * 24 * 1000;
// const data = new Date(0 + tresHoras);//01/01/1970 Timestamp unix ou época unix
// console.log(data.toString());

//passando os valores
// const data = new Date(2020, 11, 30, 1,27,30);//a, m, d, h, M, s, ms.
// console.log(data.toString());

//passando valor tipo String
// const data = new Date(`2025-07-28T12:24:12.996`);//Passando os valores como String
// console.log(data.toString());
// console.log(`Dia`, data.getDate());
// console.log(`Mês`, data.getMonth()+1);// Mês começa do zero, de acordo com nosso calendario coloca+1
// console.log(`Ano`, data.getFullYear());
// console.log(`Hora`, data.getHours());
// console.log(`Min`, data.getMinutes());
// console.log(`Seg`, data.getSeconds());
// console.log(`Ms`, data.getMilliseconds());
// console.log(`Dia da semana`, data.getDay());// 0 - Domingo, 6 - Sábado.

//E para objeter os milesimos de segundo do marco zero até a data atual.
// console.log(Date.now());
// const data2 = new Date(1609451773581);
// console.log(data2.toString());


function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

function fomartData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes= zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());
    const segundos = zeroAEsquerda(data.getSeconds()); 

    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`
}

const data = new Date();
const dataBrasil = fomartData(data);
console.log(dataBrasil);