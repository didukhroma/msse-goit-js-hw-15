// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>
const controlRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");
const baseFontSize = controlRef.value;

const changeFontSize = (fontSize) => (spanRef.style.fontSize = `${fontSize}px`);

const handleInput = ({ target }) => changeFontSize(target.value);

changeFontSize(baseFontSize);

controlRef.addEventListener("input", handleInput);

// Завданні 7 - при завантаженні сторінки потрібно в початковий фонтсайз спана поставити початкове значення інпута, щоб не було скачків розміру текста при пересуванні повзунка.
