import { createTextElement, sreateEnemyUnit } from './helper.js';
import enemies from './enemies.json' assert {type: 'json'};

export const createGame = () => {
    const gamePlay = document.createElement('div');
    gamePlay.classList.add('game-play');

    const header = document.createElement('div');
    header.classList.add('header');

    const nikName = JSON.parse(localStorage.getItem('player')).nik;
    let countCoins = Number(localStorage.getItem('count'));

    const user = createTextElement('User: ', nikName);

    const totalCoins = createTextElement('Your coins: ');
    const counter = document.createElement('span');
    counter.textContent = countCoins;
    totalCoins.append(counter);

    const level = createTextElement('Level: ', enemies[0].level, "level");
    const hp = createTextElement('HP: ', enemies[0].hp, "hp");
    header.append(user, totalCoins, level, hp);

    const enemy = sreateEnemyUnit('enemy__container', enemies[0].image, 'enemy__image')
    enemy.addEventListener('click', increment);

    gamePlay.append(header, enemy);

    function increment() {
        let newCount = (countCoins += 1);
        localStorage.setItem('count', newCount);
        counter.textContent = newCount;

        const hpSize = document.querySelector('.hp');
        let lessHp = enemies[0].hp -= 1;
        hpSize.textContent = lessHp;
    }
    console.log(enemies)
    return gamePlay;
};
