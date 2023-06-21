import "./style.css";
import { earthAnimation } from "./components/earth-animation";
import { coreAnimation } from "./components/core-animation";
import { rockAnimation } from "./components/rock-animation";
import { organismAnimation } from "./components/organism-animation";
import { humanAnimation } from "./components/human-animation";
import { meteorAnimation } from "./components/meteor-animation";
import { jellyfishAnimation } from "./components/jellyfish-animation";
import { dinosaurAnimation } from "./components/dinosaur-animation";
import { createStartBtn } from "./components/start";
import { animateText } from "./components/text-animation";

animateText();
setTimeout(createStartBtn, 9000);
