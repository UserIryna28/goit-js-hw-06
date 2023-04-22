
let counterValue = 0;
const counter = document.querySelector("#counter");
// console.log(counter.innerHTML);
const decrementBtn = document.querySelector('button[data-action="decrement"]')
// console.log(decrementBtn.dataset.action)
const value = document.querySelector("#value")
// console.log(value.innerHTML)

decrementBtn.addEventListener("click", () => {
    
counterValue -= 1
value.textContent = counterValue
     
  // console.log(decrementBtn);
});


const incrementBtn = document.querySelector('button[data-action="increment"]')
// console.log(incrementBtn.dataset.action)

incrementBtn.addEventListener("click", () => {
    counterValue += 1
value.textContent = counterValue;
    
  // console.log(incrementBtn);
});

