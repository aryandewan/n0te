"use client"

import React, {useRef} from 'react'
import {mono} from "@/app/fonts";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
gsap.registerPlugin(useGSAP)

const Loader = ({ref, countRef}) => {
    return (
        <section ref={ref} className={`h-dvh w-full bg-white text-black absolute top-0 left-0 z-100 ${mono.className}`}>
            <h1 ref={countRef} className="absolute right-10 bottom-10 font-bold text-6xl">0</h1>
        </section>
    )
}
export default Loader
