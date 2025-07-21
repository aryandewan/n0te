"use client";

import { useEffect, useRef } from "react";
import {Scan} from "lucide-react";
import { gsap } from "gsap";
import Image from "next/image";

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        const moveCursor = (e) => {
            if (!cursor) return;
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.2,
                ease: "power2.out",
            });
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 z-[9999] pointer-events-none w-25 h-25 translate-x-[-50%] translate-y-[-50%] text-white transition-colors duration-300 ease-in-out hidden lg:block invert mix-blend-difference"
        >
            <Image src="/images/scroll.png" alt="scroll" width="500" height="500" className="animate-[spin_8s_linear_infinite] mix-blend-difference"/>
        </div> 
    );
};

export default CustomCursor;
