import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

let camera, scene, renderer;

init();
render();

function init() {
  camera = new THREE.PerspectiveCamera(
    65,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.set(0, 0, 3);

  scene = new THREE.Scene();

  // Load custom 3D model and add rotation animation

  const loader = new GLTFLoader();
  loader.setPath("/images/");
  loader.load("skull_model-v1.glb", function (gltf) {
    gltf.scene.scale.set(0.3, 0.3, 0.3);
    let human = gltf.scene;
    scene.add(human);

    let box = new THREE.Box3().setFromObject(human);
    let center = new THREE.Vector3();
    box.getCenter(center);
    human.position.sub(center); // center the model

    function animate() {
      requestAnimationFrame(animate);

      // human.rotation.y += 0.002;

      render();
    }
    animate();
    // render();
  });

  // Add lighting to model

  //   const amLight = new THREE.AmbientLight(0x000820, 1);
  //   scene.add(amLight);

  //   const hemLight = new THREE.HemisphereLight(0xffffff, 0x080820, 1);
  //   scene.add(hemLight);

  const pointLight = new THREE.PointLight(0xffffff, 2.5, 700, 2);
  pointLight.position.set(25, 0, 25);
  scene.add(pointLight);

  // Render model in existing HTML element and make background transparent

  const canvas = document.getElementById("displayHuman");

  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  // document.body.appendChild(renderer.domElement);

  window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  render();
}

//

function render() {
  renderer.render(scene, camera);
}

export * as humanAnimation from "/components/human-animation.js";
