import "./style.css";

import {
  Mesh,
  IcosahedronGeometry,
  MeshStandardMaterial,
  TextureLoader,
  Object3D,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module.js";

import {
  createEarth,
  createJupiter,
  createMars,
  createMercury,
  createNeptune,
  createSaturn,
  createSaturnRing,
  createUranus,
  createVenus,
} from "./planets/planets";
import createMoon from "./planets/moon";
import { addStarsToScene, initThreeJs } from "./planets/helper";

const [scene, camera,  renderer] = initThreeJs();

const loader = new TextureLoader();

const stats = new Stats();
stats.showPanel(1);
document.body.appendChild(stats.dom);


// sun :
const geometry = new IcosahedronGeometry(7, 12);
const material = new MeshStandardMaterial({
  map: loader.load("/8k_sun.jpg"),
});

const sun = new Mesh(geometry, material);
sun.z = (-23.4 * Math.PI) / 180; // earth's tilt
scene.add(sun);

// stars:
addStarsToScene(scene);

//mercury :
const mercuryParent = new Object3D();
const [mercury, mercuryOrbit] = createMercury();
scene.add(mercuryParent);
mercuryParent.add(mercury);
mercuryParent.add(mercuryOrbit);

// venus:
const venusParent = new Object3D();
const [venus, venusOrbit] = createVenus();
scene.add(venusParent);
venusParent.add(venus);
venusParent.add(venusOrbit);

// earth:
const [earth, earthOrbit] = createEarth();
const moon = createMoon();
earth.add(moon);
sun.add(earth);
sun.add(earthOrbit);

// mars:
const [mars, marsOrbit] = createMars();
const marsParent = new Object3D();
marsParent.add(mars);
marsParent.add(marsOrbit);
scene.add(marsParent);

// jupiter:
const [jupiter, jupiterOrbit] = createJupiter();
const jupiterParent = new Object3D();
jupiterParent.add(jupiter);
jupiterParent.add(jupiterOrbit);
scene.add(jupiterParent);

// saturn:
const [saturn, saturnOrbit] = createSaturn();
const saturnParent = new Object3D();
saturnParent.add(saturn);
saturnParent.add(saturnOrbit);
scene.add(saturnParent);

// saturn ring:
const saturnRing = createSaturnRing();
saturnParent.add(saturnRing);

// uranus:
const uranusParent = new Object3D();
const [uranus, uranusOrbit] = createUranus();
uranusParent.add(uranus);
uranusParent.add(uranusOrbit);
scene.add(uranusParent);

// Neptune:
const neptuneParent = new Object3D();
const [neptune, neptuneOrbit] = createNeptune();
neptuneParent.add(neptune);
neptuneParent.add(neptuneOrbit);
scene.add(neptuneParent);

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {

  stats.begin();
  
  sun.rotation.y += 0.01;
  
  mercuryParent.rotation.y += 0.004;
  
  venusParent.rotation.y += 0.003;
  
  earth.rotation.y += 0.002;
  moon.rotation.y += 0.001;
  
  marsParent.rotation.y += 0.002;
  
  jupiterParent.rotation.y += 0.003;
  
  saturnParent.rotation.y += 0.0035;
  
  uranusParent.rotation.y += 0.005;
  
  neptuneParent.rotation.y += 0.0045;
  
  controls.update();

  renderer.render(scene, camera);

  stats.end();

  requestAnimationFrame(animate);
}

requestAnimationFrame( animate );

