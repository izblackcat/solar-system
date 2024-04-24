import "./style.css";

import {
  Scene,
  PerspectiveCamera,
  Mesh,
  WebGLRenderer,
  IcosahedronGeometry,
  MeshStandardMaterial,
  TextureLoader,
  Group,
  AmbientLight,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import {createEarth} from "./planets/planets";
import createMoon from "./planets/moon";

const container = document.querySelector("#scene-container");

const scene = new Scene();

const camera = new PerspectiveCamera(
  75,
  container.clientWidth / container.clientHeight,
  0.1,
  1000
);

camera.position.set(0, 0, 20);

const renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
// renderer.shadowMap.enabled = true;
container.append(renderer.domElement);
renderer.render(scene, camera);

const ambientLight = new AmbientLight(0xffffff, 2);
scene.add(ambientLight);

const loader = new TextureLoader();

// const solarSystem = new Group();
// scene.add(solarSystem);
// solarSystem.rotation.z = (-23.4 * Math.PI) / 180; // earth's tilt

const geometry = new IcosahedronGeometry(4, 12);
const material = new MeshStandardMaterial({
  map: loader.load("/sun_texture.jpg"),
});

const sun = new Mesh(geometry, material);
sun.z = (-23.4 * Math.PI) / 180; // earth's tilt
scene.add(sun);

// earth:
const earth = createEarth();
const moon = createMoon();
earth.add(moon);
sun.add(earth);



const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);

  sun.rotation.y += 0.01;
  earth.rotation.y += 0.02;
  moon.rotation.y += 0.001;

  controls.update();
  renderer.render(scene, camera);
}

animate();
