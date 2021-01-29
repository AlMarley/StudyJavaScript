/**
 * ALGUNS METODOS ULTEIS
 * Promise.all
 * Promise.race
 * Promise.resolve
 * Promise.reject
 */

(function () {

    function rand(min, max) {
        min *= 1000;
        max *= 1000;
        return Math.floor(Math.random() * (max - min) + min);
    }

    //COM PROMISES
        function calmaJovem(msg, tempo) {
            return new Promise((resolve, reject) =>{
                if(typeof msg !== `string`) reject(false);
                setTimeout(() => {
                    resolve(msg);
                }, tempo);
            });
        }

        const promises = [

            calmaJovem(`Promises One`, 3000),
            calmaJovem(`Promises Two`, 5000),
            calmaJovem(`Promises Three`, 1000),

    ];

    // Promise.all(promises)

    
    Promise.race(promises)
    .then(valor =>{
        console.log(valor);
    })
    .catch( e=>{
        console.log(e);
    });

    // function calmaJovem(msg, tempo) {
    //     return new Promise((resolve, reject) => {
    //         if (typeof msg !== `string`) reject(false);
    //         setTimeout(() => {
    //             resolve(msg);
    //         }, tempo);
    //     });
    // }

    // const promises = [

    //     calmaJovem(`Promises One`, 3000),
    //     calmaJovem(`Promises Two`, 5000),
    //     calmaJovem(`Promises Three`, 1000),

    // ];

    // function baixaPagina() {
    //     const emChache = true;
    //     if (emChache) {
    //         // return Promise.resolve(`Página carregada`);
    //         return Promise.reject(`Página carregada`);

    //     } else {
    //         return calmaJovem(`Pagina baixada`, 1000);
    //     }
    // }

    // baixaPagina()
    //     .then(dadosPag => {
    //         console.log(dadosPag);
    //     })
    //     .catch(e => console.log(e));
})();