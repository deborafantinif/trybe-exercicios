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
//FORM INPUT
const nameInput = document.querySelector('#name'); 
const emailInput = document.querySelector('#email');  
const cpfInput = document.querySelector('#cpf'); 
const addressInput = document.querySelector('#address'); 
const cityInput = document.querySelector('#city'); 
const statesInput = document.querySelector('#states'); 
const homeInput = document.querySelector('#type-home'); 
const resumeInput = document.querySelector('#resume'); 
const officeInput = document.querySelector('#office'); 
const officeDescribeInput = document.querySelector('#office-describe'); 
const dateInput = document.querySelector('#datepicker'); 
//BUTTONS
const btnSend = document.querySelector('#btn-send');
const btnClean = document.querySelector('#btn-clean');
//BOX OUTPUT
const nameView = document.querySelector('.name');
const emailView = document.querySelector('.email');
const cpfView = document.querySelector('.cpf');
const addressView = document.querySelector('.address');
const aboutTitleView = document.querySelectorAll('.about-me')[0];
const aboutView = document.querySelectorAll('.about-me')[1];
const jobTitleView = document.querySelectorAll('.job')[0];
const dateView = document.querySelector('.date');
const jobView = document.querySelectorAll('.job')[1];


for (let i in statesBrazil) {
    const optionState = document.createElement('option');
    optionState.value = i;
    optionState.innerText = statesBrazil[i];
    selectStatesBrazil.appendChild(optionState);
}

function viewCurriculum(event) {
    event.preventDefault();
    nameView.innerText = nameInput.value;
    emailView.innerText = emailInput.value;
    cpfView.innerText = cpfInput.value;
    addressView.innerText = `${addressInput.value}, ${cityInput.value} - ${statesInput.value}`;
    aboutTitleView.innerText = 'Sobre Mim' 
    aboutView.innerText = resumeInput.value;
    jobTitleView.innerText = `${officeInput.value}  (${dateInput.value})`;
    jobView.innerText = officeDescribeInput.value;

}

btnSend.addEventListener('click', viewCurriculum);

function clearViewCurriculum() {
    const viewCurriculum = document.querySelector('.view');
    viewCurriculum.innerText = '';
    location.reload();
}

btnClean.addEventListener('click', clearViewCurriculum);