export default function skills(rows, arrow_left, arrow_right) {
  const $rowSkills = document.querySelector(rows);

  document.addEventListener("click", e => {
    if (e.target.matches(arrow_right)) {
      $rowSkills.scrollLeft += $rowSkills.offsetWidth;
    }

    if (e.target.matches(arrow_left)) {
      $rowSkills.scrollLeft -= $rowSkills.offsetWidth;
    }
  })

}