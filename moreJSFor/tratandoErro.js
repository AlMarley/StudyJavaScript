// try - catch - throw


// function soma(x, y){
//     if( typeof x !== "number" || typeof y !== "number"){
//         throw TypeError(`X ou Y não é um número`);
//     }
//     return x+y; 
// }

// try{
//     console.log(soma(2,1));
//     console.log(soma(`b`,2));
// }catch(err){
//     //console.log(err);
//     console.log(`Você colocou letra ao inves de numero`);
// };

//Mais exemplo de como criar e tratar erros
function retornaHour(data){
    if(data && !(data instanceof Date)){
        throw TypeError(`não é instância de Date.`);
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString(`pt-BR`,{
        hour: `2-digit`,
        minute: `2-digit`,
        second: `2-digit`,
        hour12: false
    });
}

try{
    const data = new Date(`01-01-1970 15:58:12`);
    const hora = retornaHour();
    console.log(hora);
}catch(err){
    //tratar erro
    //console.log(err);
} finally{
    console.log(`Tenha um bom dia`);
}