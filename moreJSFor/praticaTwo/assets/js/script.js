const paragrados = document.querySelector(`.paragrafos`);
const pS = document.querySelectorAll(`p`);

//getComputedStyle, copia as informações do Style do documento.
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for(let p of pS){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = `#fff`;
    
}   