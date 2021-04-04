const formElement = document.querySelector(".form")
const inputElement = document.querySelector('.form__input-name')
const timeELement = document.querySelector('.form__input-time')

let todo = []

formElement.addEventListener('submit', evt =>{
    evt.preventDefault()
    if(!(inputElement.value && timeELement.value)) return alert('Vaqt belgilamadingiz')
    console.log(inputElement.value, timeELement.value)
})