"use client"

import React, {useLayoutEffect, useState} from 'react'
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Tech from "@/components/Tech";
import Art from "@/components/Art";
import Interests from "@/components/Interests";
import Time from "@/components/Timeline";
import gsap from "gsap";

let hasAnimated = false

const Main = () => {
    useLayoutEffect(() => {
        if (hasAnimated) return ;
        hasAnimated = true;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                duration: 0.5,
                stagger: 0.05,
                ease: "power3.inOut",
            });

            tl.fromTo(
                ".hero",
                { xPercent: -100, opacity: 0 }, // Start state
                { xPercent: 0, opacity: 1 }    // End state
            )
                .fromTo(
                    ".me",
                    { yPercent: -100, opacity: 0 },
                    { yPercent: 0, opacity: 1 }
                )
                .fromTo(
                    ".proj",
                    { yPercent: -100, opacity: 0 },
                    { yPercent: 0, opacity: 1 }
                )
                .fromTo(
                    ".ts",
                    { xPercent: -100, opacity: 0 },
                    { xPercent: 0, opacity: 1 }
                )
                .fromTo(
                    ".artgallery",
                    { xPercent: 100, opacity: 0 },
                    { xPercent: 0, opacity: 1 }
                )
                .fromTo(
                    ".int",
                    { yPercent: 100, opacity: 0 },
                    { yPercent: 0, opacity: 1 }
                )
                .fromTo(
                    ".tline",
                    { yPercent: 100, opacity: 0 },
                    { yPercent: 0, opacity: 1 }
                );
        });

        return () => ctx.revert()
    }, []);

    return (
        <div className={`grid grid-cols-1 xl:grid-cols-4 xl:grid-rows-4 w-full min-h-dvh gap-3 bg-[#1a1a1a] overflow-hidden ${!isMounted ? 'invisible' : ''}`}>
            <Hero
                containerClass = {`bg-[#ad0013] xl:row-start-1 xl:row-span-4 xl:col-span-2 rounded-[70px] hero`}
                sectionName = {`Hero`}
            />
            <AboutMe
                containerClass = {`bg-[#a67d43] rounded-t-full rounded-bl-full me`}
                sectionName = {`About Me`}
            />
            <Projects
                containerClass = {`bg-[#121312] border-2 border-[#ad0013] !text-[#a67d43] xl:row-span-1 rounded-br-full rounded-t-full proj`}
                sectionName = {`Projects`}
            />
            <Tech
                containerClass = {`bg-[#121312] border-2 border-[#ad0013] !text-[#a67d43] xl:row-span-1 rounded-b-full rounded-tl-full ts`}
                sectionName = {`TechStack`}
            />
            <Art
                containerClass = {`bg-[#ad0013] xl:row-start-2 xl:col-start-4 xl:row-span-1 rounded-b-full rounded-tr-full artgallery`}
                sectionName = {`Art Gallery`}
            />
            <Interests
                containerClass = {`bg-[#121312] border-2 border-[#ad0013] !text-[#a67d43] xl:row-start-3 xl:row-span-2 xl:col-start-4 rounded-[70px] int`}
                sectionName = {`INTERESTS`}
            />
            <Time
                containerClass = {`bg-[#A67D43] xl:col-start-3 xl:row-span-2 rounded-[70px] tline`}
                sectionName = {`Timeline`}
            />
        </div>
    )
}
export default Main
