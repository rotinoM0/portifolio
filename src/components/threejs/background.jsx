"use client";

import * as THREE from 'three';
import { useEffect, useRef } from 'react';

import "./background.css";

export default function Background() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.setZ(30);

        const ambientLight = new THREE.AmbientLight(0xffffff);
        scene.add(ambientLight);

        const STAR_COUNT = 900;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(STAR_COUNT * 3);
        const sizes = new Float32Array(STAR_COUNT);

        for (let i = 0; i < STAR_COUNT; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 400;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 400;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 400;
            sizes[i] = Math.random() * 1.4 + 0.2;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.PointsMaterial({
            color: 0x7ff5e2,
            size: 0.35,
            transparent: true,
            opacity: 0.85,
            sizeAttenuation: true,
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        const twinkle = new Float32Array(STAR_COUNT);
        for (let i = 0; i < STAR_COUNT; i++) {
            twinkle[i] = Math.random() * Math.PI * 2;
        }

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        let rafId;
        const animate = (time = 0) => {
            const t = time * 0.001;
            points.rotation.y = t * 0.02;
            points.rotation.x = Math.sin(t * 0.015) * 0.05;

            if (!prefersReducedMotion) {
                geometry.attributes.position.array.forEach((_, index) => {
                    geometry.attributes.position.array[index] += 0.02;
                    if (geometry.attributes.position.array[index] > 200) {
                        geometry.attributes.position.array[index] = -200;
                    }
                });
                geometry.attributes.position.needsUpdate = true;
            }

            const alpha = 0.55 + 0.35 * Math.sin(t);
            material.opacity = Math.max(0.35, alpha);

            renderer.render(scene, camera);
            rafId = requestAnimationFrame(animate);
        };

        rafId = requestAnimationFrame(animate);

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener('resize', handleResize);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10" aria-hidden>
            <canvas ref={canvasRef} className="w-full h-full canvas-bg" />
        </div>
    );
}