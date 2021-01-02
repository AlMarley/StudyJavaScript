function myScp() {
    const form = document.querySelector(`#form`);

    form.addEventListener(`submit`, function (event) {
        event.preventDefault();
        const inputPeso = event.target.querySelector(`#peso`);
        const inputAltura = event.target.querySelector(`#altura`);
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        if (!peso) {
            setRestultado(`Peso Invalido, Por favor use números!`, false);
            return;
        }

        if (!altura) {
            setRestultado(`Altura Invalido, Por favor use números!`, false);
            return;
        }


        const imc = getIMC(peso, altura);
        const resultImc = getResultImc(imc);
        const msg = `Seu IMC é ${imc} Situação( ${resultImc} ).`;
        setRestultado(msg, true, imc);
    });

    function getIMC(peso, altura) {
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
    }

    function getResultImc(imc) {
        const resul = [`Abaixo do peso`, `Peso normal`, `Sobrepeso`, `Obesidade grau 1`,
            `Obsidade grau 2`, `Obesidade grau 3`];

        if (imc >= 39.9) return resul[5];
        if (imc >= 34.9) return resul[4];
        if (imc >= 29.9) return resul[3];
        if (imc >= 24.9) return resul[2];
        if (imc >= 18.5) return resul[1];
        if (imc < 18.5) return resul[0];
    }



    function criaP() {
        const p = document.createElement(`p`);
        return p;
    }

    function setRestultado(msg, isValid, imc) {
        const resultado = document.querySelector(`#resultado`);
        resultado.innerHTML = ``;
        const p = criaP();

        if (isValid) {
            p.classList.add(`paragrafo-resultado`);
        } else {
            p.classList.add(`bad`);
        }
        if (imc >= 25 || imc < 18.5) {
            p.classList.add(`bad`);
        }

        p.innerHTML = msg;
        resultado.appendChild(p);
    }


}
myScp();