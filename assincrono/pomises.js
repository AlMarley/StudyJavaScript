(function () {

    function rand(min, max) {
        min *= 1000;
        max *= 1000;
        return Math.floor(Math.random() * (max - min) + min);
    }

    //USANDO CALLBACK
    // function calmaJovem(msg, tempo, cb) {
    //     setTimeout(() =>{
    //         console.log(msg);
    //         if(cb) cb();
    //     }, tempo);       
    // }

    // calmaJovem(`Next A`, rand(1, 4), function () {
    //     calmaJovem(`Next B`, rand(1, 4), function() {
    //         calmaJovem(`Next C`, rand(1, 4));
    //     });
    // });

    //COM PROMISES
    function calmaJovem(msg, tempo) {
        return new Promise((resolve, reject) =>{
            if(typeof msg !== `string`) reject(`Bad Value`);
            setTimeout(() => {
                resolve(msg);
            }, tempo);
        });
    }

    calmaJovem(`Conectando com o Banco`, rand(1,3))
    .then(resposta => {
        console.log(resposta);
        return calmaJovem(`Buscando dados`, rand(1,3));
    })
    .then(resposta => {
        console.log(resposta);
        return calmaJovem(5682, rand(1,3));
    }).then(reposta => {
        console.log(reposta);
    }).then(() =>{
        console.log(`Exibindo o Tabela!`);
    })
    .catch(e =>{
        console.log(`ERRO:`, e);
    });




    //autoinvocavel
    // (function(){})();
})();