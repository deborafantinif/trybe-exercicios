const input = document.querySelector('input');

function addConfigToLocalStorage() {
    const valueOption = document.querySelector('select').value;

    let oldList = JSON.parse(localStorage.getItem(valueOption));
    let configValue = input.value;
    oldList = configValue;  
    localStorage.setItem(valueOption, JSON.stringify(oldList));

    switch (valueOption) {
        case 'background':
            document.body.style.backgroundColor = oldList;
            break;
        case 'color-text':
            document.body.style.color = oldList;
            break;
        case 'font-size':
            document.body.style.fontSize = oldList;
            break;
        case 'heigth-font':
            document.body.style.lineHeight = oldList;
            break;
        case 'font-family':
            document.body.style.fontFamily = oldList;
            break;
    }
}


input.addEventListener('change', addConfigToLocalStorage);


function initialRenderization() {
    const options = document.querySelectorAll('option');

    if(localStorage.getItem('background') === null) {
    
        for (let value of options) {
            if (localStorage.getItem(value.id) === null) {
                localStorage.setItem(value.id, JSON.stringify(''));
            } 
        }
    } else {
        document.body.style.backgroundColor = localStorage.getItem('background').replace(/\"/g, '');
        document.body.style.color = localStorage.getItem('color-text').replace(/\"/g, '');
        document.body.style.fontSize = localStorage.getItem('font-size').replace(/\"/g, '');
        document.body.style.lineHeight = localStorage.getItem('heigth-font').replace(/\"/g, '');
        document.body.style.fontFamily = localStorage.getItem('font-family').replace(/\"/g, '');
    }
}

window.onload = function() {
    initialRenderization();
}


