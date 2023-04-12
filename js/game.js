import form from './form.js';
import { createGame } from './gamePlay.js';

const root = document.querySelector('body');
root.classList.add('body');
root.append(form);

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { nik, name, email },
    } = event.currentTarget;

    if (nik.value === '' || name.value === '' || email.value === '') {
        return alert('Please fill in all the fields!');
    }
    const player = {
        id: nik.value,
        nik: nik.value,
        name: name.value,
        email: email.value,
    };
    let count = 0;

    localStorage.setItem('player', JSON.stringify(player));
    localStorage.setItem('count', JSON.stringify(count));
    event.currentTarget.reset();
    form.remove();

    root.append(createGame());
}
