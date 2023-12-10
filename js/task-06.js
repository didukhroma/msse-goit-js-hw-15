// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

{
  /* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>


Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
} */
}
const inputRef = document.querySelector("#validation-input");
const minLength = inputRef.getAttribute("data-length");
const validClass = "valid";
const invalidClass = "invalid";

const handleBlur = ({ target }) => {
  if (target.value.length >= minLength) {
    inputRef.classList.add(validClass);
    inputRef.classList.remove(invalidClass);
  } else {
    inputRef.classList.remove(validClass);
    inputRef.classList.add(invalidClass);
  }
  if (inputRef.value.length === 0) {
    inputRef.classList.remove(validClass);
    inputRef.classList.remove(invalidClass);
  }
};

inputRef.addEventListener("blur", handleBlur);
