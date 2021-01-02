    const h1 = document.querySelector(`.container h1`);
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'full' });    


// function getDia(diaSemana){
//     const semana = [`Domingo`, `Segunda-feira`, `Terça-feira`,
//     `Quarta-feira`, `Quinta-feira`, `Sexta-feira`, `Sábado` ];
//     return semana[diaSemana];
// }

// function getMes(mesAtual){
//     const mes = [`Janeiro`, `Fevereiro`, `Março`, `Abril`, `Maio`, `Junho`,
//     `Julho`, `Agosto`, `Outubro`, `Novembro`, `Dezembro`];
//     return mes[mesAtual];
// }

// function zeroEsquerda(num){
//     return  num>=10 ? num : `0${num}`;
// }

// function creatDate(data){
//     const diaSemana = data.getDay();
//     const mesAtual = data.getMonth();
//     const nomeDia = getDia(diaSemana);
//     const nomeMes = getMes(mesAtual);

//     return (`${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}`
//     +`, ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`);
// }
// h1.innerHTML = creatDate(data); 

// const escolha = {
//     dateStyle: `full`,
//     timeStyle: `short`,
// };
// h1.innerHTML = data.toLocaleDateString(`pt-BR`, escolha);