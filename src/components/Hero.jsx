import React from 'react'
import Link from "next/link";
import { FaQuoteLeft } from "react-icons/fa";

const Hero = ({ containerClass, sectionName}) => {
    return (
        <Link href="/" className={`relative max-lg:rounded-[70px] text-[#1a1a1a] overflow-hidden ${containerClass}`}>
            <div className="absolute w-full h-full z-1 bg-[url(/images/one.png)] object-center opacity-20"></div>
            <div className="absolute w-full h-full flex rounded-[70px] top-0">
                <div className="w-full h-full mix-blend-multiply">
                    <img
                        src="/images/me.png"
                        alt="Me"
                        className="h-full w-full object-cover object-top opacity-35"
                    />
                </div>
            </div>
            <div className=" relative z-10 p-5 flex flex-col justify-between h-[400px] md:h-full">
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-4xl xl:text-7xl font-semibold font-orbitron">
                        ARYAN DEWAN<span className="font-light text-sm md:text-xl xl:text-3xl font-rubik"> (n0te)</span>
                    </h1>
                    <p className="text-lg xl:text-2xl font-rubik">
                        FRONT-END DEVELOPER
                    </p>
                </div>
                <div className="md:w-1/3 lg:w-1/2 xl:w-1/4 xl:h-1/2 self-end items-end text-justify">
                    <p className="text-lg lg:text-2xl font-rubik">
                        <sup className="text-2xl md:text-4xl lg:text-6xl"><FaQuoteLeft/></sup>
                        Front-end dev obsessed with sleek UIs, creative builds, and all things Japan. Always leveling up, always planning the next big move
                    </p>
                </div>
            </div>
        </Link>
    )
}
export default Hero
