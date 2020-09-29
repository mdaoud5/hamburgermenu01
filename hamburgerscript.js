const navbar = window.document.getElementById('nav-bar')
const hamburger = window.document.getElementById('hamburger')
hamburger.addEventListener('click', () =>{
    navbar.classList.toggle('nav-bar--active')
    hamburger.classList.toggle('hamburger--active')
})