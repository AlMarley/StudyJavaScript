// praticando

function myScop() {
    const form = document.querySelector(`.form`);
    const result = document.querySelector(`.result`);

    const users = [];

    // form.onsubmit = function (evento){
        // evento.preventDefault();
        // alert(`Marley seu lindo!`);
        // console.log(`Form Enviado :)`);
    // };

    //let cont = 1;
    function recebeEventoForm(evento){
        evento.preventDefault();
        const nome = form.querySelector(`.nome`);
        const sobrenome = form.querySelector(`.sobreNome`);
        const peso = form.querySelector(`.peso`);
        const altura = form.querySelector(`.altura `);
        
        users.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        });

        console.log(users);
        result.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} `+
        `${altura.value} </p>`

        //console.log(nome, sobrenome, peso, altura);
        // console.log(`Enviado :) ${cont}`);
        // cont++;
    }
    form.addEventListener(`submit`, recebeEventoForm);
};
myScop();