//um pouco de switch

const data = new Date(`2020-11-01`);
let diaSemana = data.getDay();

//exemplo dom if
// if(diaSemana === 0){
//     return console.log(`Hoje é Domingo`);
// } else if(diaSemana === 1) {
//     return console.log(`Hoje é Segunda`);
// } else if(diaSemana === 2) {
//     return console.log(`Hoje é Terça`);
// } else if(diaSemana === 3) {
//     return console.log(`Hoje é Quarta`);
// } else if(diaSemana === 4) {
//     return console.log(`Hoje é Quinta`);
// } else if(diaSemana === 5) {
//     return console.log(`Hoje é Sexta`);
// } else if(diaSemana === 6) {
//     return console.log(`Hoje é Sabado`);
// }else{return console.log(`Invalide`)}




function weked(semana) {
    switch (semana) {
        case 0:
            return console.log(`Hoje é Domingo`);
        case 1:
            return console.log(`Hoje é Segunda`);
        case 2:
            return console.log(`Hoje é Terça`);
        case 3:
            return console.log(`Hoje é Quarta`);
        case 4:
            return console.log(`Hoje é Quinta`);
        case 5:
            return console.log(`Hoje é Sexta`);
        case 6:
            return console.log(`Hoje é Sábado`);
        default:
            return console.log(`Invalid`);
    }

}

weked(diaSemana);