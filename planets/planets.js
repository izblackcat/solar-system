import { IcosahedronGeometry, Mesh, MeshStandardMaterial, TextureLoader } from "three";



const loader = new TextureLoader();

export function createEarth() {
    
    const geometry = new IcosahedronGeometry(0.7, 12);
    const material = new MeshStandardMaterial({
        map: loader.load("/00_earthmap1k.jpg")
    });

    // const earthParent = new 

    const earth = new Mesh(geometry, material);
    earth.position.x = 10;
    return earth;
}

export function createMars() {
    
}