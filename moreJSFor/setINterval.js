function seeHour(){
    let data  = new Date();

    return data.toLocaleTimeString(`pt-BR`,{
        hour12: false
    });
}


const time = setInterval(() => {
    console.log(seeHour());
}, 1000);

setTimeout(() => {
    clearInterval(time);
}, 4000);

setTimeout(() => {
    console.log(`Olá mundo!`)
}, 5000);