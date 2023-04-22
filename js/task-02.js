const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = []
ingredients.forEach((ingredient, index, array) => {

 const liIngredient = document.createElement("li")
// console.log(liIngredient)
liIngredient.textContent = ingredient;
  liIngredient.classList.add("item")
  // console.log(liIngredient)
  return list.push(liIngredient)
  
})

const listLi = document.querySelector("#ingredients")
// console.log(listLi)
listLi.append(...list) 
