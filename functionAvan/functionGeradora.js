// as funcções geradoras, elas basciamente são executadas por parte

function* gerador1(){
    
    yield `yield One`;

    yield `yield Two`;

    yield `yield Tree`;
};

const gr01 = gerador1();

// console.log(gr01.next().value);
// console.log(gr01.next().value);
// console.log(gr01.next().value);

for( val of gr01){
    console.log(val);
}

function* gerador2(){
    let i = 0;

    while(true){
        yield i;
        i++;
    }   
}

const gr02 = gerador2();
console.log(gr02.next().value);


function* gerador3() {
    yield* gerador1();
    yield  () => console.log(`quarto yield`);
    yield  () => console.log(`quinto yield`)
}

const gr03 = gerador3();
console.log(gr03.next().value);
console.log(gr03.next().value);
console.log(gr03.next().value);
const fun01 = gr03.next().value;
const fun02 = gr03.next().value;
fun01();
fun02();