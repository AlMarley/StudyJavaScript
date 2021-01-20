// um pouco de reduce

//somando todos os numeros do array (reduce);
const array = [1, 3, 5, 6, 7, 0, 9, 10];
const total = array.reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador;
},0);
console.log(total);