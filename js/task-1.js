
// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.


const categoriesList = document.querySelectorAll(".item");
const categoriesQuantity = categoriesList.length; // count cuantity of categories
let categoriesQuantityMessage = `Number of categories: ${categoriesQuantity}`//  message

console.log(categoriesQuantityMessage);




// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>)

//  і кількість елементів у категорії (усіх <li>, вкладених у нього).
let categoryName = ``;
let categoryElements;
let categoryElementsQuantiy = 0;
categoriesList.forEach(category => {

    categoryName = category.querySelector("h2").textContent //search txt of h2
    
    let namesMessage = `Category: ${categoryName}`
    console.log(namesMessage); //message

    categoryElements = category.querySelector("ul").querySelectorAll("li");
    categoryElementsQuantiy = categoryElements.length; // count elements

    let elementsQuantityMessage = `Elements: ${categoryElementsQuantiy}`
    console.log(elementsQuantityMessage); //message
}); 
   


// На що буде звертати увагу ментор при перевірці:

// Кількість категорій, їх назва та кількість елементів отримані за допомогою властивостей і методів DOM-елементів  
// Дані за кожною категорією були отримані й виведені в консоль у тілі циклу або методу forEach() - спочатку зробила через фороф працює так само як і з форіч
