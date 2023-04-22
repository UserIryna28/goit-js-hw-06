
const form = document.querySelector(".login-form")
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const emailValue = form.elements.email
    const passwordValue = form.elements.password

    if (emailValue.value === "" || passwordValue.value === "") {
 alert("Please fill in all fields")
} else {
        const loginData = {
        email: emailValue.value,
        password: passwordValue.value    
        }
        console.log(loginData);
        form.reset();
}
})










  