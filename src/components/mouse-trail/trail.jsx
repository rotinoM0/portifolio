'use client';
import React, { useEffect, useRef, useState } from "react";

import "@/components/mouse-trail/trail.css";


export default function Trail({ parentRef = null }) {
    const coordsRef = useRef({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const [count, setCount] = useState(150);
    const [mouseLeave, setMouseLeave] = useState(false);

    // determine number of circles based on container/viewport width
    useEffect(() => {
        const eventTarget = (parentRef && parentRef.current) || containerRef.current || window;
        const calc = () => {
            const width = (eventTarget && eventTarget.getBoundingClientRect) ? eventTarget.getBoundingClientRect().width : window.innerWidth;
            setCount(width < 640 ? 8 : width < 1024 ? 14 : 20);
        };

        calc();
        window.addEventListener("resize", calc);
        return () => window.removeEventListener("resize", calc);
    }, [parentRef]);


    useEffect(() => {
        const eventTarget = (parentRef && parentRef.current) || containerRef.current;
        const container = containerRef.current;
        if (!eventTarget || !container) return;

        const circles = container.querySelectorAll(".circle");

        circles.forEach((circle) => {
            circle.x = 0;
            circle.y = 0;
        });

        const handleMouseMove = (e) => {
            const rect = eventTarget.getBoundingClientRect();
            setMouseLeave(false)
            coordsRef.current.x = e.clientX - rect.left;
            coordsRef.current.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            setMouseLeave(true);
        };

        let rafId;
        const animateCircles = () => {
            let x = coordsRef.current.x;
            let y = coordsRef.current.y;

            circles.forEach((circle, index) => {
                circle.style.left = x + "px";
                circle.style.top = y + "px";

                const scale = (circles.length - index) / circles.length;
                circle.style.transform = `translate(-50%, -50%) scale(${scale})`;

                circle.x = x;
                circle.y = y;

                const nextCircle = circles[index + 1] || circles[0];
                x += (nextCircle.x - x) * 0.3;
                y += (nextCircle.y - y) * 0.3;
            });

            rafId = requestAnimationFrame(animateCircles);
        };

        eventTarget.addEventListener("mousemove", handleMouseMove);
        eventTarget.addEventListener("mouseleave", handleMouseLeave);
        animateCircles();

        return () => {
            eventTarget.removeEventListener("mousemove", handleMouseMove);
            eventTarget.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(rafId);
        };
    }, [parentRef, count]);


    return (
        <div ref={containerRef} className={`${mouseLeave ? "hidden" : "hidden md:block"} trail-container`} aria-hidden>
            {[...Array(count)].map((_, i) => (
                <div key={i} className="circle"></div>
            ))}
        </div>
    );
}