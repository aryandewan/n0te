"use client";
import { useLayoutEffect } from "react";
import gsap from "gsap";

const EntryAnim = ({ children }) => {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                duration: 0.5,
                ease: "power3.inOut",
            });

            tl.to(".hero",{ x: 0, opacity: 1 })
                .to(".me", { y: 0, opacity: 1 })
                .to(".proj",{ y: 0, opacity: 1 })
                .to(".ts", { x: 0, opacity: 1 })
                .to(".artgallery", { x: 0, opacity: 1 })
                .to(".tline", { y: 0, opacity: 1 })
                .to(".int", { y: 0, opacity: 1 });
        }, "#container");

        return () => ctx.revert();
    }, []);

    return <>{children}</>;
};

export default EntryAnim;
