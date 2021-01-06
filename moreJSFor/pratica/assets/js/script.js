const elementos = [
    {tag: 'p', text: 'Frase 1 (p)'},
    {tag: 'div', text: 'Frase 2 (div)'},
    {tag: 'section', text: 'Frase 3 (section)'},
    {tag: 'footer', text: 'Frase 4 (footer)'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length;i++){
    let {tag, text} = elementos[i];
    let criaTag = document.createElement(tag);
    criaTag.innerText = text;
    //criaTag.innerHTML = text;

    //let textCriado = document.createTextNode(text);
    //criaTag.appendChild(textCriado);
    div.appendChild(criaTag);
}

container.appendChild(div);