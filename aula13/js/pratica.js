//pratica more


let numbe1 = Number(prompt(`Digite um número, pf: `));
const numer = document.getElementById(`numer`);
const texty = document.getElementById(`texty`);

numer.innerHTML = numbe1;
texty.innerHTML = ``;
texty.innerHTML += `<p>Raiz quadrada é: <b>${numbe1**0.5}</b></p> `;
texty.innerHTML += `<p>Seu número <b>${numbe1}</b> é inteiro: <b>${Number.isInteger(numbe1)}</p> `;
texty.innerHTML+= `<p>É um NaN:<b>${Number.isNaN(numbe1)}</p> `;
texty.innerHTML += `<p>Arredondado para baixo: <b>${Math.floor(numbe1)}</b></p> `;
texty.innerHTML += `<p>Arredondando para cima: <b>${Math.ceil(numbe1)}</b></p> `;
texty.innerHTML += `<p>Com duas casa decimais: <b>${numbe1.toFixed(2)}</b></p> `;

