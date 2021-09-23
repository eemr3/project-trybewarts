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
