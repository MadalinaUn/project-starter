const primaryNav = document.querySelector('.main_navigation')
const navToggle = document.querySelector('.button_menu')

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible')

  if (visibility === "false") {
    console.log(visibility)
    primaryNav.setAttribute('data-visible', true)
    navToggle.setAttribute('data-expanded', true)
  }
  if (visibility === "true") {
    console.log(visibility)
    primaryNav.setAttribute('data-visible', false)
    navToggle.setAttribute('data-expanded', false)
  }
})
