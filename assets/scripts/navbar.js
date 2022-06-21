export function navbar(navToggle, navList, navItems) {
  const $navToggle = document.querySelector(navToggle),
    $navList = document.querySelector(navList),
    $navItems = document.querySelectorAll(navItems);

    document.addEventListener('click',(e)=>{
      if(e.target.matches(navToggle) || e.target.matches(`${navToggle} *`)){
        $navList.classList.toggle("navbar__list--active");
        $navToggle.classList.toggle("navbar__toggle--active");

        $navItems.forEach((item, index) => {
          (item.style.animation) ?
          item.style.animation = '': item.style.animation = `navItemFade .5s ease forwards ${index / 7 + .3}s`
        })
      }
    })
}


export function navbarScroll(navbar, navbar__link, section) {

  const $nav = document.querySelector(navbar),
    $navLinks = document.querySelectorAll(navbar__link),
    $sections = document.querySelectorAll(section);

  window.addEventListener('scroll', () => {
    $nav.classList.toggle('navbar--sticky', window.scrollY > 0)

    $sections.forEach(section => {
      let top = window.scrollY,
        offset = section.offsetTop - 150,
        height = section.offsetHeight,
        id = section.getAttribute('id');

      if (top >= offset && top < offset + height) {
        $navLinks.forEach(link => {
          link.classList.remove("navbar__link--active")
          document.querySelector(`.navbar__link[href*= ${id}]`).classList.add("navbar__link--active")
        })
      }
    })
  })
}