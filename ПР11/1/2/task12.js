const body = document.querySelector('body');

const form = document.createElement('form');
form.classList.add('create-user-form');

const userNameLabel = document.createElement('label');
const userNameInput = document.createElement('input');
userNameLabel.innerHTML = 'Имя';
userNameInput.type = 'text';
userNameInput.name = 'userName';
userNameInput.placeholder = 'Введите ваше имя';

const passwordLabel = document.createElement('label');
const passwordInput = document.createElement('input');
passwordLabel.innerHTML = 'Пароль';
passwordInput.type = 'password';
passwordInput.name = 'password';
passwordInput.placeholder = 'Придумайте пароль';

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.innerHTML = 'Подтвердить';

form.appendChild(userNameLabel);
form.appendChild(userNameInput);
form.appendChild(passwordLabel);
form.appendChild(passwordInput);
form.appendChild(submitButton);

body.appendChild(form);