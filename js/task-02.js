// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

// JavaScript містить масив рядків.
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// HTML містить порожній список ul#ingredients.
// <ul id="ingredients"></ul>

const fooSecondTask = () => {
  const ingredientsListRef = document.querySelector("#ingredients");

  const markup = ingredients
    .map((el) => {
      const item = document.createElement("li");
      item.textContent = el;
      item.classList.add("item");
      return item.outerHTML;
    })
    .join("");
  // ingredientsListRef.innerHTML = markup;
  ingredientsListRef.insertAdjacentHTML("afterbegin", markup);
};

fooSecondTask();
