let passOne = document.querySelector("#password")
let passTwo = document.querySelector("#password-2")
let badP = document.createElement('p')
badP.textContent = "* Passwords do not match"
badP.setAttribute('style',"margin: 0px; color: red; font-size: .7rem")


let passOneDiv = document.querySelector(".pass-one")

passOne.addEventListener('input', event =>{
    if (passOne.value != passTwo.value){
        passTwo.style.borderColor = 'red'
        passOne.style.borderColor = 'red'
        passOneDiv.appendChild(badP)
    }
    else {
        passTwo.style.borderColor = 'rgb(174, 159, 159)'
        passOne.style.borderColor = 'rgb(174, 159, 159)'
        passOneDiv.removeChild(badP)
    }
})

passTwo.addEventListener('input', event =>{
    if (passOne.value != passTwo.value){
        passTwo.style.borderColor = 'red'
        passOne.style.borderColor = 'red'
        passOneDiv.appendChild(badP)
    }
    else {
        passTwo.style.borderColor = 'rgb(174, 159, 159)'
        passOne.style.borderColor = 'rgb(174, 159, 159)'
        passOneDiv.removeChild(badP)
    }
})