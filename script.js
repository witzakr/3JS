import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let scene, camera, renderer, model, controls;
let isMouseDown = false, previousMousePosition = { x: 0, y: 0 };
let isSpinning = false; // Track spinning state
let spinSpeed = 0.01; // Define spin speed

init();
animate();

function init() {
    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);

    // Camera setup
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 2;

    // Renderer setup
    const canvas = document.getElementById('lobster');
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    // Lighting
    const light = new THREE.DirectionalLight(0xffffff, 4);
    light.position.set(5, 5, 5);
    scene.add(light);

    // Load GLTF model
    const loader = new GLTFLoader();
    loader.load('models/source/Lobster.gltf', (gltf) => {
        model = gltf.scene;
        

        // Scale the model
        model.scale.set(2, 2, 2); // Adjust these values to make the model bigger or smaller

        scene.add(model);
    }, undefined, (error) => {
        console.error(error);
    });

    // OrbitControls setup
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.minDistance = 1;
    controls.maxDistance = 100;

    // Event listeners
    window.addEventListener('resize', onWindowResize, false);
    canvas.addEventListener('mousedown', onDocumentMouseDown, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('mouseup', onDocumentMouseUp, false);
    document.getElementById('spin').addEventListener('click', onSpinButtonClick, false);
}

function onWindowResize() {
    const canvas = document.getElementById('lobster');
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
}

function onDocumentMouseDown(event) {
    const canvas = document.getElementById('lobster');
    if (event.target === canvas) {
        isMouseDown = true;
        previousMousePosition = {
            x: event.clientX,
            y: event.clientY
        };
    }
}

function onDocumentMouseMove(event) {
    if (isMouseDown) {
        const deltaMove = {
            x: event.clientX - previousMousePosition.x,
            y: event.clientY - previousMousePosition.y
        };

        const rotationSpeed = 0.005;
        model.rotation.y += deltaMove.x * rotationSpeed;
        model.rotation.x += deltaMove.y * rotationSpeed;

        previousMousePosition = {
            x: event.clientX,
            y: event.clientY
        };
    }
}

function onDocumentMouseUp() {
    isMouseDown = false;
}

function onSpinButtonClick() {
    isSpinning = !isSpinning; // Toggle spinning state
    document.getElementById('spin').textContent = isSpinning ? 'MAKE IT STOP' : 'Make it spin';
}

function animate() {
    requestAnimationFrame(animate);

    if (isSpinning && model) {
        model.rotation.y += spinSpeed; // Rotate the model around the y-axis
    }

    controls.update();
    renderer.render(scene, camera);
}
