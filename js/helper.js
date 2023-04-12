export const createInput = (text, placeholder, type, name) => {
    const container = document.createElement("div");
    container.classList.add("input__container");

    const label = document.createElement("label");
    label.textContent = text;
    label.classList.add("label");

    const input = document.createElement("input");
    input.placeholder = placeholder;
    input.type = type;
    input.name = name;
    input.classList.add("input");
    container.append(label, input)
    return container;
}

export const createButton = (text, type, style) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.type = type;
    button.classList.add(style);
    return button;
}

export const createTextElement = (text, content, style) => {
    const textHeader = document.createElement("p");
    textHeader.textContent = text;
    const textHeaderContent = document.createElement("span");
    textHeaderContent.textContent = content;
    textHeaderContent.classList.add(style);
    textHeader.append(textHeaderContent)
    return textHeader;
}

export const sreateEnemyUnit = (styleUnit, src, styleImage) => {
    const enemyContainer = document.createElement('div');
    enemyContainer.classList.add(styleUnit);
    const enemyImage = document.createElement('img');
    enemyImage.src = src;
    enemyImage.classList.add(styleImage);

    enemyContainer.append(enemyImage);
    return enemyContainer
}