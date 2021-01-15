// um pouco mais sobre vetores e aprofundando mais

const array2 = [`casa`, `roupa`, `comida`, 2];
const array = new Array(`Amor`, `Paz`, `Coragem`, `Força`, 1);
array[3] = `Força e FÉ!`;
array[1] = `Paz`; 
delete array[4];
// console.log(array);



//um pouco de splice
//adiciona, tira e modifica
//  ... splice(índici, quantidade, adiciona 1 ou mais valores);
array2.splice(1,1, `TIREI A ROUPA`);
console.log(array2);



//um pouco de JOIN
//const arr3 = [...array, ...array2];

// let arr3 = array2.concat(array);
// console.log(arr3);



