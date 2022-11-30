let btn = document.querySelector('#menu')
let navLinks = document.querySelector('#nav-links')
btn.addEventListener('click', showCard)

function showCard() {
  navLinks.classList.toggle('show')
}

document.onload(setTimeout(regshow, 2000))

function regshow() {
  let firstdis = document.querySelector('.noshow')
  let seconddis = document.querySelector('.showthis')

  firstdis.style.display = 'none'
  seconddis.style.display = 'block'
}
