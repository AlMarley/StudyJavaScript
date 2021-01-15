const inputTask = document.querySelector(`.input-task`);
const buttonTask = document.querySelector(`.button-task`);
const task = document.querySelector(`.task`);

//keypress, quando a tecla é pressionada
//keyup, é quando solta a tecla
//keydown, quanto a tecla ainda esta sendo pressionada.
inputTask.addEventListener(`keypress`, (event) => {
    if (event.keyCode === 13) {//KeyCode é o id da tecla
        if (!inputTask.value) return;
        criarTASK(inputTask.value);
    }
});

function clearInput(){
    inputTask.value = ``;
    inputTask.focus();//Cursos fica piscando na caixinha.
}

function delTask(li){
    li.innerText +=` `;
    const butt = document.createElement(`button`);//Criando um botão
    butt.innerText = `Apagar`;
    //butt.classList.add(`concluido`);
    butt.setAttribute(`class`, `concluido`);
    li.appendChild(butt);
}

function createLi() {
    //document.createElement cria elementos html
    const li = document.createElement(`li`);
    return li;
}

function criarTASK(textInput) {
    const li = createLi();
    li.innerText = textInput;
    task.appendChild(li);
    clearInput();
    delTask(li);
    saveTask();
}

//o addEventListerner serve para capiturar o evento do botão
buttonTask.addEventListener(`click`, () => {
    if (!inputTask.value) return;
    criarTASK(inputTask.value);
});

document.addEventListener(`click`,(event)=>{
    const el = event.target;// seleciona o que esta sendo clicaco.
    if(el.classList.contains(`concluido`)){
        el.parentElement.remove();//oparentElement, executa a ação no 'pai'
        saveTask();
    }
});

function saveTask(){
    const liTask = task.querySelectorAll(`li`);
    const listTask = [];

    for(let tasks of liTask){
        let taskText = tasks.innerText;
        taskText = taskText.replace(`Apagar`,``).trim();
        listTask.push(taskText);
    }
    //trasnforma os dados em um JSON de string.
    const taskJSON = JSON.stringify(listTask);
    //salva no navegador, nem sabia que isso era possivel '-' kkk
    localStorage.setItem(`task`, taskJSON);
}

function addSaveTask(){
    const tasks = localStorage.getItem(`task`);
    const taskList = JSON.parse(tasks);

    for (let task of taskList){
        criarTASK(task);
    }
}
addSaveTask();