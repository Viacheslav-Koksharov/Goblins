import { createSingleEl, createTextEl, createEnemyUnit, stopTimer } from './helper.js';
// import congrats from './winner.js'
import enemies from './enemies.json' assert {type: 'json'};

export function playGame() {
    let count = Number(localStorage.getItem('count'));
    let level = Number(localStorage.getItem('level'));
    let health = Number(localStorage.getItem('health'));
    let index = 0;

    const container = createSingleEl('div', 'game__play');
    const header = createSingleEl('div', 'header');
    const user = createTextEl('User: ', JSON.parse(localStorage.getItem('player')).nik);

    const totalCount = createTextEl('Your coins: ', count.toString(), 'span');
    const totalLevel = createTextEl('Level: ', level, 'span');
    const totalHealth = createTextEl('HP: ', health, 'span');

    header.append(user, totalCount, totalLevel, totalHealth);
    container.append(header);

    let enemy = createEnemy(container, index, getTotal);

    function getTotal() {
        count += 1;
        health -= 1;

        if (health === 0) {
            index += 1;
            enemy.remove();

            if (index < enemies.length) {
                enemy = createEnemy(container, index, getTotal);
                health = enemies[index].hp;
                totalLevel.firstElementChild.textContent = index + 1;
                localStorage.setItem('level', index + 1);
            } else {
                header.remove();
                stopTimer();
                createEndGame()
            }
        }

        totalCount.firstElementChild.textContent = count;
        totalHealth.firstElementChild.textContent = health;
        localStorage.setItem('count', count);
        localStorage.setItem('health', health);
    }

    function createEnemy(root, index, callBack) {
        if (index < enemies.length) {
            const enemy = createEnemyUnit('enemy__container', enemies[index].image, 'enemy__image');
            enemy.addEventListener('click', callBack);
            root.append(enemy);
            return enemy;
        }
    }
    function createEndGame() {
        let time = localStorage.getItem('time');
        const congrats = createSingleEl('div', "congrats");
        const congratsMessage = createSingleEl("p");
        const scoreMessage = createTextEl('Your score: ', count);
        const timeMessage = createTextEl('Your time: ', time);
        congratsMessage.textContent = 'You Win!';
        congrats.append(congratsMessage, scoreMessage, timeMessage)

        container.append(congrats);
    }

    return container;
};