export default function navbar(){
    const navToggle = document.querySelector(".navbar__toggle"),
        navList = document.querySelector('.navbar__list'),
        navItem = document.querySelectorAll('.navbar__item'),
        nav = document.querySelector(".navbar"),
        navLogo = document.querySelector(".navbar__logo"),
        navLink = document.querySelectorAll(".navbar__link"),
        iconMode = document.querySelector(".navbar__icon");

    navToggle.addEventListener('click', () => {
        navList.classList.toggle("navbar__list--active");
        navToggle.classList.toggle("navbar__toggle--active");

        navItem.forEach((link, index) => {
            (link.style.animation) ?
            link.style.animation = '': link.style.animation = `navItemFade .5s ease forwards ${index / 7 + .3}s`
        })
    })

    window.onscroll = () => {
        if (this.scrollY > 40) {
            nav.classList.add('navbar--sticky')
            navLogo.classList.add('navbar__logo--sticky')
            iconMode.classList.add('navbar__icon--sticky')

            navLink.forEach(link => {
                link.classList.add('navbar__link--sticky')
            })

        } else {
            nav.classList.remove('navbar--sticky')
            navLogo.classList.remove('navbar__logo--sticky')
            iconMode.classList.remove('navbar__icon--sticky')

            navLink.forEach(link => {
                link.classList.remove('navbar__link--sticky')
            })
        }

    }

}

