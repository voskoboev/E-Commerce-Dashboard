toggleWidgetLowerPart()
toggleSidebar()
toggleWidgetOptionsVisibility()

function toggleScroll() {
  const body = document.querySelector('body')

  body.classList.toggle('body--inactive')
}

function toggleWidgetLowerPart() {
  const arrow = document.querySelectorAll('.widget__arrow'),
    activationClass = 'widget__lower--inactive'

  arrow.forEach(elem => {
    elem.addEventListener('click', ev => {
      ev.target.parentNode.nextElementSibling.classList.toggle(activationClass)
    })
  })
}

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar'),
    btnOpen = document.querySelector('.header__btn'),
    btnClose = document.querySelector('.sidebar__btn--close'),
    activationClass = 'sidebar--active'

  btnOpen.addEventListener('click', () => {
    sidebar.classList.add(activationClass)
    toggleScroll()
  })

  btnClose.addEventListener('click', () => {
    sidebar.classList.remove(activationClass)
    toggleScroll()
  })
}

function toggleWidgetOptionsVisibility() {
  const btn = document.querySelector('.widget-options__btn'),
    hiddenItems = document.querySelector('.widget-options__hidden-items'),
    activationClass = 'widget-options__hidden-items--active'

  btn.addEventListener('click', ev => {
    ev.preventDefault()

    hiddenItems.classList.toggle(activationClass)
  })
}
