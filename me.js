const userName= document.querySelector('.name')
const email = document.querySelector('.email')
const me = JSON.parse(localStorage.getItem('me'))

if (me) {
    userName.innerHTML = `Welcome ${me.name}`
    email.innerHTML = `Email:${me.email}`
}
