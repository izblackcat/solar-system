import {
  IcosahedronGeometry,
  Mesh,
  MeshStandardMaterial,
  RingGeometry,
  TextureLoader,
} from "three";
import { createOrbit } from "./helper";

// jupiter saturn uranus neptune earth venus mars mercury
// 6        5       4     3       2     1      0.7   0.5


export const loader = new TextureLoader();

export function createMercury() {
  const geometry = new IcosahedronGeometry(0.5, 12);
  const material = new MeshStandardMaterial({
    map: loader.load("/2k/2k_mercury.jpg"),
  });
  const mercury = new Mesh(geometry, material);

  mercury.position.x = 10;
  const orbit = createOrbit(mercury.position.x, 0xff55ff);

  return [mercury, orbit];
}

export function createVenus() {
  const geometry = new IcosahedronGeometry(1, 12);
  const material = new MeshStandardMaterial({
    map: loader.load("/2k/2k_venus.jpg"),
  });

  const venus = new Mesh(geometry, material);

  venus.position.x = 15;
  const venusOrbit = createOrbit(venus.position.x, 0xffff00);

  return [venus, venusOrbit];
}

export function createEarth() {
  const geometry = new IcosahedronGeometry(2, 12);
  const material = new MeshStandardMaterial({
    map: loader.load("/2k/2k_earth.jpg"),
  });

  const earth = new Mesh(geometry, material);
  earth.position.x = 25;
  const orbit = createOrbit(earth.position.x, 0xff55ff);
  return [earth, orbit];
}

export function createMars() {
  
  const geometry = new IcosahedronGeometry(0.8, 12);
  const material = new MeshStandardMaterial({
    map: loader.load("/2k/2k_mars.jpg"),
  });
  const mars = new Mesh(geometry, material);
  mars.position.x = 35;
  const orbit = createOrbit(mars.position.x, 0xf5f0ff);
  return [mars, orbit];
}

export function createJupiter() {
  const geometry = new IcosahedronGeometry(6, 12);
  const material = new MeshStandardMaterial({
    map: loader.load("/2k/2k_jupiter.jpg"),
  });
  const jupiter = new Mesh(geometry, material);
  jupiter.position.x = 60;
  const orbit = createOrbit(jupiter.position.x, 0xfffeef);
  return [jupiter, orbit];
}

export function createSaturn() {
  const geometry = new IcosahedronGeometry(5, 12);
  const material = new MeshStandardMaterial({
    map: loader.load("/2k/2k_saturn.jpg"),
  });
  const saturn = new Mesh(geometry, material);
  saturn.position.x = 100;
  const orbit = createOrbit(saturn.position.x, 0xff0f0f);
  return [saturn, orbit];
}

export function createSaturnRing() {
  const geometry = new RingGeometry(6, 9, 32);
  const material = new MeshStandardMaterial({
    map: loader.load("/2k/2k_saturn_ring.png"),
  });
  const ring = new Mesh(geometry, material);
  ring.position.x = 100;
  ring.rotation.x = -0.4 * Math.PI;
  return ring;
}

export function createUranus() {
  const geometry = new IcosahedronGeometry(4, 12);
  const material = new MeshStandardMaterial({
    map: loader.load("/2k/2k_uranus.jpg"),
  });
  const uranus = new Mesh(geometry, material);
  uranus.position.x = 120;
  const orbit = createOrbit(uranus.position.x, 0xfffddf);
  return [uranus, orbit];
}

export function createNeptune() {
  const geometry = new IcosahedronGeometry(3, 12);
  const material = new MeshStandardMaterial({
    map: loader.load("/2k/2k_neptune.jpg"),
  });
  const neptune = new Mesh(geometry, material);
  neptune.position.x = 140;
  const orbit = createOrbit(neptune.position.x, 0xff5f66);
  return [neptune, orbit];
}
