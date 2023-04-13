import enemies from './enemies.json'  assert {type: 'json'};
import { createSingleEl, createInputEl, createButtonEl, startTimer } from './helper.js'
import { playGame } from './game.js';

const form = createSingleEl("form", "form");
const fieldSet = createSingleEl("fieldset", "fieldset");
const legend = createSingleEl("legend", "legend");
const nickContainer = createInputEl("NickName:", "Write your nickname", "text", "nik")
const nameContainer = createInputEl("Name:", "Write your name:", "text", "name");
const emailContainer = createInputEl("Email:", "example@mail.com", "email", "email");
const button = createButtonEl("Create User", "submit", "button");

legend.textContent = "Create Account";
fieldSet.append(legend, nickContainer, nameContainer, emailContainer, button);
form.append(fieldSet);

form.addEventListener('submit', startGame);

function startGame(event) {
    event.preventDefault();

    const {
        elements: { nik, name, email },
    } = event.currentTarget;

    if (nik.value === '' || name.value === '' || email.value === '') {
        return alert('Please fill in all the fields!');
    }
    if (nik.value.length > 10) {
        return alert('NickName can not more 10 symbols!');
    }

    const player = {
        id: nik.value,
        nik: nik.value,
        name: name.value,
        email: email.value,
    };

    localStorage.setItem('player', JSON.stringify(player));
    localStorage.setItem('count', 0);
    localStorage.setItem('level', enemies[0].level);
    localStorage.setItem('health', enemies[0].hp);

    event.currentTarget.reset();
    form.remove();
    startTimer();
    const root = document.querySelector('#root');
    root.append(playGame());
}

export default form;