import "./style.css";
import { earthAnimation } from "./components/earth-animation";
import { coreAnimation } from "./components/core-animation";
import { rockAnimation } from "./components/rock-animation";
import { organismAnimation } from "./components/organism-animation";
import { humanAnimation } from "./components/human-animation";
import { meteorAnimation } from "./components/meteor-animation";
import { jellyfishAnimation } from "./components/jellyfish-animation";
import { dinosaurAnimation } from "./components/dinosaur-animation";
import { plantAnimation } from "./components/plant-animation";
import { volcanoAnimation } from "./components/volcano-animation";
import { fishAnimation } from "./components/fish-animation";
import { createStartBtn } from "./components/start";
import { animateText } from "./components/text-animation";

if (localStorage.getItem("introSkipped") === "true") {
  setTimeout(createStartBtn, 0);
} else {
  animateText();
  setTimeout(createStartBtn, 9000);
}
