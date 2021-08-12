function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
// Exercício 1
function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const days = document.querySelector('#days');

    for (let i of dezDaysList) {
        const day = document.createElement('li');
        day.innerText = i;
        if (i == 24 || i == 31) {
            day.className = 'day holiday';
        } else if (i == 18 || i == 11 || i == 4) {
            day.className = 'day friday';
        } else if (i === 25) {
            day.className = 'day friday holiday';
        } else {
            day.className = 'day';
        }
        days.appendChild(day)
    } 
}
createDaysOfTheMonth();


//Exercício 2
function buttonHoliday(string) {
    let buttonH = document.createElement('button');
    buttonH.innerHTML = string;
    buttonH.id = "btn-holiday"
    document.querySelector('.buttons-container').appendChild(buttonH);
}
buttonHoliday('Feriados');


//Exercício 3
    let btnH = document.querySelector('#btn-holiday');
    btnH.addEventListener('click', changeColor);

    function changeColor() {
        let daysH = document.querySelectorAll('.holiday');
        for (let i of daysH) {
            if (i.style.backgroundColor === 'rgb(238, 238, 238)') {
                i.style.backgroundColor = 'red';
            } else {
              i.style.backgroundColor = 'rgb(238, 238, 238)';
            }
        }
    }


//Exercício 4
function buttonFriday(string) {
    let buttonH = document.createElement('button');
    buttonH.innerHTML = string;
    buttonH.id = "btn-friday"
    document.querySelector('.buttons-container').appendChild(buttonH);
}
buttonFriday('Sexta-Feira');


//exercicio 5
const buttonF = document.getElementById('btn-friday');
buttonF.addEventListener('click', clickFriday);


function clickFriday () {
    let dayF = document.getElementsByClassName('friday');
    const daysFriday = [4, 11, 18, 25]

    for (let i = 0; i < dayF.length; i += 1) {
        console.log(dayF[i].innerText)
        if (dayF[i].innerText == "Friday") {
            dayF[i].innerText = daysFriday[i];
        } else {
            dayF[i].innerText = 'Friday';
        }
    }
}


//Exercicio 6
const zoom = document.getElementById('days');


function zoomActive(event) {
    event.target.style.fontSize = '30px';
}

function zoomInactive(event) {
    event.target.style.fontSize = '20px';
}

zoom.addEventListener('mouseover', zoomActive);
zoom.addEventListener('mouseout', zoomInactive);


//Exercício 7
let parent = document.querySelector('.my-tasks');

function addTask(string) {
    let span = document.createElement('span');
    span.innerText = string;
    parent.appendChild(span);
}

addTask('Limpar casa');


//Exercício 8
function addColorLegend(color) {
    let div = document.createElement('div');
    div.className = 'task';
    div.style.backgroundColor = color;
    parent.appendChild(div);
}

addColorLegend('red');


//Exercício 9
let task = document.querySelector('.task');
task.addEventListener('click', addSelected);

function addSelected() {
    if (task.classList.contains('selected')) {
        task.classList.remove('selected');
    } else {
        task.classList.add('selected');
    }
}


//Exercício 10
zoom.addEventListener('click', colorDayTask);

function colorDayTask(event) {
    let taskSelected = document.querySelector('.selected');
    
    if (event.target.style.color === taskSelected.style.backgroundColor) {
        event.target.style.color = "rgb(119, 119, 119)";
    } else {
        event.target.style.color = taskSelected.style.backgroundColor;
    }
}


//Bonus
let add = document.querySelector('#btn-add');
add.addEventListener('click', addCommit);
let textInput = document.querySelector('#task-input');

function addCommit() {
    if (textInput.value === '') {
        alert('Campo vazio! Adicione algum compromisso!');
    } else {
        let li = document.createElement('li');
        li.innerText = textInput.value;
        let list = document.querySelector('.task-list');
        list.appendChild(li);
    }
}

textInput.addEventListener('keyup', addCommitKey);

function addCommitKey(event) {
    if (event.keyCode === 13) {
        let li = document.createElement('li');
        li.innerText = textInput.value;
        let list = document.querySelector('.task-list');
        list.appendChild(li);
    }
}