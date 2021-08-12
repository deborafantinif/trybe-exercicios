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
        if (i == 25 | i == 24 || i == 31) {
            day.className = 'day holiday'
        } else if (i == 25 || i == 18 || i == 11 || i == 4) {
            day.className = 'day friday';
        } else {
            day.className = 'day'
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





//exercicio 5
const buttonF = document.getElementById('btn-holiday');

function clickHoliday() {
let  daysF = document.getElementsByClassName('friday');
for (let i of daysF) {
if (i.innerText === 4 || i.innerText === 11 || i.innerText === 18 || i.innerText === 25) {
i.innerHTML = 'Sexta-feira';
} else {
i.innerText = i;
}

}
} 

buttonF.addEventListener('click', clickHoliday);


function clickHoliday () {
    let dayH = document.getElementsByClassName('holiday');
    const daysHoli = [24, 25, 31]

    for (let i = 0; i < dayH.length; i += 1) {
        console.log(daysHoli[i])
        if (dayH[i].innerText == "holiday") {
            dayH[i].innerText = daysHoli[i];
        } else {
            dayH[i].innerText = 'holiday';
        }
    }
}

const zoom = document.getElementById('days');


function zoomActive(event) {
    zoom.style.fontSize = '30px';
}

zoom.addEventListener('mouseover', zoomActive);