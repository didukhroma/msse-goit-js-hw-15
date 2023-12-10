// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const formRef = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email;
  const password = form.elements.password;
  const alertStr = "Please fill in all the fields!";
  const requestObj = {
    [email.name]: email.value,
    [password.name]: password.value,
  };
  if (!email.value || !password.value) {
    alert(alertStr);
  } else {
    console.log(requestObj);
    form.reset();
  }
};

formRef.addEventListener("submit", handleSubmit);
