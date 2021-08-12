const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');


//1. Copie esse arquivo e edite apenas ele;

//2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
//2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
    function oneTech (event) {
        let tech = document.querySelector('.tech');
        tech.classList.remove('tech');
        event.target.className = 'tech';

        let id = event.target.id 
        if (id === 'firstLi') {
            input.placeholder = 'Alterar a primeira tecnologia';
        } else if (id === 'secondLi') {
            input.placeholder = 'Alterar a segunda tecnologia';
        } else {
            input.placeholder = 'Alterar a terceira tecnologia';
        }
    }

    firstLi.addEventListener('click', oneTech);
    secondLi.addEventListener('click', oneTech);
    thirdLi.addEventListener('click', oneTech);

//3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
    function changeText() {
        let tech = document.querySelector('.tech');
        tech.innerHTML = input.value;
    }

    input.addEventListener("keyup",changeText);

//4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//4.1. Que tal redirecionar para seu portifólio?
    function myPortfolio() {
        location.href = 'https://deborafantinif.github.io/';
    }

    myWebpage.addEventListener('dblclick', myPortfolio);

//5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
    function changeColor() {
        myWebpage.style.color = 'green';
    }
    function backColor() {
        myWebpage.style.color = 'white';
    }

    myWebpage.addEventListener('mouseover', changeColor);
    myWebpage.addEventListener('mouseleave', backColor);

// Segue abaixo um exemplo do uso de event.target:

    function resetText(event) {
//   // O Event é passado como um parâmetro para a função.
        event.target.innerText = 'Opção reiniciada';
//   // O event possui várias propriedades, porém a mais usada é o event.target,
//   // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.