"use client"

import React, { useRef } from 'react'
import {mono} from "@/app/fonts";
import Link from "next/link";
import gsap from "gsap";
import {SplitText} from "gsap/SplitText";
import {useGSAP} from "@gsap/react";
gsap.registerPlugin(useGSAP, SplitText)
import Image from "next/image";
import dynamic from 'next/dynamic';

const SplineScene = dynamic(() => import('@/components/SplineScene'), {
    ssr: false,
});



const Hero = () => {
    const topRef = useRef(null);
    const topTagRef = useRef(null);
    const scrollRef = useRef(null);
    const hrRef = useRef(null);
    const yearRef = useRef(null);
    
    useGSAP(() => {
        const topSplit = SplitText.create(topRef.current, {
          type: "chars",
          mask: "chars",
          charsClass: "char++",
        });
        const tagSplit = SplitText.create(topTagRef.current, {
          type: "words",
          mask: "words",
          wordsClass: "word",
        });
        const scrollSplit = SplitText.create(scrollRef.current, {
          type: "chars",
          mask: "chars",
          wordsClass: "char",
        });
        const yearSplit = SplitText.create(yearRef.current, {
          type: "chars",
          mask: "chars",
          wordsClass: "char",
        });    
        
        gsap.set(topSplit.chars, {
          yPercent: 100,
          autoAlpha: 0,
        });

        gsap.set(tagSplit.words, {
          yPercent: -100,
          autoAlpha: 0,
        });

        gsap.set(scrollSplit.chars, {
          yPercent: -100,
          autoAlpha: 0,
        });

        gsap.set(hrRef.current, {
          scaleX: 0,
          autoAlpha: 0,
        });

        gsap.set(yearSplit.chars, {
          yPercent: 100,
          autoAlpha: 0,
        });

        const tl = gsap.timeline();

        tl.to(
          topSplit.chars,
          {
            yPercent: 0,
            duration: 1,
            ease: "power2.Out",
            stagger: 0.1,
            autoAlpha: 1,
          },
          0
        )
          .to(
            tagSplit.words,
            {
              yPercent: 0,
              duration: 1,
              ease: "power2.Out",
              stagger: 0.1,
              autoAlpha: 1,
            },
            0
          )
          .to(
            scrollSplit.chars,
            {
              yPercent: 0,
              duration: 1,
              ease: "power2.Out",
              stagger: 0.1,
              autoAlpha: 1,
            },
            0
          )
          .to(
            hrRef.current,
            {
              scaleX: 1,
              duration: 1,
              transformOrigin: "left",
              autoAlpha: 1,
            },
            0
          )
          .to(
            yearSplit.chars,
            {
              yPercent: 0,
              duration: 1,
              ease: "power2.Out",
              stagger: 0.1,
              autoAlpha: 1,
            },
            0
          );
    })

    return (
        <section className={`h-dvh flex flex-col items-center justify-center ${mono.className} text-white bg-black`}>
            <div className="w-full flex flex-col xl:flex-row items-center justify-center p-5 h-full z-50 pointer-events-none">
                <div className={`flex flex-col items-start xl:justify-between w-full xl:w-1/2 self-start h-full`}>
                    <div className="flex items-center justify-between gap-10">
                        <Image src="/images/port-me.png" alt="me" width={50} height={50} className="rounded-full bg-white"/>
                    </div>
                    <div className="hidden xl:inline">
                        <h1 ref={scrollRef} className="text-4xl">(SCR0LL)</h1>
                    </div>
                </div>
                <div className="w-full xl:w-1/2 flex items-end justify-start xl:justify-end self-start h-full">
                    <div className="flex flex-col items-start">
                        <div className="flex flex-col items-center justify-between xl:justify-start h-full">
                            <div className="self-end">
                                <h1 ref={yearRef} className="text-sm md:text-2xl lg:text-4xl xl:text-6xl">/2025</h1>
                            </div>
                            <Link href="/" className="text-[5rem] md:text-[14rem]">
                                <div className={`relative block ${mono.className}`}>
                                    <h1 ref={topRef} className="leading-none whitespace-nowrap relative font-black">
                                        ARYAN
                                    </h1>
                                </div>
                            </Link>
                            <hr ref={hrRef} className="h-1 w-full bg-white rounded-full border-none mb-5"/>
                            <div className="text-[1rem] md:text-[2rem] cursor-default space-y-5 w-full">
                                <div ref={topTagRef} className="relative overflow-hidden whitespace-nowrap leading-none w-full flex flex-col md:flex-row items-center md:justify-between gap-2">
                                    <h1 className="self-start">FR0NTEND DEVEL0PER</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex items-center justify-center absolute pointer-events-auto">
                <SplineScene />
            </div>
         </section>
    )
}
export default Hero
