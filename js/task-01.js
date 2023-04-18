const categoriesList = document.querySelectorAll('.item')
console.log(`Number of categories:${categoriesList.length}`)
categoriesList.forEach(e => {
    console.log(`Category:${e.firstElementChild.textContent}`)
    console.log(`Elements:${e.lastElementChild.querySelectorAll('li').length}`)
})


// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.