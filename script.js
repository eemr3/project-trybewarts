const btnLogin = document.querySelector('#btn-login');

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
  for (let index = 0; index < familyValue.length; index += 1) {
    if (familyValue[index].checked) {
      infos.push(`Família: ${familyValue[index].value}`);
    }
  }
}

function getCheckbox() {
  const subject = document.querySelectorAll('.subject');
  let dataValue = '';
  for (let index = 0; index < subject.length; index += 1) {
    if (subject[index].checked) {
      dataValue += `${subject[index].value}, `;
    }
  }

  infos.push(`Matérias: ${dataValue}`);
}

function getRadioRate() {
  const rate = document.querySelectorAll('.rate');
  for (let index = 0; index < rate.length; index += 1) {
    if (rate[index].checked) {
      infos.push(`Avaliação: ${rate[index].value}`);
    }
  }
}

function getTextarea() {
  const text = document.querySelector('#textarea');
  infos.push(`Observações: ${text.value}`);
}

function printData() {
  const form = document.querySelector('#evaluation-form');
  const ulList = document.createElement('ul');
  getInputeSelectValues();
  getFamily();
  getCheckbox();
  getRadioRate();
  getTextarea();

  form.innerHTML = '';
  form.appendChild(ulList);

  for (let index = 0; index < infos.length; index += 1) {
    const listItens = document.createElement('li');
    listItens.innerHTML = infos[index];
    ulList.appendChild(listItens);
  }
}

const btnSend = document.querySelector('#submit-btn');
btnSend.addEventListener('click', (event) => {
  event.preventDefault();
  printData();
});
