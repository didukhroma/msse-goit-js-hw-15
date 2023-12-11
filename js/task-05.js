// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const defaultStr = "Anonymous";

const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

const handleInput = () =>
  (spanRef.textContent = inputRef.value.length ? inputRef.value : defaultStr);

inputRef.addEventListener("input", handleInput);
