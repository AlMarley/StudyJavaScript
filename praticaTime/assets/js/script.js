function relogio() {

    const relogio = document.querySelector(`.relogio`);
    // const iniciar = document.querySelector(`.iniciar`);
    // const pausar = document.querySelector(`.pausar`);
    // const zerar = document.querySelector(`.zerar`);
    let segundos = 0;
    let timer;

    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString(`pt-BR`, {
            hour12: false,
            timeZone: `UTC`
        });
    }

    function iniciaRelogio() {
        timer = setInterval(() => {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }

    // iniciar.addEventListener(`click`,(eve) =>{
    //     relogio.classList.remove(`pausado`);
    //     clearInterval(timer);//zera o relogio
    //     iniciaRelogio();
    // });

    // pausar.addEventListener(`click`,(eve) =>{
    //     clearInterval(timer);
    //     relogio.classList.add(`pausado`);//pega a class criada no css.
    // });

    // zerar.addEventListener(`click`,(eve) =>{
    //     clearInterval(timer);
    //     relogio.innerHTML = `00:00:00`;
    //     segundos = 0;
    // });

    document.addEventListener(`click`, (event) => {
        const element = event.target;
        if (element.classList.contains(`iniciar`)) {
            relogio.classList.remove(`pausado`);
            clearInterval(timer);//zera o relogio
            iniciaRelogio();
        }

        if (element.classList.contains(`pausar`)) {
            clearInterval(timer);
            relogio.classList.add(`pausado`);
        }

        if (element.classList.contains(`zerar`)) {
            clearInterval(timer);
            relogio.innerHTML = `00:00:00`;
            segundos = 0;
            relogio.classList.remove(`pausado`);
        }
    });

}
relogio();