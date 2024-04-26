import {
  IcosahedronGeometry,
  Mesh,
  MeshStandardMaterial,
  RingGeometry,
  TextureLoader,
} from "three";

export const loader = new TextureLoader();

export function createMercury() {
  const geometry = new IcosahedronGeometry(0.4, 12);
  const material = new MeshStandardMaterial({
    map: loader.load("/2k/2k_mercury.jpg"),
  });
  const mercury = new Mesh(geometry, material);

  mercury.position.x = 10;
  return mercury;
}

export function createVenus() {
  const geometry = new IcosahedronGeometry(0.5, 12);
  const material = new MeshStandardMaterial({
    map: loader.load("/2k/2k_venus.jpg"),
  });

  const venus = new Mesh(geometry, material);

  venus.position.x = 15;

  return venus;
}

export function createEarth() {
  const geometry = new IcosahedronGeometry(0.8, 12);
  const material = new MeshStandardMaterial({
    map: loader.load("/2k/2k_earth.jpg"),
  });

  // const earthParent = new

  const earth = new Mesh(geometry, material);
  earth.position.x = 20;
  return earth;
}

export function createMars() {
  const geometry = new IcosahedronGeometry(1, 12);
  const material = new MeshStandardMaterial({
    map: loader.load("/2k/2k_mars.jpg"),
  });
  const mars = new Mesh(geometry, material);
  mars.position.x = 25;
  return mars;
}

export function createJupiter() {
  const geometry = new IcosahedronGeometry(2, 12);
  const material = new MeshStandardMaterial({
    map: loader.load("/2k/2k_jupiter.jpg"),
  });
  const jupiter = new Mesh(geometry, material);
  jupiter.position.x = 30;
  return jupiter;
}

export function createSaturn() {
  const geometry = new IcosahedronGeometry(1.2, 12);
  const material = new MeshStandardMaterial({
    map: loader.load("/2k/2k_saturn.jpg"),
  });
  const saturn = new Mesh(geometry, material);
  saturn.position.x = 40;
  return saturn;
}

export function createSaturnRing() {
  const geometry = new RingGeometry(1.5, 3, 32);
  const material = new MeshStandardMaterial({
    map: loader.load("/2k/2k_saturn_ring.png"),
  });
  const ring = new Mesh(geometry, material);
  ring.position.x = 40;
  ring.rotation.x = -0.5 * Math.PI;
  // r / pi = x / 180 => x * 180 / pi;
  return ring;
}
