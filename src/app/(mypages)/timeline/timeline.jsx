"use client"

import React, { useLayoutEffect, useRef } from 'react';
import Link from "next/link";
import { FiArrowUpLeft } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Timeline = ({ timeLine }) => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const wrapper = section.querySelector(".wrapper");
        const items = wrapper.querySelectorAll(".timeStamp");

        items.forEach((item, index) => {
            if (index !== 0) {
                gsap.set(item, {
                    yPercent: 200,
                });
            }
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                pin: true,
                start: "top top",
                end: `+=${items.length * 100}%`,
                scrub: true,
                invalidateOnRefresh: true,
            },
            defaults: { ease: "none" },
        });

        items.forEach((item, index) => {
            tl.to(item, { scale: 0.9, duration: 0.2 });

            if (items[index + 1]) {
                tl.to(items[index + 1], {
                    yPercent: 0,
                    duration: 3,
                }, "<");
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="scroll-section relative w-full min-h-screen bg-[#a67d43] overflow-hidden cursor-default"
        >
            <div className="fixed h-[65px] xl:w-full grid grid-cols-5 md:grid-cols-7 lg:grid-cols-10 xl:grid-cols-25 grid-rows-1 z-10">
                <Link href="/">
                    <div className="xl:w-[65px] h-full flex items-center justify-center rounded-b-full rounded-tr-full bg-[#121312] xl:rotate-z-180 hover:rotate-z-360 transition-all duration-300 ease-in-out">
                        <FiArrowUpLeft className="w-full h-full -translate-x-[20%] -translate-y-[20%] text-[#a67d43]" />
                    </div>
                </Link>
            </div>

            <div className="wrapper flex w-full h-full items-center justify-center relative mt-5 md:mt-0">
                <div className="w-[85%] font-rubik flex gap-5 lg:gap-20 xl:gap-5 items-center justify-center relative h-full">
                    {timeLine.map((item, index) => (
                        <div
                            key={index}
                            className="absolute w-full top-0 h-full timeStamp bg-[#a67d43] flex items-start md:items-center justify-center"
                        >
                            <div className="relative w-full flex flex-col lg:flex-row justify-between bg-[#a67d43]">
                                <h1 className="year font-rubik flex flex-col md:flex-row justify-center items-start max-lg:text-center text-[12rem] md:text-[17rem] xl:text-[35rem] leading-none font-extralight text-[#121312] opacity-10">
                                    {[...item.year.toString()].map((char, i) => (
                                        <span key={i}>{char}</span>
                                    ))}
                                </h1>

                                <div className="absolute md:relative lg:absolute right-0 flex flex-col md:flex-row lg:flex-col gap-5 items-end md:items-start justify-center lg:w-1/2 z-10">
                                    <h1 className="font-rubik text-xl md:text-2xl xl:text-5xl text-[#ad0013] w-1/2 lg:w-full">
                                        {item.title}
                                    </h1>
                                    <p className="font-rubik text-base md:text-xl xl:text-4xl font-light text-[#121312] w-1/2 lg:self-end lg:text-justify">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
