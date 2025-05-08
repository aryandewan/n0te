"use client"

import React, {useLayoutEffect} from 'react'
import Link from "next/link";
import {FiArrowUpLeft} from "react-icons/fi";
import SplitType from "split-type";
import gsap from "gsap";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

const Techstack = ({techStack}) => {
    const iconMap = {
        react: FaReact,
        next: RiNextjsFill,
        tailwindCSS: RiTailwindCssFill,
        HTML: FaHtml5,
        CSS: FaCss3,
        JS: IoLogoJavascript,
        TS: SiTypescript
    };

    useLayoutEffect(() => {
        const splitTech = new SplitType('.tech', {
            types: 'lines, words, chars',
        })

        gsap.from(splitTech.words, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.5,
            stagger: 0.15,
        });

        gsap.fromTo(".level",
            {
                xPercent: -100,
            },
            {
                xPercent: 0,
                duration: 0.8,
                delay: 0.5,
                stagger: 0.5,
                ease: "power3.inOut"
            }
        )
    }, []);

    return (
        <section className="w-full min-h-dvh bg-[#121312] overflow-hidden cursor-default">
            <div className="grid grid-cols-5 md:grid-cols-7 lg:grid-cols-10 xl:grid-cols-25 grid-rows-1 relative z-10 mb-10">
                <Link href="/">
                    <div className="w-full h-full flex items-center justify-center rounded-b-full rounded-tr-full bg-[#121312] border-2 border-[#ad0013] xl:rotate-z-180 hover:rotate-z-360 transition-all duration-300 ease-in-out">
                        <FiArrowUpLeft className="w-full h-full -translate-x-[20%] -translate-y-[20%] text-[#a67d43]" />
                    </div>
                </Link>
            </div>
            <div className="w-full flex items-center justify-center">
                <div className="w-[85%] font-rubik flex flex-col items-center justify-center gap-10">
                    {techStack.map((tech, index) => {
                        const IconComponent = iconMap[tech.icon];
                        return (
                            <div key={index} className="w-full">
                                <div className="flex justify-between text-lg md:text-2xl lg:text-3xl text-[#a67d43] mb-1">
                                    <span className="tech flex items-center justify-center">
                                        <IconComponent className="mr-2 text-2xl" />
                                        {tech.name}
                                    </span>
                                    <span className="tech italic">{tech.level}</span>
                                </div>
                                <div className="h-1.5 rounded-full overflow-hidden">
                                    <div className={`${tech.levelClass} level`}></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
export default Techstack
