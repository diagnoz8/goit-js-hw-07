// Напиши скрипт управління формою логіна.


// відправлення форми form.login-form повинна відбуватися за подією submit.
const userForm = document.querySelector(".login-form");
const userFormData = userForm.querySelectorAll("label");
const userEmailLabel = userFormData[0];
const userPasswordLabel = userFormData[1];

const userEmailKey = userEmailLabel.textContent.trim();
const userPasswordKey = userPasswordLabel.textContent.trim();

const userData = {};
let userEmail = "";
let userPassword = "";

userForm.addEventListener("input", (evt) => { 
    if
        (evt.target.type === "email")
    {
        userEmail = evt.target.value.trim(); 
        
    }
    
    else if
        (evt.target.type === "password")
    {
        userPassword = evt.target.value.trim(); 
        
    }
    
});
userForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    if
        (userEmail === "" || userPassword === "")
    {
        alert("All form fields must be filled in") 
        return;
    }
    
    else
    {
        userData[userEmailKey] = userEmail;
        userData[userPasswordKey] = userPassword;
    }
          console.log(userData);
    userForm.reset();  
     userEmail = "";
    userPassword = "";
})

// Під час відправлення форми сторінка не повинна перезавантажуватися.

// Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
// При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.


// На що буде звертати увагу ментор при перевірці:

// Прослуховується подія submit
// Під час відправлення форми сторінка не перезавантажується
// Якщо при сабміті у формі є незаповнені поля, виводиться alert
// При сабміті в консоль виводиться об’єкт з двома властивостями, де ключі — це ім’я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях
// Після сабміту елементи форми очищаються