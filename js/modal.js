import { createSingleEl, createButtonEl } from './helper.js';

export default function createModal(level) {
    const modal = createSingleEl('div', "modal");
    const modalMessage = createSingleEl("p");
    const modalreachedLevel = createSingleEl("p");
    const button = createButtonEl("close", "button", "button");

    modalMessage.textContent = `Congratulation!`;
    modalreachedLevel.textContent = `You have reached ${level} level!`;
    modal.append(modalMessage, modalreachedLevel, button);

    button.addEventListener('click', closeModal);
    return modal
}

function closeModal() {
    this.closest('.modal').remove()
}
