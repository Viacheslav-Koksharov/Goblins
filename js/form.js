import { createInput, createButton } from './helper.js'

const form = document.createElement("form");
form.classList.add("form");

const fieldSet = document.createElement("fieldset");
fieldSet.classList.add("fieldset");

const legend = document.createElement("legend");
legend.textContent = "Create Account";
legend.classList.add("legend");

const nickContainer = createInput("NickName:", "Write your nickname", "text", "nik")
const nameContainer = createInput("Name:", "Write your name:", "text", "name");
const emailContainer = createInput("Email:", "example@mail.com", "email", "email");
const button = createButton("Create User", "submit", "button");

fieldSet.append(legend, nickContainer, nameContainer, emailContainer, button);
form.append(fieldSet);

export default form;

