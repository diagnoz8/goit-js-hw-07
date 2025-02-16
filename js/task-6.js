function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector("#controls");


const createBtn  = controls.querySelector("button[data-create]")
const destroyBtn = controls.querySelector("button[data-destroy]")
const inputEl = controls.querySelector("input")
const collection = document.querySelector("#boxes");

let divQuantity = 0;

 const getInputValue = (evt) => divQuantity = Number(evt.target.value);


 
const createCollection = () => {
    collection.innerHTML = "";

  if (divQuantity >= 1 && divQuantity <= 100) {
       let size = 30;

     for (let index = 0; index < divQuantity; index++) {
       const div = document.createElement("div");
    div.style.width = `${size}px`; 
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
       collection.append(div);
       size += 10;
     }
       
     inputEl.value = "";
     divQuantity = 0;
   }
 };
const destroyCollection = () => { 
  collection.innerHTML = "";
};






createBtn.addEventListener("click", createCollection);
destroyBtn.addEventListener("click", destroyCollection);
inputEl.addEventListener("input", getInputValue);










// Розміри першого <div> елемента мають бути 30px на 30px. -----
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px. -----
// Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору. ---
// Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.



// На що буде звертати увагу ментор при перевірці:

// Після кліку на кнопку Create, якщо в input значення поза межами діапазону 1-100, нічого не відбувається
// Після кліку на кнопку Create в div#boxes за одну операцію додається така кількість різнокольорових квадратів, яка вказана в input. Значення input очищається
// Після повторного кліку на кнопку Create попередні квадрати повністю прибираються і замість них додаються нові у кількості, що вказана в input. Значення input очищається
// Усі квадрати в div#boxes різнокольорові і мають фон випадкового кольору
// Перший квадрат у div#boxes має розміри 30px на 30px, а кожен наступний на 10px вищий і ширший від попереднього
// Після натискання на кнопку Destroy усі квадрати з div#boxes мають видалятися