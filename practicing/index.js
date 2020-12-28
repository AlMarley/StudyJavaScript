//estudando
//alert(`Aldenor você é foda!`);

function scopor(){

    console.log(`As mensagens que estão aqui não aparece na pagina HTML sem ser pelo console.`);
    console.log(typeof(`Ola, espero que você esteja tendo um bom dia :)`));

    alert(`Seja Bem-Vindo, desejamos a você um ótimo dia, vamos lá! `);
    confirm(`Você realmente quer continuar? `);
    const nome = prompt(`Coloque seu nome completo abaixo pf: `);
    const idade = Number(prompt(`Agora sua idade: `));
    const desejo = prompt(`Agora escreva algo, que já se tornou realidade no futuro.(Seus sonhos): `);
    let year = Number(prompt(`agora digite o ano atual`));
    let dataNascimento = year - idade;

    const one = document.querySelector(`.one`);

    one.innerHTML += `<p>${nome}</p>`
    one.innerHTML += `<p>${idade}</p>`
    one.innerHTML += `<p>${desejo}</p>`

};
//scopor();

function myScop2(){

    const nome = prompt(`Coloque seu nome completo abaixo pf: `);
    const idade = Number(prompt(`Agora sua idade: `));
    testando = [];

    users = {
    nome: nome.value,
    idade: idade.value,
    };
    
    testando.push(users);
    const imprim = document.querySelector(`.t`);
    imprim.innerHTML += `<b>RESULTADO</b><br>${nome} <br>${idade}`;
};

myScop2();