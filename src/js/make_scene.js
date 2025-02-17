import * as THREE from 'https://cdn.jsdelivr.net/npm/three/build/three.module.js';

// Our Javascript will go here.

// 결국 필요한건 Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Scene 에 추가하고자 하는 도형을 추가해준다. 여기선 cube 추가. 색상은 녹색.
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

// 도형 위치랑 카메라가 겹치므로 카메라 위치 좀 옮겨 주고. 
camera.position.z = 5;

// animate 로 계속해서 rendering 해준다. 이게 인간의 눈에는 영상으로 보인다.
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera);
}

animate();