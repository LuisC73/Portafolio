export default function darkMode(btn, body, icon) {
  const $body = document.querySelector(body),
    $darkIcon = document.querySelector(icon);

  document.addEventListener("click", e => {
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      $body.classList.toggle("darkMode")

      if ($body.classList.contains("darkMode")) {
        localStorage.setItem("darkMode", 'true');
      } else {
        localStorage.setItem("darkMode", 'false');
      }

      if ($darkIcon.classList.contains("bx-moon")) {
        $darkIcon.classList.remove("bx-moon")
        $darkIcon.classList.add("bxs-sun")
      } else {
        $darkIcon.classList.remove("bxs-sun")
        $darkIcon.classList.add("bx-moon")
      }
    }
  })

  if (localStorage.getItem("darkMode") === 'true') {
    $body.classList.add("darkMode")
    $darkIcon.classList.remove("bx-moon")
    $darkIcon.classList.add("bxs-sun")
  } else {
    $body.classList.remove("darkMode")
    $darkIcon.classList.remove("bxs-sun")
    $darkIcon.classList.add("bx-moon")
  }

}