toggleWidgetLowerPart()
toggleSidebar()

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
    activationClass = 'sidebar--active'

  ;(() => {
    const btn = document.querySelector('.header__btn')

    btn.addEventListener('click', () => {
      sidebar.classList.add(activationClass)
      toggleScroll()
    })
  })()
  ;(() => {
    const btn = document.querySelector('.sidebar__btn--close')

    btn.addEventListener('click', () => {
      sidebar.classList.remove(activationClass)
      toggleScroll()
    })
  })()
}

function showMoreWidgetElems() {
  // const widgetLower = document.querySelector('.widget-options__lower')

  // console.log(widgetLower.childNodes)

  // let arr = []

  // console.log(
  //   widgetLower.childNodes.forEach(el => {
  //     if (el.nodeName === 'LABEL') {
  //       arr.push(el)
  //     }
  //   })
  // )

  // console.log(arr)

  // for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i])

  //   if (arr[i].indexOf) console.log()
  // }
}

showMoreWidgetElems()

// const cards = document.querySelector('.cards-list')

// console.log(cards.children.length);
