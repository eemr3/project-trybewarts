const btnLogin = document.querySelector('#btn-login');

/* o preencher o formulário e clicar no botão, será validado que:
Caso o email seja "tryber@teste.com" e a senha seja "123456" será emitido um alerta contendo o texto "Olá, Tryber!"
Em todos os outro casos deverá ser emitido um alerta contendo o texto "Email ou senha inválidos." */

btnLogin.addEventListener('click', (event) => {
  event.preventDefault();
  const inputEmail = document.querySelector('.input-email');
  const inputPassword = document.querySelector('.input-password');
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

function checkedAgreement() {
  const agreementCheck = document.querySelector('#agreement');
  const btnSend = document.querySelector('#submit-btn');

  if (agreementCheck.checked) {
    btnSend.removeAttribute('disabled');
  } else {
    btnSend.setAttribute('disabled', true);
  }
}
checkedAgreement();
document.querySelector('#agreement').addEventListener('click', checkedAgreement);

function count() {
  const counter = document.querySelector('#counter');
  const textarea = document.querySelector('#textarea');
  const number = 500;
  const text = textarea.value;
  counter.innerHTML = number - text.length;
}

const areatext = document.querySelector('#textarea');
areatext.addEventListener('input', count);

const infos = [];

function getInputeSelectValues() {
  const name = document.querySelector('#input-name');
  const lastname = document.querySelector('#input-lastname');
  const email = document.querySelector('#input-email');
  const house = document.querySelector('#house');
  infos.push(`Nome: ${name.value} ${lastname.value}`);
  infos.push(`Email: ${email.value}`);
  infos.push(`Casa: ${house.value}`); 
}

function getFamily() {
  const familyValue = document.querySelectorAll('.family');
  for (let i = 0; i < familyValue.length; i += 1) {
    if (familyValue[i].checked){
      infos.push(familyValue[i].value);
    }
  }
}

function getCheckbox() {
  const subject = document.querySelectorAll('.subject');
  for (let i = 0; i < subject.length; i += 1) {
    if(subject[i].checked) {
      infos.push(subject[i].value);
    }
  }
}

function getRadioRate() {
  const rate = document.querySelectorAll('.rate');
  for (let i = 0; i < rate.length; i += 1) {
    if(rate[i].checked) {
      infos.push(rate[i].value);
    }
  }
}

function getTextarea() {
  const text = document.querySelector('#textarea');
  infos.push(text.value);
}

function printData() {
  const form = document.querySelector('#evaluation-form');
  const ulList = document.createElement('ul');
  getInputeSelectValues();
  form.innerHTML = '';
  form.appendChild(ulList);

  for (let key in infos) {
    const listItens = document.createElement('li');
    listItens.innerHTML = infos[key];
    ulList.appendChild(listItens);
    
  }
}

const btnSend = document.querySelector('#submit-btn');
btnSend.addEventListener('click', (event) => {
  event.preventDefault();
  //  getInputeSelectValues();
  //  getFamily();
  //  getCheckbox();
  //  getRadioRate();
  //  getTextarea();
  printData();
  //  console.log(infos);
});
