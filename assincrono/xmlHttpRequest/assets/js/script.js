
//usando o XMLHttpRequest();
// const request = obj => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         // xhr.open(`GET`, `URL`, assíncrona);
//         xhr.open(obj.method, obj.url, true);
//         xhr.send();

//         xhr.addEventListener(`load`, () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.responseText);
//             } else {
//                 reject(xhr.statusText);
//             }
//         });
//     });
// };

// document.addEventListener(`click`, clk => {
//     const el = clk.target;
//     const tag = el.tagName.toLowerCase();

//     if (tag === `a`) {
//         clk.preventDefault();
//         carregaPagina(el);
//     }
// });


// async function carregaPagina(el) {

//     try {
//         const href = el.getAttribute(`href`);

//         const objConfig = {
//             method: `GET`,
//             url: href
//         };

//         const response = await request(objConfig);
//         carregaResultado(response);
//     } catch (error) {
//         console.log(error);
//     }


// }

// function carregaResultado(response) {
//     const resultado = document.querySelector(`.result`);
//     resultado.innerHTML = response;
// };



document.addEventListener(`click`, clk => {
    const el = clk.target;
    const tag = el.tagName.toLowerCase();

    if (tag === `a`) {
        clk.preventDefault();
        carregaPagina(el);
    }
});


async function carregaPagina(el) {

    try {
        const href = el.getAttribute(`href`);
        const response = await fetch(href);

        if (response.status !== 200) throw new Error(`BAD`);

        const html = await response.text();
        carregaResultado(html);
    } catch (err) {console.error(err)}



}

function carregaResultado(response) {
    const resultado = document.querySelector(`.result`);
    resultado.innerHTML = response;
};


//Fetch API(GET)
// fetch(`pagina3.html`).then(resposta =>{
//     if(resposta.status !== 200) throw Error(`404 NOT FOULD`);
//     return resposta.text();
// }).then(html => console.log(html)).catch(e => console.error(e));