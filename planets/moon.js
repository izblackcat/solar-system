import { SphereGeometry, MeshStandardMaterial, TextureLoader, Mesh, IcosahedronGeometry } from "three";

export default function createMoon() {

    const loader = new TextureLoader();

  const geometry = new IcosahedronGeometry(0.5, 12);
  const material = new MeshStandardMaterial({
    map: loader.load("/2k/2k_moon.jpg"),
  });
  const moon = new Mesh(geometry, material);
  moon.position.x = 4;
  return moon;
}
