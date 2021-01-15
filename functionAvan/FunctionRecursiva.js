// function recursiva é quando ela chama ela mesmo, de forma bem
// simples, segue uma abaixo

function exempRecursiv(maxLoop) {
    if(maxLoop >= 1.72) return console.log(`você é alto demais.`);
    console.log(maxLoop);
    maxLoop++;
    exempRecursiv(maxLoop);
    
}

exempRecursiv((1)/100);