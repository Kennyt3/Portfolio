let btn = document.querySelector('#menu')
let navLinks = document.querySelector('#nav-links')
btn.addEventListener('click', showCard)
let scrollElement = document.querySelector('.js-scroll')

// const scrollOffset = 100
// const scrollElement = document.querySelector('.js-scroll')
// const elementInView = (el, offset = 0) => {
//   const elementTop = el.getBoundingClientRect().top
//   return (
//     elementTop <=
//     (window.innerHeight || document.documentElement.clientHeight) - offset
//   )
// }
// const displayScrollElement = () => {
//   scrollElement.classList.add('scrolled')
// }
// const hideScrollElement = () => {
//   scrollElement.classList.remove('scrolled')
// }
// const handleScrollAnimation = () => {
//   if (elementInView(scrollElement, scrollOffset)) {
//     displayScrollElement()
//   } else {
//     hideScrollElement()
//   }
// }
// window.addEventListener('scroll', () => {
//   handleScrollAnimation()
// })

// const elementInView = (el) => {
//   const elementTop = el.getBoundingClientRect().top
//   return (
//     elementTop <= (window.innerHeight || document.documentElement.clientHeight)
//   )
// }

const elementInView = (el, scrollOffset = 0) => {
  const elementTop = el.getBoundingClientRect().top
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) - scrollOffset
  )
}

const displayScrollElement = (element) => {
  element.classList.add('scrolled')
  element.classList.remove('rescrolled')
}

const hideScrollElement = (element) => {
  element.classList.remove('scrolled')
  element.classList.add('rescrolled')
}

const handleScrollAnimation = () => {
  if (elementInView(scrollElement, 100)) {
    displayScrollElement(scrollElement)
  } else if (elementInView(scrollElement, 0)) {
    hideScrollElement(scrollElement)
  }
}

window.addEventListener('scroll', () => {
  handleScrollAnimation()
})

function showCard() {
  navLinks.classList.toggle('show')
  if (navLinks.classList.contains('show')) {
    btn.setAttribute('class', 'fa-solid fa-x')
  } else {
    btn.setAttribute('class', 'fas fa-bars')
  }
}

document.onload(setTimeout(regshow, 3000))

function regshow() {
  let firstdis = document.querySelector('.noshow')
  let seconddis = document.querySelector('.showthis')

  firstdis.style.display = 'none'
  seconddis.style.display = 'block'
}

// let [fist, ini] = ['Playboy', 'reem', 'ttyy']

// console.log(fist, ini)

// let j = 'tun'

// j[0] = 'o'

// console.log(j)
