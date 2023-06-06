export function createBoxes() {
  const container = document.getElementById("container");

  const numOfBoxes = 13;

  for (let i = 0; i < numOfBoxes; i++) {
    const mainDiv = document.createElement("div");
    mainDiv.className = "box";
    container.appendChild(mainDiv);

    const innerDiv = document.createElement("div");
    innerDiv.className = "box-content";
    mainDiv.appendChild(innerDiv);

    const headingElement = document.createElement("h1");
    innerDiv.appendChild(headingElement);

    const textElement = document.createElement("p");
    textElement.className = "box-text";
    innerDiv.appendChild(textElement);
  }
}
