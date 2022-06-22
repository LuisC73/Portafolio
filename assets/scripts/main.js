

import buttonUp from "./button-up.js";
import darkMode from "./dark-mode.js";
import {
  navbar,
  navbarScroll
} from "./navbar.js";
import portafolio from "./portafolio.js";
import skills from "./skills.js";


navbar('.navbar__toggle', '.navbar__list', '.navbar__item');
navbarScroll(".navbar", ".navbar__link", "section");
skills(".skills__carrousel", "#arrow-left", "#arrow-right");
portafolio(".portafolio__categorie", ".portafolio__item");
darkMode('.navbar__mode', "body", ".navbar__icon");
buttonUp(".up__container");