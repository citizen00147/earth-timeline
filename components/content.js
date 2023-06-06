import { data } from "../data";

export function addContent() {
  const h1Elements = document.querySelectorAll("h1");
  const pElements = document.querySelectorAll("p");

  h1Elements.forEach((h1, index) => {
    h1.innerHTML = data[index % data.length].heading;
  });

  pElements.forEach((p, index) => {
    p.innerHTML = data[index % data.length].paragraph;
  });
}
