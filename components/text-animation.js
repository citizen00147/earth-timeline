import Typed from "typed.js";

export function animateText() {
  const typed = new Typed("#startText", {
    strings: ["These are the default values..."],
    typeSpeed: 40,
    backSpeed: 0,
    loop: true,
    showCursor: true,
    cursorChar: "|",
    autoInsertCss: true,
  });
}
