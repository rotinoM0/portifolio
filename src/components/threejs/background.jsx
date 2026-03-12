import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { useEffect } from 'react';

import "./background.css";

export default function Background() {
    useEffect(() => {
        const canvas = document.getElementById('background-canvas');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.setZ(30);

        renderer.render(scene, camera);

        const ambientLight = new THREE.AmbientLight(0xffffff);
        scene.add(ambientLight);
        
        function stars() {
            const geometry = new THREE.BufferGeometry();
            const vertices = [];
            for (let i = 0; i < 200; i++) {
                const x = (Math.random() - 0.5) * 200;
                const y = (Math.random() - 0.5) * 200;
                const z = (Math.random() - 0.5) * 200;
                vertices.push(x, y, z);
            }

            geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
            const material = new THREE.PointsMaterial({ color: 0xffffff });
            const points = new THREE.Points(geometry, material);
            scene.add(points);

            const animateStars = () => {
                requestAnimationFrame(animateStars);
                geometry.attributes.position.array.forEach((_, index) => {
                    geometry.attributes.position.array[index] += 0.05;
                    if (geometry.attributes.position.array[index] > 100) {
                        geometry.attributes.position.array[index] = -100;
                    }
                });
                geometry.attributes.position.needsUpdate = true;
            }

            animateStars();
        }

        stars();

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        window.addEventListener('resize', onWindowResize, false);

        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        
        animate();

    }, []);
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10">
            <canvas id="background-canvas" className="w-full h-full canvas-bg" ></canvas>
        </div>
    );
}