// js resolução de pratica

const nome = prompt(`Seu nome, pf!`);
//document.write(`VOCÊ É O MELHOR`);//de acordo com as aulas, não é usado na prata da vida.
document.body.innerHTML = `VOCÊ É FOD@ DEMAIS CARA!`;// o texto sempre some ao usar a 'teg' novamente.
document.body.innerHTML += `<br>MUITO OBRIADO.`;// com o + ele vai incrementar, e só sumior depois do f5.


document.body.innerHTML += `Seu nome é <b>${nome}</b><br/>`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras<br/>`;//length, usado para saber o tamanho,
document.body.innerHTML += `A segunda letra do seu nome é ${nome.charAt(1)}<br/>`;// ou só nome[1]
document.body.innerHTML += `Qual o primeiro indice da letra L do seu nome? ${nome.indexOf(`r`)}<br/>`;//
document.body.innerHTML += `qual o ultimo indice da letra do seu nome? ${nome.lastIndexOf(`r`)}<br/>`;//ultimoIndice
document.body.innerHTML += `As ultimas 3 letras do seu nome são:${nome.slice(-3, nome.length)}<br/>`;//n pre length
document.body.innerHTML += `As palavras do seu nome são:${nome.split(` `)}<br/>`;//divide a string
document.body.innerHTML += `Seu nome com letras maiusculas: ${nome.toUpperCase()}<br/>`;//M
document.body.innerHTML += `Seu nome com letras minusculas:${nome.toLowerCase()}<br/>`;//m

