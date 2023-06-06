import { createBoxes } from "./box";
import { addContent } from "./content";
// import { animateText } from "./text-animation";

export function createStartBtn() {
  const startBtn = document.createElement("button");
  startBtn.textContent = "Start";
  startBtn.setAttribute("type", "button");
  document.body.appendChild(startBtn);

  const model = document.getElementById("displayModel");

  startBtn.addEventListener("click", () => {
    startBtn.remove();
    model.remove();
    createBoxes();
    addContent();
    animateText();
  });
}
