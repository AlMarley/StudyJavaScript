function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function calmaJovem(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== `string`) {
                reject(`Dentro do ERRO`);
                return;
            }

            resolve(msg);
        }, tempo);
    });
}

async function executar() {
    try{
        const fase1 = await calmaJovem(`fase one`,rand());
        console.log(fase1);
        const fase2 = await calmaJovem(`fase Two`,rand());
        console.log(fase2);
        const fase3 = await calmaJovem(`fase Three`,rand());
        console.log(fase3);
        console.log(`Terminamos na ${fase3}`)
    }catch(e){
        console.log(e);
    }

}
executar();