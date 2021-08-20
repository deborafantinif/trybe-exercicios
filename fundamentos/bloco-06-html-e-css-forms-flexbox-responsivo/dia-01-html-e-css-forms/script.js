const statesBrazil = {   'AC': 'Acre',
'AL': 'Alagoas',
'AP': 'Amapá',
'AM': 'Amazonas',
'BA': 'Bahia',
'CE': 'Ceará',
'DF': 'Distrito Federal',
'ES': 'Espírito Santo',
'GO': 'Goías',
'MA': 'Maranhão',
'MT': 'Mato Grosso',
'MS': 'Mato Grosso do Sul',
'MG': 'Minas Gerais',
'PA': 'Pará',
'PB': 'Paraíba',
'PR': 'Paraná',
'PE': 'Pernambuco',
'PI': 'Piauí',
'RJ': 'Rio de Janeiro',
'RN': 'Rio Grande do Norte',
'RS': 'Rio Grande do Sul',
'RO': 'Rondônia',
'RR': 'Roraíma',
'SC': 'Santa Catarina',
'SP': 'São Paulo',
'SE': 'Sergipe',
'TO': 'Tocantins'
};
const selectStatesBrazil = document.querySelector('#states');
const btnSend = document.querySelector('#btn-send');
const btnClean = document.querySelector('#btn-clean');
const nameInput = document.querySelector('#name');

for (let i in statesBrazil) {
    const optionState = document.createElement('option');
    optionState.value = i;
    optionState.innerText = statesBrazil[i];
    selectStatesBrazil.appendChild(optionState);
}

function viewCurriculum(event) {
    event.preventDefault();
    const divView = document.createElement('div');
    divView.innerText = nameInput.value;
    divView.id = 'print';
    document.body.appendChild(divView);
}

btnSend.addEventListener('click', viewCurriculum);

function clearViewCurriculum() {
    const viewCurriculum = document.querySelector('#print');
    viewCurriculum.innerText = '';
}

btnClean.addEventListener('click', clearViewCurriculum);