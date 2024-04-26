import "./style.css";

import {
  Scene,
  PerspectiveCamera,
  Mesh,
  WebGLRenderer,
  IcosahedronGeometry,
  MeshStandardMaterial,
  TextureLoader,
  AmbientLight,
  Object3D,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import {createEarth, createJupiter, createMars, createMercury, createSaturn, createSaturnRing, createVenus} from "./planets/planets";
import createMoon from "./planets/moon";


const container = document.querySelector("#scene-container");

const scene = new Scene();

const camera = new PerspectiveCamera(
  75,
  container.clientWidth / container.clientHeight,
  0.1,
  1000
);

camera.position.set(0, 40, 0);

const renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
container.append(renderer.domElement);
renderer.render(scene, camera);

const ambientLight = new AmbientLight(0xffffff, 2);
scene.add(ambientLight);

const loader = new TextureLoader();

// earth.rotation.z = (-23.4 * Math.PI) / 180; // earth's tilt


const geometry = new IcosahedronGeometry(4, 12);
const material = new MeshStandardMaterial({
  map: loader.load("/8k_sun.jpg"),
});

const sun = new Mesh(geometry, material);
sun.z = (-23.4 * Math.PI) / 180; // earth's tilt
scene.add(sun);

//mercury :
const mercuryParent = new Object3D();
const mercury = createMercury();
scene.add(mercuryParent);
mercuryParent.add(mercury);

// venus:
const venusParent = new Object3D();
const venus = createVenus();
scene.add(venusParent);
venusParent.add(venus);

// earth:
const earth = createEarth();
const moon = createMoon();
earth.add(moon);
sun.add(earth);

// mars:
const mars = createMars();
const marsParent = new Object3D();
marsParent.add(mars);
scene.add(marsParent);

// jupiter:
const jupiter = createJupiter();
const jupiterParent = new Object3D();
jupiterParent.add(jupiter);
scene.add(jupiterParent);

// saturn:
const saturn = createSaturn();
const saturnParent = new Object3D();
saturnParent.add(saturn);
scene.add(saturnParent);

// saturn ring:
const saturnRing = createSaturnRing();
saturnParent.add(saturnRing);

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);


  sun.rotation.y += 0.01;

  mercuryParent.rotation.y += 0.004;

  venusParent.rotation.y += 0.003;

  earth.rotation.y += 0.002;
  moon.rotation.y += 0.001;

  marsParent.rotation.y += 0.002;

  jupiterParent.rotation.y += 0.003;

  saturnParent.rotation.y += 0.0035;

  controls.update();
  renderer.render(scene, camera);
}

animate();
