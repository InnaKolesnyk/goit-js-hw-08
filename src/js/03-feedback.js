var throttle = require('lodash.throttle');

const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const form = document.querySelector('form');

input.addEventListener('input', throttle(onInputMessage, 500));
textarea.addEventListener('input', throttle(onInputMessage, 500));
form.addEventListener('submit', onSubmit);

function startFile() {
  const saveData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (saveData) {
    console.log(saveData);
    input.value = saveData.email;
    textarea.value = saveData.message;
  }
}

function onInputMessage(event) {
  const {
    elements: { email, message },
  } = event.currentTarget.form;
  const data = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function onSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}




