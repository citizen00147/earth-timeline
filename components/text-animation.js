import Typed from "typed.js";

export function animateText() {
  const typed = new Typed("#startText", {
    strings: [
      "planetary data requested.^1000",
      "scanning...^500",
      "planetary data found.^150",
      '<a href="https://www.cmdme.dev">made by cmdme</a> ',
    ],
    typeSpeed: 50,
    backSpeed: 15,
    shuffle: false,
    smartBackspace: false,
    loop: false,
  });
}
