const loginInputEmail = document.querySelector('.input-email-login')
const loginInputPassword = document.querySelector('.input-password-login')
const loginForm = document.querySelector('.login-form')

const users = JSON.parse(localStorage.getItem('users'))
let loginUserPassword = ''
let loginUserEmail = ''

loginInputEmail.addEventListener('keyup', (e) => {
    loginUserEmail = e.target.value
})

loginInputPassword.addEventListener('keyup', (e) => {
    loginUserPassword = e.target.value
})

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!loginUserPassword || !loginUserEmail ) {
        return alert('please provide all values')
    }

    const isUser = users.find((user) => user.email === loginUserEmail && user.password === loginUserPassword)
    if (!isUser) {
        return alert('Invalid Credentials')
    }

    localStorage.setItem('me', JSON.stringify(isUser))
    loginInputPassword.value = ''
    loginInputEmail.value = ''
    window.location.href = './home.html'
})

