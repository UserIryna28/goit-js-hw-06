const fontSizeControl = document.querySelector("#font-size-control")
// console.log(fontSizeControl)
const spanText = document.querySelector("#text")
// console.log(spanText)

fontSizeControl.addEventListener('input', () => {
    
    spanText.style.fontSize = `${fontSizeControl.value}px`;
    
})

