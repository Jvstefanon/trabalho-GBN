const navMenu = document.getElementById('nav-menu')
const navOpen = document.getElementById('nav-open')
const navClose = document.getElementById('nav-close')
const navItem = document.querySelectorAll('.nav__item')

/* abrir menu de navegação*/
navOpen.addEventListener('click', () => {
    navMenu.classList.add('nav__menu--open')
})

/* fechar nume de navegação */
navClose.addEventListener('click', ()=> {
     navMenu.classList.remove('nav__menu--open')
})

navItem.forEach(item => {
    item.addEventListener('click', () => {
         navMenu.classList.remove('nav__menu--open')
    })
})

// scroll
const header = document.getElementById('l-header')

window.addEventListener('scroll', () =>{
    if (window.scrollY > 50){
        header.classList.add('l-header--scroll')
    }else{
        header.classList.remove('l-header--scroll')
    }
})

// delizar
const testimonialSwiper = new Swiper(".testimonial__wrapper", {
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
})