/**
 * Operação Ternárias é definidina pelo Simbolo ⬇
 * ?:
 */
const pontuacaoUsuario = 1000;

// //Normal
// if(pontuacaoUsuario >= 1000){
//     console.log(`Usuário VIP`);
// }else{
//     console.log(`Usuário Normal`);
// }

//Com operação ternária

const nivelUsuario = pontuacaoUsuario >=1000 ? `Usuário VIP` : `Usuário Normal`;
console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || `preto`;
console.log(corPadrao);