const button = document.querySelector("button.change-color");
const span = document.querySelector("span.color");


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


button.addEventListener("click", () => {
  const newBackgroundColor = getRandomHexColor()
  document.body.style.backgroundColor = newBackgroundColor
  span.textContent = newBackgroundColor

}
);

