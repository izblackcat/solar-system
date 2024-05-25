import { AmbientLight, MathUtils, Mesh, MeshBasicMaterial, MeshStandardMaterial, PerspectiveCamera, RingGeometry, Scene, SphereGeometry, WebGLRenderer } from "three";

export function initThreeJs() {
  const container = document.querySelector("#scene-container");

  const scene = new Scene();

  const camera = new PerspectiveCamera(
    40,
    container.clientWidth / container.clientHeight,
    1,
    100000
  );
  camera.position.set(0, 200, 100);

  const renderer = new WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;
  container.append(renderer.domElement);
  renderer.render(scene, camera);

  const ambientLight = new AmbientLight(0xffffff, 2);
  scene.add(ambientLight);

  return [scene, camera, renderer];
}

function createStar() {
  const geometry = new SphereGeometry(0.1, 24, 24);
  const material = new MeshStandardMaterial({ color: 0xffffff });

  const star = new Mesh(geometry, material);

  const x = MathUtils.randFloatSpread(600);
  const y = MathUtils.randFloatSpread(600);
  const z = MathUtils.randFloatSpread(600);

  star.position.set(x, y, z);

  return star;
}

export function addStarsToScene(scene) {
  for (let i = 0; i < 10000; i++) {
    const star = createStar();
    scene.add(star);
  }
}

export function createOrbit(pos, color) {
  const geometry = new RingGeometry(pos, pos + 0.09, 60);
  const material = new MeshBasicMaterial({
    color: color
  });
  const orbit = new Mesh(geometry, material);
  orbit.rotation.x = -0.5 * Math.PI;

  return orbit;
}