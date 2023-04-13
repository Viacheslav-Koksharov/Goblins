export function createSingleEl(tagName, className = null) {
    const element = document.createElement(tagName);

    if (className) {
        element.classList.add(className);
    }
    return element;
}

export function createTextEl(text, content = null, style = null) {
    const element = document.createElement("p");
    element.textContent = text;

    if (content) {
        const child = document.createElement("span");
        child.textContent = content;
        element.append(child);

        if (style) {
            child.classList.add(style);
        }
    }
    return element;
}

export function createInputEl(text, placeholder, type, name) {
    const container = createSingleEl("div", "input__container");
    const label = createSingleEl("label", "label");
    const input = createSingleEl("input", "input");

    label.textContent = text;
    input.placeholder = placeholder;
    input.type = type;
    input.name = name;

    container.append(label, input)
    return container;
}

export function createButtonEl(text, type, style) {
    const button = createSingleEl("button", style);
    button.textContent = text;
    button.type = type;

    return button;
}

export function createEnemyUnit(styleUnit, src, styleImage) {
    const container = createSingleEl("div", styleUnit);
    const image = createSingleEl("img", styleImage);
    image.src = src;

    container.append(image);
    return container;
}

export function startTimer() {
    const start = Date.now()
    localStorage.setItem('time', start);
    return start
}

export function stopTimer() {
    const startGame = localStorage.getItem('time');
    const stop = Date.now();
    const delta = stop - startGame;
    const mins = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const secs = Math.floor((delta % (1000 * 60)) / 1000).toString().padStart(2, '0');
    const timer = `${mins} min ${secs}sec`;
    localStorage.setItem('time', timer);
    return timer
}