import React from 'react'
import Link from "next/link";
import { FiArrowDownRight } from "react-icons/fi";
import { PiStarFourFill } from "react-icons/pi";

const AboutMe = ({containerClass}) => {
    return (
        <Link href="/aboutme" className={`flex items-center justify-center text-[#1a1a1a] overflow-hidden ${containerClass}`}>
            <div className="flex items-center justify-between relative">
                <img
                    src="/images/about me.png"
                    alt="About Me"
                    className="relative w-1/2 animate-spin [animation-duration:15s]"
                />
                <div className="flex items-center justify-center absolute w-1/2">
                    <PiStarFourFill className="w-10 h-10" />
                </div>
                <div className="w-1/2 flex items-center justify-center">
                     <FiArrowDownRight className="w-full h-full translate-x-[20%] translate-y-[20%]" />
                </div>
            </div>
        </Link>
    )
}
export default AboutMe
