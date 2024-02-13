const navToggleIcon = document.querySelector('.nav-toggle-icon')
const menu = document.querySelector('.menu')
const cover = document.querySelector('.cover')
const resumeListItems = document.querySelectorAll('.detail__list-menu__item')
navToggleIcon.addEventListener('click', function () {
    this.classList.toggle('nav-toggle-icon--open')
    menu.classList.toggle('menu--open')
    cover.classList.toggle('cover--show')

})
// resumeListItems.forEach(resumeListItem => {    درستتتتتتتتتتتتت
//     resumeListItem.addEventListener('click', function () {
//         document.querySelector('.detail__list-menu__item--active').classList.remove('detail__list-menu__item--active')
//         document.querySelector('.detail__content-show').classList.remove('detail__content-show')
//         this.classList.add('detail__list-menu__item--active')
//         let contentId = this.getAttribute('data-content-id')
//         document.querySelector(contentId).classList.add('detail__content-show')


//     })
// })



resumeListItems.forEach(resumeListItem => {
    resumeListItem.addEventListener('click', function () {
        document.querySelector('.detail__list-menu__item--active').classList.remove('detail__list-menu__item--active')
        document.querySelector('.detail__content-show').classList.remove('detail__content-show')
        this.classList.add('detail__list-menu__item--active')
        let contentId = this.getAttribute('data-content-id')
        document.querySelector(contentId).classList.add('detail__content-show')


    })
})

portfolioListItems.forEach(portfolioListItem => {
    portfolioListItem.addEventListener('click',function (){
        document.querySelector('.portfolio__list__item--active').classList.remove('portfolio__list__item--active')
        document.querySelector('.portfolio__content--show').classList.remove('portfolio__content--show')
        this.classList.add('portfolio__list__item--active')
        let contentId = this.getAttribute('data-content-id')
        document.querySelector(contentId).classList.add('portfolio__content--show')
    })
})