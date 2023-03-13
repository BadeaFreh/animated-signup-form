
const container = document.querySelector(".container")
const SignUpBtn = document.querySelector(".green-bg button")

SignUpBtn.addEventListener('click', () => {
    // adds / removes class to container when clicked
    container.classList.toggle("change")
})
