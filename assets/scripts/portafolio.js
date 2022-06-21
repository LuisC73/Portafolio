export default function portafolio(categories, items) {
  const $categories = document.querySelectorAll(categories),
    $items = document.querySelectorAll(items);

  $categories.forEach(categorie => {
    categorie.addEventListener('click', () => {
      $categories.forEach(categorie => {
        categorie.classList.remove("portafolio--active");
      })
      categorie.classList.add("portafolio--active");

      let dataFilter = categorie.getAttribute('data-filter');

      $items.forEach(item => {
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