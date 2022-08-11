// get all elements
const registerForm = document.querySelector('.register-form')
const registerBtn = document.querySelector('.register-btn')
const registerInputName = document.querySelector('.input-name-register')
const registerInputEmail = document.querySelector('.input-email-register')
const registerInputPassword = document.querySelector('.input-password-register')

let registerUserName = ''
let registerUserPassword = ''
let registerUserEmail = ''
let usersDataBase = []
const users = localStorage.getItem('users')

// condition to enable our register btn
const enableBtn = () => {
    if (registerUserName.length >= 3 && registerUserPassword.length >= 6) {
        registerBtn.disabled = false
    } else{
        registerBtn.disabled = true
    }
}

// set value of our dataBase
if (users == null ) {
    usersDataBase = []
} else {
    usersDataBase = JSON.parse(users)
}

// tracking input values
registerInputName.addEventListener('keyup', (e) => {
    registerUserName = e.target.value

    if (registerUserName.length < 3) {
        registerInputName.style.border = "1px solid red"
    } else {
        registerInputName.style.border = "1px solid grey"
    }
    enableBtn()
})

registerInputEmail.addEventListener('keyup', (e) => {
    registerUserEmail = e.target.value
    enableBtn()
})

registerInputPassword.addEventListener('keyup', (e) => {
    registerUserPassword = e.target.value

    if (registerUserPassword.length < 6) {
        registerInputPassword.style.border = "1px solid red"
    } else {
        registerInputPassword.style.border = "1px solid grey"
    }
    enableBtn()
})

// register User
registerForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const userInfo = {
        id: Date.now(),
        name: registerUserName,
        password: registerUserPassword,
        email:registerUserEmail
    }

    // check if user is in the system
    const isUser = usersDataBase.find((user) => user.email === userInfo.email)
    if (isUser) {
        return alert('Email already in use try something else')
    }

    usersDataBase.push(userInfo)
    
    localStorage.setItem('users', JSON.stringify(usersDataBase))

    window.location.href = './index.html'

    registerInputName.value = ''
    registerInputPassword.value = ''
    registerInputEmail.value = ''  
})



