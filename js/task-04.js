// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// const counterRef = document.querySelector("#counter");

const refs = {
  counter: document.querySelector("#counter"),
  span: document.querySelector("#value"),
  increment: document.querySelector('[data-action="increment"]'),
  decrement: document.querySelector('[data-action="decrement"]'),
};

let counterValue = 0;

const handleClick = ({ target }) => {
  counterValue += target === refs.increment ? 1 : -1;
  refs.span.textContent = counterValue;
};

refs.increment.addEventListener("click", handleClick);
refs.decrement.addEventListener("click", handleClick);
