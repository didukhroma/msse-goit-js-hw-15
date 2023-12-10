function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const wrapperRef = document.querySelector("#boxes");
const inputRef = document.querySelector("#controls").firstElementChild;
const createBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");

const minHeight = 30;
const minWidth = 30;
const step = 10;

let height = minHeight;
let width = minWidth;

const clearMarkup = () => (wrapperRef.innerHTML = "");

const createBoxes = (amount) => {
  let markup = "";
  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    const element = `<div style="width:${width}px;height:${height}px;background-color:${color}"></div>`;
    markup += element;
    width += step;
    height += step;
  }
  wrapperRef.insertAdjacentHTML("beforeend", markup);
};

const destroyBoxes = () => {
  clearMarkup();
  height = minHeight;
  width = minWidth;
};

const handleCreateClick = () => createBoxes(inputRef.value);
const handleDestroyClick = () => destroyBoxes();

createBtnRef.addEventListener("click", handleCreateClick);
destroyBtnRef.addEventListener("click", handleDestroyClick);
