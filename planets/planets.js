import { IcosahedronGeometry, Mesh, MeshStandardMaterial, Object3D, TextureLoader } from "three";



export const loader = new TextureLoader();

export function createMercury() {
    const geometry = new IcosahedronGeometry(0.3, 12);
    const material = new MeshStandardMaterial({
        map: loader.load("/texture/8k_mercury.jpg")
    });
    const mercury = new Mesh(geometry, material);

    mercury.position.x = 10;
    return mercury;
}

export function createVenus() {
    const geometry = new IcosahedronGeometry(0.5, 12);
    const material = new MeshStandardMaterial({
        map: loader.load("/texture/8k_venus_surface.jpg")
    });

    const venus = new Mesh(geometry, material);
    
    venus.position.x = 15;

    return venus;
}

export function createEarth() {
    const geometry = new IcosahedronGeometry(0.7, 12);
    const material = new MeshStandardMaterial({
        map: loader.load("/texture/8k_earth_daymap.jpg")
    });

    // const earthParent = new 

    const earth = new Mesh(geometry, material);
    earth.position.x = 20;
    return earth;
}

export function createMars() {
    const geometry = new IcosahedronGeometry(0.9, 12);
    const material = new MeshStandardMaterial({
        map: loader.load("/texture/8k_mars.jpg")
    });
    const mars = new Mesh(geometry, material);
    mars.position.x = 25;
    return mars;
}