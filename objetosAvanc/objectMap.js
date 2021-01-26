const pessoas = [
    {id: 3, nome: `Marley`},
    {id: 2, nome: `Will`},
    {id: 1, nome: `Win`},
];

// const novasPessoas = {};
// for (const pessoa of pessoas){
//     const {id} = pessoa;
//     novasPessoas[id] ={...pessoa};
// }

const novasPessoas = new Map();
for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, { ...pessoa});
}

console.log(novasPessoas);

// for (const pessoas of novasPessoas){
//     console.log(pessoas);
// }