const navbar = () => {
    const navToggle = document.querySelector(".navbar__toggle"),
        navList = document.querySelector('.navbar__list'),
        navItem = document.querySelectorAll('.navbar__item'),
        nav = document.querySelector(".navbar"),
        navLogo = document.querySelector(".navbar__logo"),
        navLink = document.querySelectorAll(".navbar__link"),
        iconMode = document.querySelector(".navbar__icon"),
        sections = document.querySelectorAll("section");

    navToggle.addEventListener('click', () => {
        navList.classList.toggle("navbar__list--active");
        navToggle.classList.toggle("navbar__toggle--active");

        navItem.forEach((link, index) => {
            (link.style.animation) ?
            link.style.animation = '': link.style.animation = `navItemFade .5s ease forwards ${index / 7 + .3}s`
        })
    })


    window.addEventListener('scroll', () => {
        nav.classList.toggle('navbar--sticky', window.scrollY > 0)

        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop,
            sectionHeight = section.clientHeight;

            if(scrollY > sectionTop){
                current = section.getAttribute('id')
            }
            
        })
        navLink.forEach(link=>{
            link.classList.remove("navbar__link--active")
            if(link.getAttribute("data-url"==current)){
                link.classList.add("navbar__link--active")
            }
        })
    })
}

navbar();


const skills = () => {
    const rowSkills = document.querySelector(".skills__carrousel"),
        skills = document.querySelectorAll(".skills__icon"),
        arrowleft = document.getElementById("arrow-left"),
        arrowRight = document.getElementById("arrow-right");

    arrowRight.addEventListener('click', () => {
        rowSkills.scrollLeft += rowSkills.offsetWidth;
    })

    arrowleft.addEventListener('click', () => {
        rowSkills.scrollLeft -= rowSkills.offsetWidth;
    })

}

skills()

const portafolio = () => {
    const categories = document.querySelectorAll(".portafolio__categorie"),
        items = document.querySelectorAll(".portafolio__item");

    categories.forEach(categorie => {
        categorie.addEventListener('click', () => {
            categories.forEach(categorie => {
                categorie.classList.remove("portafolio--active");
            })
            categorie.classList.add("portafolio--active");

            let dataFilter = categorie.getAttribute('data-filter');

            items.forEach(item => {
                item.classList.remove('portafolio__item--active');
                item.classList.add('portafolio__item--hide');

                let dataItem = item.getAttribute('data-item');


                if (dataItem == dataFilter || dataFilter == 'all') {
                    item.classList.remove('portafolio__item--hide');
                    item.classList.add('portafolio__item--active');
                }
            })
        })
    })
}

portafolio()

const darkMode = () => {
    const btnDark = document.querySelector('.navbar__mode'),
        body = document.querySelector("body"),
        darkIcon = document.querySelector(".navbar__icon");

    btnDark.addEventListener('click', () => {
        body.classList.toggle("darkMode")

        if (body.classList.contains("darkMode")) {
            localStorage.setItem("darkMode", 'true');
        } else {
            localStorage.setItem("darkMode", 'false');
        }

        if (darkIcon.classList.contains("bx-moon")) {
            darkIcon.classList.remove("bx-moon")
            darkIcon.classList.add("bxs-sun")
        } else {
            darkIcon.classList.remove("bxs-sun")
            darkIcon.classList.add("bx-moon")
        }

    })

    if (localStorage.getItem("darkMode") === 'true') {
        body.classList.add("darkMode")
        darkIcon.classList.remove("bx-moon")
        darkIcon.classList.add("bxs-sun")
    } else {
        body.classList.remove("darkMode")
        darkIcon.classList.remove("bxs-sun")
        darkIcon.classList.add("bx-moon")
    }

}

darkMode()