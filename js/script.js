let btn = document.querySelector('#menu')
let navLinks = document.querySelector('#nav-links')
btn.addEventListener('click', showCard)

function showCard() {
  navLinks.classList.toggle('show')
}
