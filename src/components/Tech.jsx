import React from 'react'
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import {PiStarFourFill} from "react-icons/pi";

const Tech = ({containerClass}) => {
    return (
        <Link href="/techstack" className={`flex items-center justify-center text-[#1a1a1a] overflow-hidden ${containerClass}`}>
            <div className="flex items-center justify-between relative">
                <img
                    src="/images/tech.png"
                    alt="Page"
                    className="relative w-1/2 animate-spin [animation-duration:15s]"
                />
                <div className="flex items-center justify-center absolute w-1/2">
                    <PiStarFourFill className="w-10 h-10 text-[#a67d43]" />
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    <FiArrowUpRight className="w-full h-full translate-x-[20%] -translate-y-[20%]" />
                </div>
            </div>
        </Link>
    )
}
export default Tech
