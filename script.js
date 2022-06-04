const inputs = document.querySelectorAll('.input');
const botao = document.querySelector('.loginBotao');

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add('spanAtivo');
};

const handleFocusOut = ({ target }) => {

  if (target.value === '') {
    const span = target.previousElementSibling;
    span.classList.remove('spanAtivo');
  }
}

const handleChange = () => {
  const [username, password] = inputs;

  if(username.value && password.value.length >= 8) {
    botao.removeAttribute('disabled');
  } else {
    botao.setAttribute('disabled', '');
  }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));