import { createButton } from "./components/button.js"

const btnAlert = document.createElement('button');
const btnColor = document.createElement('button');
const btnConsole = document.createElement('button');

btnAlert.textContent = 'alert';
btnColor.textContent = 'change color';
btnConsole.textContent = 'Read console'

document.body.appendChild(btnAlert);
document.body.appendChild(btnColor);
document.body.appendChild(btnConsole);

btnAlert.addEventListener('click', () => {
    alert('Hello World');
});

btnColor.addEventListener('click', () => {
    document.body.style.backgroundColor = "#F5C26B";
});

btnConsole.addEventListener('click', () => {
    console.log('Loggar ett meddelande')
});

createButton();
