const inputs = document.querySelectorAll('.input');

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

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));