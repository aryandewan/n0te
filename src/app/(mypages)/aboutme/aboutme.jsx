"use client";

import React, {useEffect, useState} from 'react';
import Link from "next/link";
import { FiArrowUpLeft } from "react-icons/fi";
import { FaArrowDown } from "react-icons/fa";
import gsap from "gsap";
import SplitType from "split-type";

const Aboutme = ({ links }) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)

        const splitLink = new SplitType('.link', {
            types: 'lines, words, chars',
        });

        const splitCv = new SplitType('.cv', {
            types: 'lines, words',
        });

        const splitPara = new SplitType('.para', {
            types: 'lines, words',
        });

        // Animate links
        gsap.from(splitLink.words, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.5,
            stagger: 0.15,
        });

        // Animate CV download
        gsap.from(splitCv.lines, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.5,
            stagger: 0.2,
            ease: "power3.out",
        });

        // Animate paragraph
        gsap.from(splitPara.lines, {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            delay: 0.5,
        });

        // Cleanup
        return () => {
            splitLink.revert();
            splitCv.revert();
            splitPara.revert();
        };
    }, []);

    return (
        <section className="relative w-full min-h-dvh bg-[#a67d43] overflow-hidden cursor-default">
            <div className="absolute w-full h-full z-1 bg-[url('/images/two.png')] bg-cover opacity-10"></div>
            <div className="absolute w-full h-full z-0 bg-[url('/images/fuji.jpg')] bg-center mask-image top-70 mix-blend-luminosity opacity-80"></div>

            <div className="grid grid-cols-5 md:grid-cols-7 lg:grid-cols-10 xl:grid-cols-25 grid-rows-1 relative z-10">
                <Link href="/">
                    <div className="w-full h-full flex items-center justify-center rounded-b-full rounded-tr-full bg-[#121312] xl:rotate-z-180 hover:rotate-z-360 transition-all duration-300 ease-in-out">
                        <FiArrowUpLeft className="w-full h-full -translate-x-[20%] -translate-y-[20%] text-[#a67d43]" />
                    </div>
                </Link>
            </div>

            <div className={`w-full flex items-center justify-center mt-10 relative z-10 ${!isMounted ? 'invisible' : ''}`}>
                <div className="w-[85%] flex flex-col gap-30">
                    <div className="flex flex-row gap-5 justify-end ">
                        <p className="text-[#121312] font-rubik text-lg md:text-xl text-justify md:w-1/2 para">
                            I'm a front-end web developer with a passion for building sleek, interactive UIs. I enjoy crafting creative digital experiences, exploring Japanese culture, and constantly pushing my skills forward. Right now, I’m focused on leveling up in tech while planning my next big move.
                        </p>
                    </div>

                    <div className="flex flex-row gap-5 xl:justify-end">
                        <div className="flex flex-col md:flex-row gap-5 justify-start xl:w-1/2">
                            {links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="link relative font-rubik text-[#121312] text-xl after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#121312] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-[#121312] cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-row gap-3 items-center justify-end mb-4">
                        <a
                            href="/Resume.pdf"
                            download="Resume.pdf"
                            className="cv relative flex flex-row items-center font-rubik text-[#121312] text-xl after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#121312] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-[#121312] cursor-pointer"
                        >
                            <FaArrowDown className="text-base" /> curriculum vitae
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Aboutme;
